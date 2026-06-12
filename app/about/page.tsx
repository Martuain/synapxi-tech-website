import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'About — Why Synapxi Tech Exists',
  description:
    'Synapxi Tech is a boutique innovation advisory firm helping organizations navigate AI, tokenization, product strategy and digital transformation across Europe and the Americas.',
}

const expertise = [
  { title: 'AI Strategy & Adoption', description: 'From maturity assessment to enterprise deployment, including model governance and organizational design for AI.' },
  { title: 'Web3 & Tokenization', description: 'Token economics, smart contract strategy, decentralized finance structures, and institutional-grade blockchain implementations.' },
  { title: 'Product Strategy', description: 'Product vision, roadmap design, discovery frameworks, and operating model design for product organizations.' },
  { title: 'Payments & Fintech', description: 'Deep expertise across payment infrastructure, open banking, embedded finance, and cross-border payment systems.' },
  { title: 'Data Governance', description: 'Data architecture, quality frameworks, regulatory compliance, and AI data readiness assessments.' },
  { title: 'Digital Transformation', description: 'Enterprise transformation strategy, delivery modernization, and change management for complex organizations.' },
]

const industries = [
  'Financial Services',
  'Banking',
  'Payments & Fintech',
  'Cybersecurity',
  'Real Estate',
  'Enterprise Technology',
  'Media & Entertainment',
  'Energy & Utilities',
]

const regions = [
  { name: 'Spain', description: 'Headquartered in Madrid, with deep roots in the Spanish market and access to the broader Southern European ecosystem.' },
  { name: 'United Kingdom', description: 'Active presence in the UK fintech and financial services market, including experience with FCA-regulated environments.' },
  { name: 'Europe', description: 'Cross-border project experience across the EU, with regulatory knowledge spanning MiCA, PSD2, DORA, and GDPR.' },
  { name: 'Americas', description: 'Delivery experience across Latin America and North America, including fintech ecosystems in Mexico, Brazil, Colombia, and the USA.' },
]

