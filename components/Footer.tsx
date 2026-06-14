'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { SynapxiLogo } from './Navbar'

export default function Footer() {
  const { t } = useLang()

  const navLinks = [
    { href: '/',             label: t('nav', 'home') },
    { href: '/services',     label: t('nav', 'services') },
    { href: '/case-studies', label: t('nav', 'caseStudies') },
    { href: '/about',        label: t('nav', 'about') },
    { href: '/insights',     label: t('nav', 'insights') },
    { href: '/contact',      label: t('nav', 'contact') },
  ]

  const services = [
    { href: '/services#ai-strategy', label: 'AI Strategy & Transformation' },
    { href: '/services#web3',        label: 'Web3 & Tokenization Advisory' },
    { href: '/services#delivery',    label: 'Delivery Transformation' },
    { href: '/services#fractional',  label: 'Fractional Product Leadership' },
    { href: '/services#payments',    label: 'Payments & Fintech Consulting' },
  ]

  return (
    <footer className="bg-[#000E2B] border-t border-white/10" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <SynapxiLogo />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6 mt-3">
              {t('footer', 'desc')}
            </p>
            <p className="text-[#28A9E1] text-sm font-display font-semibold tracking-wider uppercase">
              {t('footer', 'tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-display font-semibold uppercase tracking-widest mb-4">
              {t('footer', 'navTitle')}
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-[#28A9E1] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-display font-semibold uppercase tracking-widest mb-4">
              {t('footer', 'servicesTitle')}
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/50 text-sm hover:text-[#28A9E1] transition-colors duration-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Synapxi Tech. {t('footer', 'rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-white/30 text-xs hover:text-[#28A9E1] transition-colors">
              {t('footer', 'privacy')}
            </Link>
            <Link href="/contact" className="text-white/30 text-xs hover:text-[#28A9E1] transition-colors">
              {t('footer', 'terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
