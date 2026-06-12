import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services#ai-strategy', label: 'AI Strategy & Transformation' },
  { href: '/services#web3', label: 'Web3 & Tokenization Advisory' },
  { href: '/services#delivery', label: 'Delivery Transformation' },
  { href: '/services#fractional', label: 'Fractional Product Leadership' },
  { href: '/services#payments', label: 'Payments & Fintech Consulting' },
]

export default function Footer() {
  return (
    <footer className="bg-[#000E2B] border-t border-white/10" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <polygon points="8,4 20,4 24,10 12,10" fill="#28A9E1" opacity="0.9" />
                <polygon points="4,12 16,12 20,18 8,18" fill="#001B4E" stroke="#28A9E1" strokeWidth="1.5" />
                <polygon points="8,20 20,20 24,26 12,26" fill="#28A9E1" opacity="0.7" />
                <polygon points="20,4 28,4 28,10 24,10" fill="#28A9E1" opacity="0.5" />
                <polygon points="20,20 28,20 28,26 24,26" fill="#28A9E1" opacity="0.5" />
              </svg>
              <span className="font-display font-bold text-base tracking-tight text-white">
                SYNAPXI <span className="text-[#28A9E1]">TECH</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Strategic advisory for AI, tokenization, product innovation and digital transformation.
              Supporting organizations across Europe and the Americas.
            </p>
            <p className="text-[#28A9E1] text-sm font-display font-semibold tracking-wider uppercase">
              Innovate. Disrupt. Globalize.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-display font-semibold uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#28A9E1] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-display font-semibold uppercase tracking-widest mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/50 text-sm hover:text-[#28A9E1] transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Synapxi Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-white/30 text-xs hover:text-[#28A9E1] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-white/30 text-xs hover:text-[#28A9E1] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
