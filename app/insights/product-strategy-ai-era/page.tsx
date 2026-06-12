import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: "Product Strategy in the AI Era: What Changes, What Doesn't",
  description: 'AI is changing the product development cycle — from discovery to delivery — but the fundamentals of good product strategy remain unchanged.',
}

export default function ProductStrategyAIEraPage() {
  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <Link href="/insights" className="inline-flex items-center gap-2 text-[#28A9E1] text-sm hover:underline mb-8 block">← Back to Insights</Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">Product Strategy</span>
            <span className="text-white/30 text-sm">7 min read</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Product Strategy in the AI Era: What Changes, What Doesn't
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-10">
            AI is reshaping the product development cycle from discovery to delivery — but the fundamentals of good product strategy remain unchanged. Here is how to think about the intersection.
          </p>
        </ScrollReveal>

        <div className="border-t border-white/10 pt-10">
          <ScrollReveal>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">What Has Not Changed</h2>
              <p>
                The purpose of product strategy has not changed: identify a valuable problem, design the best solution you can validate, and build an organization capable of delivering it sustainably. The questions that matter — who is this for, what problem does it solve, why will they choose us — are as relevant now as they were before large language models existed.
              </p>
              <p>
                What has changed is the surface area of what is buildable, the speed at which it can be built, and the competitive dynamics that result.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Accelerated Discovery</h2>
              <p>
                AI is already transforming the discovery phase of product development. User research synthesis, competitive analysis, market sizing, and persona development can all be done faster and at greater depth. Product teams that use AI tooling in discovery are not just saving time — they are able to explore a much wider hypothesis space before committing to a direction.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The New Build vs. Buy Calculus</h2>
              <p>
                AI capabilities available through APIs have dramatically changed the build-versus-buy decision. Features that would have required months of ML engineering — document understanding, natural language search, content generation, anomaly detection — are now available as API calls. This shifts the product strategy question from "can we build this?" to "which capabilities should be core to our product, and which should be commoditized infrastructure?"
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Defensibility in an AI-Enabled World</h2>
              <p>
                When AI dramatically reduces the cost of building features, it also reduces the defensibility of feature-based moats. If your competitor can replicate your AI-powered feature in weeks, the feature is not the moat. The moat is the data, the distribution, the customer relationships, and the organizational capability to continuously improve — the same things that always mattered, now with even higher stakes.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Role of the Product Manager</h2>
              <p>
                The best product managers in an AI-enabled world will be those who can frame the right problems, make decisions under uncertainty, and align organizations around clear priorities. These are fundamentally human skills. The risk is that product teams get seduced by what AI makes possible and lose discipline around what is valuable.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 p-8 card-dark border-[#28A9E1]/20 rounded-2xl text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Rethinking Your Product Strategy?</h3>
            <p className="text-white/60 mb-6">Synapxi Tech helps product organizations navigate strategy and execution in a rapidly changing technology landscape.</p>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </ScrollReveal>
      </div>
    </article>
  )
}
