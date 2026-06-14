'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/context/LangContext'

// ── Live configuration ──────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgvzbjqw'
const CALENDLY_URL       = 'https://calendly.com/martin-f-mora/'

// ── Qualification scoring ───────────────────────────────────────────────────
// Budget weight: larger = higher intent
const BUDGET_SCORES: Record<string, number> = {
  '€25k – €50k':   1,
  '€50k – €100k':  2,
  '€100k – €250k': 3,
  '€250k+':        4,
  'Not yet defined': 0,
  'Aún no definido': 0,
}
// Timeline weight: sooner = higher intent
const TIMELINE_SCORES: Record<string, number> = {
  'ASAP — within 4 weeks':  3,
  '1–3 months':             2,
  '3–6 months':             1,
  '6+ months':              0,
  'Exploring options':      0,
  'Lo antes posible — en 4 semanas': 3,
  '1–3 meses':              2,
  '3–6 meses':              1,
  '6+ meses':               0,
  'Explorando opciones':    0,
}
// Min challenge word count for a substantive submission
const MIN_CHALLENGE_WORDS = 15

function getQualificationScore(form: FormData): number {
  const budgetScore   = BUDGET_SCORES[form.budget]   ?? 0
  const timelineScore = TIMELINE_SCORES[form.timeline] ?? 0
  const wordCount     = form.challenge.trim().split(/\s+/).filter(Boolean).length
  const challengeScore = wordCount >= MIN_CHALLENGE_WORDS ? 2 : wordCount >= 8 ? 1 : 0
  return budgetScore + timelineScore + challengeScore
}

