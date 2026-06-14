'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import type { Lang } from '@/lib/translations'
import { translations } from '@/lib/translations'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (section: keyof typeof translations, key: string) => string
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  t: () => '',
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  const setLang = useCallback((l: Lang) => setLangState(l), [])

  const t = useCallback(
    (section: keyof typeof translations, key: string): string => {
      const sec = translations[section] as Record<string, Record<Lang, string>>
      return sec?.[key]?.[lang] ?? key
    },
    [lang]
  )

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
