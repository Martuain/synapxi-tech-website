import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Services — AI, Web3, Product Strategy & Digital Transformation',
  description:
    'Synapxi Tech offers strategic advisory in AI Strategy, Web3 & Tokenization, Delivery Transformation, Fractional Product Leadership, and Payments & Fintech.',
}

const services = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Transformation',
    icon: '⬡',
    tagline: 'From pilot projects to enterprise-wide intelligence.',
    challenge: {
      heading: 'The Challenge',
      body: 'Organizations are under pressure to adopt AI, yet most AI initiatives stall at the pilot stage due to unclear strategy, fragmented data, governance gaps, and misaligned organizational design. Technology investment without strategic clarity delivers no competitive advantage.',
    },
    approach: {
      heading: 'The Synapxi Approach',
      body: 'We start by auditing your current AI maturity and data landscape, then design a pragmatic AI strategy tied to measurable business outcomes. We help you select the right models, establish governance frameworks, and structure your organization to sustain AI adoption — from quick wins to long-term transformation.',
    },
    deliverables: [
      'AI Maturity Assessment & Readiness Report',
      'Strategic AI Roadmap (6–18 months)',
      'Use Case Prioritization Framework',
      'Data & Governance Architecture Recommendations',
      'AI Adoption Playbook',
      'KPI & Success Measurement Framework',
    ],
    outcomes: [
      'Reduced AI initiative failure rate',
      'Accelerated time-to-value on AI investments',
      'Organizational alignment around AI priorities',
      'Measurable ROI tracking from day one',
    ],
  },
  {
    id: 'web3',
    title: 'Web3 & Tokenization Advisory',
    icon: '◈',
    tagline: 'Designing the business models of the next economy.',
    challenge: {
      heading: 'The Challenge',
      body: 'Web3 and tokenization hold transformative potential for asset management, supply chains, financial services, and ownership models — but the space is noisy, technically complex, and littered with failed experiments. Organizations need guidance that combines regulatory awareness, technical credibility, and genuine business model thinking.',
    },
    approach: {
      heading: 'The Synapxi Approach',
      body: 'We bring enterprise-grade rigor to Web3 strategy. We evaluate where tokenization genuinely creates value for your specific context, design token economics aligned to your business model, and guide you through technology selection, regulatory considerations, and smart contract design — without the hype.',
    },
    deliverables: [
      'Web3 Opportunity Assessment',
      'Token Economics Design',
      'Smart Contract Architecture Review',
      'Regulatory Landscape Analysis',
      'Platform & Protocol Selection',
      'Go-to-Market Strategy for Token Launches',
    ],
    outcomes: [
      'Validated tokenization use cases with real business value',
      'Reduced regulatory and technical risk',
      'Clear implementation roadmap',
      'Investor-ready narrative for tokenized assets',
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery Transformation',
    icon: '◎',
    tagline: 'Engineering the organizational machine behind great products.',
    challenge: {
      heading: 'The Challenge',
      body: 'Slow delivery is rarely a technology problem. It\'s a structural one — siloed teams, unclear ownership, misaligned incentives, and processes designed for a different era. The cost of slow delivery compounds every quarter in lost opportunities, delayed revenue, and team attrition.',
    },
    approach: {
      heading: 'The Synapxi Approach',
      body: 'We diagnose delivery bottlenecks across your people, processes, and architecture, then design a transformation program that restores velocity without sacrificing quality. We embed alongside your teams — not as auditors, but as delivery practitioners who have done this before.',
    },
    deliverables: [
      'Delivery Diagnostic Assessment',
      'Team Topology & Operating Model Design',
      'Process Redesign & Lean Methodology Implementation',
      'OKR Framework & Product–Engineering Alignment',
      'Release Cadence & Quality Gates Design',
      'Transformation Roadmap (90-day, 6-month, 12-month)',
    ],
    outcomes: [
      'Measurably faster cycle times and release frequency',
      'Improved product quality and reduced defect rates',
      'Stronger cross-functional alignment',
      'Higher team engagement and retention',
    ],
  },
  {
    id: 'fractional',
    title: 'Fractional Product Leadership',
    icon: '◫',
    tagline: 'Senior product leadership, available when you need it.',
    challenge: {
      heading: 'The Challenge',
      body: 'Many organizations need senior product leadership for specific phases — launching a new product line, restructuring the product organization, entering a new market, or navigating a strategic pivot — but don\'t yet have the need or budget for a full-time executive. Junior hires at this stage create compounding strategic risk.',
    },
    approach: {
      heading: 'The Synapxi Approach',
      body: 'We embed senior product leadership into your organization on a fractional basis, operating as a genuine member of your leadership team. We run discovery, define roadmaps, mentor product managers, align stakeholders, and represent product in executive conversations — with the authority and accountability of a full-time role.',
    },
    deliverables: [
      'Product Strategy & 12-Month Roadmap',
      'Stakeholder Alignment Framework',
      'Product Team Mentoring & Capability Building',
      'Discovery & Validation Process Design',
      'Product KPI & Metrics Framework',
      'Hiring Specifications for Full-Time Successors',
    ],
    outcomes: [
      'Immediate strategic clarity without a long hiring cycle',
      'Stronger product culture and team capability',
      'Reduced dependency on founding team for product decisions',
      'Smooth transition to permanent product leadership when ready',
    ],
  },
  {
    id: 'payments',
    title: 'Payments & Fintech Consulting',
    icon: '◉',
    tagline: 'Infrastructure, strategy, and growth across the payments ecosystem.',
    challenge: {
      heading: 'The Challenge',
      body: 'The payments landscape is being reshaped by open banking, real-time rails, embedded finance, and regulatory change across Europe and the Americas. Organizations need advisors who understand both the technical infrastructure and the commercial dynamics — not one or the other.',
    },
    approach: {
      heading: 'The Synapxi Approach',
      body: 'Our payments advisory blends deep technical knowledge of payment infrastructure with commercial strategy. We help financial institutions, fintechs, and corporates evaluate opportunities, design products, select partners, and navigate the regulatory landscape — from PSD2 and ISO 20022 to local schemes and alternative payment methods.',
    },
    deliverables: [
      'Payments Strategy Assessment',
      'Payment Infrastructure Architecture Review',
      'Open Banking Opportunity Analysis',
      'Partner & Provider Evaluation',
      'Regulatory Compliance Roadmap',
      'Product Design for Payments Products',
    ],
    outcomes: [
      'Competitive payments product strategy',
      'Reduced infrastructure cost and complexity',
      'Faster time-to-market for new payment products',
      'Regulatory confidence in new markets',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="Services hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B4E] to-[#000E2B]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">What We Do</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Advisory Services
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Five integrated service lines that address the full spectrum of innovation,
              transformation, and product challenges facing modern organizations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICE NAV ─── */}
      <nav className="sticky top-16 lg:top-20 z-30 bg-[#000E2B]/90 backdrop-blur-md border-b border-white/10 overflow-x-auto" aria-label="Service navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 min-w-max">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-[#28A9E1] rounded-lg hover:bg-[#28A9E1]/5 transition-all whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── SERVICES ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {services.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 lg:py-20 ${idx < services.length - 1 ? 'border-b border-white/10' : ''}`}
            aria-label={service.title}
          >
            <ScrollReveal>
              <div className="flex items-start gap-5 mb-10">
                <div className="w-14 h-14 rounded-xl bg-[#28A9E1]/10 border border-[#28A9E1]/20 flex items-center justify-center text-[#28A9E1] text-2xl flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-[#28A9E1] text-lg font-medium">{service.tagline}</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <ScrollReveal delay={0.05}>
                <div className="card-dark p-7">
                  <h3 className="font-display text-lg font-semibold text-white mb-3">
                    {service.challenge.heading}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{service.challenge.body}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="card-dark p-7 border-[#28A9E1]/20">
                  <h3 className="font-display text-lg font-semibold text-white mb-3">
                    {service.approach.heading}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{service.approach.body}</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <ScrollReveal delay={0.15}>
                <div className="card-dark p-7">
                  <h3 className="font-display text-sm font-semibold text-white uppercase tracking-widest mb-5">
                    You Receive
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-white/60 text-sm">
                        <svg className="w-4 h-4 text-[#28A9E1] mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="card-dark p-7 bg-[#28A9E1]/5 border-[#28A9E1]/20">
                  <h3 className="font-display text-sm font-semibold text-white uppercase tracking-widest mb-5">
                    Expected Outcomes
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-white/70 text-sm">
                        <svg className="w-4 h-4 text-[#28A9E1] mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle cx="8" cy="8" r="3" fill="currentColor" />
                        </svg>
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

      {/* ─── CTA ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000E2B]/60" aria-label="Services CTA">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-tag">Start a Conversation</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Not Sure Which Service Fits?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Tell us about your challenge and we'll help you determine the right engagement model,
              scope, and timeline. Most conversations start simply.
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
