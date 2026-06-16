'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/context/LangContext'
import type { TranslationKey } from '@/lib/translations'

// ── Articles ─────────────────────────────────────────────────────────────────
// source: 'internal' = hosted on this site | 'substack' | 'medium'
const articlesEn = [
  // ── Internal ──
  { id: 'web3-collective-ownership',       tag: 'Web3',                  source: 'internal',  title: 'Web3 and the Future of Collective Ownership',                             excerpt: "Tokenization is redefining ownership models for assets, organizations, and value exchange at a global scale. This isn't just about crypto — it's about a new paradigm for how value is created, distributed, and governed.", readTime: '8', href: '/insights/web3-collective-ownership' },
  { id: 'enterprise-ai-adoption',          tag: 'AI',                    source: 'internal',  title: 'The Real Barriers to Enterprise AI Adoption',                             excerpt: 'Most AI initiatives fail not because of technology, but because of governance, data quality, and change management. Understanding the structural barriers is the first step to overcoming them.',                 readTime: '6', href: '/insights/enterprise-ai-adoption' },
  { id: 'open-banking-business-model',     tag: 'Payments',              source: 'internal',  title: "Open Banking Is Not a Feature — It's a Business Model",                   excerpt: "Forward-thinking financial institutions are using open banking to unlock new revenue streams, not just comply with regulation. The window to lead is open, but it won't stay open forever.",                   readTime: '5', href: '/insights/open-banking-business-model' },
  { id: 'product-strategy-ai-era',         tag: 'Product Strategy',      source: 'internal',  title: "Product Strategy in the AI Era: What Changes, What Doesn't",              excerpt: "AI is changing the product development cycle — from discovery to delivery — but the fundamentals of good product strategy remain unchanged.",                                                                   readTime: '7', href: '/insights/product-strategy-ai-era' },
  { id: 'tokenization-real-assets',        tag: 'Web3',                  source: 'internal',  title: 'Tokenizing Real-World Assets: The Opportunity Beyond Crypto',             excerpt: 'Real estate, private equity, infrastructure, and commodities are all being reimagined through tokenization. What does the opportunity actually look like — and what are the genuine barriers?',              readTime: '9', href: '/insights/tokenization-real-assets' },
  { id: 'digital-transformation-delivery', tag: 'Digital Transformation',source: 'internal',  title: 'Why Digital Transformation Fails at Delivery',                            excerpt: 'Organizations invest heavily in transformation strategy and almost nothing in the organizational design required to execute it. The delivery gap is where most transformations die.',                         readTime: '6', href: '/insights/digital-transformation-delivery' },
  { id: 'ai-readiness-framework',          tag: 'AI',                    source: 'internal',  title: 'The AI Readiness Framework: Five Dimensions Every Enterprise Must Assess', excerpt: 'Before committing significant AI investment, organizations need to assess five critical dimensions. Most skip this step — and pay for it eighteen months later when initiatives stall.',                      readTime: '8', href: '/insights/ai-readiness-framework' },
  { id: 'product-operating-models',        tag: 'Product Strategy',      source: 'internal',  title: 'Product Operating Models: Why Most Organizations Get This Wrong',          excerpt: 'The product operating model is the most important and least understood lever for improving product outcomes. Most organizations focus on methodology and miss the structural decisions entirely.',           readTime: '7', href: '/insights/product-operating-models' },
  { id: 'cbdc-digital-euro',               tag: 'Digital Assets',        source: 'internal',  title: 'CBDCs and the Digital Euro: What Financial Institutions Need to Understand Now', excerpt: "The ECB's digital euro project is moving faster than most financial institutions realize. Here is what it means for banks, fintechs, and payment providers.",                                          readTime: '7', href: '/insights/cbdc-digital-euro' },
  { id: 'scaling-digital-transformation',  tag: 'Digital Transformation',source: 'internal',  title: 'Scaling Digital Transformation: From Pilots to Enterprise-Wide Change',   excerpt: 'Most organizations can run a successful digital pilot. Very few can scale it. The difference lies in three organizational design decisions most transformation programs never make.',                      readTime: '8', href: '/insights/scaling-digital-transformation' },
  // ── Published on Substack ──
  { id: 'web3-substack',                   tag: 'Web3',                  source: 'substack',  title: 'Web3 and the Future of Collective Ownership',                             excerpt: 'Published on Substack. How Web3 is shifting the paradigm of ownership — from tokenized assets to decentralized governance models — and what it means for enterprises building for the next economy.',    readTime: '8', href: 'https://substack.com/@synapxitech/p/web3-and-the-future-of-collective' },
  // ── Published on Medium ──
  { id: 'tokenization-medium',             tag: 'Web3',                  source: 'medium',    title: 'The Future of Tokenization: Beyond Real Estate to Global Asset Classes',  excerpt: 'Published on Medium. Tokenization is no longer a real-estate story. From private equity and infrastructure to intellectual property — a look at how tokenization is expanding across global asset classes.',    readTime: '7', href: 'https://medium.com/@mfmora/the-future-of-tokenization-beyond-real-estate-to-global-asset-classes-8b1fcd1433c8' },
  { id: 'genai-fintech-medium',            tag: 'AI',                    source: 'medium',    title: 'Generative AI in Fintech: Transforming Customer Experience and Risk Management', excerpt: 'Published on Medium. Generative AI is moving from experimentation to production in financial services — reshaping customer engagement, credit decisioning, fraud detection, and operational efficiency.', readTime: '8', href: 'https://medium.com/@mfmora/generative-ai-in-fintech-transforming-customer-experience-and-risk-management-9e8ff6ac415b' },
  // ── ISO 20022 ──
  { id: 'iso20022-payments',               tag: 'Payments',              source: 'substack',  title: 'ISO 20022 and the Data-Rich Future of Payments',                          excerpt: 'The migration to ISO 20022 is more than a technical upgrade — it is an opportunity to unlock rich payment data that enables entirely new product and risk management capabilities.',                       readTime: '5', href: 'https://substack.com/@synapxitech' },
]

