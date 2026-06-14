import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Why Digital Transformation Fails at Delivery',
  description: 'Organizations invest heavily in transformation strategy and almost nothing in the organizational design required to execute it. The delivery gap is where most transformations die.',
}

export default function DigitalTransformationDeliveryPage() {
  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <Link href="/insights" className="inline-flex items-center gap-2 text-[#28A9E1] text-sm hover:underline mb-8 block">← Back to Insights</Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">Digital Transformation</span>
            <span className="text-white/30 text-sm">6 min read</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Why Digital Transformation Fails at Delivery
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-10">
            Organizations invest heavily in transformation strategy and almost nothing in the organizational design required to execute it. The delivery gap is where most transformations die.
          </p>
        </ScrollReveal>

        <div className="border-t border-white/10 pt-10">
          <ScrollReveal>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Strategy-Execution Gap</h2>
              <p>
                Most large organizations have invested significantly in digital transformation strategy. They have commissioned roadmaps, engaged consultants, set ambitious targets, and built compelling narratives for their boards. The gap is almost never in the strategy — it is in the organizational capability to execute it.
              </p>
              <p>
                Transformation fails at delivery because the organizational design that enabled the old way of working is precisely the wrong design for the new way. Functional silos, annual planning cycles, hierarchical decision-making, and output-focused metrics are deeply embedded in most large organizations — and they are the enemy of digital transformation.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Team Topology Problem</h2>
              <p>
                One of the most common failure patterns is organizing transformation work into a separate "digital" team, separate from the business. This creates the illusion of progress — the digital team builds things — while leaving the underlying organization unchanged. When the digital team's work needs to be adopted by the business, it fails because the business has not been part of the journey.
              </p>
              <p>
                Successful transformation embeds change capability directly into business teams, supported by shared platform teams that reduce cognitive load and enable faster delivery across the organization.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Metrics That Reward the Wrong Behaviors</h2>
              <p>
                Transformation requires experimentation, which means accepting failure as part of the process. Organizations that measure delivery teams on output — features shipped, projects completed, budgets spent — systematically discourage the experimentation that transformation requires. The shift to outcome-based metrics is one of the most important and most difficult changes in any transformation program.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">What Successful Transformation Looks Like</h2>
              <p>
                Organizations that successfully transform share a set of common characteristics: leadership that understands and is committed to the organizational changes required (not just the technology changes), product and engineering teams with real autonomy and clear outcome accountability, platform investments that reduce the cost of building and changing systems, and a culture that treats learning from failure as progress rather than evidence of incompetence.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 p-8 card-dark border-[#28A9E1]/20 rounded-2xl text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Navigating a Transformation Program?</h3>
            <p className="text-white/60 mb-6">Synapxi Tech helps organizations design the organizational model required to actually execute digital transformation — not just plan it.</p>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </ScrollReveal>
      </div>
    </article>
  )
}
