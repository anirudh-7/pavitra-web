import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pavitra Securities & Services | Redefining Financial Services',
}

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'SIP Investments',
    desc: 'Build wealth systematically with Systematic Investment Plans starting from ₹500/month. Power of compounding working for you.',
    href: '/sip-calculator',
    tag: 'Most Popular',
    tagColor: 'bg-brand-50 text-brand',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Mutual Funds',
    desc: 'Access 2000+ mutual fund schemes across equity, debt, hybrid, and sectoral categories. Expert-curated recommendations.',
    href: '/mutual-funds',
    tag: 'Live NAV',
    tagColor: 'bg-green-50 text-green-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Fixed Deposits',
    desc: 'Guaranteed returns with capital protection. Compare FD rates across top banks and NBFCs. Ideal for risk-averse investors.',
    href: '/about#services',
    tag: 'Guaranteed',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Stock Broking',
    desc: 'Trade equities, derivatives, and commodities on NSE & BSE with research-backed guidance and portfolio management.',
    href: '/about#services',
    tag: 'NSE & BSE',
    tagColor: 'bg-purple-50 text-purple-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    title: 'Tax Planning',
    desc: 'Save up to ₹46,800 in taxes with ELSS funds, NPS, PPF, and tax-saving FDs under Sections 80C, 80D, and 80CCD.',
    href: '/tax-saving',
    tag: 'Save Tax',
    tagColor: 'bg-amber-50 text-amber-700',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Portfolio Advisory',
    desc: 'Holistic portfolio review and rebalancing. Personalised investment strategies aligned to your goals, risk appetite, and timeline.',
    href: '/about#services',
    tag: 'Personalised',
    tagColor: 'bg-charcoal-100 text-charcoal-700',
  },
]

const stats = [
  { value: '30+', label: 'Years of Expertise' },
  { value: '₹500Cr+', label: 'Assets Under Management' },
  { value: '10,000+', label: 'Happy Investors' },
  { value: 'SEBI', label: 'Registered Advisor' },
]

const whyUs = [
  {
    icon: '🛡️',
    title: 'SEBI Registered',
    desc: 'Fully compliant and regulated. Your investments are guided by certified professionals.',
  },
  {
    icon: '📊',
    title: 'Research-Backed',
    desc: 'Every recommendation backed by in-depth fundamental and technical research.',
  },
  {
    icon: '🤝',
    title: 'Personalised Advice',
    desc: "We understand your goals, risk profile, and life stage before recommending anything.",
  },
  {
    icon: '🔒',
    title: 'Transparent & Secure',
    desc: 'No hidden charges. Direct plans available. Investor data is fully protected.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-hero-gradient min-h-[92vh] flex items-center pt-16 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-charcoal-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-brand/20 text-brand-light text-xs font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
              SEBI Registered Investment Advisor · Since 1995
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-up delay-100">
              Redefining Financial <br />
              <span className="text-brand-light">Services</span> for Every Goal
            </h1>

            <p className="mt-6 text-lg text-charcoal-200 max-w-2xl leading-relaxed animate-fade-up delay-200">
              From your first SIP to a complete wealth portfolio — Pavitra Securities has guided families
              across Mumbai for 30+ years. Expert-driven, transparent, and built around your future.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link href="/sip-calculator" className="btn-primary text-base px-8 py-3.5">
                Start Investing Today
              </Link>
              <Link href="/about" className="btn-outline text-base px-8 py-3.5">
                Learn About Us
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6 animate-fade-up delay-400">
              {['SEBI Registered', 'NSE & BSE Member', 'AMFI Registered', 'Est. 1995'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-charcoal-300 text-sm">
                  <svg className="w-4 h-4 text-brand-light shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold">{s.value}</p>
                <p className="text-brand-100 text-sm mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-warm-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="section-heading">Comprehensive Financial Services</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Everything you need to grow, protect, and manage your wealth — under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="card group hover:-translate-y-1 cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-brand-50 text-brand rounded-xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    {svc.icon}
                  </div>
                  <span className={`tag text-xs ${svc.tagColor}`}>{svc.tag}</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal-800 mb-2 group-hover:text-brand transition-colors">
                  {svc.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{svc.desc}</p>
                <div className="mt-4 flex items-center text-brand text-sm font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick SIP Calculator Preview ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">Quick Tool</p>
              <h2 className="section-heading">See Your SIP Grow</h2>
              <p className="section-subheading">
                Enter a few numbers and instantly see how your monthly SIP can grow into significant wealth through the power of compounding.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  'SIP, Lumpsum, and Goal-based calculators',
                  'Inflation-adjusted return projections',
                  'Visual donut chart of growth',
                  'Compare scenarios instantly',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-charcoal-600">
                    <svg className="w-5 h-5 text-brand shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/sip-calculator" className="btn-primary inline-flex items-center gap-2 mt-8">
                Open Full Calculator
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Preview card */}
            <div className="card shadow-card-hover border border-charcoal-100 p-8">
              <div className="text-center mb-6">
                <p className="text-charcoal-500 text-sm">Monthly SIP of</p>
                <p className="text-4xl font-bold text-charcoal-800 mt-1">₹10,000</p>
                <p className="text-charcoal-500 text-sm mt-1">at 12% p.a. for 15 years</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                <div className="bg-warm-50 rounded-xl p-4">
                  <p className="text-xs text-charcoal-500 mb-1">Invested</p>
                  <p className="text-lg font-bold text-charcoal-800">₹18L</p>
                </div>
                <div className="bg-brand-50 rounded-xl p-4">
                  <p className="text-xs text-charcoal-500 mb-1">Returns</p>
                  <p className="text-lg font-bold text-brand">₹32.3L</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs text-charcoal-500 mb-1">Total Value</p>
                  <p className="text-lg font-bold text-green-700">₹50.3L</p>
                </div>
              </div>
              {/* Simple bar chart */}
              <div className="flex items-end gap-2 h-20">
                {[18, 25, 33, 43, 50].map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-md transition-all"
                      style={{
                        height: `${(v / 50) * 80}px`,
                        background: i === 4 ? '#C15330' : '#FDE0D2',
                      }}
                    />
                    <span className="text-[10px] text-charcoal-400">{3 * (i + 1)}yr</span>
                  </div>
                ))}
              </div>
              <Link href="/sip-calculator" className="mt-6 block text-center text-brand text-sm font-semibold hover:underline">
                Try with your numbers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">Our Promise</p>
            <h2 className="section-heading">Why Investors Trust Pavitra</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="card text-center hover:-translate-y-1 transition-transform">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-charcoal-800 mb-2">{item.title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live NAV Banner ── */}
      <section className="py-16 bg-white border-y border-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-600 text-sm font-semibold">Live Data</span>
            </div>
            <h3 className="text-2xl font-bold text-charcoal-800">Track Mutual Fund NAVs in Real Time</h3>
            <p className="text-charcoal-500 mt-1">Search across 2000+ schemes. View weekly, monthly, and yearly trends.</p>
          </div>
          <Link href="/mutual-funds" className="btn-outline-brand shrink-0">
            Open NAV Tracker →
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cta-gradient py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="text-brand-100 text-lg mb-10">
            Talk to our advisors today. No obligations, no pressure — just honest guidance tailored to your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-brand hover:bg-brand-50 font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl">
              Book a Free Consultation
            </Link>
            <Link href="/investwell" className="btn-outline px-8 py-3.5">
              Investor Login
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
