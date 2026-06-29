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
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sidebar flex items-center justify-center">
              <span className="text-accent font-bold text-sm">م</span>
            </div>
            <span className="font-bold text-ink text-lg tracking-tight">MyMadrassa</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted font-medium">
            <a href="#courses" className="hover:text-ink transition-colors">Courses</a>
            <a href="#how-it-works" className="hover:text-ink transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-muted hover:text-ink transition-colors">
              Sign in
            </Link>
            <Link href="/signup" className="bg-sidebar text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-warm">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-3.5 py-1.5 text-xs font-semibold text-muted mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Now enrolling — Summer 2026 cohort
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ink leading-[1.1] tracking-tight mb-6">
              Learn Qur'an and Islamic sciences from{" "}
              <span className="text-accent">qualified scholars.</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed mb-10 max-w-xl">
              Structured live courses in Tajweed, Hifz, Arabic, and Ulum — taught by certified teachers with authentic ijazah chains.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/signup" className="bg-sidebar text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity">
                Start learning today →
              </Link>
              <a href="#courses" className="text-ink font-semibold text-sm underline underline-offset-4 hover:text-accent transition-colors">
                Browse courses
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-line bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
            {[
              { value: "3,400+", label: "Students worldwide" },
              { value: "18", label: "Expert scholars" },
              { value: "40+", label: "Courses available" },
              { value: "94%", label: "Completion rate" },
            ].map((s) => (
              <div key={s.label} className="px-8 first:pl-0 last:pr-0">
                <p className="text-2xl font-bold text-ink">{s.value}</p>
                <p className="text-muted text-sm mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 border-b border-line">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">Everything you need to learn, in one place.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-warm rounded-2xl p-6 border border-line">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-ink mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-24 border-b border-line bg-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Curriculum</p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink">Courses taught by certified scholars.</h2>
            </div>
            <Link href="/signup" className="hidden md:block text-sm font-semibold text-accent hover:underline underline-offset-4">
              View all courses →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-5 border border-line hover:border-accent hover:shadow-sm transition-all group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sand flex items-center justify-center shrink-0">
                    <span className="text-ink font-semibold text-sm" dir="rtl">{c.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-ink text-sm leading-snug">{c.title}</h3>
                    </div>
                    <p className="text-muted text-xs mb-3">{c.level} · {c.teacher}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full uppercase tracking-wide">
                        {c.category}
                      </span>
                      <span className="text-muted text-[11px]">{c.students} students</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-line">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">Trusted by thousands of students.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-warm rounded-2xl p-6 border border-line">
                <p className="text-ink text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sidebar flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-ink text-sm font-semibold">{t.name}</p>
                    <p className="text-muted text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 border-b border-line bg-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">Simple, transparent pricing.</h2>
            <p className="text-muted">No contracts. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-7 border ${
                  p.highlight
                    ? "bg-sidebar border-sidebar"
                    : "bg-white border-line"
                }`}
              >
                {p.highlight && (
                  <span className="inline-block bg-accent text-sidebar text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4">
                    Most popular
                  </span>
                )}
                <h3 className={`font-bold text-xl mb-1 ${p.highlight ? "text-white" : "text-ink"}`}>
                  {p.name}
                </h3>
                <p className={`text-sm mb-5 ${p.highlight ? "text-white/50" : "text-muted"}`}>{p.desc}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${p.highlight ? "text-white" : "text-ink"}`}>{p.price}</span>
                  <span className={`text-sm ml-1 ${p.highlight ? "text-white/40" : "text-muted"}`}>{p.period}</span>
                </div>
                <ul className="space-y-3 mb-7">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${p.highlight ? "text-white/80" : "text-ink"}`}>
                      <span className={`mt-0.5 text-xs shrink-0 ${p.highlight ? "text-accent" : "text-accent"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`block w-full text-center font-semibold py-3 rounded-xl text-sm transition-opacity hover:opacity-90 ${
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
      <section className="bg-sidebar py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4" dir="rtl">
            وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Begin your path to knowledge.
          </h2>
          <p className="text-white/50 mb-10 text-lg">
            Join 3,400+ students learning Qur'an and Islamic sciences online.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/signup" className="bg-accent text-sidebar font-bold px-8 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity">
              Create free account
            </Link>
            <Link href="/login" className="text-white/60 font-semibold text-sm hover:text-white transition-colors">
              Already have an account →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
                  <span className="text-sidebar font-bold text-xs">م</span>
                </div>
                <span className="font-bold text-white">MyMadrassa</span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed">
                Islamic learning for the modern world.
              </p>
            </div>
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Learn</p>
              <ul className="space-y-2.5 text-sm text-white/50">
                {["Courses", "Tajweed", "Hifz", "Arabic", "Ulum"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white/80 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Company</p>
              <ul className="space-y-2.5 text-sm text-white/50">
                {["About", "Scholars", "Blog", "Careers"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white/80 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Support</p>
              <ul className="space-y-2.5 text-sm text-white/50">
                {["Help centre", "Contact", "Privacy", "Terms"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white/80 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex items-center justify-between">
            <p className="text-white/20 text-xs">© 2026 MyMadrassa. All rights reserved.</p>
            <p className="text-white/20 text-xs">Built with intention.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