const chooseReasons = [
  {
    title: 'The Combination No One Else Offers',
    description:
      'Enterprise delivery experience, product strategy, fintech expertise, data governance, AI adoption, and blockchain & tokenization — credibly combined in a single advisory relationship.',
  },
  {
    title: 'Outcomes First, Always',
    description:
      'Every engagement is scoped around measurable business outcomes. We define what success looks like before work begins, and we are accountable to it.',
  },
  {
    title: 'Senior Expertise on Your Engagement',
    description:
      'We operate as a boutique advisory firm. The expertise you evaluate in the conversation is the expertise you get on the engagement — not junior delivery teams.',
  },
  {
    title: 'Cross-Industry, Cross-Border Perspective',
    description:
      'Having worked across banking, fintech, cybersecurity, real estate, and enterprise technology — and across Europe and the Americas — we bring pattern recognition most single-industry advisors cannot.',
  },
  {
    title: 'Built for Ambitious Organizations',
    description:
      'We work best with organizations that are serious about transformation — scaleups scaling fast, mid-market companies modernizing, and enterprise innovation teams that need a partner who can operate at their level.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="About hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">About Synapxi Tech</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Built for the Intersection of Innovation and Enterprise
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              A boutique advisory firm for organizations ready to move beyond conversations
              about transformation and start executing it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── WHY WE EXIST ─── */}
        <section className="py-16 lg:py-20 border-b border-white/10" aria-label="Why we exist">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="section-tag">Why Synapxi Tech Exists</span>
              <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
                The Gap Between Vision and Execution Is Where Most Organizations Struggle
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-5 text-white/60 leading-relaxed">
                <p>
                  Most organizations understand they need to transform — they have the ambition,
                  often the investment, and sometimes the strategy. What they lack is a trusted
                  partner who can operate at the intersection of emerging technology, product
                  thinking, and enterprise delivery.
                </p>
                <p>
                  Synapxi Tech was built to close that gap. We combine deep expertise in AI,
                  Web3, payments, product strategy, and digital transformation with the delivery
                  credibility to actually execute — not just advise from the outside.
                </p>
                <p>
                  We work with scaleups, mid-market companies, financial institutions, and enterprise
                  innovation teams across Europe and the Americas who are ready to translate ambition
                  into reality.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── MISSION & VISION ─── */}
        <section className="py-16 lg:py-20 border-b border-white/10" aria-label="Mission and vision">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card-dark p-8 border-[#28A9E1]/20 h-full">
                <div className="w-10 h-10 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-lg mb-6">
                  ◎
                </div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">Mission</h2>
                <p className="text-white/60 leading-relaxed">
                  To help organizations transform ambitious ideas into scalable products, intelligent systems,
                  and new business models — through strategic advisory in AI, tokenization, product innovation,
                  and digital transformation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="card-dark p-8 h-full">
                <div className="w-10 h-10 rounded-lg bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-lg mb-6">
                  ◈
                </div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">Vision</h2>
                <p className="text-white/60 leading-relaxed">
                  To be the advisory firm that organizations across Europe and the Americas trust when the
                  challenge is complex, the stakes are high, and the answer requires genuine cross-domain expertise —
                  not a generalist framework applied from a distance.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── APPROACH ─── */}
        <section className="py-16 lg:py-20 border-b border-white/10" aria-label="Our approach">
          <ScrollReveal>
            <span className="section-tag">How We Work</span>
            <h2 className="font-display text-4xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-white/50 text-lg max-w-2xl mb-12">
              Every engagement follows the same principle: understand the business problem deeply before
              proposing a solution. We are advisors, not vendors.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Discover',
                description:
                  'We invest significant time understanding your organization, market, technology landscape, and the specific challenge you\'re trying to solve — before making any recommendations.',
              },
              {
                step: '02',
                title: 'Define',
                description:
                  'We scope the engagement around measurable business outcomes, agree on success criteria upfront, and design an approach that is proportionate to the challenge.',
              },
              {
                step: '03',
                title: 'Deliver',
                description:
                  'We operate with the accountability of a delivery team — producing tangible outputs, checking progress against outcomes, and adapting as we learn.',
              },
            ].map((step, i) => (
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

        {/* ─── EXPERTISE ─── */}
        <section className="py-16 lg:py-20 border-b border-white/10" aria-label="Areas of expertise">
          <ScrollReveal>
            <span className="section-tag">Expertise</span>
            <h2 className="font-display text-4xl font-bold text-white mb-12">Areas of Expertise</h2>
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

        {/* ─── INDUSTRIES ─── */}
        <section className="py-16 lg:py-20 border-b border-white/10" aria-label="Industries">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="section-tag">Industries</span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Industry Experience
              </h2>
              <p className="text-white/50 leading-relaxed">
                Our advisory work spans a range of industries, with particular depth in financial services,
                payments, and technology. Cross-industry experience gives us pattern recognition that
                industry specialists cannot offer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-[#28A9E1]/40 hover:text-[#28A9E1] transition-colors cursor-default"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── GLOBAL EXPERIENCE ─── */}
        <section className="py-16 lg:py-20 border-b border-white/10" aria-label="Global experience">
          <ScrollReveal>
            <span className="section-tag">Geography</span>
            <h2 className="font-display text-4xl font-bold text-white mb-12">Global Experience</h2>
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

        {/* ─── WHY CHOOSE ─── */}
        <section className="py-16 lg:py-20" aria-label="Why choose Synapxi Tech">
          <ScrollReveal>
            <span className="section-tag">The Case for Synapxi Tech</span>
            <h2 className="font-display text-4xl font-bold text-white mb-12">
              Why Organizations Choose Synapxi Tech
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {chooseReasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.07}>
                <div className="card-dark p-7 flex items-start gap-6">
                  <div className="font-display text-2xl font-bold text-[#28A9E1]/30 w-10 flex-shrink-0 text-right">
                    {String(i + 1).padStart(2, '0')}
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

      {/* ─── CTA ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="About CTA">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">Work With Us</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Let's Explore Whether We're the Right Fit
            </h2>
            <p className="text-white/60 text-lg mb-10">
              We're selective about the engagements we take on because we're committed to delivering
              real outcomes. If your challenge is significant and your organization is ready to act,
              let's talk.
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
