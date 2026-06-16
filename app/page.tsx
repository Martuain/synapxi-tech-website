'use client'

import Link from 'next/link'
import NeuralNetwork from '@/components/NeuralNetwork'
import ScrollReveal from '@/components/ScrollReveal'
import CountUp from '@/components/CountUp'
import TechEcosystem from '@/components/TechEcosystem'
import { useLang } from '@/context/LangContext'

const expertiseItems = [
  { label: 'AI Strategy',            icon: '⬡' },
  { label: 'Web3 & Tokenization',    icon: '◈' },
  { label: 'Payments & Fintech',     icon: '◎' },
  { label: 'Product Innovation',     icon: '◫' },
  { label: 'Data Governance',        icon: '◉' },
  { label: 'Digital Transformation', icon: '◈' },
  { label: 'CBDC & Digital Assets',  icon: '⬡' },
  { label: 'Fractional Leadership',  icon: '◫' },
]

// Services — AI is #1
const servicesEn = [
  { id: 'ai-strategy', icon: '⬡', featured: true,  title: 'AI Strategy & Transformation',  desc: 'Move beyond AI experiments. We design and execute AI strategies that deliver measurable competitive advantage — from governance and model selection to enterprise-wide adoption.' },
  { id: 'web3',        icon: '◈', featured: false, title: 'Web3 & Tokenization Advisory',   desc: 'We help enterprises design and launch tokenization initiatives — from asset tokenization to decentralized finance infrastructure — with enterprise-grade rigour.' },
  { id: 'delivery',   icon: '◎', featured: false, title: 'Delivery Transformation',        desc: 'Restructure product and engineering delivery for speed, quality, and resilience. We bring enterprise delivery discipline to organizations that need to move faster.' },
  { id: 'fractional', icon: '◫', featured: false, title: 'Fractional Product Leadership', desc: 'Embed senior product leadership into your organization without a full-time hire. Strategic guidance, team mentoring, and hands-on direction on your timeline.' },
  { id: 'payments',   icon: '◉', featured: false, title: 'Payments & Fintech Consulting',  desc: 'Deep expertise in payments infrastructure, open banking, and fintech strategy across Europe and the Americas. From API architecture to regulatory navigation.' },
]
const servicesEs = [
  { id: 'ai-strategy', icon: '⬡', featured: true,  title: 'Estrategia de IA & Transformación',  desc: 'Vamos más allá de los experimentos de IA. Diseñamos y ejecutamos estrategias de IA que generan ventajas competitivas medibles — desde la gobernanza hasta la adopción empresarial.' },
  { id: 'web3',        icon: '◈', featured: false, title: 'Asesoría Web3 & Tokenización',        desc: 'Ayudamos a empresas a diseñar y lanzar iniciativas de tokenización — desde tokenización de activos hasta infraestructura DeFi — con rigor de grado empresarial.' },
  { id: 'delivery',   icon: '◎', featured: false, title: 'Transformación de Entrega',           desc: 'Reestructura la entrega de producto e ingeniería para ganar velocidad, calidad y resiliencia. Aportamos disciplina de entrega empresarial.' },
  { id: 'fractional', icon: '◫', featured: false, title: 'Liderazgo de Producto Fraccionado',   desc: 'Integra liderazgo senior de producto en tu organización sin una contratación a tiempo completo. Guía estratégica y dirección práctica según tu calendario.' },
  { id: 'payments',   icon: '◉', featured: false, title: 'Consultoría de Pagos & Fintech',      desc: 'Expertise profundo en infraestructura de pagos, open banking y estrategia fintech en Europa y las Américas. De la arquitectura API a la navegación regulatoria.' },
]

