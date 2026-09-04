import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sponsors — First Commits',
  description: 'An invite-only community for founding engineers.',
  openGraph: {
    title: 'Sponsors — First Commits',
    description: 'An invite-only community for founding engineers.',
    type: 'website',
    url: 'https://firstcommits.com/sponsors',
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
    title: 'Sponsors — First Commits',
    description: 'An invite-only community for founding engineers.',
    images: ['/og-image.jpg'],
  },
}

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
