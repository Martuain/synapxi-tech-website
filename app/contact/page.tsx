'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/context/LangContext'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
const CALENDLY_URL = 'https://calendly.com/synapxitech'

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
  const { t, lang } = useLang()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState<FormData>({
    name: '', company: '', email: '', industry: '', challenge: '', budget: '', timeline: '',
  })

  const industries = lang === 'es'
    ? ['Servicios Financieros','Banca','Pagos & Fintech','Seguros','Inmobiliaria','Ciberseguridad','Tecnología Empresarial','Salud','Energía & Utilities','Medios & Entretenimiento','Otro']
    : ['Financial Services','Banking','Payments & Fintech','Insurance','Real Estate','Cybersecurity','Enterprise Technology','Healthcare','Energy & Utilities','Media & Entertainment','Other']

  const budgets = ['€25k – €50k','€50k – €100k','€100k – €250k','€250k+', lang === 'es' ? 'Aún no definido' : 'Not yet defined']

  const timelines = lang === 'es'
    ? ['Lo antes posible — en 4 semanas','1–3 meses','3–6 meses','6+ meses','Explorando opciones']
    : ['ASAP — within 4 weeks','1–3 months','3–6 months','6+ months','Exploring options']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _language: lang }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const engagements = [
    { label: lang === 'es' ? 'Evaluación Estratégica' : 'Strategic Assessment', range: lang === 'es' ? 'Desde €10k' : 'From €10k' },
    { label: lang === 'es' ? 'Sprint de Asesoría' : 'Advisory Sprint',           range: '€15k – €40k' },
    { label: lang === 'es' ? 'Liderazgo Fraccionado' : 'Fractional Leadership',  range: lang === 'es' ? 'Desde €8k/mes' : 'From €8k/mo' },
    { label: lang === 'es' ? 'Programa Completo' : 'Full Advisory Program',      range: '€50k – €150k+' },
  ]

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Contact hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('contact', 'tag')}</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">{t('contact', 'h1')}</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">{t('contact', 'sub')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* ─── SIDEBAR ─── */}
          <aside className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-28">
            <ScrollReveal>
              <div className="card-dark p-6">
                <h2 className="font-display text-lg font-semibold text-white mb-4">{t('contact', 'nextH2')}</h2>
                <ol className="flex flex-col gap-4">
                  {[t('contact','next1'), t('contact','next2'), t('contact','next3')].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                      <span className="font-display text-xs font-bold text-[#28A9E1] w-5 h-5 rounded-full border border-[#28A9E1]/40 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="card-dark p-6">
                <h2 className="font-display text-lg font-semibold text-white mb-4">{t('contact', 'sizesH2')}</h2>
                <div className="flex flex-col gap-3">
                  {engagements.map((tier) => (
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
                <h2 className="font-display text-lg font-semibold text-white mb-3">{t('contact', 'basedH2')}</h2>
                <p className="text-white/50 text-sm leading-relaxed">{t('contact', 'basedBody')}</p>
              </div>
            </ScrollReveal>
          </aside>

          {/* ─── FORM ─── */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <ScrollReveal>
                <div className="card-dark p-12 text-center border-[#28A9E1]/30">
                  <div className="w-16 h-16 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/30 flex items-center justify-center text-[#28A9E1] text-2xl mx-auto mb-6">✓</div>
                  <h2 className="font-display text-3xl font-bold text-white mb-4">{t('contact', 'successH2')}</h2>
                  <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">{t('contact', 'successSub')}</p>
                  <div className="inline-block bg-[#28A9E1]/10 border border-[#28A9E1]/30 rounded-xl p-6 mb-6">
                    <p className="text-white/70 text-sm mb-4">{t('contact', 'successCalP')}</p>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      {t('contact', 'successCalBtn')}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="card-dark p-8 lg:p-10"
                  aria-label="Contact form"
                >
                  <h2 className="font-display text-2xl font-bold text-white mb-8">{t('contact', 'formH2')}</h2>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                        {t('contact','fName')} <span className="text-[#28A9E1]">*</span>
                      </label>
                      <input id="name" name="name" type="text" autoComplete="name" required
                        value={form.name} onChange={handleChange}
                        placeholder={t('contact','fNameP')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px]"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-white/70 text-sm font-medium mb-2">
                        {t('contact','fCompany')} <span className="text-[#28A9E1]">*</span>
                      </label>
                      <input id="company" name="company" type="text" autoComplete="organization" required
                        value={form.company} onChange={handleChange}
                        placeholder={t('contact','fCompanyP')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                        {t('contact','fEmail')} <span className="text-[#28A9E1]">*</span>
                      </label>
                      <input id="email" name="email" type="email" autoComplete="email" required
                        value={form.email} onChange={handleChange}
                        placeholder={t('contact','fEmailP')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px]"
                      />
                    </div>

                    {/* Industry */}
                    <div>
                      <label htmlFor="industry" className="block text-white/70 text-sm font-medium mb-2">
                        {t('contact','fIndustry')} <span className="text-[#28A9E1]">*</span>
                      </label>
                      <select id="industry" name="industry" required
                        value={form.industry} onChange={handleChange}
                        style={{ colorScheme: 'dark' }}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px] appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#001B4E]">{t('contact','fIndustryP')}</option>
                        {industries.map((ind) => <option key={ind} value={ind} className="bg-[#001B4E]">{ind}</option>)}
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-white/70 text-sm font-medium mb-2">
                        {t('contact','fBudget')}
                      </label>
                      <select id="budget" name="budget"
                        value={form.budget} onChange={handleChange}
                        style={{ colorScheme: 'dark' }}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px] appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#001B4E]">{t('contact','fBudgetP')}</option>
                        {budgets.map((b) => <option key={b} value={b} className="bg-[#001B4E]">{b}</option>)}
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-white/70 text-sm font-medium mb-2">
                        {t('contact','fTimeline')}
                      </label>
                      <select id="timeline" name="timeline"
                        value={form.timeline} onChange={handleChange}
                        style={{ colorScheme: 'dark' }}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px] appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#001B4E]">{t('contact','fTimelineP')}</option>
                        {timelines.map((tl) => <option key={tl} value={tl} className="bg-[#001B4E]">{tl}</option>)}
                      </select>
                    </div>

                    {/* Challenge — full width */}
                    <div className="md:col-span-2">
                      <label htmlFor="challenge" className="block text-white/70 text-sm font-medium mb-2">
                        {t('contact','fChallenge')} <span className="text-[#28A9E1]">*</span>
                      </label>
                      <textarea id="challenge" name="challenge" rows={5} required
                        value={form.challenge} onChange={handleChange}
                        placeholder={t('contact','fChallengeP')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-[#28A9E1] transition-all outline-none text-sm resize-y"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm" role="alert">
                      {t('contact', 'fError')}
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-white/30 text-xs max-w-xs">{t('contact', 'fPrivacy')}</p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary min-w-[180px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      aria-busy={status === 'submitting'}
                    >
                      {status === 'submitting' ? t('contact','fSending') : t('contact','fSubmit')}
                    </button>
                  </div>
                </form>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
