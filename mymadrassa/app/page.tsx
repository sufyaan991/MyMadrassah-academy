import Link from "next/link";
import Navbar from "@/components/Navbar";

const features = [
  {
    icon: "📞",
    title: "Free diagnostic session",
    desc: "Start with a one-to-one assessment. We evaluate your current level and build a personalised learning pathway.",
  },
  {
    icon: "🎙️",
    title: "Live classes with scholars",
    desc: "Learn in real-time with certified teachers who hold authentic ijazah chains.",
  },
  {
    icon: "📈",
    title: "Structured progression",
    desc: "Follow a clear curriculum from beginner to advanced, with milestones and certificates.",
  },
  {
    icon: "🔁",
    title: "Recordings on demand",
    desc: "Every class recorded. Revisit any lesson, any time, at your own pace.",
  },
  {
    icon: "✅",
    title: "Hifz & Tajweed tracking",
    desc: "Track your Qur'an memorisation and Tajweed progress with detailed reports.",
  },
  {
    icon: "🌍",
    title: "Learn from anywhere",
    desc: "Classes run across time zones. Students from 40+ countries learning together.",
  },
  {
    icon: "🏅",
    title: "Recognised certificates",
    desc: "Complete courses and receive certificates signed by our scholars.",
  },
  {
    icon: "💬",
    title: "WhatsApp support",
    desc: "Direct access to your teacher between sessions. Ask questions, share recitations, stay consistent.",
  },
];

const courseCategories = [
  {
    label: "Qur'an",
    color: "bg-emerald-50 border-emerald-200",
    badge: "text-emerald-700 bg-emerald-100",
    courses: [
      {
        icon: "ق",
        title: "Qaaida",
        subtitle: "Arabic Reading Foundation",
        desc: "The essential starting point. Learn to read Arabic script and Qur'anic text from scratch — no prior knowledge needed.",
        level: "Beginner",
        students: 284,
        price: "£40/mo",
        slug: "qaaida",
      },
      {
        icon: "ح",
        title: "Hifz Program",
        subtitle: "Full Qur'an Memorisation",
        desc: "Structured memorisation with daily revision, sabqi, manzil, and dedicated teacher accountability.",
        level: "All levels",
        students: 189,
        price: "£50/mo",
        slug: "hifz",
      },
      {
        icon: "ت",
        title: "Tajweed",
        subtitle: "Tuhfatul Atfaal",
        desc: "Master the foundational rules of Tajweed through the classical Tuhfatul Atfaal text — one-to-one with a certified scholar.",
        level: "Beginner → Intermediate",
        students: 312,
        price: "£40/mo",
        slug: "tajweed",
      },
      {
        icon: "إ",
        title: "Ijaazah",
        subtitle: "Tuhfatul Atfaal & Al-Jazariyyah",
        desc: "Study the Jazariyyah, perfect your recitation, and receive a formal ijazah with an unbroken sanad to the Prophet ﷺ.",
        level: "Advanced",
        students: 94,
        price: "£60/mo",
        slug: "ijaazah",
      },
      {
        icon: "ر",
        title: "Qira'aat",
        subtitle: "Al-Shaatibiyyah",
        desc: "Study the seven canonical Qira'aat through Al-Shaatibiyyah with a specialist scholar. The highest level of Qur'anic mastery.",
        level: "Expert",
        students: 47,
        price: "£70/mo",
        slug: "qiraat",
      },
      {
        icon: "ع",
        title: "Sciences of the Qur'an",
        subtitle: "Ulum al-Qur'an",
        desc: "Revelation history, Tafsir methodology, asbab al-nuzul, abrogation, and the miraculous nature of the Qur'an.",
        level: "Intermediate",
        students: 211,
        price: "£40/mo",
        slug: "sciences",
      },
    ],
  },
  {
    label: "Arabic",
    color: "bg-blue-50 border-blue-200",
    badge: "text-blue-700 bg-blue-100",
    courses: [
      {
        icon: "ع",
        title: "Arabic",
        subtitle: "Arabiyya Bayna Yadayk",
        desc: "Four-book series from complete beginner through to fluency in classical and scholarly Arabic — one-to-one with a qualified teacher.",
        level: "Beginner → Mastery",
        students: 693,
        price: "£50/mo per level",
        slug: "arabic",
      },
    ],
  },
];

