'use client'

import { useLang } from '@/context/LangContext'
import ScrollReveal from './ScrollReveal'

// Technology ecosystem — tools & platforms worked with
// Rendered as text wordmarks with subtle icons (no external image deps)
const techItems = [
  { name: 'OpenAI',       category: 'AI',         icon: '⬡', color: '#10a37f' },
  { name: 'Anthropic',    category: 'AI',         icon: '⬡', color: '#cc785c' },
  { name: 'Azure AI',     category: 'AI',         icon: '⬡', color: '#0078d4' },
  { name: 'AWS',          category: 'Cloud',      icon: '◎', color: '#ff9900' },
  { name: 'Ethereum',     category: 'Web3',       icon: '◈', color: '#627eea' },
  { name: 'Hyperledger',  category: 'Web3',       icon: '◈', color: '#2f3134' },
  { name: 'Hedera',       category: 'Web3',       icon: '◈', color: '#222222' },
  { name: 'Stripe',       category: 'Payments',   icon: '◉', color: '#635bff' },
  { name: 'Visa',         category: 'Payments',   icon: '◉', color: '#1a1f71' },
  { name: 'Swift',        category: 'Payments',   icon: '◉', color: '#003087' },
  { name: 'Mastercard',   category: 'Payments',   icon: '◉', color: '#eb001b' },
  { name: 'Google Cloud', category: 'Cloud',      icon: '◎', color: '#4285f4' },
]

export default function TechEcosystem() {
  const { lang } = useLang()

  const heading = lang === 'es'
    ? 'Experiencia en los Principales Ecosistemas Tecnológicos'
    : 'Experience Across Leading Technology Ecosystems'
  const sub = lang === 'es'
    ? 'Trabajamos con las plataformas que impulsan la IA, Web3 y los pagos modernos.'
    : 'We work with the platforms powering AI, Web3, and modern payments.'

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/8" aria-label="Technology ecosystem">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">{heading}</p>
            <p className="text-white/30 text-sm">{sub}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            {techItems.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/3 border border-white/8 hover:border-white/15 hover:bg-white/5 transition-all duration-200 cursor-default group"
                title={tech.category}
              >
                <span
                  className="text-sm opacity-60 group-hover:opacity-90 transition-opacity"
                  style={{ color: tech.color }}
                  aria-hidden="true"
                >
                  {tech.icon}
                </span>
                <span className="font-display text-sm font-medium text-white/50 group-hover:text-white/75 transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
