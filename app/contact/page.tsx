'use client'

import { useState } from 'react'

const services = [
  'Mutual Fund Advisory',
  'SIP Planning',
  'Fixed Deposits',
  'Stock Broking',
  'Tax Planning',
  'Portfolio Review',
  'Insurance Advisory',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call — replace with your actual form submission endpoint
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-16 bg-warm-50 min-h-screen">
      {/* Header */}
      <div className="bg-hero-gradient py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-brand-light text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-3 text-charcoal-300 text-lg">
            Have a question or ready to start your investment journey? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h3 className="font-semibold text-charcoal-800 text-lg mb-5">Reach Us Directly</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Office Address',
                    value: 'Mumbai, Maharashtra, India',
                    sub: 'By appointment only',
                    href: null,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: '+91 XX XXXX XXXX',
                    sub: 'Mon–Sat, 9am–6pm',
                    href: 'tel:+91XXXXXXXXXX',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'info@pgsl.in',
                    sub: 'We respond within 24 hours',
                    href: 'mailto:info@pgsl.in',
                  },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-50 text-brand rounded-lg flex items-center justify-center shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-400 mb-0.5">{contact.label}</p>
                      {contact.href ? (
                        <a href={contact.href} className="font-medium text-charcoal-800 hover:text-brand transition-colors text-sm">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium text-charcoal-800 text-sm">{contact.value}</p>
                      )}
                      <p className="text-xs text-charcoal-400 mt-0.5">{contact.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-brand-50 border border-brand-100">
              <h4 className="font-semibold text-charcoal-800 mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm text-charcoal-600">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-medium">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h4 className="font-semibold text-charcoal-800 mb-3">Existing Investors</h4>
              <p className="text-charcoal-500 text-sm mb-4">
                Already a client? Log in to your InvestWell portal to view your portfolio and statements.
              </p>
              <a href="/investwell" className="btn-outline-brand block text-center text-sm py-2.5">
                Go to Investor Portal →
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="card">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">Message Received!</h3>
                  <p className="text-charcoal-500 mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                    className="btn-outline-brand text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="font-semibold text-charcoal-800 text-xl mb-1">Send Us a Message</h2>
                    <p className="text-charcoal-400 text-sm">Fill in the form and we&apos;ll get back to you shortly.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label">Full Name *</label>
                      <input
                        type="text" name="name" required
                        value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="label">Phone Number *</label>
                      <input
                        type="tel" name="phone" required
                        value={form.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Email Address *</label>
                    <input
                      type="email" name="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="label">Service of Interest</label>
                    <select
                      name="service"
                      value={form.service} onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label">Message</label>
                    <textarea
                      name="message" rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell us about your investment goals or questions…"
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-charcoal-400">
                    By submitting, you consent to Pavitra Securities contacting you. We do not share your data with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
