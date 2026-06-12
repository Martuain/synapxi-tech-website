import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: "Open Banking Is Not a Feature — It's a Business Model",
  description: 'Forward-thinking financial institutions are using open banking to unlock new revenue streams, not just comply with regulation.',
}

export default function OpenBankingPage() {
  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <Link href="/insights" className="inline-flex items-center gap-2 text-[#28A9E1] text-sm hover:underline mb-8 block">← Back to Insights</Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">Payments</span>
            <span className="text-white/30 text-sm">5 min read</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Open Banking Is Not a Feature — It's a Business Model</h1>
          <p className="text-white/60 text-xl leading-relaxed mb-10">Forward-thinking financial institutions are using open banking to unlock new revenue streams, not just comply with regulation. The window to lead is open, but it will not stay open forever.</p>
        </ScrollReveal>

        <div className="border-t border-white/10 pt-10">
          <ScrollReveal>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Compliance Trap</h2>
              <p>Most financial institutions approached PSD2 and open banking as a compliance exercise — doing the minimum required to satisfy the regulator. They built APIs, published documentation, and moved on. The opportunity they missed was the business model transformation that open banking enables for those willing to think beyond compliance.</p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">What Leaders Are Doing Differently</h2>
              <p>The banks that have extracted real value from open banking are treating it as a distribution strategy. By opening their infrastructure to third-party developers, they have turned their core banking capabilities into platforms — generating new revenue through API monetization, reaching customers through embedded finance channels they could never have built themselves, and accessing new data signals that improve their risk models.</p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Embedded Finance Opportunity</h2>
              <p>Perhaps the most significant opportunity open banking creates is embedded finance — the ability to deliver financial services inside non-financial products. When a logistics company offers working capital financing to its suppliers, or a property platform offers mortgages at the point of listing, they are using open banking infrastructure to compete in financial services. For traditional banks, this is both a threat and an opportunity.</p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Moving from Compliance to Strategy</h2>
              <p>Shifting from a compliance mindset to a strategic one requires asking different questions. Not "what do we have to open?" but "what capabilities do we have that others would pay to access?" Not "how do we protect our customer relationships?" but "how do we make ourselves indispensable to the ecosystems our customers already use?"</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 p-8 card-dark border-[#28A9E1]/20 rounded-2xl text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Building Your Open Banking Strategy?</h3>
            <p className="text-white/60 mb-6">Synapxi Tech advises financial institutions and fintechs on payments strategy across Europe and the Americas.</p>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </ScrollReveal>
      </div>
    </article>
  )
}
