'use client'

import Link from 'next/link'
import NeuralNetwork from '@/components/NeuralNetwork'
import ScrollReveal from '@/components/ScrollReveal'
import CountUp from '@/components/CountUp'
import { useLang } from '@/context/LangContext'

const expertiseItems = [
  { label: 'AI',                     icon: '⬡' },
  { label: 'Web3',                   icon: '◈' },
  { label: 'Payments',               icon: '◎' },
  { label: 'Product Strategy',       icon: '◫' },
  { label: 'Data Governance',        icon: '◉' },
  { label: 'Digital Transformation', icon: '◈' },
]

const services = [
  { id: 'ai-strategy', icon: '⬡', titleKey: 'AI Strategy & Transformation',        descKey: 'Move beyond AI experiments. We help organizations define and execute AI strategies that unlock competitive advantage, from model selection and governance to organization-wide adoption.' },
  { id: 'web3',        icon: '◈', titleKey: 'Web3 & Tokenization Advisory',         descKey: 'We help enterprises and scaleups evaluate, design, and launch tokenization initiatives — from asset tokenization to decentralized finance infrastructure.' },
  { id: 'delivery',   icon: '◎', titleKey: 'Delivery Transformation',              descKey: 'Restructure your product and engineering delivery for speed, quality, and resilience. We bring enterprise delivery experience to organizations that need to move faster.' },
  { id: 'fractional', icon: '◫', titleKey: 'Fractional Product Leadership',        descKey: 'Embed senior product leadership into your organization without a full-time hire. Strategic guidance, team mentoring, and hands-on product direction on your timeline.' },
  { id: 'payments',   icon: '◉', titleKey: 'Payments & Fintech Consulting',        descKey: 'Deep expertise in payments infrastructure, open banking, and fintech strategy across Europe and the Americas. From API architecture to regulatory navigation.' },
]

const servicesEs = [
  { id: 'ai-strategy', title: 'Estrategia de IA & Transformación',       desc: 'Vamos más allá de los experimentos de IA. Ayudamos a las organizaciones a definir y ejecutar estrategias de IA que desbloqueen ventajas competitivas.' },
  { id: 'web3',        title: 'Asesoría Web3 & Tokenización',             desc: 'Ayudamos a empresas y scaleups a evaluar, diseñar y lanzar iniciativas de tokenización — desde tokenización de activos hasta infraestructura DeFi.' },
  { id: 'delivery',   title: 'Transformación de Entrega',                desc: 'Reestructura tu entrega de producto e ingeniería para ganar velocidad, calidad y resiliencia.' },
  { id: 'fractional', title: 'Liderazgo de Producto Fraccionado',        desc: 'Integra liderazgo senior de producto en tu organización sin una contratación a tiempo completo.' },
  { id: 'payments',   title: 'Consultoría de Pagos & Fintech',           desc: 'Expertise profundo en infraestructura de pagos, open banking y estrategia fintech en Europa y las Américas.' },
]

const insightsEn = [
  { tag: 'Web3',     title: 'Web3 and the Future of Collective Ownership',    excerpt: 'How tokenization is redefining ownership models for assets, organizations, and value exchange at a global scale.',                                                href: '/insights/web3-collective-ownership' },
  { tag: 'AI',       title: 'The Real Barriers to Enterprise AI Adoption',    excerpt: "Most AI initiatives fail not because of technology, but because of governance, data quality, and change management. Here's what actually works.",                href: '/insights/enterprise-ai-adoption' },
  { tag: 'Payments', title: "Open Banking Is Not a Feature — It's a Business Model", excerpt: 'How forward-thinking financial institutions are using open banking to unlock new revenue streams, not just comply with regulation.', href: '/insights/open-banking-business-model' },
]

const insightsEs = [
  { tag: 'Web3',     title: 'Web3 y el Futuro de la Propiedad Colectiva',     excerpt: 'Cómo la tokenización está redefiniendo los modelos de propiedad de activos, organizaciones e intercambio de valor a escala global.',                         href: '/insights/web3-collective-ownership' },
  { tag: 'IA',       title: 'Las Verdaderas Barreras para Adoptar IA Empresarial', excerpt: 'La mayoría de las iniciativas de IA fracasan no por la tecnología, sino por el gobierno de datos, la calidad y la gestión del cambio.',                   href: '/insights/enterprise-ai-adoption' },
  { tag: 'Pagos',    title: 'El Open Banking No Es una Función — Es un Modelo de Negocio', excerpt: 'Cómo las instituciones financieras más innovadoras usan el open banking para desbloquear nuevas fuentes de ingresos.',                          href: '/insights/open-banking-business-model' },
]

