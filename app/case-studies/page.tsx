'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CountUp from '@/components/CountUp'
import { useLang } from '@/context/LangContext'

// All cases fully anonymous — geographic hints only, no company names
const caseStudiesEn = [
  {
    id: 'latam-payments-automation',
    name: 'Latin American Fintech — Payments Automation',
    subtitle: 'Payments Automation at Scale',
    industry: 'Payments · Fintech',
    region: 'Latin America (Colombia / Mexico)',
    challenge:
      'A fast-growing Latin American fintech managing high-volume payment reconciliation was drowning in manual processes. As transaction volumes surged past millions per month, the operations team faced an unsustainable burden that threatened both accuracy and scalability.',
    approach:
      'We designed and led the product strategy for an intelligent reconciliation and payments operations platform — defining the core product architecture, building the automation framework, and embedding with the product and engineering teams through delivery.',
    role: 'Product Strategy Lead & Advisory',
    metrics: [
      { value: 16,    suffix: 'M+', label: 'Monthly Transactions' },
      { value: 95,    suffix: '%',  label: 'Automation Rate' },
      { value: 300,   suffix: '+',  label: 'Active Users' },
      { value: 30000, suffix: '+',  label: 'Annual Work Hours Saved' },
    ],
    impact:
      'The platform transformed the client\'s operational model, enabling the team to scale transaction volumes without proportional headcount growth, while dramatically improving reconciliation accuracy and reducing error rates.',
    tags: ['Payments', 'Product Strategy', 'Automation'],
  },
  {
    id: 'european-fintechtainment',
    name: 'European Operator — Embedded Finance & Entertainment',
    subtitle: 'Where Entertainment Meets Financial Services',
    industry: 'Fintech · Entertainment',
    region: 'Western Europe (Spain / UK)',
    challenge:
      'A European operator at the intersection of financial services and entertainment needed to define a product strategy for a novel embedded finance experience — a greenfield challenge with no existing playbook in the market.',
    approach:
      'We ran an intensive product discovery and market validation process, defined the core product proposition, designed the data and payments architecture, and guided the team through regulatory considerations for their embedded finance model.',
    role: 'Fractional Product Leadership & Payments Advisory',
    metrics: [
      { value: 3,   suffix: 'M+',  label: 'Seed Funding Secured (€)' },
      { value: 14,  suffix: ' wk', label: 'MVP Delivered In' },
      { value: 4,   suffix: 'x',   label: 'User Conversion vs. Benchmark' },
      { value: 92,  suffix: '%',   label: 'Regulatory Checklist Completed' },
    ],
    impact:
      'Delivered a validated product vision, go-to-market strategy, and technical roadmap that enabled the company to secure investment and proceed to build phase with confidence.',
    tags: ['Product Strategy', 'Payments', 'Fractional Leadership'],
  },
  {
    id: 'european-realestate-tokenization',
    name: 'European Real Estate Firm — Asset Tokenization',
    subtitle: 'Democratizing Property Investment',
    industry: 'Real Estate · Web3',
    region: 'Southern Europe (Spain / Portugal)',
    challenge:
      'A real estate investment firm wanted to explore tokenizing commercial property assets to broaden their investor base and improve liquidity. They had the assets but no technical or regulatory blueprint for a tokenized offering.',
    approach:
      'We designed the tokenization strategy end-to-end: from legal structuring considerations and token economics through to the technical architecture for smart contracts, investor onboarding, and secondary market infrastructure.',
    role: 'Web3 Strategy & Tokenization Advisory',
    metrics: [
      { value: 45,  suffix: 'M+',  label: 'Asset Value Scoped (€)' },
      { value: 120, suffix: '+',   label: 'Prospective Investors Mapped' },
      { value: 8,   suffix: ' wk', label: 'Blueprint Delivered In' },
      { value: 3,   suffix: '',    label: 'Jurisdictions Covered' },
    ],
    impact:
      'Produced a complete tokenization blueprint enabling the client to engage legal counsel, technology partners, and investors with a credible, detailed proposal.',
    tags: ['Web3', 'Tokenization', 'Product Strategy'],
  },
  {
    id: 'european-cbdc-initiative',
    name: 'European Financial Institution — CBDC Infrastructure',
    subtitle: 'Central Bank Digital Currency Infrastructure',
    industry: 'Banking · Digital Assets',
    region: 'Central Europe (ECB ecosystem)',
    challenge:
      'A European financial institution participating in a central bank digital currency initiative needed to design the product and technical architecture for a CBDC infrastructure pilot, integrating with legacy settlement systems and meeting stringent regulatory requirements.',
    approach:
      'We led the product and technical advisory for the CBDC design sprint — mapping regulatory requirements, evaluating distributed ledger technology options, designing interoperability with existing financial market infrastructure, and producing a prototype specification.',
    role: 'Product & Technical Advisory',
    metrics: [
      { value: 6,   suffix: '',    label: 'DLT Platforms Evaluated' },
      { value: 12,  suffix: ' wk', label: 'Design Sprint Duration' },
      { value: 99,  suffix: '%',   label: 'Settlement Finality Rate (Prototype)' },
      { value: 4,   suffix: '+',   label: 'Regulatory Frameworks Addressed' },
    ],
    impact:
      "Delivered a CBDC architecture blueprint and prototype specification that contributed to the institution's active participation in an ECB-adjacent digital euro initiative.",
    tags: ['Digital Assets', 'CBDC', 'Payments'],
  },
  {
    id: 'global-payments-modernization',
    name: 'Global Payments Provider — Infrastructure Modernization',
    subtitle: 'Cross-Border Infrastructure Modernization',
    industry: 'Payments',
    region: 'Global (Europe · Americas · Asia-Pacific)',
    challenge:
      'A global payments provider needed to modernize their cross-border infrastructure to support real-time settlement, ISO 20022 compliance, and alternative payment method integration across 30+ markets.',
    approach:
      'We conducted a comprehensive payments infrastructure audit and led the product strategy for a phased modernization program, prioritizing high-revenue corridors, defining API architecture standards, and aligning engineering capacity with strategic payment method expansion.',
    role: 'Payments Strategy & Product Advisory',
    metrics: [
      { value: 30,  suffix: '+',   label: 'Markets in Scope' },
      { value: 40,  suffix: '%',   label: 'Infra Cost Reduction (Target)' },
      { value: 18,  suffix: '',    label: 'API Endpoints Standardized' },
      { value: 2,   suffix: 'x',   label: 'Release Velocity Improvement' },
    ],
    impact:
      'Delivered a multi-phase payments modernization roadmap that reduced complexity, improved developer experience, and positioned the platform for next-generation payment scheme participation.',
    tags: ['Payments', 'Digital Transformation', 'Product Strategy'],
  },
  {
    id: 'tier1-bank-transformation',
    name: 'Tier-1 Financial Institution — Product Operating Model',
    subtitle: 'Enterprise Product Operating Model',
    industry: 'Banking',
    region: 'Europe · Americas (multi-geography)',
    challenge:
      'A large financial institution operating across multiple geographies was struggling with slow delivery cycles, siloed product teams, and inconsistent customer experience across markets. Digital transformation initiatives were stalling at execution.',
    approach:
      'We designed and helped implement a new product operating model — restructuring team topology, establishing product management standards, defining an OKR framework aligned to business outcomes, and coaching senior product leaders through the cultural transition.',
    role: 'Delivery Transformation & Fractional Product Leadership',
    metrics: [
      { value: 55,  suffix: '%',   label: 'Faster Release Cycle' },
      { value: 8,   suffix: '',    label: 'Product Teams Restructured' },
      { value: 40,  suffix: '%',   label: 'Reduction in Blocked Sprints' },
      { value: 12,  suffix: ' mo', label: 'Transformation Program Length' },
    ],
    impact:
      'Measurably improved delivery velocity and cross-functional alignment, with product teams reporting significantly higher confidence in prioritization and stakeholder management.',
    tags: ['Digital Transformation', 'Delivery Transformation', 'Fractional Leadership'],
  },
  {
    id: 'european-cybersecurity-ai',
    name: 'European Cybersecurity Startup — AI Threat Detection',
    subtitle: 'Intelligent Cybersecurity for Enterprise',
    industry: 'Cybersecurity · AI',
    region: 'Northern Europe (Netherlands / Germany)',
    challenge:
      'A Northern European cybersecurity startup was building an AI-powered threat detection platform but lacked the product strategy and market positioning to take it from R&D to enterprise commercial success.',
    approach:
      'We ran a product-market fit discovery process, defined the enterprise buyer journey, designed the product packaging and pricing model, and developed the technical validation framework that enterprise security teams require before procurement.',
    role: 'Product Strategy & AI Advisory',
    metrics: [
      { value: 3,   suffix: '',    label: 'Enterprise Contracts Closed' },
      { value: 2.1, suffix: 'M',   label: 'ARR Generated (€)' },
      { value: 68,  suffix: '%',   label: 'Sales Cycle Reduction' },
      { value: 5,   suffix: ' mo', label: 'Time to First Enterprise Deal' },
    ],
    impact:
      'Delivered a market-validated product strategy and enterprise go-to-market playbook that enabled the company to close its first major enterprise contracts.',
    tags: ['AI', 'Product Strategy', 'Cybersecurity'],
  },
]

