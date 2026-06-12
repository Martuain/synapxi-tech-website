import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CountUp from '@/components/CountUp'

export const metadata: Metadata = {
  title: 'Case Studies — Real-World Advisory Impact',
  description:
    'Explore how Synapxi Tech has helped organizations navigate AI, payments, tokenization, and digital transformation across Europe and the Americas.',
}

const caseStudies = [
  {
    id: 'damap',
    name: 'DaMap',
    subtitle: 'Payments Automation at Scale',
    client: 'DaMap',
    industry: 'Payments · Fintech',
    region: 'Latin America',
    confidential: false,
    challenge:
      'A fast-growing Latin American fintech managing high-volume payment reconciliation was drowning in manual processes. As transaction volumes surged, the operations team faced an unsustainable burden that threatened both accuracy and scalability.',
    approach:
      'We designed and led the product strategy for an intelligent reconciliation and payments operations platform — defining the core product architecture, building the automation framework, and embedding with the product and engineering teams through delivery.',
    role: 'Product Strategy Lead & Advisory',
    metrics: [
      { value: 16, suffix: 'M+', label: 'Monthly Transactions' },
      { value: 95, suffix: '%', label: 'Automation Rate' },
      { value: 300, suffix: '+', label: 'Active Users' },
      { value: 30000, suffix: '+', label: 'Annual Work Hours Saved' },
    ],
    impact:
      'The platform transformed DaMap\'s operational model, enabling the team to scale transaction volumes without proportional headcount growth, while dramatically improving reconciliation accuracy and reducing error rates.',
    tags: ['Payments', 'Product Strategy', 'Automation'],
  },
  {
    id: 'fintechtainment',
    name: 'The Fintech\'tainment Company',
    subtitle: 'Where Entertainment Meets Financial Services',
    client: 'Confidential',
    industry: 'Fintech · Entertainment',
    region: 'Europe',
    confidential: true,
    challenge:
      'A European operator at the intersection of financial services and entertainment needed to define a product strategy for a novel embedded finance experience — a greenfield challenge with no existing playbook.',
    approach:
      'We ran an intensive product discovery and market validation process, defined the core product proposition, designed the data and payments architecture, and guided the team through regulatory considerations for their embedded finance model.',
    role: 'Fractional Product Leadership & Payments Advisory',
    metrics: [
      { value: 0, suffix: '', label: 'Greenfield to MVP', prefix: '' },
    ],
    impact:
      'Delivered a validated product vision, go-to-market strategy, and technical roadmap that enabled the company to secure investment and proceed to build phase with confidence.',
    tags: ['Product Strategy', 'Payments', 'Fractional Leadership'],
  },
  {
    id: 'real-estate-tokenization',
    name: 'Real Estate Tokenization Platform',
    subtitle: 'Democratizing Property Investment',
    client: 'Confidential — Real Estate Firm',
    industry: 'Real Estate · Web3',
    region: 'Europe',
    confidential: true,
    challenge:
      'A real estate investment firm wanted to explore tokenizing commercial property assets to broaden their investor base and improve liquidity. They had the assets but no technical or regulatory blueprint for a tokenized offering.',
    approach:
      'We designed the tokenization strategy end-to-end: from legal structuring considerations and token economics through to the technical architecture for smart contracts, investor onboarding, and secondary market infrastructure.',
    role: 'Web3 Strategy & Tokenization Advisory',
    metrics: [],
    impact:
      'Produced a complete tokenization blueprint enabling the client to engage legal counsel, technology partners, and investors with a credible, detailed proposal.',
    tags: ['Web3', 'Tokenization', 'Product Strategy'],
  },
  {
    id: 'cbdc',
    name: 'CBDC Innovation Initiative',
    subtitle: 'Central Bank Digital Currency Infrastructure',
    client: 'Confidential — Central Bank Ecosystem',
    industry: 'Banking · Digital Assets',
    region: 'Europe',
    confidential: true,
    challenge:
      'A European financial institution participating in a central bank digital currency initiative needed to design the product and technical architecture for a CBDC infrastructure pilot, integrating with legacy settlement systems and meeting stringent regulatory requirements.',
    approach:
      'We led the product and technical advisory for the CBDC design sprint — mapping regulatory requirements, evaluating distributed ledger technology options, designing interoperability with existing financial market infrastructure, and producing a prototype specification.',
    role: 'Product & Technical Advisory',
    metrics: [],
    impact:
      'Delivered a CBDC architecture blueprint and prototype specification that contributed to the institution\'s active participation in an ECB-adjacent digital euro initiative.',
    tags: ['Digital Assets', 'CBDC', 'Payments'],
  },
  {
    id: 'global-payments',
    name: 'Global Payments Platform',
    subtitle: 'Cross-Border Infrastructure Modernization',
    client: 'Confidential — Global Payments Provider',
    industry: 'Payments',
    region: 'Global',
    confidential: true,
    challenge:
      'A global payments provider needed to modernize their cross-border infrastructure to support real-time settlement, ISO 20022 compliance, and alternative payment method integration across 30+ markets.',
    approach:
      'We conducted a comprehensive payments infrastructure audit and led the product strategy for a phased modernization program, prioritizing high-revenue corridors, defining API architecture standards, and aligning engineering capacity with strategic payment method expansion.',
    role: 'Payments Strategy & Product Advisory',
    metrics: [],
    impact:
      'Delivered a multi-phase payments modernization roadmap that reduced complexity, improved developer experience, and positioned the platform for next-generation payment scheme participation.',
    tags: ['Payments', 'Digital Transformation', 'Product Strategy'],
  },
  {
    id: 'banking-transformation',
    name: 'Banking Transformation Program',
    subtitle: 'Enterprise Product Operating Model',
    client: 'Confidential — Tier 1 Financial Institution',
    industry: 'Banking',
    region: 'Europe · Americas',
    confidential: true,
    challenge:
      'A large financial institution operating across multiple geographies was struggling with slow delivery cycles, siloed product teams, and inconsistent customer experience across markets. Digital transformation initiatives were stalling at execution.',
    approach:
      'We designed and helped implement a new product operating model — restructuring team topology, establishing product management standards, defining an OKR framework aligned to business outcomes, and coaching senior product leaders through the cultural transition.',
    role: 'Delivery Transformation & Fractional Product Leadership',
    metrics: [],
    impact:
      'Measurably improved delivery velocity and cross-functional alignment, with product teams reporting significantly higher confidence in prioritization and stakeholder management.',
    tags: ['Digital Transformation', 'Delivery Transformation', 'Fractional Leadership'],
  },
  {
    id: 'ai-threat-detection',
    name: 'AI Threat Detection Platform',
    subtitle: 'Intelligent Cybersecurity for Enterprise',
    client: 'Confidential — Cybersecurity Company',
    industry: 'Cybersecurity · AI',
    region: 'Europe',
    confidential: true,
    challenge:
      'A European cybersecurity company was building an AI-powered threat detection platform but lacked the product strategy and market positioning to take it from R&D to enterprise commercial success.',
    approach:
      'We ran a product-market fit discovery process, defined the enterprise buyer journey, designed the product packaging and pricing model, and developed the technical validation framework that enterprise security teams require before procurement.',
    role: 'Product Strategy & AI Advisory',
    metrics: [],
    impact:
      'Delivered a market-validated product strategy and enterprise go-to-market playbook that enabled the company to close its first major enterprise contracts.',
    tags: ['AI', 'Product Strategy', 'Cybersecurity'],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Case studies hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">Proven Impact</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Real engagements. Real outcomes. Across payments, AI, tokenization,
              and digital transformation — in Europe and the Americas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col gap-12 lg:gap-16">
          {caseStudies.map((cs, idx) => (
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
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                        {cs.confidential && (
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs uppercase tracking-wider">
                            Anonymous
                          </span>
                        )}
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-1">
                        {cs.name}
                      </h2>
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
                    <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">Challenge</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">Approach</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{cs.approach}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">Role</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{cs.role}</p>
                    <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">Business Impact</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{cs.impact}</p>
                  </div>
                  <div className="md:col-span-1">
                    {cs.metrics.length > 0 ? (
                      <>
                        <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Results</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {cs.metrics.map((m) => (
                            <div key={m.label} className="bg-[#28A9E1]/5 border border-[#28A9E1]/15 rounded-lg p-3 text-center">
                              <div className="font-display text-xl font-bold text-[#28A9E1]">
                                <CountUp end={m.value} suffix={m.suffix} />
                              </div>
                              <p className="text-white/40 text-xs mt-1 leading-snug">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="bg-white/3 border border-white/8 rounded-lg p-5 h-full flex items-center justify-center">
                        <p className="text-white/30 text-xs text-center italic">
                          Specific metrics available under NDA on request
                        </p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="Case studies CTA">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">Start a Conversation</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Ready to Create Your Own Case Study?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Every engagement starts with a clear understanding of your challenge and what
              success looks like for your organization.
            </p>
            <Link href="/contact" className="btn-primary text-base">
              Start Your Project
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
