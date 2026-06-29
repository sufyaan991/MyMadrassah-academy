import Sidebar from "@/components/Sidebar";

const weekActivity = [
  { day: "Mon", lessons: 2 },
  { day: "Tue", lessons: 0 },
  { day: "Wed", lessons: 3 },
  { day: "Thu", lessons: 1 },
  { day: "Fri", lessons: 4 },
  { day: "Sat", lessons: 2 },
  { day: "Sun", lessons: 1 },
];

const maxLessons = 4;

const hifzJuz = [
  { juz: "Juz 1", status: "complete" },
  { juz: "Juz 2", status: "complete" },
  { juz: "Juz 3", status: "complete" },
  { juz: "Juz 4", status: "complete" },
  { juz: "Juz 5", status: "complete" },
  { juz: "Juz 6", status: "complete" },
  { juz: "Juz 7", status: "in-progress" },
  ...Array.from({ length: 23 }, (_, i) => ({ juz: `Juz ${i + 8}`, status: "locked" })),
];

const courses = [
  { title: "Al-Jazariyyah", progress: 62, lessons: "19 / 31" },
  { title: "Tuhfatul Atfaal", progress: 88, lessons: "27 / 31" },
  { title: "Sciences of the Qur'an", progress: 34, lessons: "8 / 24" },
  { title: "Arabic Level 2", progress: 100, lessons: "20 / 20" },
];

const sidebarProps = {
  role: "Student" as const,
  sections: [
    {
      title: "Learn",
      items: [
        { label: "Dashboard", href: "/student" },
        { label: "My Courses", href: "/student/courses" },
        { label: "Schedule", href: "/student/schedule" },
        { label: "Recordings", href: "/student/recordings" },
        { label: "Progress", href: "/student/progress", active: true },
      ],
    },
    {
      title: "Account",
      items: [
        { label: "Billing", href: "/student/billing" },
        { label: "Settings", href: "/student/settings" },
      ],
    },
  ],
};

export default function ProgressPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...sidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-ink">Progress</h1>
            <p className="text-muted text-sm mt-0.5">Your learning journey, tracked</p>
          </div>

          {/* Overall stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: "Lessons done", value: "128", sub: "+9 this week" },
              { label: "Attendance rate", value: "94%", sub: "Last 30 days" },
              { label: "Current streak", value: "12 days", sub: "Best: 21 days" },
              { label: "Hifz complete", value: "6 Juz", sub: "20% of the Qur'an" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-line">
                <p className="text-muted text-xs mb-2">{s.label}</p>
                <p className="text-2xl font-bold text-ink">{s.value}</p>
                <p className="text-accent text-xs mt-1 font-semibold">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Weekly activity */}
            <div className="bg-white rounded-2xl p-6 border border-line">
              <h3 className="font-semibold text-ink mb-5">This week's activity</h3>
              <div className="flex items-end gap-3 h-28">
                {weekActivity.map((d) => (
                  <div key={d.day} className="flex-1 flex flex-col items-center gap-1.5">
                    <div
                      className={`w-full rounded-t-md ${d.lessons > 0 ? "bg-accent" : "bg-line"}`}
                      style={{ height: d.lessons > 0 ? `${(d.lessons / maxLessons) * 100}%` : "8px" }}
                    />
                    <p className="text-muted text-[10px]">{d.day}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted text-xs mt-4">13 lessons completed this week</p>
            </div>

            {/* Course progress */}
            <div className="bg-white rounded-2xl p-6 border border-line">
              <h3 className="font-semibold text-ink mb-5">Course progress</h3>
              <div className="space-y-4">
                {courses.map((c) => (
                  <div key={c.title}>
                    <div className="flex justify-between mb-1.5">
                      <p className="text-ink text-sm font-medium">{c.title}</p>
                      <p className="text-muted text-sm">{c.lessons} · <span className="text-ink font-bold">{c.progress}%</span></p>
                    </div>
                    <div className="h-1.5 bg-line rounded-full">
                      <div
                        className={`h-1.5 rounded-full ${c.progress === 100 ? "bg-green-500" : "bg-accent"}`}
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hifz tracker */}
          <div className="bg-white rounded-2xl p-6 border border-line">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-ink">Hifz tracker</h3>
              <p className="text-muted text-sm">6 of 30 Juz complete</p>
            </div>
            <div className="grid grid-cols-10 gap-2">
              {hifzJuz.map((j) => (
                <div
                  key={j.juz}
                  title={j.juz}
                  className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                    j.status === "complete"
                      ? "bg-accent text-sidebar"
                      : j.status === "in-progress"
                      ? "bg-accent/30 text-accent border-2 border-accent"
                      : "bg-line text-muted"
                  }`}
                >
                  {j.juz.replace("Juz ", "")}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-5 mt-4 pt-4 border-t border-line">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-accent" />
                <p className="text-muted text-xs">Complete</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-accent/30 border border-accent" />
                <p className="text-muted text-xs">In progress</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-line" />
                <p className="text-muted text-xs">Not started</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
