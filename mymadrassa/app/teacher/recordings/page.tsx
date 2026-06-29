import Sidebar from "@/components/Sidebar";

const recordings = [
  { title: "Tuhfatul Atfaal — Lesson 9", date: "Fri 27 Jun", duration: "1h 02m", students: 17, class: "Beginners", views: 12 },
  { title: "Al-Jazariyyah — Lesson 12", date: "Sun 22 Jun", duration: "58m", students: 22, class: "Intermediate", views: 19 },
  { title: "Ash-Shaatibiyyah — Lesson 5", date: "Mon 23 Jun", duration: "1h 14m", students: 10, class: "Advanced", views: 8 },
  { title: "Tuhfatul Atfaal — Lesson 8", date: "Fri 20 Jun", duration: "55m", students: 18, class: "Beginners", views: 16 },
  { title: "Al-Jazariyyah — Lesson 11", date: "Wed 18 Jun", duration: "1h 05m", students: 21, class: "Intermediate", views: 21 },
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
        { label: "Assignments", href: "/teacher/assignments" },
        { label: "Recordings", href: "/teacher/recordings", active: true },
      ],
    },
  ],
  user: { name: "Ustadh Ahmad", subtitle: "Tajweed faculty", initials: "A" },
};

export default function TeacherRecordingsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...teacherSidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Recordings</h1>
              <p className="text-muted text-sm mt-0.5">{recordings.length} recordings · auto-saved after each session</p>
            </div>
            <div className="flex items-center gap-3">
              <select className="bg-white border border-line text-ink text-sm px-3 py-2 rounded-xl focus:outline-none focus:border-accent">
                <option>All classes</option>
                <option>Tuhfatul Atfaal</option>
                <option>Al-Jazariyyah</option>
                <option>Ash-Shaatibiyyah</option>
              </select>
              <button className="bg-sidebar text-white font-semibold px-5 py-2 rounded-xl text-sm">
                Upload recording
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {recordings.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl p-5 border border-line flex items-center gap-5">
                {/* Play icon */}
                <div className="w-14 h-14 rounded-xl bg-sidebar flex items-center justify-center shrink-0">
                  <span className="text-accent text-xl">▶</span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-ink">{r.title}</h3>
                  <p className="text-muted text-sm mt-0.5">{r.class} · {r.date} · {r.duration}</p>
                </div>

                <div className="text-center shrink-0 px-5">
                  <p className="text-ink font-bold">{r.students}</p>
                  <p className="text-muted text-xs">attended</p>
                </div>
                <div className="text-center shrink-0 px-5 border-l border-line">
                  <p className="text-ink font-bold">{r.views}</p>
                  <p className="text-muted text-xs">views</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button className="border border-line text-ink text-sm px-4 py-2 rounded-xl hover:border-accent transition-colors">
                    Share
                  </button>
                  <button className="bg-sidebar text-white font-semibold text-sm px-4 py-2 rounded-xl">
                    Watch ▸
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted text-sm mt-8">Recordings are auto-shared with enrolled students and stored for 90 days.</p>
        </div>
      </main>
    </div>
  );
}
