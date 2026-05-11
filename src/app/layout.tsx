import type { Metadata } from 'next'
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'First Commits — For those before it was built',
  description: 'An invite-only community for founding engineers.',
  metadataBase: new URL('https://firstcommits.com'),
  openGraph: {
    title: 'First Commits — For those before it was built',
    description: 'An invite-only community for founding engineers.',
    type: 'website',
    url: 'https://firstcommits.com',
    siteName: 'First Commits',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'First Commits — For those before it was built',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Commits — For those before it was built',
    description: 'An invite-only community for founding engineers.',
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
    <html lang="en" className={`${cormorant.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
