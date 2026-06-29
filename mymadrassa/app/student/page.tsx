import Sidebar from "@/components/Sidebar";

const courses = [
  { icon: "الج", title: "Al-Jazariyyah", meta: "Tajweed · Intermediate · Ustadh Ahmad", progress: 62 },
  { icon: "تخ", title: "Tuhfatul Atfaal", meta: "Tajweed · Beginner · Ustadh Ahmad", progress: 88 },
  { icon: "ع", title: "Sciences of the Qur'an", meta: "Ulum · All levels · Sh. Bilal", progress: 34 },
];

const schedule = [
  { day: "FRI", date: "27", title: "Tuhfatul Atfaal — live", time: "6:30 PM", teacher: "Ustadh Ahmad", bar: "bg-accent" },
  { day: "SAT", date: "28", title: "Hifz review circle", time: "10:00 AM", teacher: "Sh. Bilal", bar: "bg-green-500" },
  { day: "SUN", date: "29", title: "Al-Jazariyyah — live", time: "7:00 PM", teacher: "Ustadh Ahmad", bar: "bg-accent" },
  { day: "TUE", date: "01", title: "Arabic Level 2", time: "5:30 PM", teacher: "Ust. Maryam", bar: "bg-purple-400" },
];

export default function StudentDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        role="Student"
        sections={[
          {
            title: "Learn",
            items: [
              { label: "Dashboard", href: "/student", active: true },
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
              { label: "Settings", href: "/student/settings" },
            ],
          },
        ]}
      />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-accent text-sm mb-0.5" dir="rtl">السلام عليكم</p>
              <h1 className="text-4xl font-bold text-ink leading-tight">
                Welcome<br />back,<br />Yusuf
              </h1>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="bg-white rounded-xl px-4 py-2.5 text-sm text-muted border border-line w-48">
                Search courses…
              </div>
              <div className="bg-white rounded-xl px-4 py-2.5 border border-line flex items-center gap-2.5">
                <span className="text-lg">🔥</span>
                <div>
                  <p className="text-ink font-bold text-sm leading-none">12-day</p>
                  <p className="text-muted text-xs">streak</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top cards */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="col-span-2 bg-sidebar rounded-2xl p-6 text-white">
              <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-3">Continue Learning</p>
              <h2 className="text-2xl font-bold mb-1">
                Al-Jazariyyah <span dir="rtl" className="font-normal">الجزرية</span>
              </h2>
              <p className="text-white/50 text-sm mb-5">Lesson 12 · Rules of the Noon Saakinah</p>
              <div className="h-1 bg-white/10 rounded-full mb-5">
                <div className="h-1 bg-accent rounded-full" style={{ width: "62%" }} />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-white/40 text-sm">62% complete · 19 of 31 lessons</p>
                <button className="bg-accent text-sidebar font-bold px-5 py-2 rounded-xl text-sm">
                  Resume ▸
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-line flex flex-col">
              <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-3">Next Live Class</p>
              <h3 className="text-lg font-bold text-ink mb-0.5">Tuhfatul Atfaal</h3>
              <p className="text-muted text-sm mb-2">with Ustadh Ahmad</p>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                <span className="text-ink text-sm">Today · 6:30 PM GMT</span>
              </div>
              <p className="text-muted text-xs mb-4">Starts in 2h 15m</p>
              <button className="mt-auto w-full bg-sidebar text-white font-semibold py-2.5 rounded-xl text-sm">
                Join class
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: "Courses enrolled", value: "4", sub: "2 active this week", accent: false },
              { label: "Hifz progress", value: "6 Juz", sub: "20% of the Qur'an", accent: false },
              { label: "Attendance", value: "94%", sub: "Last 30 days", accent: false },
              { label: "Lessons done", value: "128", sub: "+9 this week", accent: true },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-line">
                <p className="text-muted text-xs mb-2">{s.label}</p>
                <p className="text-3xl font-bold text-ink">{s.value}</p>
                <p className={`text-xs mt-1 ${s.accent ? "text-accent" : "text-muted"}`}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Courses + Schedule */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-ink">My courses</h3>
                <a href="#" className="text-accent text-sm">View all →</a>
              </div>
              <div className="space-y-3">
                {courses.map((c) => (
                  <div key={c.title} className="bg-white rounded-2xl p-4 border border-line flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-sand flex items-center justify-center shrink-0">
                      <span className="text-ink text-sm font-semibold" dir="rtl">{c.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="font-semibold text-ink text-sm">{c.title}</p>
                        <p className="font-bold text-ink text-sm ml-2">{c.progress}%</p>
                      </div>
                      <p className="text-muted text-xs mb-2">{c.meta}</p>
                      <div className="h-1 bg-line rounded-full">
                        <div className="h-1 bg-accent rounded-full" style={{ width: `${c.progress}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-sidebar rounded-xl px-4 py-3">
                <p className="text-white text-xs font-semibold">Scholar plan</p>
                <p className="text-white/35 text-xs">Renews 14 Jul · $39/mo</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-ink mb-4">This week</h3>
              <div className="space-y-3">
                {schedule.map((s) => (
                  <div key={s.date + s.title} className="flex items-stretch gap-3">
                    <div className="text-center w-8 shrink-0 pt-0.5">
                      <p className="text-muted text-[9px] font-bold uppercase tracking-wide">{s.day}</p>
                      <p className="text-ink font-bold text-base leading-tight">{s.date}</p>
                    </div>
                    <div className={`w-0.5 ${s.bar} rounded-full`} />
                    <div className="bg-white rounded-xl p-3 flex-1 border border-line">
                      <p className="text-ink text-xs font-semibold leading-snug">{s.title}</p>
                      <p className="text-muted text-[11px] mt-0.5">{s.time} · {s.teacher}</p>
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
