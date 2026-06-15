'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/context/LangContext'

const articlesEn = [
  { id: 'web3-collective-ownership',       tag: 'Web3',                 title: 'Web3 and the Future of Collective Ownership',               excerpt: "Tokenization is redefining ownership models for assets, organizations, and value exchange at a global scale. This isn't just about crypto — it's about a new paradigm for how value is created, distributed, and governed.", readTime: '8', href: '/insights/web3-collective-ownership', external: false },
  { id: 'enterprise-ai-adoption',          tag: 'AI',                   title: 'The Real Barriers to Enterprise AI Adoption',               excerpt: 'Most AI initiatives fail not because of technology, but because of governance, data quality, and change management. Understanding the structural barriers is the first step to overcoming them.',                 readTime: '6', href: '/insights/enterprise-ai-adoption',    external: false },
  { id: 'open-banking-business-model',     tag: 'Payments',             title: "Open Banking Is Not a Feature — It's a Business Model",     excerpt: "Forward-thinking financial institutions are using open banking to unlock new revenue streams, not just comply with regulation. The window to lead is open, but it won't stay open forever.",                   readTime: '5', href: '/insights/open-banking-business-model', external: false },
  { id: 'product-strategy-ai-era',         tag: 'Product Strategy',     title: "Product Strategy in the AI Era: What Changes, What Doesn't", excerpt: "AI is changing the product development cycle — from discovery to delivery — but the fundamentals of good product strategy remain unchanged. Here's how to think about the intersection.",                readTime: '7', href: '/insights/product-strategy-ai-era',     external: false },
  { id: 'tokenization-real-assets',        tag: 'Web3',                 title: 'Tokenizing Real-World Assets: The Opportunity Beyond Crypto', excerpt: 'Real estate, private equity, infrastructure, and commodities are all being reimagined through tokenization. What does the opportunity actually look like — and what are the genuine barriers?',              readTime: '9', href: '/insights/tokenization-real-assets',      external: false },
  { id: 'digital-transformation-delivery', tag: 'Digital Transformation',title: 'Why Digital Transformation Fails at Delivery',              excerpt: 'Organizations invest heavily in transformation strategy and almost nothing in the organizational design required to execute it. The delivery gap is where most transformations die.',                         readTime: '6', href: '/insights/digital-transformation-delivery', external: false },
  { id: 'iso20022-payments',               tag: 'Payments',             title: 'ISO 20022 and the Data-Rich Future of Payments',             excerpt: "The migration to ISO 20022 is more than a technical upgrade — it's an opportunity to unlock rich payment data that enables entirely new product and risk management capabilities.",                       readTime: '5', href: 'https://substack.com/@synapxitech', external: true },
  { id: 'ai-readiness-framework',          tag: 'AI',                   title: 'The AI Readiness Framework: Five Dimensions Every Enterprise Must Assess', excerpt: 'Before committing significant AI investment, organizations need to assess five critical dimensions. Most skip this step — and pay for it eighteen months later when initiatives stall.', readTime: '8', href: '/insights/ai-readiness-framework', external: false },
  { id: 'product-operating-models',        tag: 'Product Strategy',     title: 'Product Operating Models: Why Most Organizations Get This Wrong', excerpt: 'The product operating model is the most important and least understood lever for improving product outcomes. Most organizations focus on methodology and miss the structural decisions entirely.', readTime: '7', href: '/insights/product-operating-models', external: false },
  { id: 'cbdc-digital-euro',               tag: 'Digital Assets',       title: 'CBDCs and the Digital Euro: What Financial Institutions Need to Understand Now', excerpt: "The ECB's digital euro project is moving faster than most financial institutions realize. Here is what it means for banks, fintechs, and payment providers.",  readTime: '7', href: '/insights/cbdc-digital-euro', external: false },
  { id: 'scaling-digital-transformation',  tag: 'Digital Transformation',title: 'Scaling Digital Transformation: From Pilots to Enterprise-Wide Change', excerpt: 'Most organizations can run a successful digital pilot. Very few can scale it. The difference lies in three organizational design decisions most transformation programs never make.', readTime: '8', href: '/insights/scaling-digital-transformation', external: false },
]

