import Sidebar from "@/components/Sidebar";

const invoices = [
  { date: "14 Jun 2026", amount: "$39.00", status: "Paid", desc: "Scholar plan — June 2026" },
  { date: "14 May 2026", amount: "$39.00", status: "Paid", desc: "Scholar plan — May 2026" },
  { date: "14 Apr 2026", amount: "$39.00", status: "Paid", desc: "Scholar plan — April 2026" },
  { date: "14 Mar 2026", amount: "$39.00", status: "Paid", desc: "Scholar plan — March 2026" },
];

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
        { label: "Billing", href: "/student/billing", active: true },
        { label: "Settings", href: "/student/settings" },
      ],
    },
  ],
};

export default function BillingPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...sidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-3xl mx-auto p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-ink">Billing</h1>
            <p className="text-muted text-sm mt-0.5">Manage your plan and payment details</p>
          </div>

          {/* Current plan */}
          <div className="bg-sidebar rounded-2xl p-6 mb-6 flex items-center justify-between">
            <div>
              <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1">Current plan</p>
              <h2 className="text-2xl font-bold text-white">Scholar</h2>
              <p className="text-white/50 text-sm mt-1">$39 / month · Renews 14 July 2026</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <button className="bg-accent text-sidebar font-bold px-5 py-2.5 rounded-xl text-sm">
                Upgrade to Lifetime
              </button>
              <button className="text-white/50 text-sm hover:text-white text-center">
                Cancel plan
              </button>
            </div>
          </div>

          {/* What's included */}
          <div className="bg-white rounded-2xl p-6 border border-line mb-6">
            <h3 className="font-semibold text-ink mb-4">What's included</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Unlimited live classes",
                "Hifz programme access",
                "All course recordings",
                "1-on-1 teacher feedback",
                "Tajweed certification",
                "Priority scheduling",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-[10px] font-bold">✓</span>
                  </div>
                  <p className="text-ink text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment method */}
          <div className="bg-white rounded-2xl p-6 border border-line mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-ink">Payment method</h3>
              <button className="text-accent text-sm font-semibold">Update</button>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-line rounded-md flex items-center justify-center">
                <span className="text-muted text-xs font-bold">VISA</span>
              </div>
              <div>
                <p className="text-ink text-sm font-medium">Visa ending in 4242</p>
                <p className="text-muted text-xs">Expires 08 / 2028</p>
              </div>
            </div>
          </div>

          {/* Invoice history */}
          <div className="bg-white rounded-2xl border border-line overflow-hidden">
            <div className="px-6 py-4 border-b border-line">
              <h3 className="font-semibold text-ink">Invoice history</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-line">
                  {["Date", "Description", "Amount", "Status", ""].map((h) => (
                    <th key={h} className="text-left text-muted text-[10px] font-bold uppercase tracking-widest px-6 py-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {invoices.map((inv) => (
                  <tr key={inv.date}>
                    <td className="px-6 py-4 text-muted text-sm">{inv.date}</td>
                    <td className="px-6 py-4 text-ink text-sm">{inv.desc}</td>
                    <td className="px-6 py-4 text-ink text-sm font-medium">{inv.amount}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="text-accent text-sm">PDF</a>
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