const testimonials = [
  {
    name: "Fatima Noor",
    location: "London, UK",
    initials: "FN",
    quote: "I completed Al-Jazariyyah in 6 months. The live sessions with Ustadh Ahmad are unlike anything I've experienced online.",
  },
  {
    name: "Omar Aziz",
    location: "Toronto, Canada",
    initials: "OA",
    quote: "The structured curriculum is exactly what I needed. I went from zero Tajweed knowledge to completing Tuhfatul Atfaal.",
  },
  {
    name: "Zaynab Khan",
    location: "Dubai, UAE",
    initials: "ZK",
    quote: "Recordings mean I never miss a lesson even with my busy schedule. The progress tracking keeps me motivated.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-ink">

      <Navbar />

      {/* Hero */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-8 pt-32 pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2.5 bg-white border border-line rounded-full px-4 py-2 text-sm font-semibold text-muted mb-12">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Now enrolling — Summer 2026 cohort
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-ink leading-[1.05] tracking-tight mb-10">
                Learn Qur&apos;an and Islamic sciences from{" "}
                <span className="text-accent">qualified scholars.</span>
              </h1>
              <p className="text-muted text-xl leading-relaxed mb-12">
                Structured live courses in Tajweed, Hifz, Arabic, and Ulum — taught by certified teachers with authentic ijazah chains. Feel the difference in your prayer.
              </p>
              <Link href="/courses" className="text-ink font-semibold text-lg underline underline-offset-4 hover:text-accent transition-colors">
                Browse all courses →
              </Link>
            </div>

            {/* Right — booking card */}
            <div className="bg-white rounded-3xl border border-line shadow-sm p-12">
              <div className="inline-flex items-center gap-2 bg-warm border border-line rounded-full px-3 py-1.5 text-xs font-semibold text-muted mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Available this week
              </div>
              <h3 className="text-3xl font-bold text-ink mb-3">Book your free 30 min call</h3>
              <p className="text-muted text-base leading-relaxed mb-10">
                A one-to-one diagnostic session with a scholar. We assess your level and build your personalised learning pathway — no commitment needed.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Assess your current recitation level",
                  "Get matched to the right teacher",
                  "Receive a personalised learning plan",
                  "No credit card or commitment required",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm text-ink">
                    <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 text-white text-[10px] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/book-free-call"
                className="block text-center bg-sidebar text-white font-bold py-5 rounded-2xl text-base hover:opacity-90 transition-opacity"
              >
                Book free call →
              </Link>
              <p className="text-center text-muted text-xs mt-5">Takes 2 minutes to book</p>
            </div>

          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-line bg-white">
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
            {[
              { value: "3,400+", label: "Students worldwide" },
              { value: "18", label: "Expert scholars" },
              { value: "40+", label: "Courses available" },
              { value: "94%", label: "Completion rate" },
            ].map((s) => (
              <div key={s.label} className="px-10 first:pl-0 last:pr-0">
                <p className="text-4xl font-bold text-ink">{s.value}</p>
                <p className="text-muted text-base mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-28 border-b border-line">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ink">Everything you need to learn, in one place.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-warm rounded-2xl p-8 border border-line">
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="font-bold text-ink text-xl mb-3">{f.title}</h3>
                <p className="text-muted text-base leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-28 border-b border-line bg-warm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Curriculum</p>
              <h2 className="text-4xl md:text-5xl font-bold text-ink">Courses taught by certified scholars.</h2>
            </div>
            <Link href="/courses" className="hidden md:block text-base font-semibold text-accent hover:underline underline-offset-4">
              View all courses →
            </Link>
          </div>

          <div className="space-y-14">
            {courseCategories.map((cat) => (
              <div key={cat.label}>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border ${cat.color} ${cat.badge}`}>
                    {cat.label}
                  </span>
                  <div className="flex-1 h-px bg-line" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.courses.map((c) => (
                    <div key={c.title + c.subtitle} className="bg-white rounded-2xl p-7 border border-line hover:border-accent hover:shadow-md transition-all flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center shrink-0">
                          <span className="text-ink font-bold text-base" dir="rtl">{c.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-ink text-xl leading-snug">{c.title}</h3>
                          <p className={`text-xs font-bold uppercase tracking-wide mt-1 ${cat.badge} px-2 py-0.5 rounded-full inline-block`}>{c.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{c.desc}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-line mb-4">
                        <span className="text-muted text-sm">{c.level} · {c.students} students</span>
                        <span className="text-ink font-bold text-base">{c.price}</span>
                      </div>
                      <Link
                        href={`/courses/${c.slug}`}
                        className="block text-center bg-sidebar text-white font-semibold text-sm py-3 rounded-xl hover:opacity-90 transition-opacity"
                      >
                        View course →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 border-b border-line">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ink">Trusted by thousands of students.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-warm rounded-2xl p-8 border border-line">
                <p className="text-ink text-lg leading-relaxed mb-8">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sidebar flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-ink text-base font-bold">{t.name}</p>
                    <p className="text-muted text-sm">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-sidebar py-28">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-accent font-semibold text-xl uppercase tracking-widest mb-6" dir="rtl">
            وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin your path to knowledge.
          </h2>
          <p className="text-white/50 mb-12 text-xl">
            Start with a free diagnostic call — we&apos;ll assess your level and match you to the right course and teacher.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/book-free-call"
              className="bg-accent text-sidebar font-bold px-10 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity"
            >
              Book free diagnostic call →
            </Link>
            <Link href="/login" className="text-white/60 font-semibold text-lg hover:text-white transition-colors">
              Already have an account →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-sidebar font-bold">م</span>
                </div>
                <span className="font-bold text-white text-lg">MyMadrassa</span>
              </div>
              <p className="text-white/30 text-base leading-relaxed">
                Islamic learning for the modern world.
              </p>
            </div>
            <div>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-5">Learn</p>
              <ul className="space-y-3 text-base text-white/50">
                {[
                  { label: "All Courses", href: "/courses" },
                  { label: "Tajweed", href: "/courses/tajweed" },
                  { label: "Hifz", href: "/courses/hifz" },
                  { label: "Arabic", href: "/courses/arabic" },
                  { label: "Resources", href: "/resources" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white/80 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-5">Company</p>
              <ul className="space-y-3 text-base text-white/50">
                {[
                  { label: "Our Scholars", href: "/teachers" },
                  { label: "About", href: "#" },
                  { label: "Blog", href: "#" },
                  { label: "Careers", href: "#" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white/80 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-5">Support</p>
              <ul className="space-y-3 text-base text-white/50">
                {[
                  { label: "Help centre", href: "#" },
                  { label: "Contact", href: "#" },
                  { label: "Privacy", href: "#" },
                  { label: "Terms", href: "#" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white/80 transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex items-center justify-between">
            <p className="text-white/20 text-sm">© 2026 MyMadrassa. All rights reserved.</p>
            <p className="text-white/20 text-sm">Built with intention.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
