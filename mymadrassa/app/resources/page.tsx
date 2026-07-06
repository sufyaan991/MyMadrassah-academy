import Link from "next/link";

const courseResources = [
  {
    course: "Qaaida",
    slug: "qaaida",
    badge: "text-emerald-700 bg-emerald-100 border-emerald-200",
    items: [
      { title: "Noorani Qaaida — Full Text", type: "PDF", desc: "Primary reading material used in lessons." },
      { title: "Arabic Alphabet Writing Sheets", type: "PDF", desc: "Printable practice sheets for all letter forms." },
      { title: "Harakat Reference Card", type: "PDF", desc: "Quick reference for short vowels, sukoon, and shaddah." },
    ],
  },
  {
    course: "Tajweed — Tuhfatul Atfaal",
    slug: "tajweed",
    badge: "text-emerald-700 bg-emerald-100 border-emerald-200",
    items: [
      { title: "Tuhfatul Atfaal — Arabic Text & Translation", type: "PDF", desc: "Full poem with English translation and rule annotations." },
      { title: "Tajweed Rules Summary Sheet", type: "PDF", desc: "One-page reference covering all major rules taught in this course." },
      { title: "Makharij al-Huruf Diagram", type: "PDF", desc: "Articulation points for all 29 Arabic letters." },
      { title: "Madd Types Chart", type: "PDF", desc: "Visual breakdown of all Madd categories with counts." },
      { title: "Waqf Signs Reference", type: "PDF", desc: "All Qur'anic stopping signs with meanings." },
    ],
  },
  {
    course: "Ijaazah — Al-Jazariyyah",
    slug: "ijaazah",
    badge: "text-emerald-700 bg-emerald-100 border-emerald-200",
    items: [
      { title: "Al-Jazariyyah — Arabic Text", type: "PDF", desc: "Full poem by Ibn al-Jazari used for memorisation." },
      { title: "Jazariyyah with Sharh (Commentary)", type: "PDF", desc: "Annotated version with line-by-line explanation." },
      { title: "Sifaat al-Huruf Reference", type: "PDF", desc: "All letter characteristics with examples from the Qur'an." },
      { title: "Tuhfatul Atfaal Revision Sheet", type: "PDF", desc: "Condensed rules for ongoing revision alongside Jazariyyah study." },
    ],
  },
  {
    course: "Qira'aat — Al-Shaatibiyyah",
    slug: "qiraat",
    badge: "text-emerald-700 bg-emerald-100 border-emerald-200",
    items: [
      { title: "Al-Shaatibiyyah — Arabic Text", type: "PDF", desc: "Full Hirz al-Amani poem for memorisation and study." },
      { title: "The Seven Qira'aat — Usul Comparison Table", type: "PDF", desc: "Side-by-side comparison of the foundational principles of each Imam." },
      { title: "Ruwat Chart", type: "PDF", desc: "Narrators of each of the seven Imams with key differences noted." },
    ],
  },
  {
    course: "Hifz Program",
    slug: "hifz",
    badge: "text-emerald-700 bg-emerald-100 border-emerald-200",
    items: [
      { title: "Weekly Hifz Tracker", type: "PDF", desc: "Log new memorisation, sabqi, and manzil each day." },
      { title: "Juz Progress Chart", type: "PDF", desc: "Track completion of all 30 Juz across the full Qur'an." },
      { title: "Revision Schedule Template", type: "PDF", desc: "Blank weekly planner structured around the standard hifz method." },
    ],
  },
  {
    course: "Sciences of the Qur'an",
    slug: "sciences",
    badge: "text-emerald-700 bg-emerald-100 border-emerald-200",
    items: [
      { title: "Ulum al-Qur'an — Course Notes", type: "PDF", desc: "Full set of structured notes covering all modules." },
      { title: "Key Terminology Glossary", type: "PDF", desc: "Definitions of all major terms in the Sciences of the Qur'an." },
      { title: "Stages of Revelation — Timeline", type: "PDF", desc: "Visual timeline of Meccan and Medinan revelation periods." },
      { title: "Introduction to Tafsir Schools", type: "PDF", desc: "Overview of the major classical commentaries and their methodologies." },
    ],
  },
  {
    course: "Arabic — Arabiyya Bayna Yadayk",
    slug: "arabic",
    badge: "text-blue-700 bg-blue-100 border-blue-200",
    items: [
      { title: "Book 1 — Vocabulary Lists", type: "PDF", desc: "All vocabulary from Book One, organised by unit." },
      { title: "Book 2 — Vocabulary Lists", type: "PDF", desc: "All vocabulary from Book Two, organised by unit." },
      { title: "Book 3 — Vocabulary Lists", type: "PDF", desc: "All vocabulary from Book Three, organised by unit." },
      { title: "Arabic Verb Conjugation Tables", type: "PDF", desc: "Past, present, and command forms across all pronouns." },
      { title: "Grammar Cases Reference Card", type: "PDF", desc: "Quick guide to raf, nasb, and jarr with examples." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-ink">

      {/* Nav */}
      <nav className="border-b border-line sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sidebar flex items-center justify-center">
              <span className="text-accent font-bold text-lg">م</span>
            </div>
            <span className="font-bold text-ink text-xl tracking-tight">MyMadrassa</span>
          </Link>
          <div className="hidden md:flex items-center gap-10 text-base text-muted font-medium">
            <Link href="/#courses" className="hover:text-ink transition-colors">Courses</Link>
            <Link href="/resources" className="text-ink font-semibold">Resources</Link>
            <Link href="/teachers" className="hover:text-ink transition-colors">Scholars</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-base font-medium text-muted hover:text-ink transition-colors">Sign in</Link>
            <Link href="/portal" className="bg-sidebar text-white text-base font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Student portal
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-warm border-b border-line">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Student resources</p>
          <h1 className="text-5xl font-bold text-ink leading-tight mb-4">Course materials & texts.</h1>
          <p className="text-muted text-lg max-w-xl">
            Documents, classical texts, and reference materials for each course. Download and keep these alongside your lessons.
          </p>
        </div>
      </section>

      {/* Resource sections */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-16">
        {courseResources.map((cat) => (
          <section key={cat.course}>
            {/* Course label */}
            <div className="flex items-center gap-4 mb-7">
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${cat.badge}`}>
                {cat.course}
              </span>
              <div className="flex-1 h-px bg-line" />
            </div>

            {/* Resource list */}
            <div className="bg-warm rounded-2xl border border-line overflow-hidden">
              {cat.items.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-center justify-between px-7 py-5 hover:bg-sand transition-colors ${
                    i !== cat.items.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-line flex items-center justify-center shrink-0">
                      <span className="text-[9px] font-bold text-muted uppercase">{item.type}</span>
                    </div>
                    <div>
                      <p className="text-ink font-semibold text-sm">{item.title}</p>
                      <p className="text-muted text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  <button className="text-accent text-sm font-bold hover:underline underline-offset-4 shrink-0 ml-6">
                    Download →
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

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
