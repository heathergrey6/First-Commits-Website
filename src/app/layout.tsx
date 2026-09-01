import type { Metadata } from 'next'
import { Cormorant_Garamond, JetBrains_Mono, Hanken_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

// Placeholder for the licensed "Bernoru Expanded" display face. Currently
// Mont Heavy (Fontfabric demo — no Bold weight in the demo set, Heavy is
// the boldest available); swap the file/config here once Bernoru is licensed.
const montDisplay = localFont({
  src: './fonts/Mont-HeavyDEMO.otf',
  weight: '800',
  variable: '--font-display',
  display: 'swap',
})

// Placeholder for the licensed "Acherus Grotesque" UI face; swap the
// import/config here when the real font files are available.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-ui',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'First Commits — The room for founding engineers',
  description: 'A private community for the first technical hires who built before it was obvious.',
  metadataBase: new URL('https://firstcommits.com'),
  openGraph: {
    title: 'First Commits — The room for founding engineers',
    description: 'A private community for the first technical hires who built before it was obvious.',
    type: 'website',
    url: 'https://firstcommits.com',
    siteName: 'First Commits',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'First Commits — The room for founding engineers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Commits — The room for founding engineers',
    description: 'A private community for the first technical hires who built before it was obvious.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://firstcommits.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jetbrainsMono.variable} ${montDisplay.variable} ${hankenGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