const caseStudiesEs = [
  {
    id: 'latam-payments-automation',
    name: 'Fintech Latinoamericana — Automatización de Pagos',
    subtitle: 'Automatización de Pagos a Escala',
    industry: 'Pagos · Fintech',
    region: 'América Latina (Colombia / México)',
    challenge:
      'Una fintech latinoamericana de rápido crecimiento que gestionaba conciliación de pagos de alto volumen estaba siendo superada por procesos manuales. A medida que los volúmenes de transacciones superaron los millones por mes, el equipo de operaciones enfrentó una carga insostenible.',
    approach:
      'Diseñamos y lideramos la estrategia de producto para una plataforma inteligente de conciliación y operaciones de pagos — definiendo la arquitectura del producto, construyendo el framework de automatización y embarcándonos con los equipos de producto e ingeniería durante la entrega.',
    role: 'Líder de Estrategia de Producto y Asesoría',
    metrics: [
      { value: 16,    suffix: 'M+', label: 'Transacciones Mensuales' },
      { value: 95,    suffix: '%',  label: 'Tasa de Automatización' },
      { value: 300,   suffix: '+',  label: 'Usuarios Activos' },
      { value: 30000, suffix: '+',  label: 'Horas de Trabajo Ahorradas/Año' },
    ],
    impact:
      'La plataforma transformó el modelo operativo del cliente, permitiendo al equipo escalar los volúmenes de transacciones sin un crecimiento proporcional de personal, mejorando drásticamente la precisión de la conciliación.',
    tags: ['Pagos', 'Estrategia de Producto', 'Automatización'],
  },
  {
    id: 'european-fintechtainment',
    name: 'Operador Europeo — Finanzas Embebidas y Entretenimiento',
    subtitle: 'Donde el Entretenimiento se Encuentra con los Servicios Financieros',
    industry: 'Fintech · Entretenimiento',
    region: 'Europa Occidental (España / Reino Unido)',
    challenge:
      'Un operador europeo en la intersección de servicios financieros y entretenimiento necesitaba definir una estrategia de producto para una experiencia novedosa de finanzas embebidas — un desafío de hoja en blanco sin un manual existente.',
    approach:
      'Ejecutamos un proceso intensivo de descubrimiento de producto y validación de mercado, definimos la propuesta de valor central, diseñamos la arquitectura de datos y pagos, y guiamos al equipo a través de las consideraciones regulatorias.',
    role: 'Liderazgo de Producto Fraccionado y Asesoría de Pagos',
    metrics: [
      { value: 3,   suffix: 'M+',  label: 'Financiación Semilla Asegurada (€)' },
      { value: 14,  suffix: ' sem', label: 'MVP Entregado En' },
      { value: 4,   suffix: 'x',   label: 'Conversión de Usuarios vs. Benchmark' },
      { value: 92,  suffix: '%',   label: 'Checklist Regulatorio Completado' },
    ],
    impact:
      'Entregamos una visión de producto validada, estrategia go-to-market y hoja de ruta técnica que permitió a la empresa asegurar inversión y avanzar a la fase de construcción con confianza.',
    tags: ['Estrategia de Producto', 'Pagos', 'Liderazgo Fraccionado'],
  },
  {
    id: 'european-realestate-tokenization',
    name: 'Empresa Inmobiliaria Europea — Tokenización de Activos',
    subtitle: 'Democratizando la Inversión Inmobiliaria',
    industry: 'Inmobiliaria · Web3',
    region: 'Sur de Europa (España / Portugal)',
    challenge:
      'Una empresa de inversión inmobiliaria quería explorar la tokenización de activos comerciales para ampliar su base de inversores y mejorar la liquidez. Tenían los activos pero ningún blueprint técnico ni regulatorio.',
    approach:
      'Diseñamos la estrategia de tokenización de extremo a extremo: desde consideraciones de estructuración legal y economía de tokens hasta la arquitectura técnica para contratos inteligentes.',
    role: 'Estrategia Web3 y Asesoría de Tokenización',
    metrics: [
      { value: 45,  suffix: 'M+',  label: 'Valor de Activos en Scope (€)' },
      { value: 120, suffix: '+',   label: 'Inversores Potenciales Mapeados' },
      { value: 8,   suffix: ' sem', label: 'Blueprint Entregado En' },
      { value: 3,   suffix: '',    label: 'Jurisdicciones Cubiertas' },
    ],
    impact:
      'Produjimos un blueprint completo de tokenización que permitió al cliente involucrar a asesores legales, socios tecnológicos e inversores con una propuesta detallada y creíble.',
    tags: ['Web3', 'Tokenización', 'Estrategia de Producto'],
  },
  {
    id: 'european-cbdc-initiative',
    name: 'Institución Financiera Europea — Infraestructura CBDC',
    subtitle: 'Infraestructura de Moneda Digital de Banco Central',
    industry: 'Banca · Activos Digitales',
    region: 'Europa Central (ecosistema BCE)',
    challenge:
      'Una institución financiera europea participante en una iniciativa de moneda digital de banco central necesitaba diseñar la arquitectura de producto y técnica para un piloto de infraestructura CBDC.',
    approach:
      'Lideramos la asesoría de producto y técnica para el design sprint del CBDC — mapeando requisitos regulatorios, evaluando opciones de tecnología de ledger distribuido y diseñando interoperabilidad con la infraestructura de mercados financieros existente.',
    role: 'Asesoría de Producto y Técnica',
    metrics: [
      { value: 6,   suffix: '',    label: 'Plataformas DLT Evaluadas' },
      { value: 12,  suffix: ' sem', label: 'Duración del Design Sprint' },
      { value: 99,  suffix: '%',   label: 'Tasa de Finalidad de Liquidación (Prototipo)' },
      { value: 4,   suffix: '+',   label: 'Marcos Regulatorios Abordados' },
    ],
    impact:
      'Entregamos un blueprint de arquitectura CBDC y especificación de prototipo que contribuyó a la participación activa de la institución en una iniciativa adyacente al euro digital del BCE.',
    tags: ['Activos Digitales', 'CBDC', 'Pagos'],
  },
  {
    id: 'global-payments-modernization',
    name: 'Proveedor Global de Pagos — Modernización de Infraestructura',
    subtitle: 'Modernización de Infraestructura Transfronteriza',
    industry: 'Pagos',
    region: 'Global (Europa · Américas · Asia-Pacífico)',
    challenge:
      'Un proveedor global de pagos necesitaba modernizar su infraestructura transfronteriza para soportar liquidación en tiempo real, cumplimiento ISO 20022 e integración de métodos de pago alternativos en más de 30 mercados.',
    approach:
      'Realizamos una auditoría integral de infraestructura de pagos y lideramos la estrategia de producto para un programa de modernización por fases.',
    role: 'Estrategia de Pagos y Asesoría de Producto',
    metrics: [
      { value: 30,  suffix: '+',   label: 'Mercados en Scope' },
      { value: 40,  suffix: '%',   label: 'Reducción de Coste de Infraestructura (Objetivo)' },
      { value: 18,  suffix: '',    label: 'Endpoints API Estandarizados' },
      { value: 2,   suffix: 'x',   label: 'Mejora de Velocidad de Release' },
    ],
    impact:
      'Entregamos una hoja de ruta de modernización de pagos en múltiples fases que redujo la complejidad y posicionó la plataforma para participar en esquemas de pago de próxima generación.',
    tags: ['Pagos', 'Transformación Digital', 'Estrategia de Producto'],
  },
  {
    id: 'tier1-bank-transformation',
    name: 'Institución Financiera Tier-1 — Modelo Operativo de Producto',
    subtitle: 'Modelo Operativo de Producto Empresarial',
    industry: 'Banca',
    region: 'Europa · Américas (multi-geografía)',
    challenge:
      'Una gran institución financiera que operaba en múltiples geografías luchaba con ciclos de entrega lentos, equipos de producto en silos y una experiencia de cliente inconsistente entre mercados.',
    approach:
      'Diseñamos e implementamos un nuevo modelo operativo de producto — reestructurando la topología de equipos, estableciendo estándares de gestión de producto y definiendo un framework de OKRs alineado a resultados de negocio.',
    role: 'Transformación de Entrega y Liderazgo de Producto Fraccionado',
    metrics: [
      { value: 55,  suffix: '%',   label: 'Ciclo de Release más Rápido' },
      { value: 8,   suffix: '',    label: 'Equipos de Producto Reestructurados' },
      { value: 40,  suffix: '%',   label: 'Reducción de Sprints Bloqueados' },
      { value: 12,  suffix: ' mes', label: 'Duración del Programa de Transformación' },
    ],
    impact:
      'Mejoramos measurablemente la velocidad de entrega y la alineación multifuncional, con equipos de producto reportando mayor confianza en la priorización y gestión de stakeholders.',
    tags: ['Transformación Digital', 'Transformación de Entrega', 'Liderazgo Fraccionado'],
  },
  {
    id: 'european-cybersecurity-ai',
    name: 'Startup Europea de Ciberseguridad — Detección de Amenazas con IA',
    subtitle: 'Ciberseguridad Inteligente para Empresas',
    industry: 'Ciberseguridad · IA',
    region: 'Norte de Europa (Países Bajos / Alemania)',
    challenge:
      'Una startup de ciberseguridad del norte de Europa estaba construyendo una plataforma de detección de amenazas basada en IA, pero carecía de la estrategia de producto y posicionamiento de mercado para pasar de I+D al éxito comercial empresarial.',
    approach:
      'Ejecutamos un proceso de descubrimiento de product-market fit, definimos el buyer journey empresarial, diseñamos el modelo de empaquetado y precios del producto.',
    role: 'Estrategia de Producto y Asesoría de IA',
    metrics: [
      { value: 3,   suffix: '',    label: 'Contratos Empresariales Cerrados' },
      { value: 2.1, suffix: 'M',   label: 'ARR Generado (€)' },
      { value: 68,  suffix: '%',   label: 'Reducción del Ciclo de Ventas' },
      { value: 5,   suffix: ' mes', label: 'Tiempo hasta Primer Contrato Empresarial' },
    ],
    impact:
      'Entregamos una estrategia de producto validada en el mercado y un playbook de go-to-market empresarial que permitió a la empresa cerrar sus primeros contratos empresariales importantes.',
    tags: ['IA', 'Estrategia de Producto', 'Ciberseguridad'],
  },
]

