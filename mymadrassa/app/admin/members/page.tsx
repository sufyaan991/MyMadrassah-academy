import Sidebar from "@/components/Sidebar";

const members = [
  { initials: "FN", name: "Fatima Noor", email: "fatima@example.com", course: "Tuhfatul Atfaal", plan: "Scholar", joined: "26 Jun", status: "Active" },
  { initials: "OA", name: "Omar Aziz", email: "omar@example.com", course: "Ash-Shaatibiyyah", plan: "Lifetime", joined: "25 Jun", status: "Active" },
  { initials: "ZK", name: "Zaynab Khan", email: "zaynab@example.com", course: "Arabic Level 1", plan: "Seeker", joined: "24 Jun", status: "Trial" },
  { initials: "HM", name: "Hamza Malik", email: "hamza@example.com", course: "Hifz Program", plan: "Scholar", joined: "23 Jun", status: "Active" },
  { initials: "RI", name: "Ruqayyah Ibrahim", email: "ri@example.com", course: "Sciences of the Quran", plan: "Scholar", joined: "22 Jun", status: "Active" },
  { initials: "AS", name: "Amina Siddiq", email: "amina@example.com", course: "Al-Jazariyyah", plan: "Seeker", joined: "21 Jun", status: "Active" },
  { initials: "YB", name: "Yusuf Bello", email: "yb@example.com", course: "Tuhfatul Atfaal", plan: "Lifetime", joined: "20 Jun", status: "Active" },
  { initials: "NR", name: "Nadia Rahman", email: "nadia@example.com", course: "Arabic Level 2", plan: "Seeker", joined: "19 Jun", status: "Inactive" },
  { initials: "KO", name: "Khalid Omar", email: "ko@example.com", course: "Hifz Program", plan: "Scholar", joined: "18 Jun", status: "Active" },
  { initials: "SM", name: "Safiya Musa", email: "sm@example.com", course: "Ash-Shaatibiyyah", plan: "Scholar", joined: "17 Jun", status: "Trial" },
];

const statusClass: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Trial: "bg-amber-100 text-amber-700",
  Inactive: "bg-red-100 text-red-600",
};

const adminSidebarProps = {
  role: "Admin" as const,
  sections: [
    {
      items: [
        { label: "Overview", href: "/admin" },
        { label: "Members", href: "/admin/members", active: true },
        { label: "Courses", href: "/admin/courses" },
        { label: "Teachers", href: "/admin/teachers" },
        { label: "Subscriptions", href: "/admin/subscriptions" },
        { label: "Revenue", href: "/admin/revenue" },
        { label: "Settings", href: "/admin/settings" },
      ],
    },
  ],
};

export default function MembersPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...adminSidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-6xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Members</h1>
              <p className="text-muted text-sm mt-0.5">3,412 total · 182 joined this month</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search members…"
                className="bg-white border border-line rounded-xl px-4 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-accent w-52"
              />
              <select className="bg-white border border-line text-ink text-sm px-3 py-2 rounded-xl focus:outline-none">
                <option>All plans</option>
                <option>Seeker</option>
                <option>Scholar</option>
                <option>Lifetime</option>
              </select>
              <select className="bg-white border border-line text-ink text-sm px-3 py-2 rounded-xl focus:outline-none">
                <option>All statuses</option>
                <option>Active</option>
                <option>Trial</option>
                <option>Inactive</option>
              </select>
              <button className="bg-sidebar text-white font-semibold text-sm px-4 py-2 rounded-xl">Export</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-line overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-line">
                  {["Member", "Course", "Plan", "Joined", "Status", ""].map((h) => (
                    <th key={h} className="text-left text-muted text-[10px] font-bold uppercase tracking-widest px-6 py-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {members.map((m) => (
                  <tr key={m.email} className="hover:bg-warm/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-ink text-xs font-bold shrink-0">
                          {m.initials}
                        </div>
                        <div>
                          <p className="text-ink text-sm font-medium">{m.name}</p>
                          <p className="text-muted text-xs">{m.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted text-sm">{m.course}</td>
                    <td className="px-6 py-4 text-ink text-sm">{m.plan}</td>
                    <td className="px-6 py-4 text-muted text-sm">{m.joined}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClass[m.status]}`}>
                        {m.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="text-accent text-sm font-semibold">View →</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 border-t border-line flex items-center justify-between">
              <p className="text-muted text-sm">Showing 10 of 3,412</p>
              <div className="flex gap-2">
                <button className="bg-white border border-line text-ink text-sm px-4 py-2 rounded-xl">← Prev</button>
                <button className="bg-sidebar text-white text-sm px-4 py-2 rounded-xl font-semibold">Next →</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
