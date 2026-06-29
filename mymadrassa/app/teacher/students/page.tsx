import Sidebar from "@/components/Sidebar";

const students = [
  { initials: "YK", name: "Yusuf Karim", email: "yusuf@example.com", class: "Al-Jazariyyah", attendance: 94, lastActive: "Today", plan: "Scholar" },
  { initials: "AM", name: "Aisha Mansour", email: "aisha@example.com", class: "Tuhfatul Atfaal", attendance: 98, lastActive: "Today", plan: "Scholar" },
  { initials: "IB", name: "Ibrahim Bah", email: "ibrahim@example.com", class: "Hifz Programme", attendance: 88, lastActive: "Yesterday", plan: "Lifetime" },
  { initials: "ZH", name: "Zainab Hassan", email: "zainab@example.com", class: "Al-Jazariyyah", attendance: 71, lastActive: "3 days ago", plan: "Seeker" },
  { initials: "MA", name: "Muhammad Ali", email: "mali@example.com", class: "Ash-Shaatibiyyah", attendance: 100, lastActive: "Today", plan: "Scholar" },
  { initials: "FS", name: "Fatima Saleh", email: "fatima@example.com", class: "Tuhfatul Atfaal", attendance: 82, lastActive: "2 days ago", plan: "Seeker" },
  { initials: "OS", name: "Omar Sharif", email: "omar@example.com", class: "Al-Jazariyyah", attendance: 67, lastActive: "1 week ago", plan: "Seeker" },
  { initials: "KN", name: "Khadijah Noor", email: "kn@example.com", class: "Ash-Shaatibiyyah", attendance: 95, lastActive: "Today", plan: "Scholar" },
];

const teacherSidebarProps = {
  role: "Teacher" as const,
  sections: [
    {
      items: [
        { label: "Dashboard", href: "/teacher" },
        { label: "My Classes", href: "/teacher/classes" },
        { label: "Students", href: "/teacher/students", active: true },
        { label: "Attendance", href: "/teacher/attendance" },
        { label: "Assignments", href: "/teacher/assignments" },
        { label: "Recordings", href: "/teacher/recordings" },
      ],
    },
  ],
  user: { name: "Ustadh Ahmad", subtitle: "Tajweed faculty", initials: "A" },
};

export default function StudentsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...teacherSidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Students</h1>
              <p className="text-muted text-sm mt-0.5">{students.length} students across your classes</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search students…"
                className="bg-white border border-line rounded-xl px-4 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-accent w-48"
              />
              <select className="bg-white border border-line text-ink text-sm px-3 py-2 rounded-xl focus:outline-none focus:border-accent">
                <option>All classes</option>
                <option>Al-Jazariyyah</option>
                <option>Tuhfatul Atfaal</option>
                <option>Ash-Shaatibiyyah</option>
              </select>
            </div>
          </div>

          {/* Low attendance alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
              <span className="text-amber-600 text-sm">⚠</span>
            </div>
            <p className="text-amber-700 text-sm">
              <span className="font-semibold">3 students</span> have attendance below 75%. Consider reaching out.
            </p>
            <button className="ml-auto text-amber-700 text-sm font-semibold shrink-0">View →</button>
          </div>

          <div className="bg-white rounded-2xl border border-line overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-line">
                  {["Student", "Class", "Attendance", "Last active", "Plan", ""].map((h) => (
                    <th key={h} className="text-left text-muted text-[10px] font-bold uppercase tracking-widest px-5 py-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {students.map((s) => (
                  <tr key={s.name} className="hover:bg-warm/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-ink text-xs font-bold shrink-0">
                          {s.initials}
                        </div>
                        <div>
                          <p className="text-ink text-sm font-medium">{s.name}</p>
                          <p className="text-muted text-xs">{s.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-muted text-sm">{s.class}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-line rounded-full">
                          <div
                            className={`h-1.5 rounded-full ${s.attendance >= 90 ? "bg-green-500" : s.attendance >= 75 ? "bg-accent" : "bg-red-400"}`}
                            style={{ width: `${s.attendance}%` }}
                          />
                        </div>
                        <span className={`text-xs font-semibold ${s.attendance >= 90 ? "text-green-600" : s.attendance >= 75 ? "text-accent" : "text-red-500"}`}>
                          {s.attendance}%
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-muted text-sm">{s.lastActive}</td>
                    <td className="px-5 py-4 text-ink text-sm">{s.plan}</td>
                    <td className="px-5 py-4">
                      <a href="#" className="text-accent text-sm font-semibold">View →</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
