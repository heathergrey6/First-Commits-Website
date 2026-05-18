import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — First Commits',
  description: 'The story behind First Commits, a private community for founding engineers.',
  openGraph: {
    title: 'About — First Commits',
    description: 'The story behind First Commits, a private community for founding engineers.',
    type: 'website',
    url: 'https://firstcommits.com/about',
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
    title: 'About — First Commits',
    description: 'The story behind First Commits, a private community for founding engineers.',
    images: ['/og-image.jpg'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
