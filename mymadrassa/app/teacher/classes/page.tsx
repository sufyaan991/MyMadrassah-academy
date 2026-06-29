import Sidebar from "@/components/Sidebar";

const classes = [
  {
    title: "Tuhfatul Atfaal — Beginners",
    schedule: "Fri · 6:30 PM",
    students: 18,
    lesson: "Lesson 9 of 31",
    attendance: 96,
    status: "Active",
  },
  {
    title: "Al-Jazariyyah — Intermediate",
    schedule: "Sun · 7:00 PM",
    students: 24,
    lesson: "Lesson 12 of 31",
    attendance: 78,
    status: "Active",
  },
  {
    title: "Ash-Shaatibiyyah — Advanced",
    schedule: "Mon · 8:00 PM",
    students: 11,
    lesson: "Lesson 5 of 45",
    attendance: 91,
    status: "Active",
  },
  {
    title: "Noon & Meem Rules Workshop",
    schedule: "Sat · 10:00 AM",
    students: 32,
    lesson: "Lesson 3 of 6",
    attendance: 88,
    status: "Active",
  },
  {
    title: "Arabic Pronunciation Basics",
    schedule: "Wed · 5:00 PM",
    students: 15,
    lesson: "Lesson 8 of 12",
    attendance: 100,
    status: "Active",
  },
];

const teacherSidebar = (active: string) => ({
  role: "Teacher" as const,
  sections: [
    {
      items: [
        { label: "Dashboard", href: "/teacher" },
        { label: "My Classes", href: "/teacher/classes", active: active === "classes" },
        { label: "Students", href: "/teacher/students", active: active === "students" },
        { label: "Attendance", href: "/teacher/attendance", active: active === "attendance" },
        { label: "Assignments", href: "/teacher/assignments", active: active === "assignments" },
        { label: "Recordings", href: "/teacher/recordings", active: active === "recordings" },
      ],
    },
  ],
  user: { name: "Ustadh Ahmad", subtitle: "Tajweed faculty", initials: "A" },
});

export default function MyClassesPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...teacherSidebar("classes")} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">My Classes</h1>
              <p className="text-muted text-sm mt-0.5">{classes.length} active classes · 100 students total</p>
            </div>
            <button className="bg-sidebar text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              + Request new class
            </button>
          </div>

          <div className="space-y-4">
            {classes.map((cls) => (
              <div key={cls.title} className="bg-white rounded-2xl p-6 border border-line">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-ink text-base">{cls.title}</h3>
                    <p className="text-muted text-sm mt-0.5">{cls.schedule} · {cls.students} students · {cls.lesson}</p>
                  </div>
                  <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {cls.status}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-1.5">
                    <p className="text-muted text-xs">Attendance rate</p>
                    <p className={`text-xs font-bold ${cls.attendance >= 90 ? "text-green-600" : "text-amber-600"}`}>
                      {cls.attendance}%
                    </p>
                  </div>
                  <div className="h-1.5 bg-line rounded-full">
                    <div
                      className={`h-1.5 rounded-full ${cls.attendance >= 90 ? "bg-green-500" : "bg-accent"}`}
                      style={{ width: `${cls.attendance}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="bg-sidebar text-white font-semibold px-4 py-2 rounded-xl text-sm">
                    View class
                  </button>
                  <button className="border border-line text-ink text-sm px-4 py-2 rounded-xl hover:border-accent transition-colors">
                    Manage students
                  </button>
                  <button className="border border-line text-ink text-sm px-4 py-2 rounded-xl hover:border-accent transition-colors">
                    Upload material
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