const articlesEs = [
  { id: 'web3-collective-ownership',       tag: 'Web3',                  source: 'internal',  title: 'Web3 y el Futuro de la Propiedad Colectiva',                              excerpt: 'La tokenización está redefiniendo los modelos de propiedad de activos, organizaciones e intercambio de valor a escala global. No se trata solo de cripto — es un nuevo paradigma.',                              readTime: '8', href: '/insights/web3-collective-ownership' },
  { id: 'enterprise-ai-adoption',          tag: 'IA',                    source: 'internal',  title: 'Las Verdaderas Barreras para Adoptar IA Empresarial',                     excerpt: 'La mayoría de las iniciativas de IA fracasan no por la tecnología, sino por el gobierno de datos, la calidad y la gestión del cambio. Entender las barreras estructurales es el primer paso.',               readTime: '6', href: '/insights/enterprise-ai-adoption' },
  { id: 'open-banking-business-model',     tag: 'Pagos',                 source: 'internal',  title: 'El Open Banking No Es una Función — Es un Modelo de Negocio',             excerpt: 'Las instituciones financieras más innovadoras usan el open banking para desbloquear nuevas fuentes de ingresos, no solo para cumplir con la regulación.',                                                   readTime: '5', href: '/insights/open-banking-business-model' },
  { id: 'product-strategy-ai-era',         tag: 'Estrategia de Producto',source: 'internal',  title: 'Estrategia de Producto en la Era de la IA: Qué Cambia, Qué No',          excerpt: 'La IA está transformando el ciclo de desarrollo de productos — desde el discovery hasta la entrega — pero los fundamentos de una buena estrategia de producto no han cambiado.',                               readTime: '7', href: '/insights/product-strategy-ai-era' },
  { id: 'tokenization-real-assets',        tag: 'Web3',                  source: 'internal',  title: 'Tokenización de Activos del Mundo Real: La Oportunidad más allá de las Criptos', excerpt: 'Los bienes raíces, el private equity, la infraestructura y las materias primas están siendo reimaginados a través de la tokenización.',                                                                readTime: '9', href: '/insights/tokenization-real-assets' },
  { id: 'digital-transformation-delivery', tag: 'Transformación Digital',source: 'internal',  title: 'Por Qué la Transformación Digital Falla en la Entrega',                   excerpt: 'Las organizaciones invierten mucho en estrategia de transformación y casi nada en el diseño organizacional necesario para ejecutarla. La brecha de entrega es donde mueren la mayoría de las transformaciones.', readTime: '6', href: '/insights/digital-transformation-delivery' },
  { id: 'ai-readiness-framework',          tag: 'IA',                    source: 'internal',  title: 'El Framework de Madurez de IA: Cinco Dimensiones que Toda Empresa Debe Evaluar', excerpt: 'Antes de comprometer inversión significativa en IA, las organizaciones necesitan evaluar cinco dimensiones críticas. La mayoría salta este paso — y lo paga dieciocho meses después.',                   readTime: '8', href: '/insights/ai-readiness-framework' },
  { id: 'product-operating-models',        tag: 'Estrategia de Producto',source: 'internal',  title: 'Modelos Operativos de Producto: Por Qué la Mayoría de las Organizaciones se Equivocan', excerpt: 'El modelo operativo de producto es la palanca más importante y menos comprendida para mejorar los resultados de producto. La mayoría se centra en la metodología y se pierde las decisiones estructurales.', readTime: '7', href: '/insights/product-operating-models' },
  { id: 'cbdc-digital-euro',               tag: 'Activos Digitales',     source: 'internal',  title: 'CBDCs y el Euro Digital: Lo que las Instituciones Financieras Necesitan Entender Ahora', excerpt: 'El proyecto de euro digital del BCE avanza más rápido de lo que la mayoría de las instituciones financieras percibe.',                                                                                 readTime: '7', href: '/insights/cbdc-digital-euro' },
  { id: 'scaling-digital-transformation',  tag: 'Transformación Digital',source: 'internal',  title: 'Escalando la Transformación Digital: De Pilotos al Cambio Empresarial',   excerpt: 'La mayoría de las organizaciones pueden ejecutar un piloto digital exitoso. Muy pocas pueden escalarlo. La diferencia está en tres decisiones de diseño organizacional que la mayoría nunca toman.',           readTime: '8', href: '/insights/scaling-digital-transformation' },
  { id: 'web3-substack',                   tag: 'Web3',                  source: 'substack',  title: 'Web3 y el Futuro de la Propiedad Colectiva',                              excerpt: 'Publicado en Substack. Cómo Web3 está cambiando el paradigma de la propiedad — desde activos tokenizados hasta modelos de gobernanza descentralizada — y qué significa para las empresas.',                 readTime: '8', href: 'https://substack.com/@synapxitech/p/web3-and-the-future-of-collective' },
  { id: 'tokenization-medium',             tag: 'Web3',                  source: 'medium',    title: 'El Futuro de la Tokenización: Más allá de los Bienes Raíces a Clases de Activos Globales', excerpt: 'Publicado en Medium. La tokenización ya no es solo una historia inmobiliaria — se extiende al private equity, infraestructura y propiedad intelectual.',                                              readTime: '7', href: 'https://medium.com/@mfmora/the-future-of-tokenization-beyond-real-estate-to-global-asset-classes-8b1fcd1433c8' },
  { id: 'genai-fintech-medium',            tag: 'IA',                    source: 'medium',    title: 'IA Generativa en Fintech: Transformando la Experiencia del Cliente y la Gestión de Riesgos', excerpt: 'Publicado en Medium. La IA generativa está pasando de la experimentación a la producción en servicios financieros, rediseñando la relación con el cliente y la gestión del riesgo.',                  readTime: '8', href: 'https://medium.com/@mfmora/generative-ai-in-fintech-transforming-customer-experience-and-risk-management-9e8ff6ac415b' },
  { id: 'iso20022-payments',               tag: 'Pagos',                 source: 'substack',  title: 'ISO 20022 y el Futuro de los Pagos Rico en Datos',                        excerpt: 'La migración a ISO 20022 es más que una actualización técnica — es una oportunidad para desbloquear datos de pago enriquecidos que habilitan capacidades totalmente nuevas.',                              readTime: '5', href: 'https://substack.com/home/post/p-202209122' },
]