// Capability ecosystem nodes — placed around a center hub
const capabilities = [
  { id: 'ai',           label: 'AI Strategy',          labelEs: 'Estrategia de IA',       icon: '⬡', angle: 0,   color: '#28A9E1', desc: 'Enterprise AI adoption & governance', descEs: 'Adopción de IA empresarial y gobernanza' },
  { id: 'product',      label: 'Product Innovation',   labelEs: 'Innovación de Producto', icon: '◫', angle: 60,  color: '#7DD3F5', desc: 'Strategy, roadmap & fractional leadership', descEs: 'Estrategia, hoja de ruta y liderazgo fraccionado' },
  { id: 'payments',     label: 'Payments & Fintech',   labelEs: 'Pagos & Fintech',        icon: '◎', angle: 120, color: '#28A9E1', desc: 'Infrastructure, open banking & APIs', descEs: 'Infraestructura, open banking y APIs' },
  { id: 'data',         label: 'Data Governance',      labelEs: 'Gobierno de Datos',      icon: '◉', angle: 180, color: '#7DD3F5', desc: 'Architecture, quality & AI readiness', descEs: 'Arquitectura, calidad y preparación para IA' },
  { id: 'tokenization', label: 'Tokenization & Web3',  labelEs: 'Tokenización & Web3',    icon: '◈', angle: 240, color: '#28A9E1', desc: 'Digital assets, CBDCs & DeFi', descEs: 'Activos digitales, CBDCs y DeFi' },
  { id: 'transform',    label: 'Digital Transformation', labelEs: 'Transformación Digital', icon: '◈', angle: 300, color: '#7DD3F5', desc: 'Delivery modernisation & operating models', descEs: 'Modernización de entrega y modelos operativos' },
]

const insightsEn = [
  { tag: 'AI',       title: 'The Real Barriers to Enterprise AI Adoption',              excerpt: "Most AI initiatives fail not because of technology, but because of governance, data quality, and change management. Here's what actually works.",                href: '/insights/enterprise-ai-adoption' },
  { tag: 'Web3',     title: 'Web3 and the Future of Collective Ownership',              excerpt: 'How tokenization is redefining ownership models for assets, organizations, and value exchange at a global scale.',                                                href: '/insights/web3-collective-ownership' },
  { tag: 'Payments', title: "Open Banking Is Not a Feature — It's a Business Model",   excerpt: 'How forward-thinking financial institutions are using open banking to unlock new revenue streams, not just comply with regulation.',                             href: '/insights/open-banking-business-model' },
]
const insightsEs = [
  { tag: 'IA',       title: 'Las Verdaderas Barreras para Adoptar IA Empresarial',     excerpt: 'La mayoría de las iniciativas de IA fracasan no por la tecnología, sino por el gobierno de datos, la calidad y la gestión del cambio.',                   href: '/insights/enterprise-ai-adoption' },
  { tag: 'Web3',     title: 'Web3 y el Futuro de la Propiedad Colectiva',              excerpt: 'Cómo la tokenización está redefiniendo los modelos de propiedad de activos, organizaciones e intercambio de valor a escala global.',                         href: '/insights/web3-collective-ownership' },
  { tag: 'Pagos',    title: 'El Open Banking No Es una Función — Es un Modelo de Negocio', excerpt: 'Cómo las instituciones financieras más innovadoras usan el open banking para desbloquear nuevas fuentes de ingresos.',                                 href: '/insights/open-banking-business-model' },
]

