'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'

export default function NotFound() {
  const { t } = useLang()
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-display text-[#28A9E1] text-sm font-semibold uppercase tracking-widest mb-4">{t('notFound','label')}</p>
        <h1 className="font-display text-5xl font-bold text-white mb-4">{t('notFound','h1')}</h1>
        <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">{t('notFound','sub')}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-primary">{t('notFound','home')}</Link>
          <Link href="/contact" className="btn-secondary">{t('notFound','contact')}</Link>
        </div>
      </div>
    </div>
  )
}
