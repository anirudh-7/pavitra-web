'use client'

import { useState, useMemo } from 'react'
import type { Metadata } from 'next'

// ── Calculation helpers ──────────────────────────────────────────────────────

function calcSIP(monthly: number, annualRate: number, years: number) {
  const i = annualRate / 100 / 12
  const n = years * 12
  if (i === 0) return { maturity: monthly * n, invested: monthly * n, gains: 0 }
  const maturity = monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
  const invested = monthly * n
  return { maturity, invested, gains: maturity - invested }
}

function calcLumpsum(principal: number, annualRate: number, years: number) {
  const maturity = principal * Math.pow(1 + annualRate / 100, years)
  return { maturity, invested: principal, gains: maturity - principal }
}

function calcGoal(target: number, annualRate: number, years: number) {
  const i = annualRate / 100 / 12
  const n = years * 12
  if (i === 0) return { monthly: target / n, invested: target, gains: 0, maturity: target }
  const monthly = (target * i) / ((Math.pow(1 + i, n) - 1) * (1 + i))
  const invested = monthly * n
  return { monthly, invested, gains: target - invested, maturity: target }
}

function calcInflation(monthly: number, annualRate: number, inflation: number, years: number) {
  const realRate = ((1 + annualRate / 100) / (1 + inflation / 100) - 1) * 100
  return calcSIP(monthly, realRate, years)
}

// ── Format helpers ──────────────────────────────────────────────────────────

