import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Synapxi Tech — Innovate. Disrupt. Globalize.',
    template: '%s | Synapxi Tech',
  },
  description:
    'Strategic advisory for AI, tokenization, product innovation and digital transformation. Supporting organizations across Europe and the Americas.',
  keywords: [
    'AI Strategy Consulting',
    'Web3 Advisory',
    'Tokenization Consulting',
    'Product Strategy Consulting',
    'Digital Transformation Consulting',
    'Payments Consulting',
    'Data Governance Consulting',
    'Fractional Product Leadership',
  ],
  openGraph: {
    title: 'Synapxi Tech — Innovate. Disrupt. Globalize.',
    description:
      'Strategic advisory for AI, tokenization, product innovation and digital transformation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Synapxi Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synapxi Tech',
    description: 'Strategic advisory for AI, tokenization, product innovation and digital transformation.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#001B4E] text-white font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
