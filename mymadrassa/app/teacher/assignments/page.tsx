import Sidebar from "@/components/Sidebar";

const pending = [
  { initials: "YK", name: "Yusuf Karim", course: "Al-Jazariyyah — recitation audio", submitted: "2h ago", type: "Audio" },
  { initials: "AM", name: "Aisha Mansour", course: "Tuhfatul Atfaal — quiz 4", submitted: "5h ago", type: "Quiz" },
  { initials: "IB", name: "Ibrahim Bah", course: "Hifz — Surah Al-Mulk recitation", submitted: "1d ago", type: "Audio" },
  { initials: "ZH", name: "Zainab Hassan", course: "Al-Jazariyyah — written exercise 3", submitted: "1d ago", type: "Text" },
];

const graded = [
  { initials: "MA", name: "Muhammad Ali", course: "Ash-Shaatibiyyah — essay", grade: "A", feedback: "Excellent understanding" },
  { initials: "KN", name: "Khadijah Noor", course: "Tuhfatul Atfaal — quiz 3", grade: "B+", feedback: "Good effort, revise Ikhfa" },
  { initials: "FS", name: "Fatima Saleh", course: "Al-Jazariyyah — recitation", grade: "A−", feedback: "Minor Madd errors" },
];

const teacherSidebarProps = {
  role: "Teacher" as const,
  sections: [
    {
      items: [
        { label: "Dashboard", href: "/teacher" },
        { label: "My Classes", href: "/teacher/classes" },
        { label: "Students", href: "/teacher/students" },
        { label: "Attendance", href: "/teacher/attendance" },
        { label: "Assignments", href: "/teacher/assignments", active: true },
        { label: "Recordings", href: "/teacher/recordings" },
      ],
    },
  ],
  user: { name: "Ustadh Ahmad", subtitle: "Tajweed faculty", initials: "A" },
};

export default function AssignmentsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...teacherSidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Assignments</h1>
              <p className="text-muted text-sm mt-0.5">{pending.length} pending · {graded.length} graded this week</p>
            </div>
            <button className="bg-sidebar text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              + New assignment
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Pending review", value: String(pending.length), sub: "Awaiting your feedback" },
              { label: "Graded this week", value: "9", sub: "Average grade: B+" },
              { label: "Total assignments", value: "47", sub: "Across all classes" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-line">
                <p className="text-muted text-xs mb-2">{s.label}</p>
                <p className="text-3xl font-bold text-ink">{s.value}</p>
                <p className="text-muted text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Pending */}
          <div className="mb-8">
            <h3 className="font-semibold text-ink mb-4">Pending review</h3>
            <div className="bg-white rounded-2xl border border-line divide-y divide-line">
              {pending.map((a) => (
                <div key={a.name + a.submitted} className="flex items-center gap-4 p-5">
                  <div className="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-ink text-xs font-bold shrink-0">
                    {a.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-ink text-sm">{a.name}</p>
                    <p className="text-muted text-xs truncate">{a.course}</p>
                  </div>
                  <span className="shrink-0 inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-warm border border-line text-muted">
                    {a.type}
                  </span>
                  <p className="text-muted text-xs shrink-0">{a.submitted}</p>
                  <button className="bg-accent text-sidebar font-bold px-4 py-1.5 rounded-xl text-xs shrink-0">
                    Grade →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recently graded */}
          <div>
            <h3 className="font-semibold text-ink mb-4">Recently graded</h3>
            <div className="bg-white rounded-2xl border border-line divide-y divide-line">
              {graded.map((a) => (
                <div key={a.name} className="flex items-center gap-4 p-5">
                  <div className="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-ink text-xs font-bold shrink-0">
                    {a.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-ink text-sm">{a.name}</p>
                    <p className="text-muted text-xs truncate">{a.course}</p>
                  </div>
                  <p className="text-muted text-xs shrink-0 max-w-[140px] truncate">{a.feedback}</p>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-sm">{a.grade}</span>
                  </div>
                  <a href="#" className="text-accent text-sm font-semibold shrink-0">Edit →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
