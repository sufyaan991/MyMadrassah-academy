import Sidebar from "@/components/Sidebar";

export default function TeacherDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        role="Teacher"
        sections={[
          {
            items: [
              { label: "Dashboard", href: "/teacher", active: true },
              { label: "My Classes", href: "/teacher/classes" },
              { label: "Students", href: "/teacher/students" },
              { label: "Attendance", href: "/teacher/attendance" },
              { label: "Assignments", href: "/teacher/assignments" },
              { label: "Recordings", href: "/teacher/recordings" },
            ],
          },
        ]}
        user={{ name: "Ustadh Ahmad", subtitle: "Tajweed faculty", initials: "A" }}
      />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Teaching dashboard</h1>
              <p className="text-muted text-sm mt-1">Friday, 27 June · 3 classes today</p>
            </div>
            <button className="bg-sidebar text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              + New assignment
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: "Active classes", value: "5", sub: "3 today" },
              { label: "Total students", value: "142", sub: "+8 this month" },
              { label: "Pending grading", value: "17", sub: "Due this week" },
              { label: "Avg attendance", value: "91%", sub: "Across classes" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-line">
                <p className="text-muted text-xs mb-2">{s.label}</p>
                <p className="text-3xl font-bold text-ink">{s.value}</p>
                <p className="text-muted text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Main */}
            <div className="col-span-2 space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-4">Today's classes</h3>
                <div className="space-y-3">
                  {[
                    { time: "4:30", period: "PM", title: "Tuhfatul Atfaal — Beginners", sub: "18 students · Lesson 9", btn: "Start", btnClass: "bg-sidebar text-white" },
                    { time: "6:30", period: "PM", title: "Al-Jazariyyah — Intermediate", sub: "24 students · Lesson 12", btn: "Prepare", btnClass: "border border-accent text-accent" },
                    { time: "8:00", period: "PM", title: "Ash-Shaatibiyyah — Advanced", sub: "11 students · Lesson 5", btn: "Prepare", btnClass: "border border-accent text-accent" },
                  ].map((cls) => (
                    <div key={cls.title} className="bg-white rounded-2xl p-5 border border-line flex items-center gap-4">
                      <div className="w-14 shrink-0">
                        <p className="text-ink font-bold text-sm">{cls.time}</p>
                        <p className="text-muted text-xs">{cls.period}</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-ink text-sm">{cls.title}</p>
                        <p className="text-muted text-xs">{cls.sub}</p>
                      </div>
                      <button className={`px-5 py-2 rounded-xl text-sm font-semibold shrink-0 ${cls.btnClass}`}>
                        {cls.btn}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-ink mb-4">Submissions to grade</h3>
                <div className="bg-white rounded-2xl border border-line divide-y divide-line">
                  {[
                    { initials: "YK", name: "Yusuf Karim", course: "Al-Jazariyyah — recitation audio", time: "2h ago" },
                    { initials: "AM", name: "Aisha Mansour", course: "Tuhfatul Atfaal — quiz 4", time: "5h ago" },
                    { initials: "IB", name: "Ibrahim Bah", course: "Hifz — Surah Al-Mulk", time: "1d ago" },
                  ].map((sub) => (
                    <div key={sub.name} className="flex items-center gap-4 p-4">
                      <div className="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-ink text-xs font-bold shrink-0">
                        {sub.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-ink text-sm">{sub.name}</p>
                        <p className="text-muted text-xs truncate">{sub.course}</p>
                      </div>
                      <p className="text-muted text-xs shrink-0">{sub.time}</p>
                      <a href="#" className="text-accent text-sm font-semibold shrink-0">Grade →</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <div className="bg-sidebar rounded-2xl p-5">
                <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-3">Attendance Alert</p>
                <p className="text-white/70 text-sm mb-4">
                  3 students missed 2+ classes in Al-Jazariyyah this week.
                </p>
                <button className="w-full bg-accent text-sidebar font-semibold py-2.5 rounded-xl text-sm">
                  Review students
                </button>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-line">
                <p className="font-semibold text-ink text-sm mb-4">Class attendance — this week</p>
                <div className="space-y-3">
                  {[
                    { name: "Tuhfatul Atfaal", pct: 96, bar: "bg-green-500" },
                    { name: "Al-Jazariyyah", pct: 78, bar: "bg-accent" },
                    { name: "Ash-Shaatibiyyah", pct: 91, bar: "bg-green-500" },
                  ].map((c) => (
                    <div key={c.name}>
                      <div className="flex justify-between mb-1">
                        <p className="text-ink text-xs">{c.name}</p>
                        <p className="text-ink text-xs font-semibold">{c.pct}%</p>
                      </div>
                      <div className="h-1.5 bg-line rounded-full">
                        <div className={`h-1.5 ${c.bar} rounded-full`} style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
