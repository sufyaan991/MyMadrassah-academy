import Link from "next/link";

const features = [
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
];

const courses = [
  { icon: "الج", title: "Al-Jazariyyah", category: "Tajweed", level: "Intermediate", teacher: "Ustadh Ahmad", students: 142 },
  { icon: "تخ", title: "Tuhfatul Atfaal", category: "Tajweed", level: "Beginner", teacher: "Ustadh Ahmad", students: 98 },
  { icon: "ع", title: "Sciences of the Qur'an", category: "Ulum", level: "All levels", teacher: "Sh. Bilal", students: 211 },
  { icon: "ح", title: "Hifz Program", category: "Memorisation", level: "All levels", teacher: "Sh. Bilal", students: 76 },
  { icon: "ل", title: "Arabic Level 1", category: "Arabic", level: "Beginner", teacher: "Ust. Maryam", students: 183 },
  { icon: "ش", title: "Ash-Shaatibiyyah", category: "Tajweed", level: "Advanced", teacher: "Ustadh Ahmad", students: 54 },
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

const plans = [
  {
    name: "Seeker",
    price: "$19",
    period: "/mo",
    desc: "For those beginning their journey.",
    features: ["Access to 5 courses", "Live class recordings", "Community access", "Monthly progress report"],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Scholar",
    price: "$39",
    period: "/mo",
    desc: "For committed, serious students.",
    features: ["Access to all courses", "Live classes included", "1-on-1 teacher sessions", "Ijazah pathway", "Priority support"],
    cta: "Start Scholar plan",
    highlight: true,
  },
  {
    name: "Lifetime",
    price: "$299",
    period: " once",
    desc: "One payment. Learn forever.",
    features: ["Everything in Scholar", "Lifetime access", "All future courses", "Certificate of completion"],
    cta: "Get lifetime access",
    highlight: false,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-ink">

      {/* Nav */}
      <nav className="border-b border-line sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sidebar flex items-center justify-center">
              <span className="text-accent font-bold text-lg">م</span>
            </div>
            <span className="font-bold text-ink text-xl tracking-tight">MyMadrassa</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-base text-muted font-medium">
            <a href="#courses" className="hover:text-ink transition-colors">Courses</a>
            <a href="#how-it-works" className="hover:text-ink transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-base font-medium text-muted hover:text-ink transition-colors">
              Sign in
            </Link>
            <Link href="/signup" className="bg-sidebar text-white text-base font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-8 pt-28 pb-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 bg-white border border-line rounded-full px-4 py-2 text-sm font-semibold text-muted mb-10">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Now enrolling — Summer 2026 cohort
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-ink leading-[1.05] tracking-tight mb-8">
              Learn Qur'an and Islamic sciences from{" "}
              <span className="text-accent">qualified scholars.</span>
            </h1>
            <p className="text-muted text-2xl leading-relaxed mb-12 max-w-2xl">
              Structured live courses in Tajweed, Hifz, Arabic, and Ulum — taught by certified teachers with authentic ijazah chains.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/signup" className="bg-sidebar text-white font-bold px-9 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity">
                Start learning today →
              </Link>
              <a href="#courses" className="text-ink font-semibold text-lg underline underline-offset-4 hover:text-accent transition-colors">
                Browse courses
              </a>
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
            <Link href="/signup" className="hidden md:block text-base font-semibold text-accent hover:underline underline-offset-4">
              View all courses →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-7 border border-line hover:border-accent hover:shadow-md transition-all group cursor-pointer">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-sand flex items-center justify-center shrink-0">
                    <span className="text-ink font-bold text-lg" dir="rtl">{c.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-ink text-lg leading-snug mb-1">{c.title}</h3>
                    <p className="text-muted text-sm mb-4">{c.level} · {c.teacher}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wide">
                        {c.category}
                      </span>
                      <span className="text-muted text-sm">{c.students} students</span>
                    </div>
                  </div>
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
                <p className="text-ink text-lg leading-relaxed mb-8">"{t.quote}"</p>
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

      {/* Pricing */}
      <section id="pricing" className="py-28 border-b border-line bg-warm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Simple, transparent pricing.</h2>
            <p className="text-muted text-lg">No contracts. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-9 border ${
                  p.highlight
                    ? "bg-sidebar border-sidebar"
                    : "bg-white border-line"
                }`}
              >
                {p.highlight && (
                  <span className="inline-block bg-accent text-sidebar text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                    Most popular
                  </span>
                )}
                <h3 className={`font-bold text-2xl mb-2 ${p.highlight ? "text-white" : "text-ink"}`}>
                  {p.name}
                </h3>
                <p className={`text-base mb-6 ${p.highlight ? "text-white/50" : "text-muted"}`}>{p.desc}</p>
                <div className="mb-8">
                  <span className={`text-5xl font-bold ${p.highlight ? "text-white" : "text-ink"}`}>{p.price}</span>
                  <span className={`text-base ml-1.5 ${p.highlight ? "text-white/40" : "text-muted"}`}>{p.period}</span>
                </div>
                <ul className="space-y-4 mb-9">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-base ${p.highlight ? "text-white/80" : "text-ink"}`}>
                      <span className="mt-0.5 shrink-0 text-accent font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`block w-full text-center font-bold py-4 rounded-xl text-base transition-opacity hover:opacity-90 ${
                    p.highlight
                      ? "bg-accent text-sidebar"
                      : "bg-sidebar text-white"
                  }`}
                >
                  {p.cta}
                </Link>
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
            Join 3,400+ students learning Qur'an and Islamic sciences online.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/signup" className="bg-accent text-sidebar font-bold px-10 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity">
              Create free account
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
                {["Courses", "Tajweed", "Hifz", "Arabic", "Ulum"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white/80 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-5">Company</p>
              <ul className="space-y-3 text-base text-white/50">
                {["About", "Scholars", "Blog", "Careers"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white/80 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-5">Support</p>
              <ul className="space-y-3 text-base text-white/50">
                {["Help centre", "Contact", "Privacy", "Terms"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white/80 transition-colors">{l}</a></li>
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
