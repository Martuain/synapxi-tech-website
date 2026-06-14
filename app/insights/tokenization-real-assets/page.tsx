import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Tokenizing Real-World Assets: The Opportunity Beyond Crypto',
  description: 'Real estate, private equity, infrastructure, and commodities are being reimagined through tokenization. What does the opportunity actually look like?',
}

export default function TokenizationRealAssetsPage() {
  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <Link href="/insights" className="inline-flex items-center gap-2 text-[#28A9E1] text-sm hover:underline mb-8 block">← Back to Insights</Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">Web3</span>
            <span className="text-white/30 text-sm">9 min read</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Tokenizing Real-World Assets: The Opportunity Beyond Crypto
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-10">
            Real estate, private equity, infrastructure, and commodities are all being reimagined through tokenization. What does the opportunity actually look like — and what are the genuine barriers?
          </p>
        </ScrollReveal>

        <div className="border-t border-white/10 pt-10">
          <ScrollReveal>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Why Real-World Assets?</h2>
              <p>
                The global market for traditional financial assets — equities, bonds, real estate, commodities, private equity — dwarfs the cryptocurrency market by orders of magnitude. The tokenization of even a small fraction of these assets represents an enormous opportunity for the firms that build the infrastructure, the legal frameworks, and the distribution networks for tokenized real-world assets (RWAs).
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Value Drivers</h2>
              <p>
                Tokenization creates value across several dimensions simultaneously. Liquidity: assets that were previously locked up for years — private equity funds, real estate partnerships, infrastructure bonds — can be made tradeable. Accessibility: minimum investment thresholds that previously excluded most investors can be dramatically reduced. Efficiency: settlement that previously took days can happen in seconds, and intermediary costs can be dramatically reduced through smart contract automation.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Genuine Barriers</h2>
              <p>
                None of this is as simple as it might appear. The legal and regulatory environment for tokenized assets varies enormously across jurisdictions — what is permissible in one market may be prohibited or heavily restricted in another. The MiCA regulation in the EU provides some clarity for crypto-assets, but its application to tokenized real-world assets remains complex.
              </p>
              <p>
                The custodial infrastructure for tokenized assets is still maturing. Questions about how tokenized assets interact with existing financial market infrastructure — clearinghouses, depositories, prime brokers — remain unresolved in most jurisdictions.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Where to Start</h2>
              <p>
                Organizations exploring real-world asset tokenization should start with asset classes where the regulatory environment is clearest and the liquidity benefit most obvious. Private credit and real estate are currently the most active areas. The key is to build the legal, technical, and distribution infrastructure in parallel — a technically sound tokenization that cannot be legally distributed is valueless.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 p-8 card-dark border-[#28A9E1]/20 rounded-2xl text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Evaluating a Tokenization Initiative?</h3>
            <p className="text-white/60 mb-6">Synapxi Tech provides end-to-end tokenization advisory — from business model design to technical architecture and regulatory navigation.</p>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </ScrollReveal>
      </div>
    </article>
  )
}
