import Navbar from "@/components/Navbar";

const BOOKING_URL = "https://calendly.com/mymadrassa";

const scholars = [
  {
    initials: "UY",
    name: "Ustadh Yaseen",
    title: "Director",
    teaches: ["All Qur'an courses", "Tajweed", "Ijaazah oversight"],
    tags: ["Director", "Ijaazah holder"],
  },
  {
    initials: "US",
    name: "Ustadh Sufyaan",
    title: "Qur'an & Hifz Teacher",
    teaches: ["Hifz Program", "Qur'an Recitation", "Qaaida"],
    tags: ["Comp Sci Graduate", "Hafiz", "Ijaazah holder"],
  },
  {
    initials: "UA",
    name: "Ustadh Abdurrahman",
    title: "Qur'an & Hifz Teacher",
    teaches: ["Hifz Program", "Qur'an Recitation", "Tajweed"],
    tags: ["Comp Sci Graduate", "Hafiz", "Ijaazah holder"],
  },
];

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-white text-ink">

      <Navbar />

      {/* Header */}
      <section className="bg-warm border-b border-line">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Our scholars</p>
          <h1 className="text-5xl font-bold text-ink leading-tight mb-4">
            Meet the teachers.
          </h1>
          <p className="text-muted text-lg max-w-xl">
            All our teachers hold an authentic ijazah with a connected chain of transmission. You learn from people who carry the tradition properly.
          </p>
        </div>
      </section>

      {/* Scholar cards */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scholars.map((s) => (
            <div key={s.name} className="bg-warm rounded-2xl border border-line p-8">

              {/* Avatar */}
              <div className="w-14 h-14 rounded-2xl bg-sidebar flex items-center justify-center text-white font-bold text-lg mb-5">
                {s.initials}
              </div>

              {/* Name + title */}
              <h2 className="font-bold text-ink text-xl mb-1">{s.name}</h2>
              <p className="text-muted text-sm mb-5">{s.title}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wide text-muted bg-white border border-line px-2.5 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Teaches */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">Teaches</p>
                <ul className="space-y-1.5">
                  {s.teaches.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-ink">
                      <span className="text-accent text-xs">→</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-sidebar py-20">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get matched to a teacher.</h2>
          <p className="text-white/50 text-lg mb-10">
            Book a free 30 min diagnostic call and we&apos;ll pair you with the right scholar for your course and level.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-sidebar font-bold px-10 py-4 rounded-2xl text-base hover:opacity-90 transition-opacity"
          >
            Book free call →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-sidebar font-bold text-sm">م</span>
            </div>
            <span className="font-bold text-white">MyMadrassa</span>
          </div>
          <p className="text-white/20 text-sm">© 2026 MyMadrassa. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