// Topic clusters — group categories visually for SEO signalling
const clustersEn = [
  { label: 'AI',                    tags: ['AI'] },
  { label: 'Web3',                  tags: ['Web3', 'Digital Assets'] },
  { label: 'Payments',              tags: ['Payments'] },
  { label: 'Product Strategy',      tags: ['Product Strategy'] },
  { label: 'Digital Transformation',tags: ['Digital Transformation'] },
]
const clustersEs = [
  { label: 'IA',                    tags: ['IA'] },
  { label: 'Web3',                  tags: ['Web3', 'Activos Digitales'] },
  { label: 'Pagos',                 tags: ['Pagos'] },
  { label: 'Estrategia de Producto',tags: ['Estrategia de Producto'] },
  { label: 'Transformación Digital',tags: ['Transformación Digital'] },
]

// Category → tag mapping for filtering
const categoriesEn = ['All', 'AI', 'Web3', 'Payments', 'Product Strategy', 'Digital Transformation', 'Digital Assets']
const categoriesEs = ['Todos', 'IA', 'Web3', 'Pagos', 'Estrategia de Producto', 'Transformación Digital', 'Activos Digitales']

const categoryTagMapEn: Record<string, string[]> = {
  'All':                    [],
  'AI':                     ['AI'],
  'Web3':                   ['Web3'],
  'Payments':               ['Payments'],
  'Product Strategy':       ['Product Strategy'],
  'Digital Transformation': ['Digital Transformation'],
  'Digital Assets':         ['Digital Assets'],
}
const categoryTagMapEs: Record<string, string[]> = {
  'Todos':                  [],
  'IA':                     ['IA'],
  'Web3':                   ['Web3'],
  'Pagos':                  ['Pagos'],
  'Estrategia de Producto': ['Estrategia de Producto'],
  'Transformación Digital': ['Transformación Digital'],
  'Activos Digitales':      ['Activos Digitales'],
}

