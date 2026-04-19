import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About Us' }

const services = [
  {
    id: 'services',
    icon: '📈', title: 'SIP & Mutual Funds',
    desc: 'Systematic Investment Plans and mutual fund advisory across 40+ AMCs. We help you select the right scheme based on your risk profile and financial goals.',
  },
  {
    icon: '🏦', title: 'Fixed Deposits',
    desc: 'FD advisory across top PSU banks, private banks, and high-rated NBFCs. We compare rates and help you ladder deposits for optimal liquidity and returns.',
  },
  {
    icon: '📊', title: 'Stock Broking',
    desc: 'Trading and investment in equities, derivatives, F&O, and commodities on NSE and BSE. Research-backed recommendations for long-term wealth building.',
  },
  {
    icon: '🛡️', title: 'Insurance Planning',
    desc: 'Term life, health, and general insurance advisory. Ensure comprehensive protection for your family and assets before building your investment portfolio.',
  },
  {
    icon: '🎯', title: 'Tax Planning',
    desc: 'End-to-end tax planning — ELSS, NPS, PPF, and beyond. We help you legally minimize your tax outgo while aligning investments to your financial goals.',
  },
  {
    icon: '💼', title: 'Portfolio Advisory',
    desc: 'Holistic portfolio review, rebalancing, and consolidation. Regular check-ins to ensure your investments stay aligned with your evolving life goals.',
  },
]

const milestones = [
  { year: '1995', event: 'Founded in Mumbai by first-generation entrepreneur' },
  { year: '2002', event: 'Registered as AMFI Mutual Fund Distributor' },
  { year: '2008', event: 'Expanded to stock broking on NSE & BSE' },
  { year: '2015', event: 'Crossed 5,000 investor families' },
  { year: '2019', event: 'Launched digital portfolio tracking for clients' },
  { year: '2023', event: 'AUM crossed ₹500 Crore milestone' },
  { year: '2024', event: 'Launched pgsl.in — dedicated investor portal' },
]

const team = [
  { name: 'Founder & Director', role: 'Investment Strategy & Client Advisory', initials: 'P', yoe: '30+' },
  { name: 'Head of Research', role: 'Equity & Mutual Fund Research', initials: 'R', yoe: '15+' },
  { name: 'Client Relations', role: 'Investor Onboarding & Service', initials: 'A', yoe: '10+' },
]

const values = [
  { icon: '🤝', title: 'Client First', desc: 'Every recommendation is driven by what is best for our clients — not commissions or quotas.' },
  { icon: '🔍', title: 'Transparency', desc: 'Full disclosure of fees, risks, and conflicts of interest. No hidden charges, ever.' },
  { icon: '📚', title: 'Education', desc: 'We believe informed investors make better decisions. We teach while we advise.' },
  { icon: '⏱️', title: 'Long-term View', desc: 'We focus on sustainable wealth creation, not short-term gains or speculative tips.' },
]

export default function AboutPage() {
  return (
    <div className="pt-16 bg-warm-50 min-h-screen">
      {/* Header */}
      <div className="bg-hero-gradient py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-widest mb-2">Our Story</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">About Pavitra Securities</h1>
          <p className="mt-4 text-charcoal-300 text-lg max-w-2xl mx-auto">
            Three decades of trusted financial guidance, built on integrity, expertise, and genuine care for investor outcomes.
          </p>
        </div>
      </div>

      {/* About intro */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="section-heading mb-5">Pavitra Securities and Services Pvt. Ltd.</h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                Founded in Mumbai in 1995, Pavitra Securities and Services Pvt. Ltd. has been helping Indian families
                navigate the world of financial investments for nearly three decades. What started as a focused mutual
                fund distribution practice has grown into a comprehensive financial services firm.
              </p>
              <p>
                We serve retail investors, high-net-worth individuals (HNIs), and corporate clients across mutual funds,
                SIPs, fixed deposits, equities, tax planning, and insurance. Our philosophy is simple: understand the
                client deeply before recommending anything.
              </p>
              <p>
                With a SEBI-registered advisory team and memberships with NSE, BSE, and AMFI, every interaction with
                us is backed by regulatory compliance, research, and responsibility.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: '30+', label: 'Years in Business', icon: '🏛️' },
              { value: '₹500Cr+', label: 'Assets Under Management', icon: '💰' },
              { value: '10,000+', label: 'Investor Families', icon: '👨‍👩‍👧‍👦' },
              { value: '40+', label: 'AMC Tie-ups', icon: '🤝' },
            ].map((s) => (
              <div key={s.label} className="card text-center hover:-translate-y-1 transition-transform">
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-2xl font-bold text-brand">{s.value}</p>
                <p className="text-xs text-charcoal-500 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="section-heading">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="card hover:-translate-y-1 transition-transform">
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="font-semibold text-charcoal-800 mb-2">{svc.title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">Our Philosophy</p>
            <h2 className="section-heading">What Guides Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card text-center hover:-translate-y-1 transition-transform">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-charcoal-800 mb-2">{v.title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="section-heading">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-charcoal-100" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 z-10 text-xs font-bold shadow-card ${
                    i === milestones.length - 1 ? 'bg-brand text-white' : 'bg-white text-brand border-2 border-brand-100'
                  }`}>
                    {m.year}
                  </div>
                  <div className="card flex-1 py-4 px-5">
                    <p className="text-charcoal-700 text-sm font-medium">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">Our People</p>
            <h2 className="section-heading">The Team Behind Pavitra</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Experienced professionals with decades of combined expertise in financial markets and client advisory.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.role} className="card text-center hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {member.initials}
                </div>
                <p className="font-semibold text-charcoal-800">{member.name}</p>
                <p className="text-xs text-charcoal-500 mt-0.5 mb-3">{member.role}</p>
                <span className="bg-brand-50 text-brand text-xs px-3 py-1 rounded-full font-medium">
                  {member.yoe} yrs experience
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations */}
      <section className="py-12 bg-white border-t border-charcoal-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-semibold text-charcoal-600 text-sm uppercase tracking-widest mb-8">
            Regulatory Memberships & Registrations
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['SEBI Registered', 'NSE Member', 'BSE Member', 'AMFI ARN Holder', 'CDSL DP', 'IRDAI Licensed'].map((r) => (
              <div key={r} className="flex items-center gap-2 bg-charcoal-50 border border-charcoal-100 rounded-full px-5 py-2.5 text-sm font-medium text-charcoal-700">
                <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta-gradient py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let&apos;s Build Your Financial Future Together</h2>
          <p className="text-brand-100 mb-8">
            30 years of expertise, now working for your goals. Reach out for a free consultation.
          </p>
          <Link href="/contact" className="bg-white text-brand hover:bg-brand-50 font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
