"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type IntakeAnswers = {
  fullName: string;
  email: string;
  phone: string;
  studentAge: string;
  level: string;
  goals: string;
  gender: string;
};

type CalendlyMessagePayload = {
  event?: {
    uri?: string;
  };
  invitee?: {
    uri?: string;
  };
};

const CALENDLY_BOOKING_URL = process.env.NEXT_PUBLIC_CALENDLY_BOOKING_URL;

const initialAnswers: IntakeAnswers = {
  fullName: "",
  email: "",
  phone: "",
  studentAge: "",
  level: "",
  goals: "",
  gender: "",
};

function buildCalendlyUrl(answers: IntakeAnswers) {
  if (!CALENDLY_BOOKING_URL) {
    return "";
  }

  const url = new URL(CALENDLY_BOOKING_URL);

  // a1-a6 map to Calendly custom answer fields in your event type.
  url.searchParams.set("name", answers.fullName);
  url.searchParams.set("email", answers.email);
  url.searchParams.set("a1", answers.phone);
  url.searchParams.set("a2", answers.studentAge);
  url.searchParams.set("a3", answers.level);
  url.searchParams.set("a4", answers.goals);
  url.searchParams.set("a5", answers.gender);
  url.searchParams.set("hide_gdpr_banner", "1");

  return url.toString();
}

