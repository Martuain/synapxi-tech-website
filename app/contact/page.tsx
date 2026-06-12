'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID' // Replace with real Formspree form ID
const CALENDLY_URL = 'https://calendly.com/synapxitech' // Replace with real Calendly URL

const industries = [
  'Financial Services',
  'Banking',
  'Payments & Fintech',
  'Insurance',
  'Real Estate',
  'Cybersecurity',
  'Enterprise Technology',
  'Healthcare',
  'Energy & Utilities',
  'Media & Entertainment',
  'Other',
]

const budgets = [
  '€25k – €50k',
  '€50k – €100k',
  '€100k – €250k',
  '€250k+',
  'Not yet defined',
]

const timelines = [
  'ASAP — within 4 weeks',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Exploring options',
]

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  company: string
  email: string
  industry: string
  challenge: string
  budget: string
  timeline: string
}

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    industry: '',
    challenge: '',
    budget: '',
    timeline: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const isValid =
    form.name.trim() &&
    form.company.trim() &&
    form.email.includes('@') &&
    form.industry &&
    form.challenge.trim().length > 10

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Contact hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">Get in Touch</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
              Start Your Project
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Tell us about your challenge. We'll review your submission and reach out within 2 business
              days to explore whether we're the right fit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* ─── SIDEBAR ─── */}
          <aside className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-28" aria-label="Contact information">
            <ScrollReveal>
              <div className="card-dark p-6">
                <h2 className="font-display text-lg font-semibold text-white mb-4">What Happens Next</h2>
                <ol className="flex flex-col gap-4">
                  {[
                    'We review your submission within 2 business days.',
                    'If there\'s a potential fit, we schedule a 30-minute discovery call.',
                    'We scope a proposal aligned to your specific challenge and budget.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                      <span className="font-display text-xs font-bold text-[#28A9E1] w-5 h-5 rounded-full border border-[#28A9E1]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="card-dark p-6">
                <h2 className="font-display text-lg font-semibold text-white mb-4">Typical Engagement Sizes</h2>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Strategic Assessment', range: 'From €10k' },
                    { label: 'Advisory Sprint', range: '€15k – €40k' },
                    { label: 'Fractional Leadership', range: 'From €8k/mo' },
                    { label: 'Full Advisory Program', range: '€50k – €150k+' },
                  ].map((tier) => (
                    <div key={tier.label} className="flex items-center justify-between">
                      <span className="text-white/50 text-sm">{tier.label}</span>
                      <span className="text-[#28A9E1] text-sm font-medium">{tier.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="card-dark p-6 border-[#28A9E1]/20 bg-[#28A9E1]/5">
                <h2 className="font-display text-lg font-semibold text-white mb-3">Based in Madrid</h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  Headquartered in Madrid, Spain. Supporting organizations across Europe and the Americas.
                </p>
              </div>
            </ScrollReveal>
          </aside>

          {/* ─── FORM ─── */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <ScrollReveal>
                <div className="card-dark p-12 text-center border-[#28A9E1]/30">
                  <div className="w-16 h-16 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/30 flex items-center justify-center text-[#28A9E1] text-2xl mx-auto mb-6">
                    ✓
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white mb-4">
                    Thank You
                  </h2>
                  <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
                    We've received your submission and will review it within 2 business days.
                    In the meantime, feel free to book a discovery call directly.
                  </p>

                  {/* Calendly CTA revealed after success */}
                  <div className="inline-block bg-[#28A9E1]/10 border border-[#28A9E1]/30 rounded-xl p-6 mb-6">
                    <p className="text-white/70 text-sm mb-4">
                      Want to move faster? Book a 30-minute discovery call directly:
                    </p>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Book Discovery Call →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <div className="card-dark p-8 lg:p-10">
                  <h2 className="font-display text-2xl font-bold text-white mb-8">
                    Tell Us About Your Challenge
                  </h2>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                        Full Name <span className="text-[#28A9E1]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-[#28A9E1] focus:bg-white/8 transition-all outline-none text-sm min-h-[44px]"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-white/70 text-sm font-medium mb-2">
                        Company <span className="text-[#28A9E1]">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                        Work Email <span className="text-[#28A9E1]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px]"
                      />
                    </div>

                    {/* Industry */}
                    <div>
                      <label htmlFor="industry" className="block text-white/70 text-sm font-medium mb-2">
                        Industry <span className="text-[#28A9E1]">*</span>
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px] appearance-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" className="bg-[#001B4E]">Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind} className="bg-[#001B4E]">{ind}</option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-white/70 text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px] appearance-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" className="bg-[#001B4E]">Select range</option>
                        {budgets.map((b) => (
                          <option key={b} value={b} className="bg-[#001B4E]">{b}</option>
                        ))}
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-white/70 text-sm font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px] appearance-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" className="bg-[#001B4E]">Select timeline</option>
                        {timelines.map((t) => (
                          <option key={t} value={t} className="bg-[#001B4E]">{t}</option>
                        ))}
                      </select>
                    </div>

                    {/* Challenge — full width */}
                    <div className="md:col-span-2">
                      <label htmlFor="challenge" className="block text-white/70 text-sm font-medium mb-2">
                        Describe Your Challenge <span className="text-[#28A9E1]">*</span>
                      </label>
                      <textarea
                        id="challenge"
                        name="challenge"
                        value={form.challenge}
                        onChange={handleChange}
                        rows={5}
                        required
                        placeholder="What are you trying to solve or achieve? The more context you provide, the more useful our response will be."
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-[#28A9E1] transition-all outline-none text-sm resize-y"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      Something went wrong. Please try again or reach out directly.
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-white/30 text-xs max-w-xs">
                      Your information is used solely to evaluate your inquiry and will never be sold or shared.
                    </p>
                    <button
                      onClick={handleSubmit}
                      disabled={!isValid || status === 'submitting'}
                      className="btn-primary min-w-[180px] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      aria-busy={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Sending…' : 'Submit Inquiry'}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
