'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/context/LangContext'

const expertiseEn = [
  { title: 'AI Strategy & Adoption',    description: 'From AI maturity assessment to enterprise-wide deployment — model governance, organizational design, and adoption frameworks that actually get used.' },
  { title: 'Web3 & Tokenization',       description: 'Token economics, smart contract strategy, decentralized finance structures, and institutional-grade blockchain implementations — without the hype.' },
  { title: 'Product Strategy',          description: 'Product vision, roadmap design, discovery frameworks, and operating model design for product organizations that need to move faster and smarter.' },
  { title: 'Payments & Fintech',        description: 'Deep expertise across payment infrastructure, open banking, embedded finance, cross-border rails, and ISO 20022 migration.' },
  { title: 'Data Governance',           description: 'Data architecture, quality frameworks, regulatory compliance, and AI data readiness — the unglamorous foundation of every successful AI initiative.' },
  { title: 'Digital Transformation',    description: 'Enterprise transformation strategy, delivery modernization, team topology design, and change management for complex, multi-geography organizations.' },
]
const expertiseEs = [
  { title: 'Estrategia de IA & Adopción',      description: 'Desde la evaluación de madurez de IA hasta el despliegue empresarial — gobierno de modelos, diseño organizacional y frameworks de adopción que realmente se usan.' },
  { title: 'Web3 & Tokenización',              description: 'Economía de tokens, estrategia de contratos inteligentes, estructuras DeFi e implementaciones blockchain de grado institucional — sin el hype.' },
  { title: 'Estrategia de Producto',           description: 'Visión de producto, diseño de hoja de ruta, frameworks de discovery y diseño del modelo operativo para organizaciones que necesitan moverse más rápido e inteligente.' },
  { title: 'Pagos & Fintech',                  description: 'Expertise profundo en infraestructura de pagos, open banking, finanzas embebidas, rieles transfronterizos y migración ISO 20022.' },
  { title: 'Gobierno de Datos',                description: 'Arquitectura de datos, frameworks de calidad, cumplimiento regulatorio y preparación de datos para IA — la base poco glamorosa de toda iniciativa de IA exitosa.' },
  { title: 'Transformación Digital',           description: 'Estrategia de transformación empresarial, modernización de entrega, diseño de topología de equipos y gestión del cambio para organizaciones complejas y multigeo.' },
]

const industriesEn = ['Financial Services','Banking','Payments & Fintech','Cybersecurity','Real Estate','Enterprise Technology','Media & Entertainment','Energy & Utilities']
const industriesEs = ['Servicios Financieros','Banca','Pagos & Fintech','Ciberseguridad','Inmobiliaria','Tecnología Empresarial','Medios & Entretenimiento','Energía & Utilities']

const regionsEn = [
  { name: 'Spain',          description: 'Headquartered in Madrid. Deep roots in the Spanish market and Southern European ecosystem, including regulatory and commercial context.' },
  { name: 'United Kingdom', description: 'Active in the UK fintech and financial services market. Experience with FCA-regulated environments and UK-EU cross-border dynamics post-Brexit.' },
  { name: 'Europe',         description: 'Cross-border project experience across the EU. Regulatory knowledge spanning MiCA, PSD2, DORA, GDPR, and ECB digital asset initiatives.' },
  { name: 'Americas',       description: 'Delivery experience in Latin America and North America. Fintech ecosystems across Mexico, Colombia, Brazil, and the USA.' },
  { name: 'Global',         description: 'Supporting ambitious organizations worldwide, with proven experience across Europe and the Americas — and the capability to work wherever the right challenge takes us.' },
]
const regionsEs = [
  { name: 'España',         description: 'Con sede en Madrid. Profundas raíces en el mercado español y el ecosistema del sur de Europa, incluyendo contexto regulatorio y comercial.' },
  { name: 'Reino Unido',    description: 'Activos en el mercado fintech y de servicios financieros del Reino Unido. Experiencia con entornos regulados por la FCA y dinámicas transfronterizas UE-RU post-Brexit.' },
  { name: 'Europa',         description: 'Experiencia en proyectos transfronterizos en la UE. Conocimiento regulatorio que abarca MiCA, PSD2, DORA, GDPR e iniciativas de activos digitales del BCE.' },
  { name: 'Américas',       description: 'Experiencia de entrega en América Latina y América del Norte. Ecosistemas fintech en México, Colombia, Brasil y EE.UU.' },
  { name: 'Global',         description: 'Apoyamos a organizaciones ambiciosas en todo el mundo, con experiencia demostrada en Europa y las Américas — y la capacidad de trabajar donde el desafío correcto nos lleve.' },
]

