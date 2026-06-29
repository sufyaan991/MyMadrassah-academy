import Sidebar from "@/components/Sidebar";

const sidebarProps = {
  role: "Student" as const,
  sections: [
    {
      title: "Learn",
      items: [
        { label: "Dashboard", href: "/student" },
        { label: "My Courses", href: "/student/courses" },
        { label: "Schedule", href: "/student/schedule" },
        { label: "Recordings", href: "/student/recordings" },
        { label: "Progress", href: "/student/progress" },
      ],
    },
    {
      title: "Account",
      items: [
        { label: "Billing", href: "/student/billing" },
        { label: "Settings", href: "/student/settings", active: true },
      ],
    },
  ],
};

export default function SettingsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...sidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-3xl mx-auto p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-ink">Settings</h1>
            <p className="text-muted text-sm mt-0.5">Manage your account preferences</p>
          </div>

          {/* Profile */}
          <div className="bg-white rounded-2xl p-6 border border-line mb-6">
            <h3 className="font-semibold text-ink mb-5">Profile</h3>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full bg-sidebar flex items-center justify-center shrink-0">
                <span className="text-accent font-bold text-xl">Y</span>
              </div>
              <div>
                <p className="text-ink font-semibold">Yusuf Karim</p>
                <p className="text-muted text-sm">yusuf@example.com</p>
              </div>
              <button className="ml-auto text-accent text-sm font-semibold">Change photo</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-ink text-sm font-medium mb-1.5">First name</label>
                <input
                  type="text"
                  defaultValue="Yusuf"
                  className="w-full bg-warm border border-line rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-ink text-sm font-medium mb-1.5">Last name</label>
                <input
                  type="text"
                  defaultValue="Karim"
                  className="w-full bg-warm border border-line rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-ink text-sm font-medium mb-1.5">Email address</label>
                <input
                  type="email"
                  defaultValue="yusuf@example.com"
                  className="w-full bg-warm border border-line rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-ink text-sm font-medium mb-1.5">Timezone</label>
                <select className="w-full bg-warm border border-line rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent">
                  <option>Europe/London (GMT+1)</option>
                  <option>America/New_York (GMT-4)</option>
                  <option>Asia/Karachi (GMT+5)</option>
                  <option>Asia/Dubai (GMT+4)</option>
                </select>
              </div>
            </div>

            <button className="mt-5 bg-sidebar text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              Save changes
            </button>
          </div>

          {/* Password */}
          <div className="bg-white rounded-2xl p-6 border border-line mb-6">
            <h3 className="font-semibold text-ink mb-5">Change password</h3>
            <div className="space-y-4">
              {["Current password", "New password", "Confirm new password"].map((label) => (
                <div key={label}>
                  <label className="block text-ink text-sm font-medium mb-1.5">{label}</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-warm border border-line rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              ))}
            </div>
            <button className="mt-5 bg-sidebar text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              Update password
            </button>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl p-6 border border-line mb-6">
            <h3 className="font-semibold text-ink mb-5">Notifications</h3>
            <div className="space-y-4">
              {[
                { label: "Class reminders", desc: "Notify 30 min before each class", on: true },
                { label: "Assignment due dates", desc: "Alerts for upcoming deadlines", on: true },
                { label: "New recordings", desc: "When a class recording is ready", on: false },
                { label: "Weekly summary", desc: "Progress digest every Sunday", on: true },
              ].map((n) => (
                <div key={n.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-ink text-sm font-medium">{n.label}</p>
                    <p className="text-muted text-xs mt-0.5">{n.desc}</p>
                  </div>
                  <div
                    className={`w-11 h-6 rounded-full relative transition-colors ${n.on ? "bg-accent" : "bg-line"}`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${n.on ? "translate-x-6" : "translate-x-1"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Danger zone */}
          <div className="bg-white rounded-2xl p-6 border border-red-100">
            <h3 className="font-semibold text-red-600 mb-1">Danger zone</h3>
            <p className="text-muted text-sm mb-4">Permanently delete your account and all data.</p>
            <button className="border border-red-200 text-red-600 text-sm px-5 py-2.5 rounded-xl hover:bg-red-50 transition-colors">
              Delete account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