function fmt(n: number) {
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`
  if (n >= 1_00_000)    return `₹${(n / 1_00_000).toFixed(2)} L`
  return `₹${Math.round(n).toLocaleString('en-IN')}`
}

// ── Donut Chart ─────────────────────────────────────────────────────────────

function DonutChart({ invested, gains }: { invested: number; gains: number }) {
  const total = invested + gains
  if (total <= 0) return null
  const r = 70
  const cx = 90
  const cy = 90
  const circ = 2 * Math.PI * r
  const investedFrac = invested / total
  const gainsFrac = gains / total

  const arc = (frac: number, offset: number) => ({
    strokeDasharray: `${frac * circ} ${circ}`,
    strokeDashoffset: -offset * circ,
  })

  return (
    <div className="flex flex-col items-center">
      <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
        {/* background */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F5F1EB" strokeWidth="22" />
        {/* gains */}
        <circle
          cx={cx} cy={cy} r={r} fill="none"
          stroke="#C15330" strokeWidth="22"
          strokeLinecap="round"
          style={arc(gainsFrac, investedFrac)}
          className="transition-all duration-700"
        />
        {/* invested */}
        <circle
          cx={cx} cy={cy} r={r} fill="none"
          stroke="#FDE0D2" strokeWidth="22"
          style={arc(investedFrac, 0)}
          className="transition-all duration-700"
        />
      </svg>
      <div className="mt-4 flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-brand-100 inline-block" />
          <span className="text-charcoal-600">Invested</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-brand inline-block" />
          <span className="text-charcoal-600">Est. Returns</span>
        </div>
      </div>
    </div>
  )
}

// ── Slider Input ─────────────────────────────────────────────────────────────

function SliderInput({
  label, value, min, max, step, unit, prefix, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number;
  unit?: string; prefix?: string; onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <label className="label mb-0">{label}</label>
        <div className="flex items-center gap-1 bg-warm-50 border border-charcoal-100 rounded-lg px-3 py-1.5">
          <span className="text-charcoal-500 text-sm">{prefix}</span>
          <input
            type="number" value={value} min={min} max={max} step={step}
            onChange={(e) => onChange(Math.min(max, Math.max(min, Number(e.target.value))))}
            className="w-24 text-right text-sm font-semibold text-charcoal-800 bg-transparent outline-none"
          />
          <span className="text-charcoal-500 text-sm">{unit}</span>
        </div>
      </div>
      <input
        type="range" value={value} min={min} max={max} step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-brand"
      />
      <div className="flex justify-between text-xs text-charcoal-400 mt-1">
        <span>{prefix}{min.toLocaleString('en-IN')}{unit}</span>
        <span>{prefix}{max.toLocaleString('en-IN')}{unit}</span>
      </div>
    </div>
  )
}

// ── Tab ──────────────────────────────────────────────────────────────────────

type Tab = 'sip' | 'lumpsum' | 'goal' | 'inflation'

const tabs: { id: Tab; label: string; desc: string }[] = [
  { id: 'sip',       label: 'SIP Returns',        desc: 'Monthly investment growth' },
  { id: 'lumpsum',   label: 'Lumpsum',             desc: 'One-time investment' },
  { id: 'goal',      label: 'Goal Planner',        desc: 'How much to invest' },
  { id: 'inflation', label: 'Inflation Adjusted',  desc: 'Real returns' },
]

// ── Year Breakdown Table ─────────────────────────────────────────────────────

function YearTable({ monthly, annualRate, years }: { monthly: number; annualRate: number; years: number }) {
  const rows = useMemo(() => {
    return Array.from({ length: Math.min(years, 20) }, (_, i) => {
      const yr = i + 1
      const { maturity, invested } = calcSIP(monthly, annualRate, yr)
      return { yr, invested, maturity, gains: maturity - invested }
    })
  }, [monthly, annualRate, years])

  return (
    <div className="overflow-x-auto rounded-xl border border-charcoal-100">
      <table className="w-full text-sm">
        <thead className="bg-charcoal-50 border-b border-charcoal-100">
          <tr>
            {['Year', 'Invested', 'Est. Returns', 'Total Value'].map((h) => (
              <th key={h} className="px-4 py-3 text-left font-semibold text-charcoal-600 text-xs uppercase tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-charcoal-50">
          {rows.map((r) => (
            <tr key={r.yr} className="hover:bg-warm-50 transition-colors">
              <td className="px-4 py-3 font-medium text-charcoal-700">Year {r.yr}</td>
              <td className="px-4 py-3 text-charcoal-600">{fmt(r.invested)}</td>
              <td className="px-4 py-3 text-brand font-medium">{fmt(r.gains)}</td>
              <td className="px-4 py-3 font-semibold text-charcoal-800">{fmt(r.maturity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function SIPCalculatorPage() {
  const [activeTab, setActiveTab] = useState<Tab>('sip')

  // SIP inputs
  const [monthly, setMonthly] = useState(10000)
  const [sipRate, setSipRate]   = useState(12)
  const [sipYears, setSipYears] = useState(10)

  // Lumpsum inputs
  const [lumpsum, setLumpsum]     = useState(100000)
  const [lumpsumRate, setLumpsumRate] = useState(12)
  const [lumpsumYears, setLumpsumYears] = useState(10)

  // Goal inputs
  const [target, setTarget]      = useState(5000000)
  const [goalRate, setGoalRate]   = useState(12)
  const [goalYears, setGoalYears] = useState(10)

  // Inflation inputs
  const [infMonthly, setInfMonthly] = useState(10000)
  const [infRate, setInfRate]       = useState(12)
  const [inflation, setInflation]   = useState(6)
  const [infYears, setInfYears]     = useState(10)

  const result = useMemo(() => {
    switch (activeTab) {
      case 'sip':       return calcSIP(monthly, sipRate, sipYears)
      case 'lumpsum':   return calcLumpsum(lumpsum, lumpsumRate, lumpsumYears)
      case 'goal':      return calcGoal(target, goalRate, goalYears)
      case 'inflation': return calcInflation(infMonthly, infRate, inflation, infYears)
    }
  }, [activeTab, monthly, sipRate, sipYears, lumpsum, lumpsumRate, lumpsumYears,
      target, goalRate, goalYears, infMonthly, infRate, inflation, infYears])

  return (
    <div className="pt-16 bg-warm-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-hero-gradient py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-widest mb-2">Tools</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">SIP & Investment Calculator</h1>
          <p className="mt-3 text-charcoal-300 text-lg">
            Calculate returns across 4 scenarios — SIP, Lumpsum, Goal-based, and Inflation-adjusted.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all border ${
                activeTab === t.id
                  ? 'bg-brand text-white border-brand shadow-md'
                  : 'bg-white text-charcoal-600 border-charcoal-200 hover:border-brand hover:text-brand'
              }`}
            >
              <span className="font-semibold">{t.label}</span>
              <span className={`block text-xs mt-0.5 ${activeTab === t.id ? 'text-brand-100' : 'text-charcoal-400'}`}>
                {t.desc}
              </span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* ── Inputs ── */}
          <div className="lg:col-span-3 card space-y-6">
            <h2 className="font-semibold text-charcoal-800 text-lg border-b border-charcoal-100 pb-3">
              {tabs.find((t) => t.id === activeTab)?.label} Calculator
            </h2>

            {activeTab === 'sip' && (
              <>
                <SliderInput label="Monthly Investment" value={monthly} min={500} max={200000} step={500} prefix="₹" onChange={setMonthly} />
                <SliderInput label="Expected Annual Returns" value={sipRate} min={1} max={30} step={0.5} unit="%" onChange={setSipRate} />
                <SliderInput label="Investment Period" value={sipYears} min={1} max={40} step={1} unit=" yrs" onChange={setSipYears} />
              </>
            )}

            {activeTab === 'lumpsum' && (
              <>
                <SliderInput label="Lumpsum Investment" value={lumpsum} min={1000} max={5000000} step={1000} prefix="₹" onChange={setLumpsum} />
                <SliderInput label="Expected Annual Returns" value={lumpsumRate} min={1} max={30} step={0.5} unit="%" onChange={setLumpsumRate} />
                <SliderInput label="Investment Period" value={lumpsumYears} min={1} max={40} step={1} unit=" yrs" onChange={setLumpsumYears} />
              </>
            )}

            {activeTab === 'goal' && (
              <>
                <SliderInput label="Target Amount" value={target} min={100000} max={100000000} step={100000} prefix="₹" onChange={setTarget} />
                <SliderInput label="Expected Annual Returns" value={goalRate} min={1} max={30} step={0.5} unit="%" onChange={setGoalRate} />
                <SliderInput label="Time to Achieve Goal" value={goalYears} min={1} max={40} step={1} unit=" yrs" onChange={setGoalYears} />
              </>
            )}

            {activeTab === 'inflation' && (
              <>
                <SliderInput label="Monthly Investment" value={infMonthly} min={500} max={200000} step={500} prefix="₹" onChange={setInfMonthly} />
                <SliderInput label="Expected Nominal Returns" value={infRate} min={1} max={30} step={0.5} unit="%" onChange={setInfRate} />
                <SliderInput label="Expected Inflation Rate" value={inflation} min={1} max={20} step={0.5} unit="%" onChange={setInflation} />
                <SliderInput label="Investment Period" value={infYears} min={1} max={40} step={1} unit=" yrs" onChange={setInfYears} />
              </>
            )}

            {/* Disclaimer */}
            <p className="text-xs text-charcoal-400 border-t border-charcoal-100 pt-4">
              * Calculations are indicative only. Actual returns may vary. Mutual fund investments are subject to market risks.
            </p>
          </div>

          {/* ── Results ── */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card text-center">
              <DonutChart invested={result.invested} gains={result.gains} />

              {activeTab === 'goal' ? (
                <div className="mt-4">
                  <p className="text-charcoal-500 text-sm">Required Monthly SIP</p>
                  <p className="text-3xl font-bold text-brand mt-1">{fmt((result as ReturnType<typeof calcGoal>).monthly)}</p>
                </div>
              ) : (
                <div className="mt-4">
                  <p className="text-charcoal-500 text-sm">Estimated Maturity Value</p>
                  <p className="text-3xl font-bold text-charcoal-800 mt-1">{fmt(result.maturity)}</p>
                </div>
              )}

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-warm-50 rounded-xl p-3">
                  <p className="text-charcoal-500 text-xs">Total Invested</p>
                  <p className="font-semibold text-charcoal-800 mt-0.5">{fmt(result.invested)}</p>
                </div>
                <div className="bg-brand-50 rounded-xl p-3">
                  <p className="text-charcoal-500 text-xs">Est. Gains</p>
                  <p className="font-semibold text-brand mt-0.5">{fmt(result.gains)}</p>
                </div>
              </div>

              {result.invested > 0 && (
                <div className="mt-3 bg-green-50 rounded-xl p-3 text-sm">
                  <p className="text-charcoal-500 text-xs">Wealth Ratio</p>
                  <p className="font-bold text-green-700 mt-0.5">
                    {(result.maturity / result.invested).toFixed(2)}x your investment
                  </p>
                </div>
              )}
            </div>

            {/* Inflation note */}
            {activeTab === 'inflation' && (
              <div className="card bg-amber-50 border border-amber-200 text-sm text-amber-800 p-4">
                <p className="font-semibold mb-1">Real Return Rate</p>
                <p className="text-xs">
                  After adjusting for {inflation}% inflation, your real rate of return is approximately{' '}
                  <strong>{(((1 + infRate / 100) / (1 + inflation / 100) - 1) * 100).toFixed(2)}% p.a.</strong>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Year-by-year breakdown */}
        {(activeTab === 'sip' || activeTab === 'inflation') && (
          <div className="mt-10">
            <h3 className="font-semibold text-charcoal-800 text-lg mb-4">Year-by-Year Breakdown</h3>
            <YearTable
              monthly={activeTab === 'sip' ? monthly : infMonthly}
              annualRate={activeTab === 'sip' ? sipRate : ((1 + infRate / 100) / (1 + inflation / 100) - 1) * 100}
              years={activeTab === 'sip' ? sipYears : infYears}
            />
          </div>
        )}

        {/* Info cards */}
        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {[
            { title: 'What is SIP?', text: 'A Systematic Investment Plan lets you invest a fixed amount regularly in mutual funds. Starting early with even small amounts can create substantial wealth over time.' },
            { title: 'Power of Compounding', text: "Your returns earn returns — that's compounding. A ₹5,000/month SIP at 12% for 20 years grows to ₹49.9L on just ₹12L invested." },
            { title: 'Risk Disclaimer', text: 'Returns shown are indicative and based on assumed rates. Actual mutual fund returns depend on market conditions and scheme performance.' },
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