export default function BookFreeCallPage() {
  const [answers, setAnswers] = useState<IntakeAnswers>(initialAnswers);
  const [step, setStep] = useState<1 | 2>(1);
  const [errors, setErrors] = useState<Partial<Record<keyof IntakeAnswers, string>>>({});
  const [notifyState, setNotifyState] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [notifyMessage, setNotifyMessage] = useState("");
  const [scheduledPayload, setScheduledPayload] = useState<CalendlyMessagePayload | null>(null);
  const hasSentNotificationRef = useRef(false);

  const calendlyUrl = useMemo(() => buildCalendlyUrl(answers), [answers]);

  useEffect(() => {
    if (step !== 2 || notifyState === "sent") {
      return;
    }

    const handleCalendlyMessage = async (event: MessageEvent) => {
      if (!event.origin.includes("calendly.com")) {
        return;
      }

      const data = event.data as { event?: string; payload?: CalendlyMessagePayload };
      if (data?.event !== "calendly.event_scheduled" || !data.payload) {
        return;
      }

      if (hasSentNotificationRef.current) {
        return;
      }

      hasSentNotificationRef.current = true;

      setScheduledPayload(data.payload);
      setNotifyState("sending");
      setNotifyMessage("Saving your responses and notifying the admin inbox...");

      try {
        const response = await fetch("/api/bookings/notify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answers, calendlyPayload: data.payload }),
        });

        if (!response.ok) {
          const payload = (await response.json()) as { error?: string };
          throw new Error(payload.error ?? "Failed to notify admin inbox.");
        }

        setNotifyState("sent");
        setNotifyMessage("Booked. Your details and selected slot were sent to the admin inbox.");
      } catch (error) {
        setNotifyState("failed");
        hasSentNotificationRef.current = false;
        setNotifyMessage(
          error instanceof Error
            ? error.message
            : "Your slot is booked, but we could not notify admin inbox from this site.",
        );
      }
    };

    window.addEventListener("message", handleCalendlyMessage);
    return () => {
      window.removeEventListener("message", handleCalendlyMessage);
    };
  }, [answers, notifyState, step]);

  const onChange = (field: keyof IntakeAnswers, value: string) => {
    setAnswers((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof IntakeAnswers, string>> = {};

    if (!answers.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!answers.email.trim()) nextErrors.email = "Please enter your email address.";
    if (!answers.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (!answers.studentAge.trim()) nextErrors.studentAge = "Please tell us student age (or age range).";
    if (!answers.level.trim()) nextErrors.level = "Please select your current level.";
    if (!answers.goals.trim()) nextErrors.goals = "Please share your learning goals.";
    if (!answers.gender.trim()) nextErrors.gender = "Please select your gender.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleQuestionnaireSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-warm text-ink">
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold text-muted hover:text-ink transition-colors">
            ← Back to home
          </Link>
          <p className="text-accent text-xs font-bold uppercase tracking-widest mt-8 mb-4">
            Free Diagnostic Call
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl">
            Tell us about your goals, then pick your best time.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-line rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <span className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center ${step === 1 ? "bg-sidebar text-white" : "bg-emerald-100 text-emerald-800"}`}>
                1
              </span>
              <p className="text-sm font-semibold text-ink">Quick questionnaire</p>
              <div className="h-px flex-1 bg-line" />
              <span className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center ${step === 2 ? "bg-sidebar text-white" : "bg-gray-100 text-muted"}`}>
                2
              </span>
              <p className="text-sm font-semibold text-ink">Book your slot</p>
            </div>

            {step === 1 ? (
              <form onSubmit={handleQuestionnaireSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-1.5">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    value={answers.fullName}
                    onChange={(event) => onChange("fullName", event.target.value)}
                    className="w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-accent"
                    placeholder="e.g. Abdullah Khan"
                  />
                  {errors.fullName && <p className="text-red-600 text-xs mt-1.5">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={answers.email}
                      onChange={(event) => onChange("email", event.target.value)}
                      className="w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-accent"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-600 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">
                      Phone number (with country code)
                    </label>
                    <input
                      id="phone"
                      value={answers.phone}
                      onChange={(event) => onChange("phone", event.target.value)}
                      className="w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-accent"
                      placeholder="+44 ..."
                    />
                    {errors.phone && <p className="text-red-600 text-xs mt-1.5">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="studentAge" className="block text-sm font-semibold mb-1.5">
                      Student age
                    </label>
                    <input
                      id="studentAge"
                      value={answers.studentAge}
                      onChange={(event) => onChange("studentAge", event.target.value)}
                      className="w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-accent"
                      placeholder=""
                    />
                    {errors.studentAge && <p className="text-red-600 text-xs mt-1.5">{errors.studentAge}</p>}
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-semibold mb-1.5">
                      Gender
                    </label>
                    <select
                      id="gender"
                      value={answers.gender}
                      onChange={(event) => onChange("gender", event.target.value)}
                      className="w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-accent bg-white"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && <p className="text-red-600 text-xs mt-1.5">{errors.gender}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="level" className="block text-sm font-semibold mb-1.5">
                    Current level
                  </label>
                  <select
                    id="level"
                    value={answers.level}
                    onChange={(event) => onChange("level", event.target.value)}
                    className="w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-accent bg-white"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  {errors.level && <p className="text-red-600 text-xs mt-1.5">{errors.level}</p>}
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-semibold mb-1.5">
                    Main learning goals
                  </label>
                  <textarea
                    id="goals"
                    value={answers.goals}
                    onChange={(event) => onChange("goals", event.target.value)}
                    className="w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-accent min-h-28"
                    placeholder="Tell us what you want to achieve."
                  />
                  {errors.goals && <p className="text-red-600 text-xs mt-1.5">{errors.goals}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-sidebar text-white font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Continue to calendar →
                </button>
              </form>
            ) : (
              <div>
                {!CALENDLY_BOOKING_URL ? (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 text-sm mb-5">
                    Calendly is not configured yet. Add NEXT_PUBLIC_CALENDLY_BOOKING_URL to your environment variables.
                  </div>
                ) : (
                  <>
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900 text-sm mb-5">
                      Questionnaire complete. Pick any available slot below to finish.
                    </div>
                    <iframe
                      src={calendlyUrl}
                      title="Book your free call"
                      className="w-full min-h-[720px] border border-line rounded-2xl"
                    />
                    <p className="text-xs text-muted mt-4">
                      If the calendar does not load, open directly: <a className="underline" href={calendlyUrl} target="_blank" rel="noreferrer">Book on Calendly</a>
                    </p>
                  </>
                )}
              </div>
            )}
          </div>

          <aside className="bg-white border border-line rounded-3xl p-6 h-fit shadow-sm">
            <h2 className="font-bold text-xl mb-4">What happens next</h2>
            <ol className="space-y-3 text-sm text-muted">
              <li>1. You answer a few questions for matching.</li>
              <li>2. You book a confirmed time in the calendar.</li>
              <li>3. Admin receives your answers and booked slot in inbox.</li>
            </ol>

            {step === 2 && (
              <div className="mt-6 pt-6 border-t border-line">
                <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Status</p>
                <p className={`text-sm ${notifyState === "failed" ? "text-amber-700" : "text-ink"}`}>
                  {notifyMessage || "Waiting for your calendar booking confirmation..."}
                </p>
                {scheduledPayload?.event?.uri && (
                  <p className="text-xs text-muted mt-2 break-all">Event reference: {scheduledPayload.event.uri}</p>
                )}
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}
