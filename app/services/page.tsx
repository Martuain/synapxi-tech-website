'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/context/LangContext'

const servicesEn = [
  {
    id: 'ai-strategy',
    icon: '⬡',
    title: 'AI Strategy & Transformation',
    tagline: 'From pilot projects to enterprise-wide intelligence.',
    challenge: { heading: 'The Challenge', body: 'Organizations are under pressure to adopt AI, yet most AI initiatives stall at the pilot stage due to unclear strategy, fragmented data, governance gaps, and misaligned organizational design. Technology investment without strategic clarity delivers no competitive advantage.' },
    approach:  { heading: 'The Synapxi Approach', body: 'We start by auditing your current AI maturity and data landscape, then design a pragmatic AI strategy tied to measurable business outcomes. We help you select the right models, establish governance frameworks, and structure your organization to sustain AI adoption — from quick wins to long-term transformation.' },
    deliverables: ['AI Maturity Assessment & Readiness Report','Strategic AI Roadmap (6–18 months)','Use Case Prioritization Framework','Data & Governance Architecture Recommendations','AI Adoption Playbook','KPI & Success Measurement Framework'],
    outcomes: ['Reduced AI initiative failure rate','Accelerated time-to-value on AI investments','Organizational alignment around AI priorities','Measurable ROI tracking from day one'],
  },
  {
    id: 'web3',
    icon: '◈',
    title: 'Web3 & Tokenization Advisory',
    tagline: 'Designing the business models of the next economy.',
    challenge: { heading: 'The Challenge', body: 'Web3 and tokenization hold transformative potential for asset management, supply chains, financial services, and ownership models — but the space is noisy, technically complex, and littered with failed experiments. Organizations need guidance that combines regulatory awareness, technical credibility, and genuine business model thinking.' },
    approach:  { heading: 'The Synapxi Approach', body: 'We bring enterprise-grade rigor to Web3 strategy. We evaluate where tokenization genuinely creates value for your specific context, design token economics aligned to your business model, and guide you through technology selection, regulatory considerations, and smart contract design — without the hype.' },
    deliverables: ['Web3 Opportunity Assessment','Token Economics Design','Smart Contract Architecture Review','Regulatory Landscape Analysis','Platform & Protocol Selection','Go-to-Market Strategy for Token Launches'],
    outcomes: ['Validated tokenization use cases with real business value','Reduced regulatory and technical risk','Clear implementation roadmap','Investor-ready narrative for tokenized assets'],
  },
  {
    id: 'delivery',
    icon: '◎',
    title: 'Delivery Transformation',
    tagline: 'Engineering the organizational machine behind great products.',
    challenge: { heading: 'The Challenge', body: "Slow delivery is rarely a technology problem. It's a structural one — siloed teams, unclear ownership, misaligned incentives, and processes designed for a different era. The cost of slow delivery compounds every quarter in lost opportunities, delayed revenue, and team attrition." },
    approach:  { heading: 'The Synapxi Approach', body: 'We diagnose delivery bottlenecks across your people, processes, and architecture, then design a transformation program that restores velocity without sacrificing quality. We embed alongside your teams — not as auditors, but as delivery practitioners who have done this before.' },
    deliverables: ['Delivery Diagnostic Assessment','Team Topology & Operating Model Design','Process Redesign & Lean Methodology Implementation','OKR Framework & Product–Engineering Alignment','Release Cadence & Quality Gates Design','Transformation Roadmap (90-day, 6-month, 12-month)'],
    outcomes: ['Measurably faster cycle times and release frequency','Improved product quality and reduced defect rates','Stronger cross-functional alignment','Higher team engagement and retention'],
  },
  {
    id: 'fractional',
    icon: '◫',
    title: 'Fractional Product Leadership',
    tagline: 'Senior product leadership, available when you need it.',
    challenge: { heading: 'The Challenge', body: "Many organizations need senior product leadership for specific phases — launching a new product line, restructuring the product organization, entering a new market, or navigating a strategic pivot — but don't yet have the need or budget for a full-time executive. Junior hires at this stage create compounding strategic risk." },
    approach:  { heading: 'The Synapxi Approach', body: 'We embed senior product leadership into your organization on a fractional basis, operating as a genuine member of your leadership team. We run discovery, define roadmaps, mentor product managers, align stakeholders, and represent product in executive conversations — with the authority and accountability of a full-time role.' },
    deliverables: ['Product Strategy & 12-Month Roadmap','Stakeholder Alignment Framework','Product Team Mentoring & Capability Building','Discovery & Validation Process Design','Product KPI & Metrics Framework','Hiring Specifications for Full-Time Successors'],
    outcomes: ['Immediate strategic clarity without a long hiring cycle','Stronger product culture and team capability','Reduced dependency on founding team for product decisions','Smooth transition to permanent product leadership when ready'],
  },
  {
    id: 'payments',
    icon: '◉',
    title: 'Payments & Fintech Consulting',
    tagline: 'Infrastructure, strategy, and growth across the payments ecosystem.',
    challenge: { heading: 'The Challenge', body: 'The payments landscape is being reshaped by open banking, real-time rails, embedded finance, and regulatory change across Europe and the Americas. Organizations need advisors who understand both the technical infrastructure and the commercial dynamics — not one or the other.' },
    approach:  { heading: 'The Synapxi Approach', body: 'Our payments advisory blends deep technical knowledge of payment infrastructure with commercial strategy. We help financial institutions, fintechs, and corporates evaluate opportunities, design products, select partners, and navigate the regulatory landscape — from PSD2 and ISO 20022 to local schemes and alternative payment methods.' },
    deliverables: ['Payments Strategy Assessment','Payment Infrastructure Architecture Review','Open Banking Opportunity Analysis','Partner & Provider Evaluation','Regulatory Compliance Roadmap','Product Design for Payments Products'],
    outcomes: ['Competitive payments product strategy','Reduced infrastructure cost and complexity','Faster time-to-market for new payment products','Regulatory confidence in new markets'],
  },
]

