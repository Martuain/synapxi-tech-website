import type { Metadata } from 'next'
import Link from 'next/link'
import NeuralNetwork from '@/components/NeuralNetwork'
import ScrollReveal from '@/components/ScrollReveal'
import CountUp from '@/components/CountUp'

export const metadata: Metadata = {
  title: 'Synapxi Tech — Innovate. Disrupt. Globalize.',
  description:
    'Strategic advisory for AI, tokenization, product innovation and digital transformation. Supporting organizations across Europe and the Americas.',
}

const expertiseItems = [
  { label: 'AI', icon: '⬡' },
  { label: 'Web3', icon: '◈' },
  { label: 'Payments', icon: '◎' },
  { label: 'Product Strategy', icon: '◫' },
  { label: 'Data Governance', icon: '◉' },
  { label: 'Digital Transformation', icon: '◈' },
]

const services = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Transformation',
    description:
      'Move beyond AI experiments. We help organizations define and execute AI strategies that unlock competitive advantage, from model selection and governance to organization-wide adoption.',
    icon: '⬡',
  },
  {
    id: 'web3',
    title: 'Web3 & Tokenization Advisory',
    description:
      'We help enterprises and scaleups evaluate, design, and launch tokenization initiatives — from asset tokenization to decentralized finance infrastructure.',
    icon: '◈',
  },
  {
    id: 'delivery',
    title: 'Delivery Transformation',
    description:
      'Restructure your product and engineering delivery for speed, quality, and resilience. We bring enterprise delivery experience to organizations that need to move faster.',
    icon: '◎',
  },
  {
    id: 'fractional',
    title: 'Fractional Product Leadership',
    description:
      'Embed senior product leadership into your organization without a full-time hire. Strategic guidance, team mentoring, and hands-on product direction on your timeline.',
    icon: '◫',
  },
  {
    id: 'payments',
    title: 'Payments & Fintech Consulting',
    description:
      'Deep expertise in payments infrastructure, open banking, and fintech strategy across Europe and the Americas. From API architecture to regulatory navigation.',
    icon: '◉',
  },
]

const whyReasons = [
  {
    title: 'Rare Combination of Expertise',
    description:
      'Enterprise delivery experience, product strategy, fintech expertise, data governance, AI adoption, and blockchain — few consultancies combine all six credibly.',
  },
  {
    title: 'Outcome-Driven Approach',
    description:
      'Every engagement is designed to deliver measurable business impact. We define success metrics upfront and hold ourselves accountable to them.',
  },
  {
    title: 'Europe & Americas Perspective',
    description:
      'Supporting organizations across Spain, the UK, Europe and the Americas with market-specific insight and cross-border delivery experience.',
  },
  {
    title: 'Boutique, Not Body Shop',
    description:
      'We operate as a premium advisory practice. You get senior expertise on your engagement, not juniors delivered through a staffing model.',
  },
]

