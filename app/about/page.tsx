'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/context/LangContext'

const expertiseEn = [
  { title: 'AI Strategy & Adoption',     description: 'From maturity assessment to enterprise deployment, including model governance and organizational design for AI.' },
  { title: 'Web3 & Tokenization',        description: 'Token economics, smart contract strategy, decentralized finance structures, and institutional-grade blockchain implementations.' },
  { title: 'Product Strategy',           description: 'Product vision, roadmap design, discovery frameworks, and operating model design for product organizations.' },
  { title: 'Payments & Fintech',         description: 'Deep expertise across payment infrastructure, open banking, embedded finance, and cross-border payment systems.' },
  { title: 'Data Governance',            description: 'Data architecture, quality frameworks, regulatory compliance, and AI data readiness assessments.' },
  { title: 'Digital Transformation',     description: 'Enterprise transformation strategy, delivery modernization, and change management for complex organizations.' },
]
const expertiseEs = [
  { title: 'Estrategia de IA & Adopción',       description: 'Desde evaluación de madurez hasta despliegue empresarial, incluyendo gobierno de modelos y diseño organizacional para IA.' },
  { title: 'Web3 & Tokenización',               description: 'Economía de tokens, estrategia de contratos inteligentes, estructuras DeFi e implementaciones blockchain de grado institucional.' },
  { title: 'Estrategia de Producto',            description: 'Visión de producto, diseño de hoja de ruta, frameworks de descubrimiento y diseño del modelo operativo para organizaciones de producto.' },
  { title: 'Pagos & Fintech',                   description: 'Expertise profundo en infraestructura de pagos, open banking, finanzas embebidas y sistemas de pago transfronterizos.' },
  { title: 'Gobierno de Datos',                 description: 'Arquitectura de datos, frameworks de calidad, cumplimiento regulatorio y evaluaciones de preparación de datos para IA.' },
  { title: 'Transformación Digital',            description: 'Estrategia de transformación empresarial, modernización de entrega y gestión del cambio para organizaciones complejas.' },
]

const industriesEn = ['Financial Services','Banking','Payments & Fintech','Cybersecurity','Real Estate','Enterprise Technology','Media & Entertainment','Energy & Utilities']
const industriesEs = ['Servicios Financieros','Banca','Pagos & Fintech','Ciberseguridad','Inmobiliaria','Tecnología Empresarial','Medios & Entretenimiento','Energía & Utilities']

const regionsEn = [
  { name: 'Spain',         description: 'Headquartered in Madrid, with deep roots in the Spanish market and access to the broader Southern European ecosystem.' },
  { name: 'United Kingdom',description: 'Active presence in the UK fintech and financial services market, including experience with FCA-regulated environments.' },
  { name: 'Europe',        description: 'Cross-border project experience across the EU, with regulatory knowledge spanning MiCA, PSD2, DORA, and GDPR.' },
  { name: 'Americas',      description: 'Delivery experience across Latin America and North America, including fintech ecosystems in Mexico, Brazil, Colombia, and the USA.' },
]
const regionsEs = [
  { name: 'España',        description: 'Con sede en Madrid, con profundas raíces en el mercado español y acceso al ecosistema más amplio del sur de Europa.' },
  { name: 'Reino Unido',   description: 'Presencia activa en el mercado fintech y de servicios financieros del Reino Unido, incluyendo experiencia en entornos regulados por la FCA.' },
  { name: 'Europa',        description: 'Experiencia en proyectos transfronterizos en la UE, con conocimiento regulatorio que abarca MiCA, PSD2, DORA y GDPR.' },
  { name: 'Américas',      description: 'Experiencia de entrega en América Latina y América del Norte, incluyendo ecosistemas fintech en México, Brasil, Colombia y EE.UU.' },
]

const chooseEn = [
  { title: 'The Combination No One Else Offers',     description: 'Enterprise delivery experience, product strategy, fintech expertise, data governance, AI adoption, and blockchain & tokenization — credibly combined in a single advisory relationship.' },
  { title: 'Outcomes First, Always',                 description: 'Every engagement is scoped around measurable business outcomes. We define what success looks like before work begins, and we are accountable to it.' },
  { title: 'Senior Expertise on Your Engagement',    description: 'We operate as a boutique advisory firm. The expertise you evaluate in the conversation is the expertise you get on the engagement — not junior delivery teams.' },
  { title: 'Cross-Industry, Cross-Border Perspective',description: 'Having worked across banking, fintech, cybersecurity, real estate, and enterprise technology — and across Europe and the Americas — we bring pattern recognition most single-industry advisors cannot.' },
  { title: 'Built for Ambitious Organizations',      description: 'We work best with organizations that are serious about transformation — scaleups scaling fast, mid-market companies modernizing, and enterprise innovation teams that need a partner who can operate at their level.' },
]
const chooseEs = [
  { title: 'La Combinación que Nadie Más Ofrece',         description: 'Experiencia en entrega empresarial, estrategia de producto, expertise fintech, gobierno de datos, adopción de IA y blockchain & tokenización — combinados de forma creíble en una sola relación de asesoría.' },
  { title: 'Resultados Primero, Siempre',                 description: 'Cada proyecto se estructura en torno a resultados de negocio medibles. Definimos cómo se ve el éxito antes de comenzar y somos responsables de ello.' },
  { title: 'Expertise Senior en tu Proyecto',             description: 'Operamos como una firma de asesoría boutique. El expertise que evalúas en la conversación es el que obtienes en el proyecto — no equipos de entrega junior.' },
  { title: 'Perspectiva Multisectorial y Transfronteriza', description: 'Haber trabajado en banca, fintech, ciberseguridad, inmobiliaria y tecnología empresarial — y en Europa y las Américas — nos aporta un reconocimiento de patrones que la mayoría de los asesores de un solo sector no puede ofrecer.' },
  { title: 'Diseñado para Organizaciones Ambiciosas',     description: 'Trabajamos mejor con organizaciones serias sobre la transformación — scaleups creciendo rápido, empresas medianas modernizándose y equipos de innovación empresarial que necesitan un socio que opere a su nivel.' },
]