export default function HomePage() {
  const { lang, t } = useLang()
  const svcList  = lang === 'es' ? servicesEs  : services.map(s => ({ id: s.id, title: s.titleKey, desc: s.descKey, icon: s.icon }))
  const artList  = lang === 'es' ? insightsEs  : insightsEn
  const whyItems = [
    { title: t('home', 'why1Title'), desc: t('home', 'why1Desc') },
    { title: t('home', 'why2Title'), desc: t('home', 'why2Desc') },
    { title: t('home', 'why3Title'), desc: t('home', 'why3Desc') },
    { title: t('home', 'why4Title'), desc: t('home', 'why4Desc') },
  ]
  const svcIcons = ['⬡','◈','◎','◫','◉']

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] via-[#001B4E] to-[#000E2B]">
          <NeuralNetwork />
          <div className="absolute inset-0 bg-gradient-radial from-[#28A9E1]/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 pt-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#28A9E1]/30 bg-[#28A9E1]/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#28A9E1] animate-pulse" />
            <span className="text-[#28A9E1] text-xs font-medium tracking-wider uppercase">
              {t('home', 'heroTagline')}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            {t('home', 'heroH1a')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28A9E1] to-[#7DD3F5]">{t('home', 'heroH1b')}</span>{' '}
            {t('home', 'heroH1c')}
          </h1>

          <p className="text-white/60 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
            {t('home', 'heroSub')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base w-full sm:w-auto">{t('home', 'heroCta1')}</Link>
            <Link href="/case-studies" className="btn-secondary text-base w-full sm:w-auto">{t('home', 'heroCta2')}</Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-xs text-white uppercase tracking-widest">{t('home', 'scrollCue')}</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ─── EXPERTISE STRIP ─── */}
      <section className="border-y border-white/10 bg-[#000E2B]/60 backdrop-blur-sm overflow-hidden" aria-label="Areas of expertise">
        <div className="py-5 flex items-center">
          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {[...expertiseItems, ...expertiseItems].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-8">
                <span className="text-[#28A9E1] text-lg" aria-hidden="true">{item.icon}</span>
                <span className="font-display text-sm font-semibold text-white/70 uppercase tracking-widest">{item.label}</span>
                <span className="text-white/20 mx-2" aria-hidden="true">·</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" aria-label="Services">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-tag">{t('home', 'servicesTag')}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">{t('home', 'servicesH2')}</h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{t('home', 'servicesSub')}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {svcList.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <Link href={`/services#${service.id}`} className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-xl mb-5 group-hover:bg-[#28A9E1]/20 transition-colors">
                    {svcIcons[i]}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-[#28A9E1] transition-colors">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-[#28A9E1] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('home', 'serviceLearn')}
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link href="/services" className="btn-secondary">{t('home', 'servicesLink')}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FEATURED CASE STUDY ─── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="Featured case study">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal><div className="mb-10"><span className="section-tag">{t('home', 'featuredTag')}</span></div></ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 mb-6">
                  <span className="text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">Payments · Automation</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{t('home', 'featuredH2')}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">{t('home', 'featuredSub')}</p>
                <Link href="/case-studies" className="btn-primary">{t('home', 'featuredCta')}</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 16,    suffix: 'M+', labelKey: 'metric1' },
                  { value: 95,    suffix: '%',  labelKey: 'metric2' },
                  { value: 300,   suffix: '+',  labelKey: 'metric3' },
                  { value: 30000, suffix: '+',  labelKey: 'metric4' },
                ].map((m) => (
                  <div key={m.labelKey} className="card-dark p-6 text-center border-[#28A9E1]/20">
                    <div className="font-display text-3xl lg:text-4xl font-bold text-[#28A9E1] mb-2">
                      <CountUp end={m.value} suffix={m.suffix} />
                    </div>
                    <p className="text-white/50 text-sm leading-snug">{t('home', m.labelKey)}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── WHY SYNAPXI ─── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" aria-label="Why Synapxi Tech">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-tag">{t('home', 'whyTag')}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">{t('home', 'whyH2')}</h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{t('home', 'whySub')}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyItems.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.1}>
                <div className="card-dark p-8 h-full">
                  <div className="w-8 h-8 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-sm font-bold font-display mb-5">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">{reason.title}</h3>
                  <p className="text-white/50 leading-relaxed">{reason.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSIGHTS ─── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="Insights">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="section-tag">{t('home', 'insightsTag')}</span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">{t('home', 'insightsH2')}</h2>
              </div>
              <Link href="/insights" className="btn-secondary text-sm">{t('home', 'insightsLink')}</Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artList.map((article, i) => (
              <ScrollReveal key={article.href + i} delay={i * 0.1}>
                <Link href={article.href} className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider mb-5">{article.tag}</div>
                  <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-[#28A9E1] transition-colors leading-snug">{article.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{article.excerpt}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" aria-label="Call to action">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden border border-[#28A9E1]/20 bg-gradient-to-br from-[#001B4E] to-[#001030] p-12 lg:p-16 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#28A9E1]/60 to-transparent" />
              <span className="section-tag">{t('home', 'ctaTag')}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{t('home', 'ctaH2')}</h2>
              <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">{t('home', 'ctaSub')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-base">{t('home', 'ctaBtn1')}</Link>
                <Link href="/about"   className="btn-secondary text-base">{t('home', 'ctaBtn2')}</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-4 bg-[#001B4E]/90 backdrop-blur-md border-t border-white/10">
        <Link href="/contact" className="btn-primary w-full text-center text-sm">{t('home', 'mobileCta')}</Link>
      </div>
    </>
  )
}
