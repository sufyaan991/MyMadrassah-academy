import Sidebar from "@/components/Sidebar";

const teachers = [
  { initials: "A", name: "Ustadh Ahmad", email: "ahmad@mymadrassa.com", specialty: "Tajweed & Qira'at", classes: 5, students: 100, rating: 4.9, joined: "Jan 2025", status: "Active" },
  { initials: "B", name: "Sh. Bilal", email: "bilal@mymadrassa.com", specialty: "Hifz & Ulum", classes: 2, students: 282, rating: 4.8, joined: "Mar 2025", status: "Active" },
  { initials: "M", name: "Ust. Maryam", email: "maryam@mymadrassa.com", specialty: "Arabic Language", classes: 2, students: 417, rating: 4.7, joined: "May 2025", status: "Active" },
  { initials: "K", name: "Sh. Khalid", email: "khalid@mymadrassa.com", specialty: "Fiqh & Aqeedah", classes: 0, students: 0, rating: 0, joined: "Jun 2026", status: "Onboarding" },
];

const adminSidebarProps = {
  role: "Admin" as const,
  sections: [
    {
      items: [
        { label: "Overview", href: "/admin" },
        { label: "Members", href: "/admin/members" },
        { label: "Courses", href: "/admin/courses" },
        { label: "Teachers", href: "/admin/teachers", active: true },
        { label: "Subscriptions", href: "/admin/subscriptions" },
        { label: "Revenue", href: "/admin/revenue" },
        { label: "Settings", href: "/admin/settings" },
      ],
    },
  ],
};

export default function TeachersPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...adminSidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Teachers</h1>
              <p className="text-muted text-sm mt-0.5">{teachers.length} faculty members</p>
            </div>
            <button className="bg-sidebar text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              + Invite teacher
            </button>
          </div>

          <div className="space-y-4">
            {teachers.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-line">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-sidebar flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-xl">{t.initials}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-0.5">
                      <h3 className="font-bold text-ink text-base">{t.name}</h3>
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${t.status === "Active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                        {t.status}
                      </span>
                    </div>
                    <p className="text-muted text-sm">{t.email} · {t.specialty}</p>
                    <p className="text-muted text-xs mt-0.5">Joined {t.joined}</p>
                  </div>

                  <div className="flex gap-8 shrink-0">
                    <div className="text-center">
                      <p className="text-ink font-bold text-lg">{t.classes}</p>
                      <p className="text-muted text-xs">classes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-ink font-bold text-lg">{t.students}</p>
                      <p className="text-muted text-xs">students</p>
                    </div>
                    <div className="text-center">
                      <p className="text-ink font-bold text-lg">{t.rating > 0 ? t.rating : "—"}</p>
                      <p className="text-muted text-xs">rating</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <button className="bg-sidebar text-white font-semibold px-4 py-2 rounded-xl text-sm">
                      View profile
                    </button>
                    <button className="border border-line text-muted text-sm px-4 py-2 rounded-xl hover:border-accent transition-colors">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
