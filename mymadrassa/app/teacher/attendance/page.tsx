import Sidebar from "@/components/Sidebar";

const sessions = [
  {
    date: "Fri 27 Jun",
    students: [
      { initials: "YK", name: "Yusuf Karim", present: true },
      { initials: "AM", name: "Aisha Mansour", present: true },
      { initials: "ZH", name: "Zainab Hassan", present: false },
      { initials: "OS", name: "Omar Sharif", present: true },
      { initials: "KN", name: "Khadijah Noor", present: true },
    ],
  },
];

const teacherSidebarProps = {
  role: "Teacher" as const,
  sections: [
    {
      items: [
        { label: "Dashboard", href: "/teacher" },
        { label: "My Classes", href: "/teacher/classes" },
        { label: "Students", href: "/teacher/students" },
        { label: "Attendance", href: "/teacher/attendance", active: true },
        { label: "Assignments", href: "/teacher/assignments" },
        { label: "Recordings", href: "/teacher/recordings" },
      ],
    },
  ],
  user: { name: "Ustadh Ahmad", subtitle: "Tajweed faculty", initials: "A" },
};

const summary = [
  { label: "Tuhfatul Atfaal", pct: 96 },
  { label: "Al-Jazariyyah", pct: 78 },
  { label: "Ash-Shaatibiyyah", pct: 91 },
  { label: "Noon & Meem Workshop", pct: 88 },
  { label: "Arabic Pronunciation", pct: 100 },
];

export default function AttendancePage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...teacherSidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Attendance</h1>
              <p className="text-muted text-sm mt-0.5">Track and manage student attendance</p>
            </div>
            <select className="bg-white border border-line text-ink text-sm px-4 py-2 rounded-xl focus:outline-none focus:border-accent">
              <option>Al-Jazariyyah — Intermediate</option>
              <option>Tuhfatul Atfaal — Beginners</option>
              <option>Ash-Shaatibiyyah — Advanced</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Session attendance */}
            <div className="col-span-2 space-y-4">
              <div className="bg-white rounded-2xl border border-line overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-line">
                  <div>
                    <h3 className="font-semibold text-ink">Today's session — {sessions[0].date}</h3>
                    <p className="text-muted text-xs mt-0.5">Al-Jazariyyah · 6:30 PM</p>
                  </div>
                  <button className="bg-sidebar text-white font-semibold px-4 py-2 rounded-xl text-sm">
                    Save register
                  </button>
                </div>

                <div className="divide-y divide-line">
                  {sessions[0].students.map((s) => (
                    <div key={s.name} className="flex items-center gap-4 px-6 py-4">
                      <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-ink text-xs font-bold shrink-0">
                        {s.initials}
                      </div>
                      <p className="text-ink text-sm font-medium flex-1">{s.name}</p>
                      <div className="flex gap-2">
                        <button
                          className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                            s.present
                              ? "bg-green-100 text-green-700 border border-green-200"
                              : "bg-white border border-line text-muted"
                          }`}
                        >
                          Present
                        </button>
                        <button
                          className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                            !s.present
                              ? "bg-red-100 text-red-600 border border-red-200"
                              : "bg-white border border-line text-muted"
                          }`}
                        >
                          Absent
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-3 bg-warm border-t border-line">
                  <p className="text-muted text-xs">
                    4 present · 1 absent ·{" "}
                    <span className="text-green-600 font-semibold">80% attendance</span>
                  </p>
                </div>
              </div>

              {/* Past sessions summary */}
              <div className="bg-white rounded-2xl p-6 border border-line">
                <h3 className="font-semibold text-ink mb-4">Recent sessions</h3>
                <div className="space-y-3">
                  {[
                    { date: "Sun 22 Jun", present: 22, total: 24, pct: 92 },
                    { date: "Wed 19 Jun", present: 20, total: 24, pct: 83 },
                    { date: "Sun 15 Jun", present: 24, total: 24, pct: 100 },
                    { date: "Wed 12 Jun", present: 18, total: 24, pct: 75 },
                  ].map((sess) => (
                    <div key={sess.date} className="flex items-center gap-4">
                      <p className="text-muted text-sm w-28 shrink-0">{sess.date}</p>
                      <div className="flex-1 h-1.5 bg-line rounded-full">
                        <div
                          className={`h-1.5 rounded-full ${sess.pct >= 90 ? "bg-green-500" : "bg-accent"}`}
                          style={{ width: `${sess.pct}%` }}
                        />
                      </div>
                      <p className="text-ink text-sm font-semibold w-20 text-right shrink-0">
                        {sess.present}/{sess.total} · {sess.pct}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* All classes summary */}
            <div className="bg-white rounded-2xl p-6 border border-line h-fit">
              <h3 className="font-semibold text-ink mb-5">All classes — this month</h3>
              <div className="space-y-4">
                {summary.map((c) => (
                  <div key={c.label}>
                    <div className="flex justify-between mb-1">
                      <p className="text-ink text-xs font-medium leading-snug">{c.label}</p>
                      <p className={`text-xs font-bold ${c.pct >= 90 ? "text-green-600" : "text-accent"}`}>{c.pct}%</p>
                    </div>
                    <div className="h-1.5 bg-line rounded-full">
                      <div
                        className={`h-1.5 rounded-full ${c.pct >= 90 ? "bg-green-500" : "bg-accent"}`}
                        style={{ width: `${c.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