const chooseEn = [
  { title: 'The Combination That Doesn\'t Exist Elsewhere',    description: 'Enterprise delivery discipline, AI strategy, product leadership, fintech expertise, data governance, and blockchain & tokenization — credibly combined in a single advisory relationship. Most firms own one of these. We own the intersection.' },
  { title: 'Strategy Firms Advise. We Deliver.',               description: 'The gap between strategy and execution is where most organizations get stuck. We are structured to close that gap — with practitioners who have built and shipped products, not consultants who have observed them.' },
  { title: 'Outcomes Defined Before Work Begins',              description: 'Every engagement is scoped around measurable business outcomes agreed upfront. We define what success looks like before the first invoice — and we are accountable to those definitions.' },
  { title: 'Senior Expertise, Not a Delivery Team',            description: 'We operate as a boutique advisory firm. The expertise you evaluate in the conversation is the expertise that works on your engagement. Not a junior team managed from a distance.' },
  { title: 'Cross-Border Pattern Recognition',                 description: 'Having operated across banking, fintech, cybersecurity, real estate, and enterprise technology — in Spain, the UK, the EU, and Latin America — we bring pattern recognition that single-market, single-domain advisors simply cannot offer.' },
]
const chooseEs = [
  { title: 'La Combinación que No Existe en Otro Lugar',        description: 'Disciplina de entrega empresarial, estrategia de IA, liderazgo de producto, expertise fintech, gobierno de datos y blockchain & tokenización — combinados de forma creíble en una sola relación de asesoría. La mayoría de las firmas dominan uno de estos. Nosotros dominamos la intersección.' },
  { title: 'Las Firmas de Estrategia Asesoran. Nosotros Entregamos.', description: 'La brecha entre estrategia y ejecución es donde la mayoría de las organizaciones se atascan. Estamos estructurados para cerrar esa brecha — con profesionales que han construido y lanzado productos, no consultores que los han observado.' },
  { title: 'Resultados Definidos Antes de Comenzar',           description: 'Cada proyecto se delimita en torno a resultados de negocio medibles acordados de antemano. Definimos cómo se ve el éxito antes de la primera factura — y somos responsables de esas definiciones.' },
  { title: 'Expertise Senior, No un Equipo de Entrega',        description: 'Operamos como una firma de asesoría boutique. El expertise que evalúas en la conversación es el que trabaja en tu proyecto. No un equipo junior gestionado desde la distancia.' },
  { title: 'Reconocimiento de Patrones Transfronterizo',        description: 'Habiendo operado en banca, fintech, ciberseguridad, inmobiliaria y tecnología empresarial — en España, el Reino Unido, la UE y América Latina — aportamos un reconocimiento de patrones que los asesores de un solo mercado y dominio simplemente no pueden ofrecer.' },
]

const whyBodyEn = [
  'The AI era has created a new category of strategic problem. Organizations need to move fast on AI, tokenization, and digital transformation — but the firms equipped to advise on strategy are rarely equipped to deliver, and the firms equipped to deliver rarely challenge the strategy. Most organizations get stuck in between.',
  'Synapxi Tech was built to close that gap. We bring the intellectual rigour of a strategy firm and the delivery accountability of a practitioner. We challenge the direction when it needs challenging — especially on AI initiatives where the wrong strategy compounds quickly — and we stay through delivery when it matters.',
  'We focus on the problems where the intersection of domains creates the most value: AI initiatives that need data governance before they can scale, tokenization strategies that need product thinking before they can go to market, and digital transformations that need delivery redesign before the strategy makes sense.',
]
const whyBodyEs = [
  'La era de la IA ha creado una nueva categoría de problema estratégico. Las organizaciones necesitan moverse rápido en IA, tokenización y transformación digital — pero las firmas capaces de asesorar en estrategia rara vez están equipadas para entregar, y las firmas capaces de entregar rara vez cuestionan la estrategia. La mayoría de las organizaciones se quedan atascadas entre ambas.',
  'Synapxi Tech fue creada para cerrar esa brecha. Aportamos el rigor intelectual de una firma de estrategia y la responsabilidad de entrega de un profesional. Cuestionamos la dirección cuando es necesario — especialmente en iniciativas de IA donde la estrategia incorrecta se amplifica rápidamente — y permanecemos durante la entrega cuando importa.',
  'Nos centramos en los problemas donde la intersección de dominios crea el mayor valor: iniciativas de IA que necesitan gobierno de datos antes de poder escalar, estrategias de tokenización que necesitan pensamiento de producto antes de salir al mercado, y transformaciones digitales que necesitan rediseño de entrega antes de que la estrategia tenga sentido.',
]

