import Sidebar from "@/components/Sidebar";

const days = ["Mon 23", "Tue 24", "Wed 25", "Thu 26", "Fri 27", "Sat 28", "Sun 29"];

const classes = [
  {
    day: "Fri 27",
    time: "6:30 PM",
    end: "7:30 PM",
    title: "Tuhfatul Atfaal",
    teacher: "Ustadh Ahmad",
    type: "Live class",
    color: "bg-accent",
    textColor: "text-accent",
    join: true,
  },
  {
    day: "Sat 28",
    time: "10:00 AM",
    end: "11:00 AM",
    title: "Hifz Review Circle",
    teacher: "Sh. Bilal",
    type: "Live class",
    color: "bg-green-500",
    textColor: "text-green-600",
    join: false,
  },
  {
    day: "Sun 29",
    time: "7:00 PM",
    end: "8:00 PM",
    title: "Al-Jazariyyah",
    teacher: "Ustadh Ahmad",
    type: "Live class",
    color: "bg-accent",
    textColor: "text-accent",
    join: false,
  },
  {
    day: "Tue 01",
    time: "5:30 PM",
    end: "6:30 PM",
    title: "Arabic Level 2",
    teacher: "Ust. Maryam",
    type: "Live class",
    color: "bg-purple-400",
    textColor: "text-purple-600",
    join: false,
  },
  {
    day: "Wed 02",
    time: "4:00 PM",
    end: "5:00 PM",
    title: "Sciences of the Qur'an",
    teacher: "Sh. Bilal",
    type: "Live class",
    color: "bg-green-500",
    textColor: "text-green-600",
    join: false,
  },
];

const sidebarProps = {
  role: "Student" as const,
  sections: [
    {
      title: "Learn",
      items: [
        { label: "Dashboard", href: "/student" },
        { label: "My Courses", href: "/student/courses" },
        { label: "Schedule", href: "/student/schedule", active: true },
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
  ],
};

export default function SchedulePage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...sidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Schedule</h1>
              <p className="text-muted text-sm mt-0.5">Week of 23 – 29 June 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white border border-line text-ink text-sm px-4 py-2 rounded-xl">← Prev</button>
              <button className="bg-white border border-line text-ink text-sm px-4 py-2 rounded-xl">This week</button>
              <button className="bg-white border border-line text-ink text-sm px-4 py-2 rounded-xl">Next →</button>
            </div>
          </div>

          {/* Day tabs */}
          <div className="grid grid-cols-7 gap-2 mb-6">
            {days.map((d) => {
              const hasClass = classes.some((c) => c.day === d);
              const isToday = d === "Fri 27";
              return (
                <div
                  key={d}
                  className={`text-center py-3 rounded-xl border cursor-pointer transition-colors ${
                    isToday
                      ? "bg-sidebar border-sidebar text-white"
                      : "bg-white border-line text-ink hover:border-accent"
                  }`}
                >
                  <p className={`text-[10px] font-bold uppercase tracking-wide mb-0.5 ${isToday ? "text-white/60" : "text-muted"}`}>
                    {d.split(" ")[0]}
                  </p>
                  <p className={`text-lg font-bold ${isToday ? "text-white" : "text-ink"}`}>{d.split(" ")[1]}</p>
                  {hasClass && (
                    <div className={`w-1.5 h-1.5 rounded-full mx-auto mt-1 ${isToday ? "bg-accent" : "bg-accent"}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Upcoming classes */}
          <h3 className="font-semibold text-ink mb-4">Upcoming classes</h3>
          <div className="space-y-3">
            {classes.map((cls) => (
              <div key={cls.title + cls.day} className="bg-white rounded-2xl p-5 border border-line flex items-center gap-5">
                <div className={`w-1 self-stretch rounded-full ${cls.color}`} />

                <div className="w-24 shrink-0">
                  <p className="text-ink font-bold text-sm">{cls.time}</p>
                  <p className="text-muted text-xs">{cls.end}</p>
                  <p className={`text-xs font-semibold mt-0.5 ${cls.textColor}`}>{cls.day}</p>
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-ink">{cls.title}</p>
                  <p className="text-muted text-sm mt-0.5">{cls.type} · {cls.teacher}</p>
                </div>

                {cls.join ? (
                  <button className="bg-sidebar text-white font-semibold px-5 py-2 rounded-xl text-sm shrink-0">
                    Join now ▸
                  </button>
                ) : (
                  <button className="border border-line text-muted text-sm px-5 py-2 rounded-xl shrink-0">
                    Add to calendar
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Empty next week hint */}
          <div className="mt-6 bg-white rounded-2xl p-5 border border-line border-dashed text-center">
            <p className="text-muted text-sm">No more classes scheduled after 2 Jul. Classes reset weekly.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
