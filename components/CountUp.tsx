'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  end: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
}

export default function CountUp({
  end,
  prefix = '',
  suffix = '',
  decimals,
  duration = 2000,
}: CountUpProps) {
  // Auto-detect decimal places from the end value if not explicitly set
  const resolvedDecimals = decimals !== undefined
    ? decimals
    : (end % 1 !== 0 ? String(end).split('.')[1]?.length ?? 1 : 0)

  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true

    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * end).toFixed(resolvedDecimals)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration, resolvedDecimals])

  return (
    <span ref={ref}>
      {prefix}
      {resolvedDecimals > 0 ? value.toFixed(resolvedDecimals) : Math.round(value).toLocaleString()}
      {suffix}
    </span>
  )
}
