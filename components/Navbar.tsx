'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import LogoImage from '@/components/LogoImage'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#',
    dropdown: [
      { label: 'Mutual Funds', href: '/mutual-funds' },
      { label: 'SIP Investments', href: '/sip-calculator' },
      { label: 'Fixed Deposits', href: '/about#services' },
      { label: 'Stock Broking', href: '/about#services' },
      { label: 'Tax Planning', href: '/tax-saving' },
    ],
  },
  { label: 'SIP Calculator', href: '/sip-calculator' },
  { label: 'Live NAV', href: '/mutual-funds' },
  { label: 'Tax Saving', href: '/tax-saving' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white shadow-nav'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-10 w-10">
              <LogoImage fill className="object-contain" />
            </div>
            <div className="leading-tight">
              <p className="text-brand font-bold text-lg tracking-wide leading-none">PAVITRA</p>
              <p className="text-charcoal-500 text-[10px] font-medium tracking-widest uppercase">
                Redefining Services
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal-700 hover:text-brand rounded-md transition-colors">
                    {link.label}
                    <svg className="w-4 h-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-card-hover border border-charcoal-100 py-2 animate-fade-in">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-charcoal-700 hover:bg-brand-50 hover:text-brand transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === link.href
                      ? 'text-brand bg-brand-50'
                      : 'text-charcoal-700 hover:text-brand hover:bg-brand-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Investor Portal CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/investwell" className="btn-primary text-sm py-2 px-5">
              Investor Portal
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-charcoal-700 hover:bg-charcoal-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-charcoal-100 px-4 py-4 space-y-1 shadow-nav animate-fade-in">
          {navLinks
            .filter((l) => !l.dropdown)
            .map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-brand-50 text-brand'
                    : 'text-charcoal-700 hover:bg-charcoal-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          <div className="pt-2">
            <Link href="/investwell" className="btn-primary block text-center text-sm">
              Investor Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
