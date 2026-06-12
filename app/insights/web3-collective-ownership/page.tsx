import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Web3 and the Future of Collective Ownership',
  description:
    'Tokenization is redefining ownership models for assets, organizations, and value exchange at a global scale. This is not just about crypto — it is about a new paradigm.',
}

export default function Web3CollectiveOwnershipPage() {
  return (
    <>
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8" aria-label="Article: Web3 and the Future of Collective Ownership">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-8">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-[#28A9E1] text-sm hover:underline mb-8 block"
              >
                ← Back to Insights
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">
                  Web3
                </span>
                <span className="text-white/30 text-sm">8 min read</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Web3 and the Future of Collective Ownership
              </h1>
              <p className="text-white/60 text-xl leading-relaxed">
                Tokenization is redefining ownership models for assets, organizations, and value exchange
                at a global scale. This is not just about crypto — it is about a new paradigm for how
                value is created, distributed, and governed.
              </p>
            </div>
          </ScrollReveal>

          <div className="border-t border-white/10 pt-10 prose-synapxi">
            <ScrollReveal>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Ownership Revolution</h2>
                <p>
                  For most of human history, ownership has been binary. You own something or you do not.
                  Fractional ownership existed — shares in a company, for instance — but the infrastructure
                  for fractional ownership of almost anything has been prohibitively expensive, slow, and
                  inaccessible to most people.
                </p>
                <p>
                  Tokenization changes this. By representing ownership rights as digital tokens on a
                  blockchain, it becomes possible to divide, transfer, and trade ownership of virtually
                  any asset — real estate, art, intellectual property, infrastructure, or even future
                  earnings — at a fraction of the traditional cost and with orders of magnitude more
                  liquidity.
                </p>

                <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Beyond the Crypto Narrative</h2>
                <p>
                  The media narrative around Web3 has been dominated by cryptocurrencies, NFT speculation,
                  and the volatile world of decentralized finance. This has obscured something more
                  significant: the underlying infrastructure that Web3 provides for rethinking how
                  organizations structure themselves and how assets are owned and governed.
                </p>
                <p>
                  Consider what becomes possible when ownership is programmable. Smart contracts can encode
                  the rules of ownership — who receives dividends, how voting rights work, what happens
                  when assets are sold — automatically and transparently, without intermediaries. The
                  friction of traditional ownership structures largely disappears.
                </p>

                <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Institutional Opportunity</h2>
                <p>
                  Financial institutions, real estate firms, and asset managers are beginning to recognize
                  that tokenization represents a structural shift in their markets — not a speculative
                  sideshow. The ability to offer fractional ownership of previously illiquid assets, to
                  settle transactions instantly, and to automate governance and compliance through smart
                  contracts creates genuine competitive advantages.
                </p>
                <p>
                  Several central banks are exploring central bank digital currencies (CBDCs) that will
                  interact with tokenized asset markets. The European Central Bank's wholesale CBDC
                  experiments are particularly relevant for European financial institutions planning their
                  tokenization strategies.
                </p>

                <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">What Organizations Need to Get Right</h2>
                <p>
                  The organizations that succeed with tokenization will be those that treat it as a
                  business model question first and a technology question second. The questions that
                  matter most are not about which blockchain to use, but about what problem tokenization
                  solves for your customers or investors, how the token economics align incentives
                  correctly, and what regulatory framework applies in each jurisdiction.
                </p>
                <p>
                  The technology, while important, is increasingly commoditized. The strategic thinking,
                  regulatory navigation, and business model design are where the real complexity lies —
                  and where the real differentiation will be found.
                </p>

                <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Looking Ahead</h2>
                <p>
                  The tokenization of real-world assets is still early. The infrastructure is being built,
                  regulatory frameworks are being established, and institutional adoption is accelerating
                  but not yet mainstream. Organizations that invest in understanding and experimenting with
                  tokenization now will have significant advantages as the market matures.
                </p>
                <p>
                  The future of collective ownership is not a distant prospect. It is being built today,
                  by institutions and innovators who recognize that the question is not whether to engage
                  with this shift, but how to engage with it intelligently.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-16 p-8 card-dark border-[#28A9E1]/20 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Exploring Tokenization for Your Organization?
              </h3>
              <p className="text-white/60 mb-6">
                Synapxi Tech advises organizations across Europe and the Americas on Web3 strategy
                and asset tokenization. Let's talk.
              </p>
              <Link href="/contact" className="btn-primary">
                Start a Conversation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
