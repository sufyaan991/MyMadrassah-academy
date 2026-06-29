import Sidebar from "@/components/Sidebar";

const events = [
  { type: "New", label: "Fatima Noor upgraded to Scholar", time: "2h ago", color: "bg-green-500" },
  { type: "New", label: "Omar Aziz purchased Lifetime", time: "5h ago", color: "bg-accent" },
  { type: "Churn", label: "Nadia Rahman cancelled Seeker plan", time: "1d ago", color: "bg-red-400" },
  { type: "New", label: "Zaynab Khan started Seeker trial", time: "1d ago", color: "bg-green-500" },
  { type: "Upgrade", label: "Hamza Malik upgraded Seeker → Scholar", time: "2d ago", color: "bg-accent" },
  { type: "Churn", label: "Anonymous user cancelled Seeker plan", time: "3d ago", color: "bg-red-400" },
];

const adminSidebarProps = {
  role: "Admin" as const,
  sections: [
    {
      items: [
        { label: "Overview", href: "/admin" },
        { label: "Members", href: "/admin/members" },
        { label: "Courses", href: "/admin/courses" },
        { label: "Teachers", href: "/admin/teachers" },
        { label: "Subscriptions", href: "/admin/subscriptions", active: true },
        { label: "Revenue", href: "/admin/revenue" },
        { label: "Settings", href: "/admin/settings" },
      ],
    },
  ],
};

export default function SubscriptionsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...adminSidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-ink">Subscriptions</h1>
            <p className="text-muted text-sm mt-0.5">2,940 active subscriptions</p>
          </div>

          {/* Plan cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { name: "Seeker", price: "$19/mo", count: "1,180", pct: 40, sub: "+12 this month", color: "bg-line", textColor: "text-ink" },
              { name: "Scholar", price: "$39/mo", count: "1,529", pct: 52, sub: "+31 this month", color: "bg-accent", textColor: "text-sidebar" },
              { name: "Lifetime", price: "$299 once", count: "231", pct: 8, sub: "+11 this month", color: "bg-sidebar", textColor: "text-white" },
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl p-6 ${p.name === "Scholar" ? "bg-sidebar" : "bg-white border border-line"}`}>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${p.name === "Scholar" ? "text-accent" : "text-muted"}`}>
                  {p.name}
                </p>
                <p className={`text-3xl font-bold mb-1 ${p.name === "Scholar" ? "text-white" : "text-ink"}`}>{p.count}</p>
                <p className={`text-sm mb-3 ${p.name === "Scholar" ? "text-white/50" : "text-muted"}`}>{p.price} · {p.pct}% share</p>
                <div className={`h-1.5 rounded-full ${p.name === "Scholar" ? "bg-white/10" : "bg-line"} mb-2`}>
                  <div className={`h-1.5 rounded-full ${p.color}`} style={{ width: `${p.pct}%` }} />
                </div>
                <p className={`text-xs ${p.name === "Scholar" ? "text-accent" : "text-muted"}`}>{p.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Churn & growth */}
            <div className="bg-white rounded-2xl p-6 border border-line">
              <h3 className="font-semibold text-ink mb-5">This month</h3>
              <div className="space-y-4">
                {[
                  { label: "New subscriptions", value: "+54", color: "text-green-600" },
                  { label: "Upgrades", value: "+18", color: "text-accent" },
                  { label: "Cancellations", value: "−11", color: "text-red-500" },
                  { label: "Net new", value: "+61", color: "text-green-600" },
                  { label: "Churn rate", value: "0.37%", color: "text-muted" },
                  { label: "Avg revenue per user", value: "$28.77", color: "text-ink" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <p className="text-muted text-sm">{row.label}</p>
                    <p className={`font-bold text-sm ${row.color}`}>{row.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent events */}
            <div className="bg-white rounded-2xl p-6 border border-line">
              <h3 className="font-semibold text-ink mb-5">Recent events</h3>
              <div className="space-y-4">
                {events.map((e, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full ${e.color} mt-1.5 shrink-0`} />
                    <div className="flex-1">
                      <p className="text-ink text-sm">{e.label}</p>
                      <p className="text-muted text-xs mt-0.5">{e.time}</p>
                    </div>
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
