import Sidebar from "@/components/Sidebar";

const recentMembers = [
  { initials: "FN", name: "Fatima Noor", course: "Tuhfatul Atfaal", plan: "Scholar", joined: "Jun 26", status: "Active", statusClass: "bg-green-100 text-green-700" },
  { initials: "OA", name: "Omar Aziz", course: "Ash-Shaatibiyyah", plan: "Lifetime", joined: "Jun 25", status: "Active", statusClass: "bg-green-100 text-green-700" },
  { initials: "ZK", name: "Zaynab Khan", course: "Arabic Level 1", plan: "Seeker", joined: "Jun 24", status: "Trial", statusClass: "bg-amber-100 text-amber-700" },
  { initials: "HM", name: "Hamza Malik", course: "Hifz Program", plan: "Scholar", joined: "Jun 23", status: "Active", statusClass: "bg-green-100 text-green-700" },
];

const barData = [
  { month: "Jan", pct: 42 },
  { month: "Feb", pct: 52 },
  { month: "Mar", pct: 60 },
  { month: "Apr", pct: 66 },
  { month: "May", pct: 74 },
  { month: "Jun", pct: 92, current: true },
];

export default function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        role="Admin"
        sections={[
          {
            items: [
              { label: "Overview", href: "/admin", active: true },
              { label: "Members", href: "/admin/members" },
              { label: "Courses", href: "/admin/courses" },
              { label: "Teachers", href: "/admin/teachers" },
              { label: "Subscriptions", href: "/admin/subscriptions" },
              { label: "Revenue", href: "/admin/revenue" },
              { label: "Settings", href: "/admin/settings" },
            ],
          },
        ]}
      />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Overview</h1>
              <p className="text-muted text-sm mt-0.5">June 2026 · last updated 4 min ago</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white border border-line text-ink text-sm px-4 py-2 rounded-xl">
                This month ▾
              </button>
              <button className="bg-sidebar text-white font-semibold text-sm px-4 py-2 rounded-xl">
                Export
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total members", value: "3,412", sub: "+182 this month", accent: false },
              { label: "Active subscriptions", value: "2,940", sub: "86% of members", accent: false },
              { label: "MRR", value: "$84.6k", sub: "+14% vs May", accent: true },
              { label: "Lifetime sales", value: "231", sub: "+11 this month", accent: false },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-line">
                <p className="text-muted text-xs mb-2">{s.label}</p>
                <p className="text-3xl font-bold text-ink">{s.value}</p>
                <p className={`text-xs mt-1 ${s.accent ? "text-accent" : "text-muted"}`}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Chart + Subscriptions */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-6 border border-line">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-ink">Monthly recurring revenue</h3>
                <span className="text-accent text-sm font-semibold">+14% MoM</span>
              </div>
              <div className="flex items-end gap-2 h-32">
                {barData.map((b) => (
                  <div key={b.month} className="flex-1 flex flex-col items-center gap-1.5">
                    <div
                      className={`w-full rounded-t-md ${b.current ? "bg-accent" : "bg-sand"}`}
                      style={{ height: `${b.pct}%` }}
                    />
                    <p className="text-muted text-[10px]">{b.month}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-line">
              <h3 className="font-semibold text-ink mb-5">Subscriptions</h3>
              <div className="space-y-4">
                {[
                  { name: "Seeker · $19", count: "1,180", pct: 40 },
                  { name: "Scholar · $39", count: "1,529", pct: 52 },
                  { name: "Lifetime · $299", count: "231", pct: 8 },
                ].map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between mb-1.5">
                      <p className="text-ink text-sm font-medium">{s.name}</p>
                      <p className="text-muted text-sm">{s.count} · {s.pct}%</p>
                    </div>
                    <div className="h-1.5 bg-line rounded-full">
                      <div className="h-1.5 bg-accent rounded-full" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-line flex justify-between items-center">
                <p className="text-muted text-sm">Total active</p>
                <p className="text-ink font-bold text-lg">2,940</p>
              </div>
            </div>
          </div>

          {/* Recent members */}
          <div className="bg-white rounded-2xl border border-line overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-line">
              <h3 className="font-semibold text-ink">Recent members</h3>
              <a href="#" className="text-accent text-sm">View all →</a>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-line">
                  {["Member", "Course", "Plan", "Joined", "Status"].map((h) => (
                    <th key={h} className="text-left text-muted text-[10px] font-bold uppercase tracking-widest px-6 py-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {recentMembers.map((m) => (
                  <tr key={m.name}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-ink text-xs font-bold shrink-0">
                          {m.initials}
                        </div>
                        <p className="text-ink text-sm font-medium">{m.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted text-sm">{m.course}</td>
                    <td className="px-6 py-4 text-ink text-sm">{m.plan}</td>
                    <td className="px-6 py-4 text-muted text-sm">{m.joined}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${m.statusClass}`}>
                        {m.status}
                      </span>
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
