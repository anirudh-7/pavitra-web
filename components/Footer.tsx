import Link from 'next/link'
import LogoImage from '@/components/LogoImage'

const services = [
  { label: 'Mutual Funds', href: '/mutual-funds' },
  { label: 'SIP Investments', href: '/sip-calculator' },
  { label: 'Fixed Deposits', href: '/about#services' },
  { label: 'Stock Broking', href: '/about#services' },
  { label: 'Tax Planning', href: '/tax-saving' },
  { label: 'Portfolio Advisory', href: '/about#services' },
]

const tools = [
  { label: 'SIP Calculator', href: '/sip-calculator' },
  { label: 'Lumpsum Calculator', href: '/sip-calculator' },
  { label: 'Goal Planner', href: '/sip-calculator' },
  { label: 'Live NAV Tracker', href: '/mutual-funds' },
  { label: 'Tax Saving Plans', href: '/tax-saving' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10 bg-white rounded-md p-1">
                <LogoImage fill className="object-contain p-0.5" />
              </div>
              <div>
                <p className="text-white font-bold text-base tracking-wide">PAVITRA</p>
                <p className="text-charcoal-400 text-[10px] tracking-widest uppercase">Redefining Services</p>
              </div>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-4">
              Pavitra Securities and Services Pvt. Ltd. — your trusted financial partner since 1995.
              SEBI registered investment advisory helping families grow wealth responsibly.
            </p>
            <div className="flex items-center gap-2 text-xs text-charcoal-500">
              <span className="inline-flex items-center gap-1.5 bg-charcoal-800 px-3 py-1.5 rounded-full">
                <svg className="w-3 h-3 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SEBI Registered
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-charcoal-400 text-sm hover:text-brand transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Tools</h4>
            <ul className="space-y-2.5">
              {tools.map((t) => (
                <li key={t.label}>
                  <Link
                    href={t.href}
                    className="text-charcoal-400 text-sm hover:text-brand transition-colors"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-charcoal-400">
              <li className="flex gap-2.5">
                <svg className="w-4 h-4 text-brand mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex gap-2.5">
                <svg className="w-4 h-4 text-brand mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@pgsl.in" className="hover:text-brand transition-colors">info@pgsl.in</a>
              </li>
              <li className="flex gap-2.5">
                <svg className="w-4 h-4 text-brand mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+91XXXXXXXXXX" className="hover:text-brand transition-colors">+91 XX XXXX XXXX</a>
              </li>
            </ul>

            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-lg transition-colors"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-500">
          <p>© {new Date().getFullYear()} Pavitra Securities and Services Pvt. Ltd. All rights reserved.</p>
          <p className="text-center">
            Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-charcoal-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-charcoal-300 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