const articlesEs = [
  { id: 'web3-collective-ownership',       tag: 'Web3',                 title: 'Web3 y el Futuro de la Propiedad Colectiva',               excerpt: 'La tokenización está redefiniendo los modelos de propiedad de activos, organizaciones e intercambio de valor a escala global. No se trata solo de cripto — es un nuevo paradigma.',                              readTime: '8', href: '/insights/web3-collective-ownership',       external: false },
  { id: 'enterprise-ai-adoption',          tag: 'IA',                   title: 'Las Verdaderas Barreras para Adoptar IA Empresarial',      excerpt: 'La mayoría de las iniciativas de IA fracasan no por la tecnología, sino por el gobierno de datos, la calidad y la gestión del cambio. Entender las barreras estructurales es el primer paso.',               readTime: '6', href: '/insights/enterprise-ai-adoption',          external: false },
  { id: 'open-banking-business-model',     tag: 'Pagos',                title: 'El Open Banking No Es una Función — Es un Modelo de Negocio', excerpt: 'Las instituciones financieras más innovadoras usan el open banking para desbloquear nuevas fuentes de ingresos, no solo para cumplir con la regulación.',                                               readTime: '5', href: '/insights/open-banking-business-model',      external: false },
  { id: 'product-strategy-ai-era',         tag: 'Estrategia de Producto', title: 'Estrategia de Producto en la Era de la IA: Qué Cambia, Qué No', excerpt: 'La IA está transformando el ciclo de desarrollo de productos — desde el discovery hasta la entrega — pero los fundamentos de una buena estrategia de producto no han cambiado.',                readTime: '7', href: '/insights/product-strategy-ai-era',          external: false },
  { id: 'tokenization-real-assets',        tag: 'Web3',                 title: 'Tokenización de Activos del Mundo Real: La Oportunidad más allá de las Criptos', excerpt: 'Los bienes raíces, el private equity, la infraestructura y las materias primas están siendo reimaginados a través de la tokenización.',                          readTime: '9', href: '/insights/tokenization-real-assets',          external: false },
  { id: 'digital-transformation-delivery', tag: 'Transformación Digital', title: 'Por Qué la Transformación Digital Falla en la Entrega',   excerpt: 'Las organizaciones invierten mucho en estrategia de transformación y casi nada en el diseño organizacional necesario para ejecutarla. La brecha de entrega es donde mueren la mayoría de las transformaciones.', readTime: '6', href: '/insights/digital-transformation-delivery',  external: false },
  { id: 'iso20022-payments',               tag: 'Pagos',                title: 'ISO 20022 y el Futuro de los Pagos Rico en Datos',         excerpt: 'La migración a ISO 20022 es más que una actualización técnica — es una oportunidad para desbloquear datos de pago enriquecidos que habilitan capacidades totalmente nuevas.',                              readTime: '5', href: 'https://substack.com/@synapxitech',           external: true },
  { id: 'ai-readiness-framework',          tag: 'IA',                   title: 'El Framework de Madurez de IA: Cinco Dimensiones que Toda Empresa Debe Evaluar', excerpt: 'Antes de comprometer inversión significativa en IA, las organizaciones necesitan evaluar cinco dimensiones críticas. La mayoría salta este paso — y lo paga dieciocho meses después.', readTime: '8', href: '/insights/ai-readiness-framework', external: false },
  { id: 'product-operating-models',        tag: 'Estrategia de Producto', title: 'Modelos Operativos de Producto: Por Qué la Mayoría de las Organizaciones se Equivocan', excerpt: 'El modelo operativo de producto es la palanca más importante y menos comprendida para mejorar los resultados de producto. La mayoría se centra en la metodología y se pierde las decisiones estructurales.', readTime: '7', href: '/insights/product-operating-models', external: false },
  { id: 'cbdc-digital-euro',               tag: 'Activos Digitales',    title: 'CBDCs y el Euro Digital: Lo que las Instituciones Financieras Necesitan Entender Ahora', excerpt: 'El proyecto de euro digital del BCE avanza más rápido de lo que la mayoría de las instituciones financieras percibe. Esto es lo que significa para bancos, fintechs y proveedores de pagos.', readTime: '7', href: '/insights/cbdc-digital-euro', external: false },
  { id: 'scaling-digital-transformation',  tag: 'Transformación Digital', title: 'Escalando la Transformación Digital: De Pilotos al Cambio Empresarial', excerpt: 'La mayoría de las organizaciones pueden ejecutar un piloto digital exitoso. Muy pocas pueden escalarlo. La diferencia está en tres decisiones de diseño organizacional que la mayoría de los programas de transformación nunca toman.', readTime: '8', href: '/insights/scaling-digital-transformation', external: false },
]

