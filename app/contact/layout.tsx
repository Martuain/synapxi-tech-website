import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Start Your Project',
  description:
    'Tell us about your challenge. Synapxi Tech advisory engagements start with a conversation.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
