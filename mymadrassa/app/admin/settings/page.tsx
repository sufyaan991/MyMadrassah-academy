import Sidebar from "@/components/Sidebar";

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
        { label: "Revenue", href: "/admin/revenue" },
        { label: "Settings", href: "/admin/settings", active: true },
      ],
    },
  ],
};

export default function AdminSettingsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...adminSidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-3xl mx-auto p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-ink">Settings</h1>
            <p className="text-muted text-sm mt-0.5">Platform configuration and preferences</p>
          </div>

          {/* Branding */}
          <div className="bg-white rounded-2xl p-6 border border-line mb-6">
            <h3 className="font-semibold text-ink mb-5">Branding</h3>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-sidebar flex items-center justify-center shrink-0">
                <span className="text-accent font-bold text-2xl">م</span>
              </div>
              <div>
                <p className="text-ink font-semibold">MyMadrassa</p>
                <p className="text-muted text-sm">Platform logo</p>
              </div>
              <button className="ml-auto text-accent text-sm font-semibold">Change logo</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-ink text-sm font-medium mb-1.5">Platform name</label>
                <input
                  type="text"
                  defaultValue="MyMadrassa"
                  className="w-full bg-warm border border-line rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-ink text-sm font-medium mb-1.5">Support email</label>
                <input
                  type="email"
                  defaultValue="support@mymadrassa.com"
                  className="w-full bg-warm border border-line rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-ink text-sm font-medium mb-1.5">Platform timezone</label>
                <select className="w-full bg-warm border border-line rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent">
                  <option>Europe/London (GMT+1)</option>
                  <option>America/New_York (GMT-4)</option>
                  <option>Asia/Karachi (GMT+5)</option>
                </select>
              </div>
            </div>
            <button className="mt-5 bg-sidebar text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              Save changes
            </button>
          </div>

          {/* Billing */}
          <div className="bg-white rounded-2xl p-6 border border-line mb-6">
            <h3 className="font-semibold text-ink mb-5">Plan pricing</h3>
            <div className="space-y-4">
              {[
                { plan: "Seeker", price: "19", period: "month" },
                { plan: "Scholar", price: "39", period: "month" },
                { plan: "Lifetime", price: "299", period: "once" },
              ].map((p) => (
                <div key={p.plan} className="flex items-center gap-4">
                  <p className="text-ink text-sm font-medium w-24">{p.plan}</p>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-muted text-sm">$</span>
                    <input
                      type="number"
                      defaultValue={p.price}
                      className="w-24 bg-warm border border-line rounded-xl px-3 py-2 text-sm text-ink focus:outline-none focus:border-accent"
                    />
                    <span className="text-muted text-sm">/ {p.period}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-5 bg-sidebar text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              Update pricing
            </button>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl p-6 border border-line mb-6">
            <h3 className="font-semibold text-ink mb-5">Platform notifications</h3>
            <div className="space-y-4">
              {[
                { label: "New member alert", desc: "Email admin when new member signs up", on: true },
                { label: "Churn alert", desc: "Email admin when subscription cancelled", on: true },
                { label: "Weekly summary", desc: "Send weekly digest to admin team", on: true },
                { label: "Low attendance alert", desc: "Flag when class drops below 70%", on: false },
              ].map((n) => (
                <div key={n.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-ink text-sm font-medium">{n.label}</p>
                    <p className="text-muted text-xs mt-0.5">{n.desc}</p>
                  </div>
                  <div className={`w-11 h-6 rounded-full relative ${n.on ? "bg-accent" : "bg-line"}`}>
                    <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${n.on ? "translate-x-6" : "translate-x-1"}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div className="bg-white rounded-2xl p-6 border border-line">
            <h3 className="font-semibold text-ink mb-5">Integrations</h3>
            <div className="space-y-4">
              {[
                { name: "Stripe", desc: "Payment processing", connected: true },
                { name: "Zoom", desc: "Live class hosting", connected: true },
                { name: "Mailchimp", desc: "Email marketing", connected: false },
              ].map((i) => (
                <div key={i.name} className="flex items-center justify-between">
                  <div>
                    <p className="text-ink text-sm font-medium">{i.name}</p>
                    <p className="text-muted text-xs">{i.desc}</p>
                  </div>
                  <button
                    className={`text-sm font-semibold px-4 py-1.5 rounded-xl transition-colors ${
                      i.connected
                        ? "bg-green-100 text-green-700"
                        : "border border-accent text-accent hover:bg-accent hover:text-sidebar"
                    }`}
                  >
                    {i.connected ? "Connected ✓" : "Connect"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
