import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Tax Saving Plans' }

const instruments = [
  {
    id: 'elss',
    icon: '📈',
    name: 'ELSS Mutual Funds',
    section: 'Sec 80C',
    maxDeduction: '₹1.5 Lakh',
    lockIn: '3 years',
    returns: '12–18% p.a. (market-linked)',
    risk: 'Medium–High',
    riskColor: 'bg-orange-50 text-orange-700',
    highlights: [
      'Shortest lock-in among 80C instruments',
      'Market-linked returns — highest growth potential',
      'SIP mode available — invest as low as ₹500/mo',
      'Dual benefit: tax saving + wealth creation',
    ],
    cta: '/sip-calculator',
    ctaLabel: 'Calculate ELSS Returns',
    featured: true,
  },
  {
    id: 'ppf',
    icon: '🏦',
    name: 'Public Provident Fund (PPF)',
    section: 'Sec 80C',
    maxDeduction: '₹1.5 Lakh',
    lockIn: '15 years',
    returns: '7.1% p.a. (tax-free)',
    risk: 'No Risk',
    riskColor: 'bg-green-50 text-green-700',
    highlights: [
      'Fully backed by Government of India',
      'Interest is completely tax-free',
      'Partial withdrawal after 7 years',
      'Loan facility available from 3rd year',
    ],
    cta: '/contact',
    ctaLabel: 'Enquire Now',
    featured: false,
  },
  {
    id: 'nps',
    icon: '🎯',
    name: 'National Pension System (NPS)',
    section: 'Sec 80C + 80CCD(1B)',
    maxDeduction: '₹2 Lakh',
    lockIn: 'Until 60 yrs',
    returns: '9–12% p.a. (market-linked)',
    risk: 'Low–Medium',
    riskColor: 'bg-blue-50 text-blue-700',
    highlights: [
      'Additional ₹50,000 deduction under 80CCD(1B)',
      'Government employees get employer contribution too',
      'Choice of fund managers and asset allocation',
      'Regular pension income post retirement',
    ],
    cta: '/contact',
    ctaLabel: 'Learn More',
    featured: false,
  },
  {
    id: 'fd',
    icon: '🏛️',
    name: 'Tax Saving Fixed Deposit',
    section: 'Sec 80C',
    maxDeduction: '₹1.5 Lakh',
    lockIn: '5 years',
    returns: '6.5–7.5% p.a.',
    risk: 'No Risk',
    riskColor: 'bg-green-50 text-green-700',
    highlights: [
      'Capital guaranteed — no market risk',
      'Available in all major banks',
      'Senior citizens get 0.5% extra rate',
      'Interest is taxable as per income slab',
    ],
    cta: '/contact',
    ctaLabel: 'Check FD Rates',
    featured: false,
  },
  {
    id: 'ulip',
    icon: '🛡️',
    name: 'ULIP (Unit Linked Plans)',
    section: 'Sec 80C',
    maxDeduction: '₹1.5 Lakh',
    lockIn: '5 years',
    returns: '8–14% p.a. (market-linked)',
    risk: 'Medium',
    riskColor: 'bg-yellow-50 text-yellow-700',
    highlights: [
      'Combined insurance + investment product',
      'Switch between equity and debt funds',
      'Maturity proceeds are tax-free (Sec 10(10D))',
      'Life cover provides family protection',
    ],
    cta: '/contact',
    ctaLabel: 'Explore ULIPs',
    featured: false,
  },
  {
    id: 'ssy',
    icon: '👧',
    name: 'Sukanya Samriddhi Yojana',
    section: 'Sec 80C',
    maxDeduction: '₹1.5 Lakh',
    lockIn: 'Until girl turns 21',
    returns: '8.2% p.a. (tax-free)',
    risk: 'No Risk',
    riskColor: 'bg-green-50 text-green-700',
    highlights: [
      'Highest interest rate among small savings schemes',
      'Only for parents/guardians of girl child (up to age 10)',
      'Maturity proceeds are fully tax-exempt',
      'Partial withdrawal allowed after girl turns 18',
    ],
    cta: '/contact',
    ctaLabel: 'Open Account',
    featured: false,
  },
]

const deductionSections = [
  { section: 'Section 80C', limit: '₹1,50,000', instruments: 'ELSS, PPF, Tax Saving FD, NSC, ULIP, Life Insurance Premium, Home Loan Principal, SSY' },
  { section: 'Section 80D', limit: '₹25,000 – ₹50,000', instruments: 'Health Insurance Premiums (self, family, parents)' },
  { section: 'Section 80CCD(1B)', limit: '₹50,000', instruments: 'NPS additional contribution (over and above 80C limit)' },
  { section: 'Section 80E', limit: 'No limit', instruments: 'Interest on Education Loan (up to 8 years)' },
  { section: 'Section 24(b)', limit: '₹2,00,000', instruments: 'Home Loan Interest (self-occupied property)' },
]

