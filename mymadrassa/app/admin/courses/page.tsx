import Sidebar from "@/components/Sidebar";

const courses = [
  { icon: "الج", title: "Al-Jazariyyah", teacher: "Ustadh Ahmad", category: "Tajweed", level: "Intermediate", students: 142, lessons: 31, status: "Published" },
  { icon: "تخ", title: "Tuhfatul Atfaal", teacher: "Ustadh Ahmad", category: "Tajweed", level: "Beginner", students: 218, lessons: 31, status: "Published" },
  { icon: "ش", title: "Ash-Shaatibiyyah", teacher: "Ustadh Ahmad", category: "Tajweed", level: "Advanced", students: 63, lessons: 45, status: "Published" },
  { icon: "ع", title: "Sciences of the Qur'an", teacher: "Sh. Bilal", category: "Ulum", level: "All levels", students: 195, lessons: 24, status: "Published" },
  { icon: "ح", title: "Hifz Programme", teacher: "Sh. Bilal", category: "Hifz", level: "All levels", students: 87, lessons: 120, status: "Published" },
  { icon: "ع", title: "Arabic Level 1", teacher: "Ust. Maryam", category: "Arabic", level: "Beginner", students: 241, lessons: 20, status: "Published" },
  { icon: "ع", title: "Arabic Level 2", teacher: "Ust. Maryam", category: "Arabic", level: "Intermediate", students: 176, lessons: 20, status: "Published" },
  { icon: "ت", title: "Tajweed Masterclass", teacher: "Ustadh Ahmad", category: "Tajweed", level: "Advanced", students: 0, lessons: 0, status: "Draft" },
];

const adminSidebarProps = {
  role: "Admin" as const,
  sections: [
    {
      items: [
        { label: "Overview", href: "/admin" },
        { label: "Members", href: "/admin/members" },
        { label: "Courses", href: "/admin/courses", active: true },
        { label: "Teachers", href: "/admin/teachers" },
        { label: "Subscriptions", href: "/admin/subscriptions" },
        { label: "Revenue", href: "/admin/revenue" },
        { label: "Settings", href: "/admin/settings" },
      ],
    },
  ],
};

export default function AdminCoursesPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...adminSidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-6xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Courses</h1>
              <p className="text-muted text-sm mt-0.5">{courses.filter(c => c.status === "Published").length} published · {courses.filter(c => c.status === "Draft").length} draft</p>
            </div>
            <button className="bg-sidebar text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              + New course
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Total courses", value: String(courses.length), sub: "Published & draft" },
              { label: "Total enrolments", value: "1,122", sub: "Across all courses" },
              { label: "Most popular", value: "Arabic L1", sub: "241 students" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-line">
                <p className="text-muted text-xs mb-2">{s.label}</p>
                <p className="text-2xl font-bold text-ink">{s.value}</p>
                <p className="text-muted text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-5 border border-line flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center shrink-0">
                  <span className="text-ink text-base font-semibold" dir="rtl">{c.icon}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-ink">{c.title}</h3>
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${c.status === "Published" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                      {c.status}
                    </span>
                  </div>
                  <p className="text-muted text-sm">{c.teacher} · {c.category} · {c.level}</p>
                </div>

                <div className="flex gap-8 shrink-0">
                  <div className="text-center">
                    <p className="text-ink font-bold">{c.students}</p>
                    <p className="text-muted text-xs">students</p>
                  </div>
                  <div className="text-center">
                    <p className="text-ink font-bold">{c.lessons || "—"}</p>
                    <p className="text-muted text-xs">lessons</p>
                  </div>
                </div>

                <div className="flex gap-2 shrink-0">
                  <button className="border border-line text-ink text-sm px-4 py-2 rounded-xl hover:border-accent transition-colors">Edit</button>
                  <button className="border border-line text-ink text-sm px-4 py-2 rounded-xl hover:border-accent transition-colors">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
