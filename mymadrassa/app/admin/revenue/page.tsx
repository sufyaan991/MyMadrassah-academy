import Sidebar from "@/components/Sidebar";

const monthlyData = [
  { month: "Jan", mrr: 58200 },
  { month: "Feb", mrr: 61400 },
  { month: "Mar", mrr: 65100 },
  { month: "Apr", mrr: 69800 },
  { month: "May", mrr: 74300 },
  { month: "Jun", mrr: 84600, current: true },
];

const maxMrr = Math.max(...monthlyData.map((d) => d.mrr));

const adminSidebarProps = {
  role: "Admin" as const,
  sections: [
    {
      items: [
        { label: "Overview", href: "/admin" },
        { label: "Members", href: "/admin/members" },
        { label: "Courses", href: "/admin/courses" },
        { label: "Teachers", href: "/admin/teachers" },
        { label: "Subscriptions", href: "/admin/subscriptions" },
        { label: "Revenue", href: "/admin/revenue", active: true },
        { label: "Settings", href: "/admin/settings" },
      ],
    },
  ],
};

export default function RevenuePage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...adminSidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Revenue</h1>
              <p className="text-muted text-sm mt-0.5">Financial overview · June 2026</p>
            </div>
            <button className="bg-sidebar text-white font-semibold px-5 py-2 rounded-xl text-sm">Export CSV</button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: "MRR", value: "$84.6k", sub: "+14% vs May", accent: true },
              { label: "ARR (run rate)", value: "$1.01M", sub: "Projected", accent: false },
              { label: "Lifetime revenue", value: "$69.1k", sub: "+$3.3k this month", accent: false },
              { label: "Avg subscription", value: "$28.77", sub: "Per active user", accent: false },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-line">
                <p className="text-muted text-xs mb-2">{s.label}</p>
                <p className="text-2xl font-bold text-ink">{s.value}</p>
                <p className={`text-xs mt-1 ${s.accent ? "text-accent font-semibold" : "text-muted"}`}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* MRR chart */}
          <div className="bg-white rounded-2xl p-6 border border-line mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-ink">Monthly Recurring Revenue</h3>
              <span className="text-accent text-sm font-semibold">+45% since January</span>
            </div>
            <div className="flex items-end gap-4 h-40 mb-4">
              {monthlyData.map((d) => (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                  <p className={`text-xs font-semibold ${d.current ? "text-accent" : "text-muted"}`}>
                    ${(d.mrr / 1000).toFixed(1)}k
                  </p>
                  <div
                    className={`w-full rounded-t-lg ${d.current ? "bg-accent" : "bg-sand"}`}
                    style={{ height: `${(d.mrr / maxMrr) * 100}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {monthlyData.map((d) => (
                <div key={d.month} className="flex-1 text-center">
                  <p className={`text-xs ${d.current ? "text-ink font-bold" : "text-muted"}`}>{d.month}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue breakdown */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-line">
              <h3 className="font-semibold text-ink mb-5">Revenue by plan</h3>
              <div className="space-y-4">
                {[
                  { plan: "Scholar · $39/mo", amount: "$59,631", pct: 70 },
                  { plan: "Seeker · $19/mo", amount: "$22,420", pct: 27 },
                  { plan: "Lifetime · $299", amount: "$3,289", pct: 4 },
                ].map((p) => (
                  <div key={p.plan}>
                    <div className="flex justify-between mb-1.5">
                      <p className="text-ink text-sm font-medium">{p.plan}</p>
                      <p className="text-ink text-sm font-bold">{p.amount}</p>
                    </div>
                    <div className="h-1.5 bg-line rounded-full">
                      <div className="h-1.5 bg-accent rounded-full" style={{ width: `${p.pct}%` }} />
                    </div>
                    <p className="text-muted text-xs mt-1">{p.pct}% of total</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-line">
              <h3 className="font-semibold text-ink mb-5">Key indicators</h3>
              <div className="space-y-4">
                {[
                  { label: "Customer Lifetime Value", value: "$468" },
                  { label: "Monthly churn rate", value: "0.37%" },
                  { label: "Net Revenue Retention", value: "108%" },
                  { label: "New MRR (this month)", value: "+$2,106" },
                  { label: "Expansion MRR", value: "+$702" },
                  { label: "Churned MRR", value: "−$429" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <p className="text-muted text-sm">{row.label}</p>
                    <p className="text-ink font-bold text-sm">{row.value}</p>
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
