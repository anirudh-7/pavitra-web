'use client'

import { useState, useCallback, useRef } from 'react'

// ── Types ────────────────────────────────────────────────────────────────────

interface SearchResult {
  schemeCode: number
  schemeName: string
}

interface NavPoint {
  date: string   // "DD-MM-YYYY"
  nav: string
}

interface FundData {
  meta: {
    fund_house: string
    scheme_type: string
    scheme_category: string
    scheme_code: number
    scheme_name: string
  }
  data: NavPoint[]
}

interface FundRow {
  schemeCode: number
  schemeName: string
  fundHouse: string
  category: string
  currentNav: number
  prevWeekNav: number | null
  prev1mNav: number | null
  prev1yNav: number | null
  recentData: number[]   // last 20 NAV values for sparkline
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function pctChange(current: number, past: number | null): number | null {
  if (past == null || past === 0) return null
  return ((current - past) / past) * 100
}

function fmtPct(p: number | null) {
  if (p == null) return '—'
  const sign = p >= 0 ? '+' : ''
  return `${sign}${p.toFixed(2)}%`
}

function pctColor(p: number | null) {
  if (p == null) return 'text-charcoal-400'
  return p >= 0 ? 'text-green-600' : 'text-red-500'
}

// Sparkline SVG from array of nav values
function Sparkline({ values, positive }: { values: number[]; positive: boolean }) {
  if (values.length < 2) return <span className="text-xs text-charcoal-300">—</span>
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  const w = 64
  const h = 24
  const pts = values
    .map((v, i) => `${(i / (values.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(' ')
  return (
    <svg width={w} height={h} className="overflow-visible">
      <polyline
        points={pts}
        fill="none"
        stroke={positive ? '#16a34a' : '#ef4444'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Popular fund suggestions ──────────────────────────────────────────────────

const SUGGESTIONS = [
  'HDFC Top 100', 'SBI Bluechip', 'Axis Bluechip', 'Mirae Asset Large Cap',
  'ICICI Prudential', 'Kotak Flexi Cap', 'Aditya Birla Sun Life', 'Nippon India',
]

// ── Main Component ───────────────────────────────────────────────────────────

export default function MutualFundsPage() {
  const [query, setQuery]               = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [funds, setFunds]               = useState<FundRow[]>([])
  const [loadingFund, setLoadingFund]   = useState(false)
  const [searchError, setSearchError]   = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const searchFunds = useCallback(async (q: string) => {
    if (q.trim().length < 2) { setSearchResults([]); return }
    setLoadingSearch(true)
    setSearchError('')
    try {
      const res = await fetch(`/api/mf/search?q=${encodeURIComponent(q.trim())}`)
      const data: SearchResult[] = await res.json()
      setSearchResults(Array.isArray(data) ? data.slice(0, 15) : [])
      setShowDropdown(true)
    } catch {
      setSearchError('Search failed. Please try again.')
    } finally {
      setLoadingSearch(false)
    }
  }, [])

  const handleQueryChange = (v: string) => {
    setQuery(v)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => searchFunds(v), 350)
  }

  const addFund = async (sr: SearchResult) => {
    setShowDropdown(false)
    setQuery('')
    setSearchResults([])
    if (funds.find((f) => f.schemeCode === sr.schemeCode)) return
    setLoadingFund(true)
    try {
      const res = await fetch(`/api/mf/${sr.schemeCode}`)
      const fd: FundData = await res.json()
      if (!fd.data || fd.data.length === 0) return

      const navs = fd.data.map((d) => parseFloat(d.nav))
      const row: FundRow = {
        schemeCode: sr.schemeCode,
        schemeName: fd.meta.scheme_name,
        fundHouse: fd.meta.fund_house,
        category: fd.meta.scheme_category,
        currentNav: navs[0],
        prevWeekNav: navs[5] ?? null,
        prev1mNav: navs[22] ?? null,
        prev1yNav: navs[252] ?? null,
        recentData: navs.slice(0, 20).reverse(),
      }
      setFunds((prev) => [row, ...prev])
    } catch {
      setSearchError('Failed to load fund data.')
    } finally {
      setLoadingFund(false)
    }
  }

  const removeFund = (code: number) => setFunds((prev) => prev.filter((f) => f.schemeCode !== code))

  return (
    <div className="pt-16 bg-warm-50 min-h-screen">
      {/* Header */}
      <div className="bg-hero-gradient py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-semibold">Live NAV Data</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Mutual Fund NAV Tracker</h1>
          <p className="mt-3 text-charcoal-300 text-lg">
            Search any mutual fund scheme to view current NAV, weekly and yearly performance trends.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search bar */}
        <div className="card mb-8">
          <label className="label text-base mb-3">Search Mutual Fund Scheme</label>
          <div className="relative">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                onFocus={() => searchResults.length > 0 && setShowDropdown(true)}
                placeholder="e.g. HDFC Top 100, Axis Bluechip, SBI Small Cap..."
                className="input-field pl-12 pr-4"
              />
              {loadingSearch && (
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand animate-spin"
                  fill="none" viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
            </div>

            {/* Dropdown */}
            {showDropdown && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-charcoal-200 rounded-xl shadow-card-hover z-20 max-h-72 overflow-y-auto">
                {searchResults.map((sr) => (
                  <button
                    key={sr.schemeCode}
                    onClick={() => addFund(sr)}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-brand-50 hover:text-brand transition-colors border-b border-charcoal-50 last:border-0"
                  >
                    <p className="font-medium">{sr.schemeName}</p>
                    <p className="text-xs text-charcoal-400 mt-0.5">Scheme Code: {sr.schemeCode}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Suggestions */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs text-charcoal-400 mt-1">Popular:</span>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => { setQuery(s); handleQueryChange(s) }}
                className="text-xs bg-charcoal-50 hover:bg-brand-50 hover:text-brand text-charcoal-600 px-3 py-1.5 rounded-full transition-colors border border-charcoal-100"
              >
                {s}
              </button>
            ))}
          </div>

          {searchError && (
            <p className="mt-3 text-red-500 text-sm">{searchError}</p>
          )}
          {loadingFund && (
            <p className="mt-3 text-brand text-sm flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading fund data…
            </p>
          )}
        </div>

        {/* Empty state */}
        {funds.length === 0 && (
          <div className="card text-center py-16">
            <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-charcoal-700 mb-2">Search for a fund to get started</h3>
            <p className="text-charcoal-400 text-sm">Type a fund name above to see its live NAV and performance.</p>
          </div>
        )}

        {/* NAV Table */}
        {funds.length > 0 && (
          <div className="card p-0 overflow-hidden">
            <div className="px-6 py-4 border-b border-charcoal-100 flex items-center justify-between">
              <h2 className="font-semibold text-charcoal-800">Tracked Funds ({funds.length})</h2>
              <button
                onClick={() => setFunds([])}
                className="text-xs text-charcoal-400 hover:text-red-500 transition-colors"
              >
                Clear all
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-charcoal-50 border-b border-charcoal-100">
                  <tr>
                    {['Fund Name', 'Current NAV', '1W Change', '1M Change', '1Y Change', 'Trend (20d)', ''].map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-semibold text-charcoal-600 text-xs uppercase tracking-wide whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal-50">
                  {funds.map((f) => {
                    const w = pctChange(f.currentNav, f.prevWeekNav)
                    const m = pctChange(f.currentNav, f.prev1mNav)
                    const y = pctChange(f.currentNav, f.prev1yNav)
                    const trend1y = y != null ? y >= 0 : true
                    return (
                      <tr key={f.schemeCode} className="hover:bg-warm-50 transition-colors">
                        <td className="px-4 py-4 min-w-[200px]">
                          <p className="font-medium text-charcoal-800 leading-snug line-clamp-2">{f.schemeName}</p>
                          <p className="text-xs text-charcoal-400 mt-0.5">{f.fundHouse}</p>
                          <span className="tag bg-charcoal-100 text-charcoal-600 text-[10px] mt-1">{f.category}</span>
                        </td>
                        <td className="px-4 py-4 font-semibold text-charcoal-800 whitespace-nowrap">
                          ₹{f.currentNav.toFixed(4)}
                        </td>
                        <td className={`px-4 py-4 font-medium whitespace-nowrap ${pctColor(w)}`}>{fmtPct(w)}</td>
                        <td className={`px-4 py-4 font-medium whitespace-nowrap ${pctColor(m)}`}>{fmtPct(m)}</td>
                        <td className={`px-4 py-4 font-medium whitespace-nowrap ${pctColor(y)}`}>{fmtPct(y)}</td>
                        <td className="px-4 py-4">
                          <Sparkline values={f.recentData} positive={trend1y} />
                        </td>
                        <td className="px-4 py-4">
                          <button
                            onClick={() => removeFund(f.schemeCode)}
                            className="text-charcoal-300 hover:text-red-500 transition-colors"
                            title="Remove"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 bg-charcoal-50 border-t border-charcoal-100">
              <p className="text-xs text-charcoal-400">
                Data sourced from MFAPI.in · NAV as of latest trading day · Past performance is not indicative of future returns
              </p>
            </div>
          </div>
        )}

        {/* Info section */}
        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {[
            { title: 'What is NAV?', text: 'Net Asset Value (NAV) is the per-unit market value of a mutual fund scheme. It is calculated at the end of each trading day based on the closing prices of the securities held.' },
            { title: 'How to Read Trends?', text: 'Green indicates the fund has grown over the selected period. Red indicates a decline. The sparkline shows the fund\'s 20-day price movement trajectory.' },
            { title: 'Disclaimer', text: 'NAV data is sourced from MFAPI.in and is for informational purposes only. Investments carry market risk. Consult a SEBI-registered advisor before investing.' },
          ].map((c) => (
            <div key={c.title} className="card border border-charcoal-100">
              <h4 className="font-semibold text-charcoal-800 mb-2">{c.title}</h4>
              <p className="text-charcoal-500 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
