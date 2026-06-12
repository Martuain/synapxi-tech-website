import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Insights — Perspectives on AI, Web3, Payments & Transformation',
  description:
    'Thought leadership on AI strategy, Web3, tokenization, payments, product strategy, and digital transformation from Synapxi Tech.',
}

const categories = ['All', 'AI', 'Web3', 'Payments', 'Product Strategy', 'Digital Transformation']

const articles = [
  {
    id: 'web3-collective-ownership',
    tag: 'Web3',
    featured: true,
    title: 'Web3 and the Future of Collective Ownership',
    excerpt:
      'Tokenization is redefining ownership models for assets, organizations, and value exchange at a global scale. This isn\'t just about crypto — it\'s about a new paradigm for how value is created, distributed, and governed.',
    readTime: '8 min read',
    href: '/insights/web3-collective-ownership',
    external: false,
  },
  {
    id: 'enterprise-ai-adoption',
    tag: 'AI',
    featured: false,
    title: 'The Real Barriers to Enterprise AI Adoption',
    excerpt:
      'Most AI initiatives fail not because of technology, but because of governance, data quality, and change management. Understanding the structural barriers is the first step to overcoming them.',
    readTime: '6 min read',
    href: '/insights/enterprise-ai-adoption',
    external: false,
  },
  {
    id: 'open-banking-business-model',
    tag: 'Payments',
    featured: false,
    title: 'Open Banking Is Not a Feature — It\'s a Business Model',
    excerpt:
      'Forward-thinking financial institutions are using open banking to unlock new revenue streams, not just comply with regulation. The window to lead is open, but it won\'t stay open forever.',
    readTime: '5 min read',
    href: '/insights/open-banking-business-model',
    external: false,
  },
  {
    id: 'product-strategy-ai-era',
    tag: 'Product Strategy',
    featured: false,
    title: 'Product Strategy in the AI Era: What Changes, What Doesn\'t',
    excerpt:
      'AI is changing the product development cycle — from discovery to delivery — but the fundamentals of good product strategy remain unchanged. Here\'s how to think about the intersection.',
    readTime: '7 min read',
    href: '/insights/product-strategy-ai-era',
    external: false,
  },
  {
    id: 'tokenization-real-assets',
    tag: 'Web3',
    featured: false,
    title: 'Tokenizing Real-World Assets: The Opportunity Beyond Crypto',
    excerpt:
      'Real estate, private equity, infrastructure, and commodities are all being reimagined through tokenization. What does the opportunity actually look like, and what are the genuine barriers to adoption?',
    readTime: '9 min read',
    href: '/insights/tokenization-real-assets',
    external: false,
  },
  {
    id: 'digital-transformation-delivery',
    tag: 'Digital Transformation',
    featured: false,
    title: 'Why Digital Transformation Fails at Delivery',
    excerpt:
      'Organizations invest heavily in transformation strategy and almost nothing in the organizational design required to execute it. The delivery gap is where most transformations die.',
    readTime: '6 min read',
    href: '/insights/digital-transformation-delivery',
    external: false,
  },
  {
    id: 'iso20022-payments',
    tag: 'Payments',
    featured: false,
    title: 'ISO 20022 and the Data-Rich Future of Payments',
    excerpt:
      'The migration to ISO 20022 is more than a technical upgrade — it\'s an opportunity to unlock rich payment data that enables entirely new product and risk management capabilities.',
    readTime: '5 min read',
    href: 'https://substack.com/@synapxitech',
    external: true,
  },
]

export default function InsightsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Insights hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">Perspectives</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
              Insights
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Perspectives on AI, Web3, payments, product strategy, and digital transformation
              from practitioners who work at the frontier.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 flex items-center justify-center gap-2">
              <a
                href="https://substack.com/@synapxitech"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Subscribe on Substack →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FEATURED ARTICLE ─── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12" aria-label="Featured article">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link
              href={articles[0].href}
              className="group block card-dark rounded-2xl overflow-hidden border-[#28A9E1]/20 hover:border-[#28A9E1]/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">
                      Featured
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-semibold uppercase tracking-wider">
                      {articles[0].tag}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#28A9E1] transition-colors leading-tight">
                    {articles[0].title}
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-white/40 text-sm">
                    <span>{articles[0].readTime}</span>
                    <span>·</span>
                    <span className="text-[#28A9E1] font-medium group-hover:underline">Read Article →</span>
                  </div>
                </div>
                {/* Visual accent */}
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

      {/* ─── CATEGORY FILTER (visual only) ─── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6" aria-label="Article categories">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] ${
                  i === 0
                    ? 'bg-[#28A9E1] text-white'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:border-[#28A9E1]/40 hover:text-[#28A9E1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARTICLE GRID ─── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20" aria-label="All articles">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 0.07}>
                {article.external ? (
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full"
                    aria-label={`${article.title} (opens in new tab)`}
                  >
                    <ArticleCard article={article} />
                  </a>
                ) : (
                  <Link
                    href={article.href}
                    className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <ArticleCard article={article} />
                  </Link>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUBSTACK CTA ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="Subscribe CTA">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">Stay Informed</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Get Insights Delivered
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Subscribe to our Substack for perspectives on AI, Web3, payments, and digital
              transformation — written for practitioners and decision-makers.
            </p>
            <a
              href="https://substack.com/@synapxitech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Subscribe on Substack
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

interface ArticleCardProps {
  article: {
    tag: string
    title: string
    excerpt: string
    readTime: string
    external?: boolean
  }
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <>
      <div className="flex items-center gap-2 mb-5">
        <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">
          {article.tag}
        </span>
        {article.external && (
          <span className="px-2 py-1 rounded text-white/30 text-xs">↗</span>
        )}
      </div>
      <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-[#28A9E1] transition-colors leading-snug">
        {article.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-4">{article.excerpt}</p>
      <span className="text-white/30 text-xs">{article.readTime}</span>
    </>
  )
}
