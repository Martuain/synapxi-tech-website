import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'The Real Barriers to Enterprise AI Adoption',
  description:
    'Most AI initiatives fail not because of technology, but because of governance, data quality, and change management. Here is what actually works.',
}

export default function EnterpriseAIAdoptionPage() {
  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8" aria-label="Article: Enterprise AI Adoption">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <Link href="/insights" className="inline-flex items-center gap-2 text-[#28A9E1] text-sm hover:underline mb-8 block">
            ← Back to Insights
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">AI</span>
            <span className="text-white/30 text-sm">6 min read</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            The Real Barriers to Enterprise AI Adoption
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-10">
            Most AI initiatives fail not because of technology, but because of governance, data quality, and change management. Understanding the structural barriers is the first step to overcoming them.
          </p>
        </ScrollReveal>

        <div className="border-t border-white/10 pt-10">
          <ScrollReveal>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Technology Is Not the Problem</h2>
              <p>
                The tools for building AI-powered applications have never been more accessible. Foundation models from leading providers are available via API. Open-source alternatives are closing the gap rapidly. The barrier to building an AI prototype has essentially collapsed.
              </p>
              <p>
                And yet, the vast majority of enterprise AI initiatives fail to move from pilot to production. Gartner research consistently finds that fewer than half of AI pilots reach production. The problem is not the technology.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Data Quality: The Invisible Barrier</h2>
              <p>
                Enterprise data is rarely as clean, structured, or accessible as AI initiatives assume. Years of accumulated technical debt, siloed systems, inconsistent data definitions, and missing governance mean that the data required to train or fine-tune AI models is often unavailable in usable form. Fixing data problems is unglamorous, expensive, and time-consuming — which is exactly why it gets underestimated.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Governance: The Missing Framework</h2>
              <p>
                Who is responsible when an AI system makes a wrong decision? Who reviews model outputs before they affect customers? How are models monitored in production? These governance questions are critical for production AI systems, yet most organizations attempt to build AI capabilities before they have answers.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">What Actually Works</h2>
              <p>
                Organizations that successfully move AI from pilot to production share a common pattern: they treat AI as an organizational change program, not a technology project. They invest in data readiness before selecting models. They establish governance frameworks before deploying to production. And they choose use cases based on business value and data availability, not technical novelty.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 p-8 card-dark border-[#28A9E1]/20 rounded-2xl text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Navigating AI Adoption in Your Organization?</h3>
            <p className="text-white/60 mb-6">Synapxi Tech helps organizations move from AI experimentation to enterprise-grade deployment.</p>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </ScrollReveal>
      </div>
    </article>
  )
}