const categoriesEn = ['All', 'AI', 'Web3', 'Payments', 'Product Strategy', 'Digital Transformation', 'Digital Assets']
const categoriesEs = ['Todos', 'IA', 'Web3', 'Pagos', 'Estrategia de Producto', 'Transformación Digital', 'Activos Digitales']

export default function InsightsPage() {
  const { lang, t } = useLang()
  const articles   = lang === 'es' ? articlesEs   : articlesEn
  const categories = lang === 'es' ? categoriesEs : categoriesEn
  const featured   = articles[0]
  const rest       = articles.slice(1)

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('insights','tag')}</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">{t('insights','h1')}</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">{t('insights','sub')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-8 flex items-center justify-center gap-2">
              <a href="https://substack.com/@synapxitech" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                {t('insights','substack')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link href={featured.href} className="group block card-dark rounded-2xl overflow-hidden border-[#28A9E1]/20 hover:border-[#28A9E1]/50 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">{t('insights','featured')}</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-semibold uppercase tracking-wider">{featured.tag}</span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#28A9E1] transition-colors leading-tight">{featured.title}</h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-3 text-white/40 text-sm">
                    <span>{featured.readTime} {t('insights','readTime')}</span>
                    <span>·</span>
                    <span className="text-[#28A9E1] font-medium group-hover:underline">{t('insights','readArticle')}</span>
                  </div>
                </div>
                <div className="lg:flex hidden items-center justify-center bg-gradient-to-br from-[#28A9E1]/5 to-transparent border-l border-white/5 p-12">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-full border border-[#28A9E1]/20 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-4 rounded-full border border-[#28A9E1]/30" />
                    <div className="absolute inset-8 rounded-full border border-[#28A9E1]/40" />
                    <div className="absolute inset-12 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/60 flex items-center justify-center">
                      <span className="text-[#28A9E1] text-3xl">◈</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] ${i === 0 ? 'bg-[#28A9E1] text-white' : 'bg-white/5 border border-white/10 text-white/60 hover:border-[#28A9E1]/40 hover:text-[#28A9E1]'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 0.07}>
                {article.external ? (
                  <a href={article.href} target="_blank" rel="noopener noreferrer" className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full" aria-label={`${article.title} (opens in new tab)`}>
                    <ArticleCard article={article} readTime={t('insights','readTime')} />
                  </a>
                ) : (
                  <Link href={article.href} className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full">
                    <ArticleCard article={article} readTime={t('insights','readTime')} />
                  </Link>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSTACK CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('insights','ctaTag')}</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">{t('insights','ctaH2')}</h2>
            <p className="text-white/60 text-lg mb-10">{t('insights','ctaSub')}</p>
            <a href="https://substack.com/@synapxitech" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">{t('insights','ctaBtn')}</a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

function ArticleCard({ article, readTime }: { article: { tag: string; title: string; excerpt: string; readTime: string; external?: boolean }; readTime: string }) {
  return (
    <>
      <div className="flex items-center gap-2 mb-5">
        <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">{article.tag}</span>
        {article.external && <span className="px-2 py-1 rounded text-white/30 text-xs">↗</span>}
      </div>
      <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-[#28A9E1] transition-colors leading-snug">{article.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-4">{article.excerpt}</p>
      <span className="text-white/30 text-xs">{article.readTime} {readTime}</span>
    </>
  )
}