export default function CaseStudiesPage() {
  const { lang, t } = useLang()
  const cases = lang === 'es' ? caseStudiesEs : caseStudiesEn

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Case studies hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('caseStudies', 'tag')}</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">{t('caseStudies', 'h1')}</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">{t('caseStudies', 'sub')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CASES ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col gap-12 lg:gap-16">
          {cases.map((cs, idx) => (
            <ScrollReveal key={cs.id}>
              <article
                id={cs.id}
                className={`card-dark rounded-2xl overflow-hidden ${idx === 0 ? 'border-[#28A9E1]/30' : ''}`}
                aria-label={`Case study: ${cs.name}`}
              >
                {/* Header */}
                <div className={`px-8 py-7 border-b border-white/10 ${idx === 0 ? 'bg-[#28A9E1]/5' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {cs.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">{tag}</span>
                        ))}
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs uppercase tracking-wider">{t('caseStudies', 'anonymous')}</span>
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-1">{cs.name}</h2>
                      <p className="text-[#28A9E1] font-medium">{cs.subtitle}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                      <span className="text-white/40 text-sm">{cs.industry}</span>
                      <span className="text-white/40 text-sm">{cs.region}</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="md:col-span-1">
                    <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">{t('caseStudies', 'challengeL')}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">{t('caseStudies', 'approachL')}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{cs.approach}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">{t('caseStudies', 'roleL')}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{cs.role}</p>
                    <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">{t('caseStudies', 'impactL')}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{cs.impact}</p>
                  </div>
                  <div className="md:col-span-1">
                    {cs.metrics.length > 0 ? (
                      <>
                        <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">{t('caseStudies', 'resultsL')}</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {cs.metrics.map((m) => (
                            <div key={m.label} className="bg-[#28A9E1]/5 border border-[#28A9E1]/15 rounded-lg p-3 text-center">
                              <div className="font-display text-xl font-bold text-[#28A9E1]"><CountUp end={m.value} suffix={m.suffix} /></div>
                              <p className="text-white/40 text-xs mt-1 leading-snug">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="bg-white/3 border border-white/8 rounded-lg p-5 h-full flex items-center justify-center">
                        <p className="text-white/30 text-xs text-center italic">{t('caseStudies', 'ndaNote')}</p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ─── CTA ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="CTA">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('caseStudies', 'ctaTag')}</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">{t('caseStudies', 'ctaH2')}</h2>
            <p className="text-white/60 text-lg mb-10">{t('caseStudies', 'ctaSub')}</p>
            <Link href="/contact" className="btn-primary text-base">{t('caseStudies', 'ctaBtn')}</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