const insights = [
  {
    tag: 'Web3',
    title: 'Web3 and the Future of Collective Ownership',
    excerpt:
      'How tokenization is redefining ownership models for assets, organizations, and value exchange at a global scale.',
    href: '/insights/web3-collective-ownership',
  },
  {
    tag: 'AI',
    title: 'The Real Barriers to Enterprise AI Adoption',
    excerpt:
      "Most AI initiatives fail not because of technology, but because of governance, data quality, and change management. Here's what actually works.",
    href: '/insights/enterprise-ai-adoption',
  },
  {
    tag: 'Payments',
    title: 'Open Banking Is Not a Feature — It\'s a Business Model',
    excerpt:
      'How forward-thinking financial institutions are using open banking to unlock new revenue streams, not just comply with regulation.',
    href: '/insights/open-banking-business-model',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        {/* Neural network background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] via-[#001B4E] to-[#000E2B]">
          <NeuralNetwork />
          {/* Radial glow */}
          <div className="absolute inset-0 bg-gradient-radial from-[#28A9E1]/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 pt-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#28A9E1]/30 bg-[#28A9E1]/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#28A9E1] animate-pulse" />
            <span className="text-[#28A9E1] text-xs font-medium tracking-wider uppercase">
              Strategic Advisory · Europe & Americas
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Innovate.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28A9E1] to-[#7DD3F5]">Disrupt.</span>{' '}
            Globalize.
          </h1>

          <p className="text-white/60 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
            Strategic advisory for AI, tokenization, product innovation and digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base w-full sm:w-auto">
              Start Your Project
            </Link>
            <Link href="/case-studies" className="btn-secondary text-base w-full sm:w-auto">
              Explore Case Studies
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ─── EXPERTISE STRIP ─── */}
      <section
        className="border-y border-white/10 bg-[#000E2B]/60 backdrop-blur-sm overflow-hidden"
        aria-label="Areas of expertise"
      >
        <div className="py-5 flex items-center">
          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {[...expertiseItems, ...expertiseItems].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-8">
                <span className="text-[#28A9E1] text-lg" aria-hidden="true">{item.icon}</span>
                <span className="font-display text-sm font-semibold text-white/70 uppercase tracking-widest">
                  {item.label}
                </span>
                <span className="text-white/20 mx-2" aria-hidden="true">·</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0) }
            to { transform: translateX(-50%) }
          }
        `}</style>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" aria-label="Services">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-tag">What We Do</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Advisory Services
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                We combine enterprise delivery experience with cutting-edge innovation expertise to help
                organizations navigate complexity and unlock sustainable growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <Link
                  href={`/services#${service.id}`}
                  className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-xl mb-5 group-hover:bg-[#28A9E1]/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-[#28A9E1] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-[#28A9E1] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link href="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FEATURED CASE STUDY: DaMap ─── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="Featured case study">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <span className="section-tag">Featured Case Study</span>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 mb-6">
                  <span className="text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">Payments · Automation</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  DaMap: Automating Payments Operations at Scale
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  A leading Latin American fintech needed to scale payment reconciliation operations
                  while dramatically reducing manual overhead. We designed and delivered a product
                  strategy and automation architecture that transformed their operations.
                </p>
                <Link href="/case-studies/damap" className="btn-primary">
                  Read Case Study
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 16, suffix: 'M+', label: 'Monthly Transactions' },
                  { value: 95, suffix: '%', label: 'Automation Rate' },
                  { value: 300, suffix: '+', label: 'Active Users' },
                  { value: 30000, suffix: '+', label: 'Annual Work Hours Saved' },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="card-dark p-6 text-center border-[#28A9E1]/20"
                  >
                    <div className="font-display text-3xl lg:text-4xl font-bold text-[#28A9E1] mb-2">
                      <CountUp
                        end={metric.value}
                        suffix={metric.suffix}
                      />
                    </div>
                    <p className="text-white/50 text-sm leading-snug">{metric.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── WHY SYNAPXI TECH ─── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" aria-label="Why Synapxi Tech">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-tag">Why Synapxi Tech</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                The Differentiator Is the Combination
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Very few consultancies can credibly combine enterprise delivery, product strategy, fintech expertise,
                data governance, AI adoption, and blockchain & tokenization.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyReasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.1}>
                <div className="card-dark p-8 h-full">
                  <div className="w-8 h-8 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-sm font-bold font-display mb-5">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">{reason.description}</p>
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
                <span className="section-tag">Insights</span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
                  Perspectives on Innovation
                </h2>
              </div>
              <Link href="/insights" className="btn-secondary text-sm">
                All Insights
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((article, i) => (
              <ScrollReveal key={article.href} delay={i * 0.1}>
                <Link
                  href={article.href}
                  className="group block card-dark p-7 hover:border-[#28A9E1]/40 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider mb-5">
                    {article.tag}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-[#28A9E1] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" aria-label="Call to action">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden border border-[#28A9E1]/20 bg-gradient-to-br from-[#001B4E] to-[#001030] p-12 lg:p-16 text-center">
              {/* Decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#28A9E1]/60 to-transparent" />
              <span className="section-tag">Ready to Start?</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Let's Define What's Next for Your Organization
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                Whether you're evaluating an AI strategy, exploring tokenization, or rethinking
                your product organization — let's start with a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-base">
                  Start Your Project
                </Link>
                <Link href="/about" className="btn-secondary text-base">
                  About Synapxi Tech
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-4 bg-[#001B4E]/90 backdrop-blur-md border-t border-white/10">
        <Link href="/contact" className="btn-primary w-full text-center text-sm">
          Start Your Project
        </Link>
      </div>
    </>
  )
}
