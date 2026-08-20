import { NextRequest, NextResponse } from "next/server";

type IntakeAnswers = {
  fullName: string;
  email: string;
  phone: string;
  studentAge: string;
  level: string;
  goals: string;
  gender: string;
};

type NotifyRequest = {
  answers?: Partial<IntakeAnswers>;
  calendlyPayload?: {
    event?: {
      uri?: string;
    };
    invitee?: {
      uri?: string;
    };
  };
};

type CalendlyDetails = {
  eventName: string;
  startTime: string;
  endTime: string;
  location: string;
  inviteeName: string;
  inviteeEmail: string;
};

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function requiredString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function formatTimeWindow(startIso: string, endIso: string) {
  const start = new Date(startIso);
  const end = new Date(endIso);

  const formatter = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return `${formatter.format(start)} - ${formatter.format(end)}`;
}

async function fetchCalendlyResource<T>(uri: string, token: string) {
  const response = await fetch(uri, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Calendly API error: ${message}`);
  }

  return (await response.json()) as T;
}

async function getCalendlyDetails(
  eventUri: string | undefined,
  inviteeUri: string | undefined,
): Promise<CalendlyDetails | null> {
  const token = process.env.CALENDLY_API_TOKEN;
  if (!token || !eventUri) {
    return null;
  }

  type CalendlyEventResponse = {
    resource?: {
      name?: string;
      start_time?: string;
      end_time?: string;
      location?: {
        join_url?: string;
        location?: string;
        type?: string;
      };
    };
  };

  type CalendlyInviteeResponse = {
    resource?: {
      name?: string;
      email?: string;
    };
  };

  const eventData = await fetchCalendlyResource<CalendlyEventResponse>(eventUri, token);
  const inviteeData = inviteeUri
    ? await fetchCalendlyResource<CalendlyInviteeResponse>(inviteeUri, token)
    : null;

  const startTime = eventData.resource?.start_time;
  const endTime = eventData.resource?.end_time;

  if (!startTime || !endTime) {
    return null;
  }

  return {
    eventName: eventData.resource?.name ?? "Free diagnostic call",
    startTime,
    endTime,
    location:
      eventData.resource?.location?.join_url ||
      eventData.resource?.location?.location ||
      eventData.resource?.location?.type ||
      "Not provided",
    inviteeName: inviteeData?.resource?.name ?? "Not provided",
    inviteeEmail: inviteeData?.resource?.email ?? "Not provided",
  };
}

async function sendAdminEmail({
  adminInbox,
  fromEmail,
  answers,
  calendlyPayload,
  calendlyDetails,
}: {
  adminInbox: string;
  fromEmail: string;
  answers: IntakeAnswers;
  calendlyPayload?: NotifyRequest["calendlyPayload"];
  calendlyDetails: CalendlyDetails | null;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    throw new Error("Missing RESEND_API_KEY. Cannot send admin notification email.");
  }

  const slotSummary = calendlyDetails
    ? formatTimeWindow(calendlyDetails.startTime, calendlyDetails.endTime)
    : "Slot details unavailable (set CALENDLY_API_TOKEN to include exact slot time).";

  const html = `
    <h2>New Free Call Booking</h2>
    <p><strong>Booked slot:</strong> ${escapeHtml(slotSummary)}</p>
    <p><strong>Event type:</strong> ${escapeHtml(calendlyDetails?.eventName ?? "Not available")}</p>
    <p><strong>Meeting location:</strong> ${escapeHtml(calendlyDetails?.location ?? "Not available")}</p>
    <p><strong>Invitee from Calendly:</strong> ${escapeHtml(calendlyDetails?.inviteeName ?? "Not available")} (${escapeHtml(calendlyDetails?.inviteeEmail ?? "Not available")})</p>
    <hr />
    <h3>Questionnaire answers</h3>
    <p><strong>Full name:</strong> ${escapeHtml(answers.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(answers.email)}</p>
    <p><strong>Phone number:</strong> ${escapeHtml(answers.phone)}</p>
    <p><strong>Student age:</strong> ${escapeHtml(answers.studentAge)}</p>
    <p><strong>Current level:</strong> ${escapeHtml(answers.level)}</p>
    <p><strong>Gender:</strong> ${escapeHtml(answers.gender)}</p>
    <p><strong>Learning goals:</strong><br/>${escapeHtml(answers.goals)}</p>
    <hr />
    <p><strong>Calendly event URI:</strong> ${escapeHtml(calendlyPayload?.event?.uri ?? "Not provided")}</p>
    <p><strong>Calendly invitee URI:</strong> ${escapeHtml(calendlyPayload?.invitee?.uri ?? "Not provided")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [adminInbox],
      subject: "New booking: Free diagnostic call",
      reply_to: answers.email,
      html,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Failed to send admin email: ${message}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as NotifyRequest;
    const answers = body.answers;

    if (
      !answers ||
      !requiredString(answers.fullName) ||
      !requiredString(answers.email) ||
      !requiredString(answers.phone) ||
      !requiredString(answers.studentAge) ||
      !requiredString(answers.level) ||
      !requiredString(answers.goals) ||
      !requiredString(answers.gender)
    ) {
      return NextResponse.json(
        { error: "Missing required questionnaire fields." },
        { status: 400 },
      );
    }

    const adminInbox = process.env.ADMIN_INBOX_EMAIL;
    const fromEmail = process.env.BOOKING_FROM_EMAIL;
    console.log("ADMIN INBOX:", adminInbox);
    console.log("FROM EMAIL:", fromEmail);

    if (!adminInbox || !fromEmail) {
      return NextResponse.json(
        {
          error:
            "Missing ADMIN_INBOX_EMAIL or BOOKING_FROM_EMAIL environment variable.",
        },
        { status: 500 },
      );
    }

    let calendlyDetails: CalendlyDetails | null = null;
    try {
      calendlyDetails = await getCalendlyDetails(
        body.calendlyPayload?.event?.uri,
        body.calendlyPayload?.invitee?.uri,
      );
    } catch {
      calendlyDetails = null;
    }

    await sendAdminEmail({
      adminInbox,
      fromEmail,
      answers: {
        fullName: answers.fullName,
        email: answers.email,
        phone: answers.phone,
        studentAge: answers.studentAge,
        level: answers.level,
        goals: answers.goals,
        gender: answers.gender,
      },
      calendlyPayload: body.calendlyPayload,
      calendlyDetails,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unexpected error while sending booking notification.",
      },
      { status: 500 },
    );
  }
}