export default function TaxSavingPage() {
  return (
    <div className="pt-16 bg-warm-50 min-h-screen">
      {/* Header */}
      <div className="bg-hero-gradient py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-widest mb-2">Save Smarter</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Tax Saving Plans</h1>
          <p className="mt-3 text-charcoal-300 text-lg max-w-2xl mx-auto">
            Reduce your tax liability while building wealth. Save up to ₹46,800 in taxes every year through smart investments.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tax saving banner */}
        <div className="card bg-gradient-to-r from-charcoal-800 to-charcoal-700 text-white mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-7">
          <div>
            <h2 className="text-2xl font-bold mb-1">You can save up to ₹46,800 in taxes</h2>
            <p className="text-charcoal-300 text-sm">
              By fully utilising Sec 80C (₹1.5L) + 80CCD(1B) (₹50K) + 80D (₹25K) deductions at the 30% tax slab.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Get Tax Advice
          </Link>
        </div>

        {/* Instruments grid */}
        <h2 className="section-heading mb-2">Tax-Saving Investment Options</h2>
        <p className="text-charcoal-500 mb-8">Choose the right mix based on your risk appetite, liquidity needs, and financial goals.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instruments.map((inst) => (
            <div
              key={inst.id}
              className={`card border-2 transition-all hover:-translate-y-1 flex flex-col ${
                inst.featured ? 'border-brand shadow-card-hover' : 'border-transparent'
              }`}
            >
              {inst.featured && (
                <div className="mb-3 -mt-2">
                  <span className="bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Most Recommended
                  </span>
                </div>
              )}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{inst.icon}</span>
                <span className={`tag text-xs ${inst.riskColor}`}>{inst.risk}</span>
              </div>

              <h3 className="font-bold text-charcoal-800 text-lg mb-1">{inst.name}</h3>
              <span className="inline-block bg-charcoal-100 text-charcoal-600 text-xs px-2 py-0.5 rounded mb-3">{inst.section}</span>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-warm-50 rounded-lg p-2.5">
                  <p className="text-xs text-charcoal-400 mb-0.5">Max Deduction</p>
                  <p className="font-semibold text-charcoal-800 text-xs">{inst.maxDeduction}</p>
                </div>
                <div className="bg-warm-50 rounded-lg p-2.5">
                  <p className="text-xs text-charcoal-400 mb-0.5">Lock-in</p>
                  <p className="font-semibold text-charcoal-800 text-xs">{inst.lockIn}</p>
                </div>
                <div className="bg-brand-50 rounded-lg p-2.5 col-span-2">
                  <p className="text-xs text-charcoal-400 mb-0.5">Expected Returns</p>
                  <p className="font-semibold text-brand text-xs">{inst.returns}</p>
                </div>
              </div>

              <ul className="space-y-1.5 flex-1 mb-5">
                {inst.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-charcoal-600">
                    <svg className="w-3.5 h-3.5 text-brand mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              <Link href={inst.cta} className="btn-outline-brand text-sm text-center py-2.5">
                {inst.ctaLabel}
              </Link>
            </div>
          ))}
        </div>

        {/* Deductions table */}
        <h2 className="section-heading mb-6">Key Tax Deduction Sections (FY 2024–25)</h2>
        <div className="card p-0 overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-charcoal-50 border-b border-charcoal-100">
                <tr>
                  {['Section', 'Max Deduction', 'Eligible Instruments'].map((h) => (
                    <th key={h} className="px-5 py-3.5 text-left font-semibold text-charcoal-600 text-xs uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-50">
                {deductionSections.map((row) => (
                  <tr key={row.section} className="hover:bg-warm-50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-brand whitespace-nowrap">{row.section}</td>
                    <td className="px-5 py-4 font-medium text-charcoal-800 whitespace-nowrap">{row.limit}</td>
                    <td className="px-5 py-4 text-charcoal-600">{row.instruments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="card bg-cta-gradient text-white text-center py-12">
          <h3 className="text-2xl font-bold mb-3">Not sure which tax-saving option suits you?</h3>
          <p className="text-brand-100 mb-7 max-w-xl mx-auto">
            Our advisors will analyse your income, existing investments, and goals to recommend the best tax-saving strategy.
          </p>
          <Link href="/contact" className="bg-white text-brand hover:bg-brand-50 font-semibold px-8 py-3 rounded-lg transition-all inline-block shadow-lg">
            Talk to an Advisor
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-charcoal-400 mt-8 text-center">
          * Tax benefits are subject to conditions and may change as per Income Tax Act. Please consult a CA or tax advisor for personalised advice. Mutual fund returns are market-linked and not guaranteed.
        </p>
      </div>
    </div>
  )
}
