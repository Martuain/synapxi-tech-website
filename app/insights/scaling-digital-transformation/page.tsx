import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Scaling Digital Transformation: From Pilots to Enterprise-Wide Change',
  description: 'Most organizations can run a successful digital pilot. Very few can scale it. The difference lies in three organizational design decisions that most transformation programs get wrong.',
}

export default function ScalingDigitalTransformationPage() {
  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <Link href="/insights" className="inline-flex items-center gap-2 text-[#28A9E1] text-sm hover:underline mb-8 block">← Back to Insights</Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">Digital Transformation</span>
            <span className="text-white/30 text-sm">8 min read</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Scaling Digital Transformation: From Pilots to Enterprise-Wide Change
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-10">
            Most organizations can run a successful digital pilot. Very few can scale it. The difference between organizations that transform and those that cycle through endless pilots lies in three organizational design decisions that most transformation programs never get around to making.
          </p>
        </ScrollReveal>

        <div className="border-t border-white/10 pt-10">
          <ScrollReveal>
            <div className="space-y-6 text-white/70 leading-relaxed">

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Pilot Trap</h2>
              <p>
                A digital pilot succeeds when a small, motivated, protected team builds something in an environment that is isolated from the constraints of the main organization. The pilot has executive sponsorship, a clear mandate, a limited scope, and permission to operate differently. It almost always delivers something impressive.
              </p>
              <p>
                Scaling the pilot fails when the organization attempts to replicate the output across a context that is fundamentally different from the one the pilot operated in. The constraints that were suspended for the pilot — legacy systems, governance processes, organizational silos, risk frameworks — reassert themselves. The momentum dissipates.
              </p>
              <p>
                The pilot was not the transformation. It was evidence that transformation is possible. The actual transformation is the organizational redesign that makes the pilot's conditions the norm rather than the exception.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Design Decision 1: Platform Before Products</h2>
              <p>
                Organizations that scale transformation successfully invest disproportionately in shared technology platforms that reduce the cost and complexity of building and changing products across the organization. These platforms — API layers, data platforms, cloud infrastructure, shared component libraries — are not visible to customers and do not generate direct revenue. They are the infrastructure that makes enterprise-speed product development possible.
              </p>
              <p>
                Organizations that skip this investment build products on isolated technology stacks that cannot be maintained, integrated, or evolved without disproportionate effort. The tenth product is harder to build than the first. In platform-first organizations, the tenth product is significantly easier.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Design Decision 2: Capability Before Delivery</h2>
              <p>
                The second decision is the most counterintuitive. In the pressure to show progress, transformation programs prioritize delivery of products and features over investment in the organizational capability to deliver them. Teams are shipped product by third-party consultants. Internal capability is not built. The consultants leave and the organization cannot maintain what was delivered, let alone evolve it.
              </p>
              <p>
                Sustainable transformation requires deliberate investment in internal product, engineering, and data capability. This means hiring differently, training existing talent, and structuring engagements with external partners to explicitly transfer knowledge rather than deliver and exit.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Design Decision 3: Governance That Enables Rather Than Controls</h2>
              <p>
                Enterprise governance exists to manage risk. In most large organizations, it does so by slowing things down — introducing approval gates, review committees, compliance processes, and change management frameworks that add weeks or months to every significant initiative. This governance was designed for a world where change happened slowly and the cost of a mistake was high.
              </p>
              <p>
                Scaling transformation requires redesigning governance to manage risk at speed. This means moving from sequential approval processes to concurrent review, from committee decision-making to delegated authority with clear escalation paths, and from risk avoidance to risk management. The organization that learns to ship and learn quickly has a lower risk profile than one that deliberates for months and ships slowly — because the cost of being wrong diminishes when you can detect and correct faster.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">What Scaling Actually Looks Like</h2>
              <p>
                Organizations that successfully scale transformation look different from those that do not. They have platform teams that serve product teams. They have product teams that are empowered to prioritize within a strategic framework rather than take requests from stakeholders. They have governance processes that add days, not months. And they have leaders who understand that their role is to set direction and remove obstacles — not to approve decisions.
              </p>
              <p>
                Getting there is not quick. But organizations that make these three design decisions early in their transformation — before they have scaled much, while they still have the organizational flexibility to redesign — consistently outperform those that leave the decisions until the transformation has already stalled.
              </p>

            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 p-8 card-dark border-[#28A9E1]/20 rounded-2xl text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Scaling a Transformation Program?</h3>
            <p className="text-white/60 mb-6">Synapxi Tech helps organizations move beyond pilots to enterprise-wide change — with the organizational design, platform strategy, and delivery capability to make it stick.</p>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </ScrollReveal>
      </div>
    </article>
  )
}
