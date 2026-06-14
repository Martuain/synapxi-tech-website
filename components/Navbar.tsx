'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/context/LangContext'
import type { Lang } from '@/lib/translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { lang, setLang, t } = useLang()

  const navLinks = [
    { href: '/',            label: t('nav', 'home') },
    { href: '/services',    label: t('nav', 'services') },
    { href: '/case-studies',label: t('nav', 'caseStudies') },
    { href: '/about',       label: t('nav', 'about') },
    { href: '/insights',    label: t('nav', 'insights') },
    { href: '/contact',     label: t('nav', 'contact') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#001B4E]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Synapxi Tech Home">
            <SynapxiLogo />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-[#28A9E1] bg-[#28A9E1]/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── RIGHT CONTROLS ── */}
          <div className="hidden lg:flex items-center gap-3">
            <LangSwitcher lang={lang} setLang={setLang} />
            <Link href="/contact" className="btn-primary text-sm">
              {t('nav', 'cta')}
            </Link>
          </div>

          {/* ── MOBILE CONTROLS ── */}
          <div className="lg:hidden flex items-center gap-2">
            <LangSwitcher lang={lang} setLang={setLang} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}  className="block h-0.5 bg-white rounded-full" />
                <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}              className="block h-0.5 bg-white rounded-full" />
                <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block h-0.5 bg-white rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/10 bg-[#001B4E]/98 backdrop-blur-md overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center ${
                    pathname === link.href
                      ? 'text-[#28A9E1] bg-[#28A9E1]/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link href="/contact" className="btn-primary w-full text-center text-sm">
                  {t('nav', 'cta')}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ── Language Switcher ──────────────────────────────────────────────────── */
function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1" role="group" aria-label="Language selector">
      <button
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        aria-label="Switch to English"
        title="English"
        className={`flex items-center justify-center w-8 h-7 rounded-md transition-all duration-200 text-base leading-none ${
          lang === 'en' ? 'bg-[#28A9E1]/20 ring-1 ring-[#28A9E1]/50' : 'hover:bg-white/10 opacity-50 hover:opacity-80'
        }`}
      >
        🇬🇧
      </button>
      <button
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        aria-label="Cambiar a Español"
        title="Español"
        className={`flex items-center justify-center w-8 h-7 rounded-md transition-all duration-200 text-base leading-none ${
          lang === 'es' ? 'bg-[#28A9E1]/20 ring-1 ring-[#28A9E1]/50' : 'hover:bg-white/10 opacity-50 hover:opacity-80'
        }`}
      >
        🇪🇸
      </button>
    </div>
  )
}

/* ── Logo — faithfully reproduced from brand image ─────────────────────── */
export function SynapxiLogo() {
  return (
    <div className="flex items-center gap-2.5">
      {/* Left mark: stacked diagonal parallelograms */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top parallelogram — cyan/sky */}
        <polygon points="4,4 18,4 22,12 8,12"   fill="#28A9E1" />
        {/* Upper-right small block */}
        <polygon points="20,4 28,4 28,12 20,12"  fill="#28A9E1" opacity="0.55" />
        {/* Middle parallelogram — dark navy with cyan border (the S body) */}
        <polygon points="2,14 16,14 20,22 6,22"  fill="#001B4E" stroke="#28A9E1" strokeWidth="1.5" />
        {/* Bottom parallelogram — cyan, slightly muted */}
        <polygon points="4,24 18,24 22,32 8,32"  fill="#28A9E1" opacity="0.75" />
        {/* Lower-right small rhombus */}
        <polygon points="20,26 28,26 28,32 22,32" fill="#28A9E1" opacity="0.45" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-[17px] tracking-[0.08em] text-white">
          SYNAPXI
        </span>
        <span className="font-display font-bold text-[17px] tracking-[0.25em] text-[#28A9E1]">
          TECH
        </span>
      </div>

      {/* Right accent: square + vertical bar (from logo image) */}
      <svg
        width="20"
        height="28"
        viewBox="0 0 20 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="ml-0.5"
      >
        {/* Cyan square top-left */}
        <rect x="0" y="0" width="10" height="10" fill="#28A9E1" />
        {/* Vertical bar top-right */}
        <rect x="13" y="0" width="5" height="10" fill="#28A9E1" opacity="0.7" />
        {/* Lower rhomboids row */}
        <polygon points="0,15 8,15 10,22 2,22"  fill="#001B4E" stroke="#28A9E1" strokeWidth="1" opacity="0.8" />
        <polygon points="10,17 16,17 18,24 12,24" fill="#28A9E1" opacity="0.55" />
      </svg>
    </div>
  )
}