const SOURCE_LABELS: Record<string, string> = {
  substack: 'Substack',
  medium:   'Medium',
  internal: '',
}

export default function InsightsPage() {
  const { lang, t } = useLang()
  const allArticles = lang === 'es' ? articlesEs : articlesEn
  const categories  = lang === 'es' ? categoriesEs : categoriesEn
  const tagMap      = lang === 'es' ? categoryTagMapEs : categoryTagMapEn
  const allLabel    = lang === 'es' ? 'Todos' : 'All'

  const [activeCategory, setActiveCategory] = useState(allLabel)

  const clusters   = lang === 'es' ? clustersEs : clustersEn

  // count articles per cluster for display
  const countFor = (tags: string[]) =>
    allArticles.filter(a => tags.length === 0 || tags.includes(a.tag)).length

  // Reset to 'All'/'Todos' when language switches
  const effectiveActive = categories.includes(activeCategory) ? activeCategory : allLabel

  const filteredArticles = (() => {
    const tags = tagMap[effectiveActive] ?? []
    if (tags.length === 0) return allArticles              // 'All' / 'Todos'
    return allArticles.filter(a => tags.includes(a.tag))
  })()

  const featured = allArticles[0]                          // featured is always first, ignores filter
  const grid     = filteredArticles.filter(a => a.id !== featured.id)

  // Correct Substack URL
  const SUBSTACK_URL = 'https://substack.com/@synapxitech'

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('insights','tag')}</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">{t('insights','h1')}</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">{t('insights','sub')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                {t('insights','substack')}
              </a>
              <a href="https://medium.com/@mfmora" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                {lang === 'es' ? 'Leer en Medium →' : 'Read on Medium →'}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FEATURED ─── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            {featured.source === 'internal' ? (
              <Link href={featured.href} className="group block card-dark rounded-2xl overflow-hidden border-[#28A9E1]/20 hover:border-[#28A9E1]/50 transition-all duration-300">
                <FeaturedInner article={featured} t={t} lang={lang} />
              </Link>
            ) : (
              <a href={featured.href} target="_blank" rel="noopener noreferrer" className="group block card-dark rounded-2xl overflow-hidden border-[#28A9E1]/20 hover:border-[#28A9E1]/50 transition-all duration-300">
                <FeaturedInner article={featured} t={t} lang={lang} />
              </a>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CATEGORY FILTER — clustered ─── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* All button */}
          <div className="flex flex-wrap items-center gap-2 mb-4" role="group" aria-label={lang === 'es' ? 'Filtrar por categoría' : 'Filter by category'}>
            <button
              onClick={() => setActiveCategory(allLabel)}
              aria-pressed={effectiveActive === allLabel}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] flex items-center gap-2 ${
                effectiveActive === allLabel
                  ? 'bg-[#28A9E1] text-white shadow-md shadow-[#28A9E1]/20'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:border-[#28A9E1]/40 hover:text-[#28A9E1]'
              }`}
            >
              {allLabel}
              <span className={`text-xs rounded-full px-1.5 py-0.5 ${effectiveActive === allLabel ? 'bg-white/20 text-white' : 'bg-white/10 text-white/40'}`}>
                {allArticles.length}
              </span>
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-white/10 mx-1" aria-hidden="true" />

            {/* Cluster buttons */}
            {clusters.map((cluster) => {
              const isActive = cluster.tags.some(tag => {
                const activeTags = tagMap[effectiveActive] ?? []
                return activeTags.includes(tag)
              }) || cluster.tags.includes(effectiveActive)
              const count = countFor(cluster.tags)
              return (
                <button
                  key={cluster.label}
                  onClick={() => setActiveCategory(cluster.tags[0])}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#28A9E1] text-white shadow-md shadow-[#28A9E1]/20'
                      : 'bg-white/5 border border-white/10 text-white/60 hover:border-[#28A9E1]/40 hover:text-[#28A9E1]'
                  }`}
                >
                  {cluster.label}
                  <span className={`text-xs rounded-full px-1.5 py-0.5 ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-white/40'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active filter + count */}
          <p className="text-white/30 text-xs">
            {lang === 'es'
              ? `Mostrando ${grid.length} ${grid.length === 1 ? 'artículo' : 'artículos'}`
              : `Showing ${grid.length} ${grid.length === 1 ? 'article' : 'articles'}`}
            {effectiveActive !== allLabel && (
              <button onClick={() => setActiveCategory(allLabel)} className="ml-3 text-[#28A9E1] hover:underline">
                {lang === 'es' ? '× Limpiar' : '× Clear'}
              </button>
            )}
          </p>
        </div>
      </section>

      {/* ─── GRID ─── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {grid.length === 0 ? (
            <div className="text-center py-16 text-white/40">
              {lang === 'es' ? 'No hay artículos en esta categoría aún.' : 'No articles in this category yet.'}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grid.map((article, i) => (
                <ScrollReveal key={article.id} delay={i * 0.05}>
                  {article.source === 'internal' ? (
                    <Link href={article.href} className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full rounded-xl">
                      <ArticleCard article={article} readTime={t('insights','readTime')} />
                    </Link>
                  ) : (
                    <a href={article.href} target="_blank" rel="noopener noreferrer"
                      className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full rounded-xl"
                      aria-label={`${article.title} (${lang === 'es' ? 'abre en nueva pestaña' : 'opens in new tab'})`}
                    >
                      <ArticleCard article={article} readTime={t('insights','readTime')} sourceLabel={SOURCE_LABELS[article.source]} />
                    </a>
                  )}
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── SUBSTACK CTA ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">{t('insights','ctaTag')}</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">{t('insights','ctaH2')}</h2>
            <p className="text-white/60 text-lg mb-10">{t('insights','ctaSub')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">{t('insights','ctaBtn')}</a>
              <a href="https://medium.com/@mfmora" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base">
                {lang === 'es' ? 'Leer en Medium' : 'Read on Medium'}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

interface ArticleData {
  tag: string
  title: string
  excerpt: string
  readTime: string
  source: string
}

function FeaturedInner({ article, t, lang }: { article: ArticleData & { href: string }; t: (s: TranslationKey, k: string) => string; lang: string }) {
  return (
    <div className="grid lg:grid-cols-2 gap-0">
      <div className="p-8 lg:p-12">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">{t('insights','featured')}</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-semibold uppercase tracking-wider">{article.tag}</span>
          {article.source !== 'internal' && (
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/8 text-white/35 text-xs uppercase tracking-wider">
              {SOURCE_LABELS[article.source]} ↗
            </span>
          )}
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#28A9E1] transition-colors leading-tight">{article.title}</h2>
        <p className="text-white/60 text-lg leading-relaxed mb-6">{article.excerpt}</p>
        <div className="flex items-center gap-3 text-white/40 text-sm">
          <span>{article.readTime} {t('insights','readTime')}</span>
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
  )
}

function ArticleCard({ article, readTime, sourceLabel }: { article: ArticleData; readTime: string; sourceLabel?: string }) {
  return (
    <>
      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">
          {article.tag}
        </span>
        {sourceLabel && (
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/35 text-xs uppercase tracking-wider">
            {sourceLabel} ↗
          </span>
        )}
      </div>
      <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-[#28A9E1] transition-colors leading-snug">
        {article.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-4">{article.excerpt}</p>
      <span className="text-white/30 text-xs">{article.readTime} {readTime}</span>
    </>
  )
}