const stepsEn = [
  { step: '01', title: 'Discover', description: "We invest significant time understanding your organization, market, technology landscape, and the specific challenge you're trying to solve — before making any recommendations." },
  { step: '02', title: 'Define',   description: "We scope the engagement around measurable business outcomes, agree on success criteria upfront, and design an approach that is proportionate to the challenge." },
  { step: '03', title: 'Deliver',  description: "We operate with the accountability of a delivery team — producing tangible outputs, checking progress against outcomes, and adapting as we learn." },
]
const stepsEs = [
  { step: '01', title: 'Descubrir', description: 'Invertimos tiempo significativo entendiendo tu organización, mercado, panorama tecnológico y el desafío específico que intentas resolver — antes de hacer recomendaciones.' },
  { step: '02', title: 'Definir',   description: 'Delimitamos el proyecto en torno a resultados de negocio medibles, acordamos criterios de éxito desde el inicio y diseñamos un enfoque proporcional al desafío.' },
  { step: '03', title: 'Entregar', description: 'Operamos con la responsabilidad de un equipo de entrega — produciendo outputs tangibles, verificando el progreso frente a los resultados y adaptándonos a medida que aprendemos.' },
]

const whyBodyEn = [
  'Most organizations understand they need to transform — they have the ambition, often the investment, and sometimes the strategy. What they lack is a trusted partner who can operate at the intersection of emerging technology, product thinking, and enterprise delivery.',
  'Synapxi Tech was built to close that gap. We combine deep expertise in AI, Web3, payments, product strategy, and digital transformation with the delivery credibility to actually execute — not just advise from the outside.',
  'We work with scaleups, mid-market companies, financial institutions, and enterprise innovation teams across Europe and the Americas who are ready to translate ambition into reality.',
]
const whyBodyEs = [
  'La mayoría de las organizaciones entienden que necesitan transformarse — tienen la ambición, a menudo la inversión y a veces la estrategia. Lo que les falta es un socio de confianza que pueda operar en la intersección de la tecnología emergente, el pensamiento de producto y la entrega empresarial.',
  'Synapxi Tech fue creada para cerrar esa brecha. Combinamos expertise profundo en IA, Web3, pagos, estrategia de producto y transformación digital con la credibilidad de entrega para realmente ejecutar — no solo asesorar desde afuera.',
  'Trabajamos con scaleups, empresas medianas, instituciones financieras y equipos de innovación empresarial en Europa y las Américas que están listos para convertir la ambición en realidad.',
]

export default function AboutPage() {
  const { lang, t } = useLang()
  const expertise  = lang === 'es' ? expertiseEs  : expertiseEn
  const industries = lang === 'es' ? industriesEs : industriesEn
  const regions    = lang === 'es' ? regionsEs    : regionsEn
  const choose     = lang === 'es' ? chooseEs     : chooseEn
  const steps      = lang === 'es' ? stepsEs      : stepsEn
  const whyBody    = lang === 'es' ? whyBodyEs    : whyBodyEn

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="About hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="section-tag">{t('about','whyTag')}</span>
              <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">{t('about','whyH2')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-5 text-white/60 leading-relaxed">
                {whyBody.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-16 lg:py-20 border-b border-white/10">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card-dark p-8 border-[#28A9E1]/20 h-full">
                <div className="w-10 h-10 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-lg mb-6">◎</div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">{t('about','missionTag')}</h2>
                <p className="text-white/60 leading-relaxed">{t('about','missionBody')}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="card-dark p-8 h-full">
                <div className="w-10 h-10 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-lg mb-6">◈</div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">{t('about','visionTag')}</h2>
                <p className="text-white/60 leading-relaxed">{t('about','visionBody')}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-16 lg:py-20 border-b border-white/10">
          <ScrollReveal>
            <span className="section-tag">{t('about','approachTag')}</span>
            <h2 className="font-display text-4xl font-bold text-white mb-4">{t('about','approachH2')}</h2>
            <p className="text-white/50 text-lg max-w-2xl mb-12">{t('about','approachSub')}</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="card-dark p-7 h-full">
                  <div className="font-display text-4xl font-bold text-[#28A9E1]/20 mb-3">{step.step}</div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {industries.map((industry) => (
                  <span key={industry} className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-[#28A9E1]/40 hover:text-[#28A9E1] transition-colors cursor-default">
                    {industry}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="flex flex-col gap-6">
            {choose.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.07}>
                <div className="card-dark p-7 flex items-start gap-6">
                  <div className="font-display text-2xl font-bold text-[#28A9E1]/30 w-10 flex-shrink-0 text-right">{String(i+1).padStart(2,'0')}</div>
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