export default function AboutPage() {
  const { lang, t } = useLang()
  const expertise  = lang === 'es' ? expertiseEs  : expertiseEn
  const industries = lang === 'es' ? industriesEs : industriesEn
  const regions    = lang === 'es' ? regionsEs    : regionsEn
  const choose     = lang === 'es' ? chooseEs     : chooseEn
  const whyBody    = lang === 'es' ? whyBodyEs    : whyBodyEn

  const steps = [
    { num: '01', title: t('about','step1Title'), desc: t('about','step1Desc') },
    { num: '02', title: t('about','step2Title'), desc: t('about','step2Desc') },
    { num: '03', title: t('about','step3Title'), desc: t('about','step3Desc') },
    { num: '04', title: t('about','step4Title'), desc: t('about','step4Desc') },
  ]

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        {/* subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#28A9E1]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('about','tag')}</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{t('about','h1')}</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">{t('about','sub')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* WHY WE EXIST */}
        <section className="py-16 lg:py-20 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="section-tag">{t('about','whyTag')}</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{t('about','whyH2')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-5 text-white/60 leading-relaxed">
                {whyBody.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* MISSION & VISION — sharper copy */}
        <section className="py-16 lg:py-20 border-b border-white/10">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="relative card-dark p-8 border-[#28A9E1]/25 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#28A9E1]/5 rounded-bl-full" />
                <div className="w-10 h-10 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-lg mb-6 relative z-10">◎</div>
                <h2 className="font-display text-2xl font-bold text-white mb-2 relative z-10">{t('about','missionTag')}</h2>
                <p className="text-white/60 leading-relaxed relative z-10">{t('about','missionBody')}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative card-dark p-8 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#28A9E1]/3 rounded-bl-full" />
                <div className="w-10 h-10 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-lg mb-6 relative z-10">◈</div>
                <h2 className="font-display text-2xl font-bold text-white mb-2 relative z-10">{t('about','visionTag')}</h2>
                <p className="text-white/60 leading-relaxed relative z-10">{t('about','visionBody')}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4-STEP METHODOLOGY */}
        <section className="py-16 lg:py-20 border-b border-white/10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-tag">{t('about','methodTag')}</span>
              <h2 className="font-display text-4xl font-bold text-white mb-4">{t('about','methodH2')}</h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">{t('about','methodSub')}</p>
            </div>
          </ScrollReveal>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:flex items-start gap-0 relative">
            {/* Connector line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#28A9E1]/30 to-transparent" />
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1} className="flex-1 px-4 relative">
                <div className="flex flex-col items-center text-center">
                  {/* Node */}
                  <div className="w-20 h-20 rounded-full bg-[#001B4E] border-2 border-[#28A9E1]/40 flex flex-col items-center justify-center mb-6 relative z-10 shadow-[0_0_24px_rgba(40,169,225,0.15)]">
                    <span className="font-display text-[#28A9E1]/50 text-xs font-bold">{step.num}</span>
                    <span className="font-display text-white text-sm font-bold leading-tight">{step.title}</span>
                  </div>
                  {/* Arrow (except last) */}
                  {i < 3 && (
                    <div className="absolute top-10 -right-3 z-20 text-[#28A9E1]/40 text-lg">›</div>
                  )}
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden flex flex-col gap-0 relative">
            <div className="absolute top-10 bottom-10 left-6 w-px bg-gradient-to-b from-transparent via-[#28A9E1]/30 to-transparent" />
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="flex items-start gap-5 pl-0 pb-8">
                  <div className="w-12 h-12 rounded-full bg-[#001B4E] border-2 border-[#28A9E1]/40 flex flex-col items-center justify-center flex-shrink-0 relative z-10">
                    <span className="font-display text-[#28A9E1]/60 text-[9px] font-bold">{step.num}</span>
                    <span className="font-display text-white text-[10px] font-bold leading-none">{step.title}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="py-16 lg:py-20 border-b border-white/10">
          <ScrollReveal>
            <span className="section-tag">{t('about','expertiseTag')}</span>
            <h2 className="font-display text-4xl font-bold text-white mb-12">{t('about','expertiseH2')}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.07}>
                <div className="card-dark p-6 h-full">
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{area.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-16 lg:py-20 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="section-tag">{t('about','industriesTag')}</span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">{t('about','industriesH2')}</h2>
              <p className="text-white/50 leading-relaxed">{t('about','industriesSub')}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {industries.map((ind) => (
                  <span key={ind} className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-[#28A9E1]/40 hover:text-[#28A9E1] transition-colors cursor-default">
                    {ind}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* GEOGRAPHY */}
        <section className="py-16 lg:py-20 border-b border-white/10">
          <ScrollReveal>
            <span className="section-tag">{t('about','geoTag')}</span>
            <h2 className="font-display text-4xl font-bold text-white mb-12">{t('about','geoH2')}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {regions.map((region, i) => (
              <ScrollReveal key={region.name} delay={i * 0.08}>
                <div className="card-dark p-6 h-full">
                  <h3 className="font-display text-xl font-bold text-[#28A9E1] mb-3">{region.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{region.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-16 lg:py-20">
          <ScrollReveal>
            <span className="section-tag">{t('about','chooseTag')}</span>
            <h2 className="font-display text-4xl font-bold text-white mb-12">{t('about','chooseH2')}</h2>
          </ScrollReveal>
          <div className="flex flex-col gap-5">
            {choose.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.07}>
                <div className="card-dark p-7 flex items-start gap-6">
                  <div className="font-display text-2xl font-bold text-[#28A9E1]/25 w-10 flex-shrink-0 text-right leading-none mt-1">
                    {String(i+1).padStart(2,'0')}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-white/50 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('about','ctaTag')}</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">{t('about','ctaH2')}</h2>
            <p className="text-white/60 text-lg mb-10">{t('about','ctaSub')}</p>
            <Link href="/contact" className="btn-primary text-base">{t('about','ctaBtn')}</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
