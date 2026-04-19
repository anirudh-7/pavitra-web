'use client'

import { useState } from 'react'

// ⚠️  Replace this URL with your actual InvestWell portal URL
const INVESTWELL_URL = 'https://your-portal.investwell.app'

export default function InvestWellPage() {
  const [iframeError, setIframeError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="pt-16 bg-warm-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-hero-gradient py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-5 h-5 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-brand-light text-sm font-semibold">Secure Login</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Investor Portal</h1>
          <p className="mt-3 text-charcoal-300">
            Access your investment portfolio, transaction history, and reports via InvestWell.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1 flex flex-col">
        {/* Info bar */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {[
            { icon: '🔒', text: '256-bit SSL encryption' },
            { icon: '🛡️', text: 'SEBI compliant platform' },
            { icon: '📊', text: 'Real-time portfolio tracking' },
            { icon: '📄', text: 'Download statements & reports' },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2 bg-white border border-charcoal-100 rounded-lg px-4 py-2 text-sm text-charcoal-600 shadow-card">
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>

        {/* Portal iframe */}
        {!iframeError ? (
          <div className="flex-1 bg-white rounded-2xl shadow-card-hover overflow-hidden border border-charcoal-100 relative"
            style={{ minHeight: '70vh' }}>
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-warm-50 z-10">
                <svg className="w-10 h-10 text-brand animate-spin mb-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <p className="text-charcoal-500 text-sm">Loading Investor Portal…</p>
              </div>
            )}
            <iframe
              src={INVESTWELL_URL}
              className="w-full h-full"
              style={{ minHeight: '70vh' }}
              title="InvestWell Investor Portal"
              onLoad={() => setLoaded(true)}
              onError={() => setIframeError(true)}
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
              allow="fullscreen"
            />
          </div>
        ) : (
          /* Fallback when iframe can't load */
          <div className="flex-1 flex items-center justify-center">
            <div className="card max-w-md w-full text-center py-12">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal-800 mb-3">Open Investor Portal</h3>
              <p className="text-charcoal-500 text-sm mb-6">
                The portal could not load inline. Click below to open it securely in a new tab.
              </p>
              <a
                href={INVESTWELL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Open Portal
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="mt-5 text-xs text-charcoal-400">
                You will be redirected to the secure InvestWell platform.
              </p>
            </div>
          </div>
        )}

        {/* Open in new tab link */}
        {!iframeError && (
          <div className="text-center mt-4">
            <a
              href={INVESTWELL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-charcoal-400 hover:text-brand transition-colors inline-flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in new tab
            </a>
          </div>
        )}

        <p className="text-xs text-charcoal-400 text-center mt-6">
          Having trouble logging in? Contact us at{' '}
          <a href="mailto:info@pgsl.in" className="text-brand hover:underline">info@pgsl.in</a>
        </p>
      </div>
    </div>
  )
}