// Score ≥ 3 → qualified (show Calendly); 1–2 → standard follow-up; 0 → nurture
function qualificationTier(score: number): 'qualified' | 'standard' | 'nurture' {
  if (score >= 3) return 'qualified'
  if (score >= 1) return 'standard'
  return 'nurture'
}

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
  const [status, setStatus]     = useState<FormStatus>('idle')
  const [tier,   setTier]       = useState<'qualified' | 'standard' | 'nurture'>('standard')
  const [form,   setForm]       = useState<FormData>({
    name: '', company: '', email: '', industry: '', challenge: '', budget: '', timeline: '',
  })

  const industries = lang === 'es'
    ? ['Servicios Financieros','Banca','Pagos & Fintech','Seguros','Inmobiliaria','Ciberseguridad','Tecnología Empresarial','Salud','Energía & Utilities','Medios & Entretenimiento','Otro']
    : ['Financial Services','Banking','Payments & Fintech','Insurance','Real Estate','Cybersecurity','Enterprise Technology','Healthcare','Energy & Utilities','Media & Entertainment','Other']

  const budgets   = ['€25k – €50k','€50k – €100k','€100k – €250k','€250k+', lang === 'es' ? 'Aún no definido' : 'Not yet defined']
  const timelines = lang === 'es'
    ? ['Lo antes posible — en 4 semanas','1–3 meses','3–6 meses','6+ meses','Explorando opciones']
    : ['ASAP — within 4 weeks','1–3 months','3–6 months','6+ months','Exploring options']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const score      = getQualificationScore(form)
    const leadTier   = qualificationTier(score)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _language:          lang,
          _qualification_score: score,
          _qualification_tier:  leadTier,
        }),
      })
      if (res.ok) {
        setTier(leadTier)
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const engagements = [
    { label: lang === 'es' ? 'Evaluación Estratégica'   : 'Strategic Assessment',    range: lang === 'es' ? 'Desde €10k' : 'From €10k' },
    { label: lang === 'es' ? 'Sprint de Asesoría'        : 'Advisory Sprint',          range: '€15k – €40k' },
    { label: lang === 'es' ? 'Liderazgo Fraccionado'     : 'Fractional Leadership',    range: lang === 'es' ? 'Desde €8k/mes' : 'From €8k/mo' },
    { label: lang === 'es' ? 'Programa Completo'         : 'Full Advisory Program',    range: '€50k – €150k+' },
  ]

  // Word count progress for challenge field
  const wordCount = form.challenge.trim().split(/\s+/).filter(Boolean).length
  const wordProgress = Math.min(wordCount / MIN_CHALLENGE_WORDS, 1)

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('contact','tag')}</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">{t('contact','h1')}</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">{t('contact','sub')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* ─── SIDEBAR ─── */}
          <aside className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-28">
            <ScrollReveal>
              <div className="card-dark p-6">
                <h2 className="font-display text-lg font-semibold text-white mb-4">{t('contact','nextH2')}</h2>
                <ol className="flex flex-col gap-4">
                  {[t('contact','next1'), t('contact','next2'), t('contact','next3')].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                      <span className="font-display text-xs font-bold text-[#28A9E1] w-5 h-5 rounded-full border border-[#28A9E1]/40 flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="card-dark p-6">
                <h2 className="font-display text-lg font-semibold text-white mb-4">{t('contact','sizesH2')}</h2>
                <div className="flex flex-col gap-3">
                  {engagements.map(tier => (
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
                <h2 className="font-display text-lg font-semibold text-white mb-3">{t('contact','basedH2')}</h2>
                <p className="text-white/50 text-sm leading-relaxed">{t('contact','basedBody')}</p>
              </div>
            </ScrollReveal>
          </aside>

          {/* ─── FORM / SUCCESS ─── */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <ScrollReveal>
                <div className="card-dark p-10 lg:p-14 text-center border-[#28A9E1]/30 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/30 flex items-center justify-center text-[#28A9E1] text-3xl mx-auto mb-6">✓</div>
                  <h2 className="font-display text-3xl font-bold text-white mb-4">{t('contact','successH2')}</h2>
                  <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">{t('contact','successSub')}</p>

                  {/* ── Qualified lead → show Calendly ── */}
                  {tier === 'qualified' && (
                    <div className="bg-[#28A9E1]/10 border border-[#28A9E1]/30 rounded-xl p-7 mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28A9E1]/20 border border-[#28A9E1]/30 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider mb-4">
                        {lang === 'es' ? '⚡ Acceso Prioritario' : '⚡ Priority Access'}
                      </div>
                      <p className="text-white/80 text-base font-medium mb-2">
                        {lang === 'es'
                          ? 'Tu perfil encaja con nuestro modelo de asesoría. Reserva ahora una llamada de descubrimiento de 30 minutos.'
                          : 'Your profile is a strong fit for our advisory model. Book a 30-minute discovery call now.'}
                      </p>
                      <p className="text-white/50 text-sm mb-6">
                        {lang === 'es'
                          ? 'Selecciona el horario que mejor te convenga — sin esperas.'
                          : 'Select a time that works for you — no waiting.'}
                      </p>
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
                        {t('contact','successCalBtn')}
                      </a>
                    </div>
                  )}

                  {/* ── Standard lead → softer Calendly nudge ── */}
                  {tier === 'standard' && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                      <p className="text-white/60 text-sm mb-4">{t('contact','successCalP')}</p>
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                        {t('contact','successCalBtn')}
                      </a>
                    </div>
                  )}

                  {/* ── Nurture → no Calendly, just warm message ── */}
                  {tier === 'nurture' && (
                    <div className="bg-white/3 border border-white/8 rounded-xl p-6 mb-6">
                      <p className="text-white/50 text-sm">
                        {lang === 'es'
                          ? 'Nuestro equipo revisará tu consulta y te contactará si hay un encaje potencial. También puedes explorar nuestros servicios mientras tanto.'
                          : "Our team will review your inquiry and reach out if there's a potential fit. Feel free to explore our services in the meantime."}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <form onSubmit={handleSubmit} noValidate className="card-dark p-8 lg:p-10 rounded-2xl">
                  <h2 className="font-display text-2xl font-bold text-white mb-2">{t('contact','formH2')}</h2>
                  <p className="text-white/40 text-sm mb-8">
                    {lang === 'es'
                      ? 'Cuanta más información nos compartas, más útil será nuestra respuesta. Los campos marcados con * son obligatorios.'
                      : 'The more context you share, the more useful our response. Fields marked * are required.'}
                  </p>

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
                        {industries.map(ind => <option key={ind} value={ind} className="bg-[#001B4E]">{ind}</option>)}
                      </select>
                    </div>

                    {/* Budget — qualification signal */}
                    <div>
                      <label htmlFor="budget" className="block text-white/70 text-sm font-medium mb-2">
                        {t('contact','fBudget')} <span className="text-[#28A9E1]">*</span>
                      </label>
                      <select id="budget" name="budget" required
                        value={form.budget} onChange={handleChange}
                        style={{ colorScheme: 'dark' }}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px] appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#001B4E]">{t('contact','fBudgetP')}</option>
                        {budgets.map(b => <option key={b} value={b} className="bg-[#001B4E]">{b}</option>)}
                      </select>
                    </div>

                    {/* Timeline — qualification signal */}
                    <div>
                      <label htmlFor="timeline" className="block text-white/70 text-sm font-medium mb-2">
                        {t('contact','fTimeline')} <span className="text-[#28A9E1]">*</span>
                      </label>
                      <select id="timeline" name="timeline" required
                        value={form.timeline} onChange={handleChange}
                        style={{ colorScheme: 'dark' }}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:border-[#28A9E1] transition-all outline-none text-sm min-h-[44px] appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#001B4E]">{t('contact','fTimelineP')}</option>
                        {timelines.map(tl => <option key={tl} value={tl} className="bg-[#001B4E]">{tl}</option>)}
                      </select>
                    </div>

                    {/* Challenge — with word-count progress bar */}
                    <div className="md:col-span-2">
                      <label htmlFor="challenge" className="block text-white/70 text-sm font-medium mb-2">
                        {t('contact','fChallenge')} <span className="text-[#28A9E1]">*</span>
                      </label>
                      <textarea id="challenge" name="challenge" rows={5} required
                        value={form.challenge} onChange={handleChange}
                        placeholder={t('contact','fChallengeP')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-[#28A9E1] transition-all outline-none text-sm resize-y"
                      />
                      {/* Progress indicator */}
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${wordProgress * 100}%`,
                              backgroundColor: wordProgress >= 1 ? '#28A9E1' : wordProgress > 0.5 ? '#7DD3F5' : '#ffffff40',
                            }}
                          />
                        </div>
                        <span className={`text-xs whitespace-nowrap ${wordProgress >= 1 ? 'text-[#28A9E1]' : 'text-white/30'}`}>
                          {wordProgress >= 1
                            ? (lang === 'es' ? '✓ Suficiente contexto' : '✓ Good context')
                            : `${wordCount} / ${MIN_CHALLENGE_WORDS} ${lang === 'es' ? 'palabras' : 'words'}`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm" role="alert">
                      {t('contact','fError')}
                    </div>
                  )}

                  <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-white/30 text-xs max-w-xs">{t('contact','fPrivacy')}</p>
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
