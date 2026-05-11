import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply — First Commits',
  description: 'Request membership to First Commits, an invite-only community for founding engineers. The first technical hires at startups.',
  openGraph: {
    title: 'Apply — First Commits',
    description: 'Request membership to First Commits, an invite-only community for founding engineers.',
    type: 'website',
    url: 'https://firstcommits.com/apply',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'First Commits — An invite-only community for founding engineers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply — First Commits',
    description: 'Request membership to First Commits, an invite-only community for founding engineers.',
    images: ['/og-image.jpg'],
  },
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