const servicesEs = [
  {
    id: 'ai-strategy',
    icon: '⬡',
    title: 'Estrategia de IA & Transformación',
    tagline: 'De proyectos piloto a inteligencia a escala empresarial.',
    challenge: { heading: 'El Desafío', body: 'Las organizaciones están bajo presión para adoptar la IA, pero la mayoría de las iniciativas se estancan en la fase piloto debido a estrategias poco claras, datos fragmentados, vacíos de gobernanza y un diseño organizacional desalineado.' },
    approach:  { heading: 'El Enfoque Synapxi', body: 'Comenzamos auditando tu madurez de IA y panorama de datos, luego diseñamos una estrategia de IA pragmática vinculada a resultados de negocio medibles. Ayudamos a seleccionar los modelos correctos, establecer marcos de gobernanza y estructurar tu organización para sostener la adopción de IA.' },
    deliverables: ['Evaluación de Madurez de IA & Informe de Preparación','Hoja de Ruta Estratégica de IA (6–18 meses)','Framework de Priorización de Casos de Uso','Recomendaciones de Arquitectura de Datos & Gobernanza','Playbook de Adopción de IA','Framework de KPIs & Medición del Éxito'],
    outcomes: ['Tasa reducida de fracaso en iniciativas de IA','Tiempo acelerado hacia el valor en inversiones de IA','Alineación organizacional en torno a prioridades de IA','Seguimiento de ROI medible desde el primer día'],
  },
  {
    id: 'web3',
    icon: '◈',
    title: 'Asesoría Web3 & Tokenización',
    tagline: 'Diseñando los modelos de negocio de la próxima economía.',
    challenge: { heading: 'El Desafío', body: 'Web3 y la tokenización tienen un potencial transformador para la gestión de activos, cadenas de suministro, servicios financieros y modelos de propiedad — pero el espacio es ruidoso, técnicamente complejo y lleno de experimentos fallidos.' },
    approach:  { heading: 'El Enfoque Synapxi', body: 'Aportamos rigor de grado empresarial a la estrategia Web3. Evaluamos dónde la tokenización crea genuinamente valor para tu contexto específico, diseñamos economías de tokens alineadas a tu modelo de negocio y te guiamos a través de la selección de tecnología y consideraciones regulatorias.' },
    deliverables: ['Evaluación de Oportunidades Web3','Diseño de Economía de Tokens','Revisión de Arquitectura de Contratos Inteligentes','Análisis del Panorama Regulatorio','Selección de Plataforma & Protocolo','Estrategia Go-to-Market para Lanzamientos de Tokens'],
    outcomes: ['Casos de uso de tokenización validados con valor de negocio real','Riesgo regulatorio y técnico reducido','Hoja de ruta de implementación clara','Narrativa lista para inversores para activos tokenizados'],
  },
  {
    id: 'delivery',
    icon: '◎',
    title: 'Transformación de Entrega',
    tagline: 'Ingenierizar la máquina organizacional detrás de los grandes productos.',
    challenge: { heading: 'El Desafío', body: 'La entrega lenta rara vez es un problema tecnológico. Es estructural — equipos en silos, propiedad poco clara, incentivos desalineados y procesos diseñados para otra era. El costo de la entrega lenta se multiplica cada trimestre.' },
    approach:  { heading: 'El Enfoque Synapxi', body: 'Diagnosticamos los cuellos de botella de entrega en tu gente, procesos y arquitectura, luego diseñamos un programa de transformación que restaura la velocidad sin sacrificar la calidad.' },
    deliverables: ['Evaluación Diagnóstica de Entrega','Diseño de Topología de Equipos & Modelo Operativo','Rediseño de Procesos & Implementación de Metodología Lean','Framework OKR & Alineación Producto–Ingeniería','Diseño de Cadencia de Releases & Puertas de Calidad','Hoja de Ruta de Transformación (90 días, 6 meses, 12 meses)'],
    outcomes: ['Tiempos de ciclo y frecuencia de releases mediblemente más rápidos','Calidad de producto mejorada y tasas de defectos reducidas','Alineación multifuncional más sólida','Mayor compromiso y retención del equipo'],
  },
  {
    id: 'fractional',
    icon: '◫',
    title: 'Liderazgo de Producto Fraccionado',
    tagline: 'Liderazgo senior de producto, disponible cuando lo necesitas.',
    challenge: { heading: 'El Desafío', body: 'Muchas organizaciones necesitan liderazgo senior de producto para fases específicas — lanzar una nueva línea de productos, reestructurar la organización de producto, entrar en un nuevo mercado o navegar un pivote estratégico — pero aún no tienen la necesidad o el presupuesto para un ejecutivo a tiempo completo.' },
    approach:  { heading: 'El Enfoque Synapxi', body: 'Integramos liderazgo senior de producto en tu organización de forma fraccionada, operando como un miembro genuino de tu equipo directivo. Ejecutamos discovery, definimos hojas de ruta, mentorizamos product managers y alineamos stakeholders.' },
    deliverables: ['Estrategia de Producto & Hoja de Ruta de 12 Meses','Framework de Alineación de Stakeholders','Mentoría & Desarrollo de Capacidades del Equipo de Producto','Diseño de Proceso de Discovery & Validación','Framework de KPIs & Métricas de Producto','Especificaciones de Contratación para Sucesores a Tiempo Completo'],
    outcomes: ['Claridad estratégica inmediata sin un largo ciclo de contratación','Cultura de producto más sólida y mayor capacidad del equipo','Menor dependencia del equipo fundador para decisiones de producto','Transición fluida al liderazgo de producto permanente cuando esté listo'],
  },
  {
    id: 'payments',
    icon: '◉',
    title: 'Consultoría de Pagos & Fintech',
    tagline: 'Infraestructura, estrategia y crecimiento en el ecosistema de pagos.',
    challenge: { heading: 'El Desafío', body: 'El panorama de pagos está siendo remodelado por el open banking, los rieles en tiempo real, las finanzas embebidas y los cambios regulatorios en Europa y las Américas. Las organizaciones necesitan asesores que entiendan tanto la infraestructura técnica como la dinámica comercial.' },
    approach:  { heading: 'El Enfoque Synapxi', body: 'Nuestra asesoría de pagos combina un profundo conocimiento técnico de la infraestructura de pagos con la estrategia comercial. Ayudamos a instituciones financieras, fintechs y corporaciones a evaluar oportunidades, diseñar productos y navegar el panorama regulatorio.' },
    deliverables: ['Evaluación de Estrategia de Pagos','Revisión de Arquitectura de Infraestructura de Pagos','Análisis de Oportunidades de Open Banking','Evaluación de Socios & Proveedores','Hoja de Ruta de Cumplimiento Regulatorio','Diseño de Productos de Pagos'],
    outcomes: ['Estrategia de producto de pagos competitiva','Coste y complejidad de infraestructura reducidos','Tiempo de llegada al mercado más rápido para nuevos productos de pago','Confianza regulatoria en nuevos mercados'],
  },
]

