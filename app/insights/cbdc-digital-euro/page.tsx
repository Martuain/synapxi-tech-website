import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'CBDCs and the Digital Euro: What Financial Institutions Need to Understand Now',
  description: "The ECB's digital euro project is moving faster than most financial institutions realize. Here is what the initiative means for banks, fintechs, and payment providers.",
}

export default function CBDCDigitalEuroPage() {
  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <Link href="/insights" className="inline-flex items-center gap-2 text-[#28A9E1] text-sm hover:underline mb-8 block">← Back to Insights</Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#28A9E1]/10 border border-[#28A9E1]/20 text-[#28A9E1] text-xs font-semibold uppercase tracking-wider">Digital Assets</span>
            <span className="text-white/30 text-sm">7 min read</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            CBDCs and the Digital Euro: What Financial Institutions Need to Understand Now
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-10">
            The ECB's digital euro project is moving faster than most financial institutions realize. Whether it ultimately launches or not, the preparation work it requires is already reshaping how European financial institutions think about digital money, payments infrastructure, and their role in the monetary system.
          </p>
        </ScrollReveal>

        <div className="border-t border-white/10 pt-10">
          <ScrollReveal>
            <div className="space-y-6 text-white/70 leading-relaxed">

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">What the Digital Euro Actually Is</h2>
              <p>
                The digital euro is a retail central bank digital currency (CBDC) — a form of digital cash issued by the European Central Bank and distributed through commercial banks and payment service providers. Unlike cryptocurrency, it is a direct liability of the ECB, equivalent in value and legal status to physical euro banknotes. Unlike commercial bank deposits, it carries no credit risk.
              </p>
              <p>
                The ECB began the digital euro's preparation phase in November 2023, following two years of investigation. The preparation phase is expected to run through 2025, after which a decision on whether to proceed to issuance would require approval from EU legislators. A decision to issue is not guaranteed — but the preparation work is happening at scale regardless.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">Why Financial Institutions Cannot Wait</h2>
              <p>
                The instinct in most financial institutions is to wait for certainty before investing in CBDC preparation. This is understandable — and in most cases, wrong.
              </p>
              <p>
                The ECB's design choices for the digital euro have significant implications for commercial bank technology infrastructure. Integration with the TARGET Instant Payment Settlement (TIPS) system, compliance with the digital euro's data privacy requirements, and the distribution role that commercial banks are expected to play all require technical and operational preparation that cannot be done in weeks. Organizations that wait for regulatory certainty before beginning will not be ready when certainty arrives.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">The Three Scenarios Financial Institutions Should Prepare For</h2>
              <p>
                <strong className="text-white">Scenario 1: Digital euro launches as designed.</strong> Commercial banks distribute digital euro wallets, manage offline payment functionality, and integrate with ECB infrastructure. Banks that have not prepared face competitive disadvantage and potential non-compliance.
              </p>
              <p>
                <strong className="text-white">Scenario 2: Digital euro launches with modified design.</strong> Policy or political changes alter the distribution model, holding limits, or privacy architecture. Banks that built modular, adaptable infrastructure are better positioned than those who built point solutions to a specific design.
              </p>
              <p>
                <strong className="text-white">Scenario 3: Digital euro does not launch.</strong> The preparation work — enhanced digital payment infrastructure, improved real-time settlement capabilities, stronger data architecture — retains value regardless. No CBDC preparation investment is wasted if it is designed to improve core payment infrastructure.
              </p>

              <h2 className="font-display text-2xl font-bold text-white mt-10 mb-4">What the Preparation Work Actually Looks Like</h2>
              <p>
                For most financial institutions, meaningful CBDC preparation involves four workstreams: technology assessment (understanding where current infrastructure aligns with or diverges from CBDC requirements), regulatory monitoring (tracking ECB and EU legislative developments with structured analysis of impact), use case development (identifying where CBDC capabilities create value for customers and for the institution), and governance preparation (establishing the internal decision-making structures needed to move quickly when the landscape clarifies).
              </p>
              <p>
                None of this requires betting on a specific CBDC design. It requires building the organizational capability to respond intelligently as the design evolves.
              </p>

            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 p-8 card-dark border-[#28A9E1]/20 rounded-2xl text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Preparing for the Digital Euro?</h3>
            <p className="text-white/60 mb-6">Synapxi Tech has direct experience advising on CBDC infrastructure design and digital asset strategy for European financial institutions.</p>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </ScrollReveal>
      </div>
    </article>
  )
}
