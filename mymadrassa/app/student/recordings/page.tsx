import Sidebar from "@/components/Sidebar";

const recordings = [
  { course: "Al-Jazariyyah", lesson: "Lesson 12 · Rules of the Noon Saakinah", teacher: "Ustadh Ahmad", date: "27 Jun", duration: "58 min", color: "bg-accent" },
  { course: "Tuhfatul Atfaal", lesson: "Lesson 27 · The Madd Letters", teacher: "Ustadh Ahmad", date: "25 Jun", duration: "1h 2m", color: "bg-accent" },
  { course: "Hifz Review Circle", lesson: "Group review · Juz 6", teacher: "Sh. Bilal", date: "22 Jun", duration: "45 min", color: "bg-green-500" },
  { course: "Sciences of the Qur'an", lesson: "Lesson 8 · The Preservation of the Quran", teacher: "Sh. Bilal", date: "20 Jun", duration: "1h 14m", color: "bg-green-500" },
  { course: "Al-Jazariyyah", lesson: "Lesson 11 · Rules of the Tanween", teacher: "Ustadh Ahmad", date: "18 Jun", duration: "52 min", color: "bg-accent" },
  { course: "Arabic Level 2", lesson: "Lesson 20 · Verbal Sentences", teacher: "Ust. Maryam", date: "16 Jun", duration: "1h 5m", color: "bg-purple-400" },
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
        { label: "Recordings", href: "/student/recordings", active: true },
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

export default function RecordingsPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...sidebarProps} />

      <main className="flex-1 overflow-auto bg-warm">
        <div className="max-w-5xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ink">Recordings</h1>
              <p className="text-muted text-sm mt-0.5">{recordings.length} recordings available</p>
            </div>
            {/* Filter */}
            <select className="bg-white border border-line text-ink text-sm px-4 py-2 rounded-xl focus:outline-none focus:border-accent">
              <option>All courses</option>
              <option>Al-Jazariyyah</option>
              <option>Tuhfatul Atfaal</option>
              <option>Hifz Review</option>
              <option>Sciences of the Qur'an</option>
              <option>Arabic Level 2</option>
            </select>
          </div>

          <div className="space-y-3">
            {recordings.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-line overflow-hidden flex">
                {/* Thumbnail placeholder */}
                <div className="w-48 shrink-0 bg-sidebar flex flex-col items-center justify-center gap-2 py-6 px-4">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center`}>
                    <span className="text-white text-lg">▶</span>
                  </div>
                  <p className="text-white/50 text-xs">{r.duration}</p>
                </div>

                <div className="flex-1 p-5 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-muted text-xs font-semibold uppercase tracking-wide mb-1">{r.course}</p>
                    <h3 className="font-semibold text-ink">{r.lesson}</h3>
                    <p className="text-muted text-sm mt-1">{r.teacher} · {r.date}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <button className="border border-line text-muted text-sm px-4 py-2 rounded-xl hover:border-accent transition-colors">
                      Download
                    </button>
                    <button className="bg-sidebar text-white font-semibold text-sm px-5 py-2 rounded-xl">
                      Watch ▸
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted text-sm mt-8">Recordings are stored for 90 days after each class.</p>
        </div>
      </main>
    </div>
  );
}
