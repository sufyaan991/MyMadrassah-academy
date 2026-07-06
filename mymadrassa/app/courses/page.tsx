import Link from "next/link";
import { courses } from "@/lib/courses";

const BOOKING_URL = "https://calendly.com/mymadrassa";

const faqs = [
  {
    q: "Do I need any prior knowledge to enrol?",
    a: "It depends on the course. Qaaida and Arabic Book One require no prior knowledge at all — they are designed for complete beginners. Most other courses require the ability to read Arabic at Qaaida level or above. Book your free diagnostic call and we will confirm which course is right for you.",
  },
  {
    q: "How long are sessions and how often do we meet?",
    a: "Sessions are typically 30 or 45 minutes, one-to-one with your teacher. Frequency is agreed between you and your teacher at enrolment — most students meet 2–3 times per week. Hifz students often meet daily.",
  },
  {
    q: "Can I try a lesson before committing?",
    a: "Yes. We offer a free 30 minute diagnostic call where you meet a teacher, assess your current level, and receive a personalised course recommendation. There is no commitment required.",
  },
  {
    q: "How much do courses cost?",
    a: "Courses start from £40/month for 30-minute weekly sessions. Pricing varies depending on session length and frequency. Full pricing is shown on each individual course page.",
  },
  {
    q: "Do I receive a certificate when I finish?",
    a: "Yes. Every course comes with a certificate of completion signed by the teaching scholar. The Ijaazah course additionally grants a formal written ijazah with a complete sanad.",
  },
  {
    q: "What if I miss a class?",
    a: "All sessions are recorded. If you miss a class, the recording is made available to you within 24 hours. We ask for at least 24 hours notice when rescheduling where possible.",
  },
  {
    q: "Can I study multiple courses at the same time?",
    a: "Yes — many students study Hifz and Tajweed simultaneously, or Arabic alongside a Qur'an course. Your teacher will advise on what is manageable given your schedule and goals.",
  },
];

const categoryLabel = (category: string) =>
  category === "quran" ? "Qur'an" : "Arabic";

const categoryBadge = (category: string) =>
  category === "quran"
    ? "text-emerald-700 bg-emerald-100 border-emerald-200"
    : "text-blue-700 bg-blue-100 border-blue-200";

export default function CoursesPage() {
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
            <Link href="/courses" className="text-ink font-semibold">Courses</Link>
            <Link href="/resources" className="hover:text-ink transition-colors">Resources</Link>
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

      {/* Hero */}
      <section className="bg-warm border-b border-line">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-5">Curriculum</p>
            <h1 className="text-6xl font-bold text-ink leading-[1.05] tracking-tight mb-7">
              Every course.<br />One-to-one.
            </h1>
            <p className="text-muted text-xl leading-relaxed mb-10 max-w-xl">
              Structured programmes in Tajweed, Hifz, Arabic, Ijaazah, and the Sciences of the Qur'an — each taught individually by a qualified scholar with an authentic ijazah chain.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sidebar text-white font-bold px-8 py-4 rounded-2xl text-base hover:opacity-90 transition-opacity"
              >
                Book free diagnostic call →
              </a>
              <a href="#courses-list" className="text-ink font-semibold text-base underline underline-offset-4 hover:text-accent transition-colors">
                Browse courses ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course list */}
      <section id="courses-list" className="max-w-7xl mx-auto px-8 py-20">

        {/* Qur'an courses */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border text-emerald-700 bg-emerald-100 border-emerald-200">
              Qur'an
            </span>
            <div className="flex-1 h-px bg-line" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {courses.filter((c) => c.category === "quran").map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="group bg-warm rounded-2xl border border-line p-8 hover:border-accent hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-line flex items-center justify-center shrink-0">
                      <span className="text-ink font-bold text-lg" dir="rtl">{c.icon}</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-ink text-xl leading-snug">{c.name}</h2>
                      <p className="text-accent text-sm font-semibold mt-0.5">{c.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-muted group-hover:text-accent transition-colors text-xl mt-1 shrink-0">→</span>
                </div>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{c.tagline}</p>
                <div className="flex items-center justify-between pt-5 border-t border-line">
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full border ${categoryBadge(c.category)}`}>
                      {c.level}
                    </span>
                    <span className="text-muted text-xs">{c.students}+ students</span>
                  </div>
                  <span className="font-bold text-ink text-sm">{c.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Arabic courses */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border text-blue-700 bg-blue-100 border-blue-200">
              Arabic
            </span>
            <div className="flex-1 h-px bg-line" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {courses.filter((c) => c.category === "arabic").map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="group bg-warm rounded-2xl border border-line p-8 hover:border-accent hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-line flex items-center justify-center shrink-0">
                      <span className="text-ink font-bold text-lg" dir="rtl">{c.icon}</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-ink text-xl leading-snug">{c.name}</h2>
                      <p className="text-accent text-sm font-semibold mt-0.5">{c.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-muted group-hover:text-accent transition-colors text-xl mt-1 shrink-0">→</span>
                </div>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{c.tagline}</p>
                <div className="flex items-center justify-between pt-5 border-t border-line">
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full border ${categoryBadge(c.category)}`}>
                      {c.level}
                    </span>
                    <span className="text-muted text-xs">{c.students}+ students</span>
                  </div>
                  <span className="font-bold text-ink text-sm">{c.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-warm">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-4xl font-bold text-ink mb-14">Common questions.</h2>
          <div className="space-y-0 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-ink text-base pr-8">{faq.q}</span>
                  <span className="text-muted group-open:rotate-45 transition-transform duration-200 text-xl shrink-0">+</span>
                </summary>
                <p className="text-muted text-sm leading-relaxed mt-4 max-w-2xl">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sidebar py-24">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-5" dir="rtl">
            وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Not sure where to start?</h2>
          <p className="text-white/50 text-lg mb-10">
            Book a free 30 min call. We assess your level and recommend the right course and teacher for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-sidebar font-bold px-10 py-4 rounded-2xl text-base hover:opacity-90 transition-opacity"
            >
              Book free call →
            </a>
            <Link href="/teachers" className="text-white/60 font-semibold text-base hover:text-white transition-colors">
              Meet the scholars →
            </Link>
          </div>
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
          <div className="flex items-center gap-8 text-white/40 text-sm">
            <Link href="/resources" className="hover:text-white/70 transition-colors">Resources</Link>
            <Link href="/teachers" className="hover:text-white/70 transition-colors">Scholars</Link>
            <Link href="/login" className="hover:text-white/70 transition-colors">Sign in</Link>
          </div>
          <p className="text-white/20 text-sm">© 2026 MyMadrassa.</p>
        </div>
      </footer>

    </div>
  );
}
