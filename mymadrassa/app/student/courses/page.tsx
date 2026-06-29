import Sidebar from "@/components/Sidebar";

const studentSidebar = (active: string) => ({
  role: "Student" as const,
  sections: [
    {
      title: "Learn",
      items: [
        { label: "Dashboard", href: "/student" },
        { label: "My Courses", href: "/student/courses", active: active === "courses" },
        { label: "Schedule", href: "/student/schedule", active: active === "schedule" },
        { label: "Recordings", href: "/student/recordings", active: active === "recordings" },
        { label: "Progress", href: "/student/progress", active: active === "progress" },
      ],
    },
    {
      title: "Account",
      items: [
        { label: "Billing", href: "/student/billing", active: active === "billing" },
        { label: "Settings", href: "/student/settings", active: active === "settings" },
      ],
    },
  ],
});

const enrolled = [
  {
    icon: "الج",
    title: "Al-Jazariyyah",
    teacher: "Ustadh Ahmad",
    category: "Tajweed · Intermediate",
    progress: 62,
    lessons: "19 / 31 lessons",
    nextLesson: "Lesson 13 · Noon and Meem Mushaddad",
    status: "In Progress",
  },
  {
    icon: "تخ",
    title: "Tuhfatul Atfaal",
    teacher: "Ustadh Ahmad",
    category: "Tajweed · Beginner",
    progress: 88,
    lessons: "27 / 31 lessons",
    nextLesson: "Lesson 28 · Revision & Review",
    status: "In Progress",
  },
  {
    icon: "ع",
    title: "Sciences of the Qur'an",
    teacher: "Sh. Bilal",
    category: "Ulum · All levels",
    progress: 34,
    lessons: "8 / 24 lessons",
    nextLesson: "Lesson 9 · Reasons of Revelation",
    status: "In Progress",
  },
  {
    icon: "ع",
    title: "Arabic Level 2",
    teacher: "Ust. Maryam",
    category: "Arabic · Intermediate",
    progress: 100,
    lessons: "20 / 20 lessons",
    nextLesson: "Completed",
    status: "Completed",
  },
];

export default function MyCoursesPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...studentSidebar("courses")} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">My Courses</h1>
              <p className="text-muted text-sm mt-0.5">4 enrolled · 3 in progress · 1 completed</p>
            </div>
            <a
              href="#"
              className="bg-sidebar text-white font-semibold px-5 py-2.5 rounded-xl text-sm"
            >
              Browse catalogue →
            </a>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-6">
            {["All", "In Progress", "Completed"].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-sidebar text-white"
                    : "bg-white border border-line text-muted hover:border-accent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {enrolled.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-line">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-sand flex items-center justify-center shrink-0">
                    <span className="text-ink text-lg font-semibold" dir="rtl">{c.icon}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-ink text-base">{c.title}</h3>
                        <p className="text-muted text-sm mt-0.5">{c.category} · {c.teacher}</p>
                      </div>
                      <span
                        className={`shrink-0 inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          c.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between mb-1.5">
                        <p className="text-muted text-xs">{c.lessons}</p>
                        <p className="text-ink text-xs font-bold">{c.progress}%</p>
                      </div>
                      <div className="h-1.5 bg-line rounded-full">
                        <div
                          className={`h-1.5 rounded-full ${c.progress === 100 ? "bg-green-500" : "bg-accent"}`}
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <p className="text-muted text-xs">Next: {c.nextLesson}</p>
                      {c.status !== "Completed" && (
                        <button className="bg-sidebar text-white font-semibold px-4 py-1.5 rounded-xl text-xs">
                          Resume →
                        </button>
                      )}
                      {c.status === "Completed" && (
                        <button className="border border-accent text-accent font-semibold px-4 py-1.5 rounded-xl text-xs">
                          Review →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Browse more */}
          <div className="mt-8 bg-sidebar rounded-2xl p-6 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold">Explore more courses</p>
              <p className="text-white/50 text-sm mt-0.5">20+ courses available on your Scholar plan</p>
            </div>
            <a href="#" className="bg-accent text-sidebar font-bold px-5 py-2.5 rounded-xl text-sm shrink-0">
              Browse →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