export default function HomePage() {
  const { lang, t } = useLang()
  const services  = lang === 'es' ? servicesEs  : servicesEn
  const artList   = lang === 'es' ? insightsEs  : insightsEn
  const whyItems  = [
    { title: t('home','why1Title'), desc: t('home','why1Desc') },
    { title: t('home','why2Title'), desc: t('home','why2Desc') },
    { title: t('home','why3Title'), desc: t('home','why3Desc') },
    { title: t('home','why4Title'), desc: t('home','why4Desc') },
  ]

  return (
    <>
      {/* ══════════════════════════════════════════════════════ HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] via-[#001B4E] to-[#000E2B]">
          <NeuralNetwork />
          <div className="absolute inset-0 bg-gradient-radial from-[#28A9E1]/8 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 pt-36">
          {/* AI-first badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#28A9E1]/30 bg-[#28A9E1]/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#28A9E1] animate-pulse" />
            <span className="text-[#28A9E1] text-xs font-semibold tracking-widest uppercase">
              {t('home','heroTagline')}
            </span>
          </div>

          {/* Core differentiator — above the fold */}
          <p className="text-white/50 text-sm sm:text-base font-medium tracking-wide uppercase mb-5 max-w-2xl mx-auto">
            {t('home','heroDiff')}
          </p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            {t('home','heroH1a')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28A9E1] to-[#7DD3F5]">
              {t('home','heroH1b')}
            </span>{' '}
            {t('home','heroH1c')}
          </h1>

          <p className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {t('home','heroSub')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"      className="btn-primary text-base w-full sm:w-auto">{t('home','heroCta1')}</Link>
            <Link href="/case-studies" className="btn-secondary text-base w-full sm:w-auto">{t('home','heroCta2')}</Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <span className="text-xs text-white uppercase tracking-widest">{t('home','scrollCue')}</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ EXPERTISE STRIP */}
      <section className="border-y border-white/10 bg-[#000E2B]/60 backdrop-blur-sm overflow-hidden" aria-label="Expertise">
        <div className="py-5 flex items-center">
          <div className="flex animate-[marquee_24s_linear_infinite] whitespace-nowrap">
            {[...expertiseItems, ...expertiseItems].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-8">
                <span className="text-[#28A9E1] text-base" aria-hidden="true">{item.icon}</span>
                <span className="font-display text-xs font-semibold text-white/60 uppercase tracking-widest">{item.label}</span>
                <span className="text-white/15 mx-2" aria-hidden="true">·</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>

      {/* ══════════════════════════════════════════════════════ PROVEN OUTCOMES */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" aria-label="Proven outcomes">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-tag">{t('home','provenTag')}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">{t('home','provenH2')}</h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{t('home','provenSub')}</p>
            </div>
          </ScrollReveal>

          {/* Top row — 3 hero metrics, larger */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 mb-4 lg:mb-5">
            {[
              { value: 50000, suffix: ' TPS',  label: lang === 'es' ? 'Infraestructura de pagos escalada' : 'Payment infrastructure scaled',           icon: '◉' },
              { value: 2.5,   suffix: 'M+',    label: lang === 'es' ? 'Usuarios bancarios migrados a plataformas digitales' : 'Banking users migrated to digital platforms', icon: '◫', decimals: 1 },
              { value: 470,   suffix: 'M',     label: lang === 'es' ? 'En activos tokenizados y digitales delimitados (€)' : 'In tokenized and digital assets scoped (€)', icon: '◈', prefix: '€' },
            ].map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.08}>
                <div className="relative overflow-hidden rounded-2xl border border-[#28A9E1]/30 bg-gradient-to-br from-[#28A9E1]/8 to-transparent p-8 lg:p-10 text-center group hover:border-[#28A9E1]/60 transition-all duration-300">
                  <div className="absolute top-3 right-4 text-[#28A9E1]/20 text-2xl" aria-hidden="true">{m.icon}</div>
                  <div className="font-display text-5xl lg:text-6xl font-bold text-[#28A9E1] mb-3 leading-none tracking-tight">
                    <CountUp end={m.value} suffix={m.suffix} prefix={m.prefix ?? ''} decimals={m.decimals} />
                  </div>
                  <p className="text-white/60 text-sm leading-snug">{m.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom row — 3 supporting metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
            {[
              { value: 90,  suffix: '%',      label: lang === 'es' ? 'Reducción del esfuerzo operativo mediante automatización' : 'Operations effort reduction through automation', icon: '⬡' },
              { value: 85,  suffix: '%',      label: lang === 'es' ? 'Reducción del fraude con detección basada en IA' : 'Fraud reduction via AI-powered detection',           icon: '⬡' },
              { value: 15,  suffix: ' TB/day',label: lang === 'es' ? 'Analítica de seguridad procesada en tiempo real' : 'Security analytics processed in real time',          icon: '◉' },
            ].map((m, i) => (
              <ScrollReveal key={m.label} delay={0.24 + i * 0.08}>
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/3 p-7 text-center hover:border-[#28A9E1]/30 hover:bg-[#28A9E1]/5 transition-all duration-300">
                  <div className="absolute top-3 right-4 text-[#28A9E1]/15 text-xl" aria-hidden="true">{m.icon}</div>
                  <div className="font-display text-4xl lg:text-5xl font-bold text-[#28A9E1] mb-3 leading-none">
                    <CountUp end={m.value} suffix={m.suffix} />
                  </div>
                  <p className="text-white/55 text-sm leading-snug">{m.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ SERVICES — AI #1 */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="Services">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-tag">{t('home','servicesTag')}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">{t('home','servicesH2')}</h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{t('home','servicesSub')}</p>
            </div>
          </ScrollReveal>

          {/* AI — hero card, full width */}
          <ScrollReveal>
            <Link href="/services#ai-strategy"
              className="group block card-dark p-8 lg:p-10 mb-6 hover:border-[#28A9E1]/60 transition-all duration-300 rounded-xl border-[#28A9E1]/20 bg-[#28A9E1]/3"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex items-center gap-5 flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-[#28A9E1]/15 border border-[#28A9E1]/30 flex items-center justify-center text-[#28A9E1] text-3xl group-hover:bg-[#28A9E1]/25 transition-colors">
                    ⬡
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#28A9E1]/15 border border-[#28A9E1]/30 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider mb-2">
                      {lang === 'es' ? '★ Servicio Principal' : '★ Primary Service'}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-white group-hover:text-[#28A9E1] transition-colors">
                      {services[0].title}
                    </h3>
                  </div>
                </div>
                <div className="lg:border-l lg:border-white/10 lg:pl-8 flex-1">
                  <p className="text-white/60 text-base lg:text-lg leading-relaxed">{services[0].desc}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2 text-[#28A9E1] font-medium text-sm lg:text-base">
                    {t('home','serviceLearn')}
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Remaining 4 services — grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(1).map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <Link href={`/services#${service.id}`}
                  className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-xl mb-5 group-hover:bg-[#28A9E1]/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-[#28A9E1] transition-colors">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-[#28A9E1] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('home','serviceLearn')}
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link href="/services" className="btn-secondary">{t('home','servicesLink')}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ CAPABILITY ECOSYSTEM */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" aria-label="Capability ecosystem">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-tag">{t('home','ecoTag')}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">{t('home','ecoH2')}</h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{t('home','ecoSub')}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative">
              {/* Desktop hex-web layout */}
              <div className="hidden lg:block">
                <div className="relative mx-auto" style={{ width: 680, height: 680 }}>
                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-[#28A9E1]/10 border-2 border-[#28A9E1]/40 flex flex-col items-center justify-center z-20 shadow-[0_0_40px_rgba(40,169,225,0.2)]">
                    <span className="font-display text-[#28A9E1] font-bold text-lg leading-tight text-center">Synapxi<br />Tech</span>
                  </div>

                  {/* SVG connector lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 680 680" aria-hidden="true">
                    {capabilities.map((cap) => {
                      const rad = (cap.angle - 90) * Math.PI / 180
                      const r = 240
                      const x = 340 + r * Math.cos(rad)
                      const y = 340 + r * Math.sin(rad)
                      return (
                        <line key={cap.id}
                          x1="340" y1="340" x2={x} y2={y}
                          stroke={cap.color} strokeWidth="1" strokeOpacity="0.25"
                          strokeDasharray="4 6"
                        />
                      )
                    })}
                    {/* Outer connecting ring (partial arcs shown as circle) */}
                    <circle cx="340" cy="340" r="240" fill="none" stroke="#28A9E1" strokeWidth="0.5" strokeOpacity="0.1" />
                  </svg>

                  {/* Capability nodes */}
                  {capabilities.map((cap) => {
                    const rad    = (cap.angle - 90) * Math.PI / 180
                    const r      = 240
                    const cx     = 340 + r * Math.cos(rad)
                    const cy     = 340 + r * Math.sin(rad)
                    const label  = lang === 'es' ? cap.labelEs : cap.label
                    const desc   = lang === 'es' ? cap.descEs  : cap.desc
                    return (
                      <div
                        key={cap.id}
                        className="absolute flex flex-col items-center text-center"
                        style={{ left: cx, top: cy, transform: 'translate(-50%, -50%)', width: 130 }}
                      >
                        <div className="w-14 h-14 rounded-full bg-[#001B4E] border border-[#28A9E1]/35 flex items-center justify-center text-[#28A9E1] text-xl mb-2 shadow-[0_0_20px_rgba(40,169,225,0.15)]">
                          {cap.icon}
                        </div>
                        <p className="font-display text-white text-xs font-semibold leading-snug mb-1">{label}</p>
                        <p className="text-white/35 text-[10px] leading-snug">{desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Mobile — simple grid */}
              <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
                {capabilities.map((cap) => (
                  <div key={cap.id} className="card-dark p-5 rounded-xl text-center">
                    <div className="w-10 h-10 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/25 flex items-center justify-center text-[#28A9E1] text-lg mx-auto mb-3">
                      {cap.icon}
                    </div>
                    <p className="font-display text-white text-xs font-semibold leading-snug mb-1">{lang === 'es' ? cap.labelEs : cap.label}</p>
                    <p className="text-white/40 text-[10px] leading-snug">{lang === 'es' ? cap.descEs : cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ TECH ECOSYSTEM */}
      <TechEcosystem />

      {/* ══════════════════════════════════════════════════════ FEATURED CASE STUDY */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="Featured case study">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal><div className="mb-10"><span className="section-tag">{t('home','featuredTag')}</span></div></ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 mb-6">
                  <span className="text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">Payments · Automation · Latin America</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{t('home','featuredH2')}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">{t('home','featuredSub')}</p>
                <Link href="/case-studies" className="btn-primary">{t('home','featuredCta')}</Link>
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
                    <p className="text-white/50 text-sm leading-snug">{t('home',m.labelKey)}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ WHY SYNAPXI */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" aria-label="Why Synapxi Tech">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-tag">{t('home','whyTag')}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">{t('home','whyH2')}</h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{t('home','whySub')}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyItems.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.1}>
                <div className="card-dark p-8 h-full">
                  <div className="w-8 h-8 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-xs font-bold font-display mb-5">
                    {String(i+1).padStart(2,'0')}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">{reason.title}</h3>
                  <p className="text-white/50 leading-relaxed">{reason.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ INSIGHTS */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="Insights">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="section-tag">{t('home','insightsTag')}</span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">{t('home','insightsH2')}</h2>
              </div>
              <Link href="/insights" className="btn-secondary text-sm">{t('home','insightsLink')}</Link>
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

      {/* ══════════════════════════════════════════════════════ CTA */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" aria-label="Call to action">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden border border-[#28A9E1]/20 bg-gradient-to-br from-[#001B4E] to-[#001030] p-12 lg:p-16 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#28A9E1]/50 to-transparent" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#28A9E1]/20 to-transparent" />
              <span className="section-tag">{t('home','ctaTag')}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{t('home','ctaH2')}</h2>
              <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">{t('home','ctaSub')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-base">{t('home','ctaBtn1')}</Link>
                <Link href="/about"   className="btn-secondary text-base">{t('home','ctaBtn2')}</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-4 bg-[#001B4E]/95 backdrop-blur-md border-t border-white/10">
        <Link href="/contact" className="btn-primary w-full text-center text-sm">{t('home','mobileCta')}</Link>
      </div>
    </>
  )
}