export default function ServicesPage() {
  const { lang, t } = useLang()
  const services = lang === 'es' ? servicesEs : servicesEn

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('services','tag')}</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{t('services','h1')}</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">{t('services','sub')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* STICKY SUBNAV */}
      <nav className="sticky top-16 lg:top-20 z-30 bg-[#000E2B]/90 backdrop-blur-md border-b border-white/10 overflow-x-auto" aria-label={t('services','navLabel')}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 min-w-max">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="px-4 py-2 text-sm font-medium text-white/60 hover:text-[#28A9E1] rounded-lg hover:bg-[#28A9E1]/5 transition-all whitespace-nowrap">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {services.map((service, idx) => (
          <section key={service.id} id={service.id} className={`py-16 lg:py-20 ${idx < services.length - 1 ? 'border-b border-white/10' : ''}`}>
            <ScrollReveal>
              <div className="flex items-start gap-5 mb-10">
                <div className="w-14 h-14 rounded-xl bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-2xl flex-shrink-0">{service.icon}</div>
                <div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">{service.title}</h2>
                  <p className="text-[#28A9E1] text-lg font-medium">{service.tagline}</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <ScrollReveal delay={0.05}>
                <div className="card-dark p-7">
                  <h3 className="font-display text-lg font-semibold text-white mb-3">{service.challenge.heading}</h3>
                  <p className="text-white/60 leading-relaxed">{service.challenge.body}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="card-dark p-7 border-[#28A9E1]/20">
                  <h3 className="font-display text-lg font-semibold text-white mb-3">{service.approach.heading}</h3>
                  <p className="text-white/60 leading-relaxed">{service.approach.body}</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <ScrollReveal delay={0.15}>
                <div className="card-dark p-7">
                  <h3 className="font-display text-sm font-semibold text-white uppercase tracking-widest mb-5">{t('services','youReceive')}</h3>
                  <ul className="flex flex-col gap-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-white/60 text-sm">
                        <svg className="w-4 h-4 text-[#28A9E1] mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="card-dark p-7 bg-[#28A9E1]/5 border-[#28A9E1]/20">
                  <h3 className="font-display text-sm font-semibold text-white uppercase tracking-widest mb-5">{t('services','outcomes')}</h3>
                  <ul className="flex flex-col gap-3">
                    {service.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-white/70 text-sm">
                        <svg className="w-4 h-4 text-[#28A9E1] mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="currentColor"/></svg>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('services','ctaTag')}</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">{t('services','ctaH2')}</h2>
            <p className="text-white/60 text-lg mb-10">{t('services','ctaSub')}</p>
            <Link href="/contact" className="btn-primary text-base">{t('services','ctaBtn')}</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
