import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partners — First Commits',
  description: 'First Commits is supported by venture firms and organizations that back founding engineers, including Bessemer, Forerunner, Accel, Bullpen, Crosslink, Greycroft, LangChain, and Alpha.',
  openGraph: {
    title: 'Partners — First Commits',
    description: 'First Commits is supported by venture firms and organizations that back founding engineers.',
    type: 'website',
    url: 'https://firstcommits.com/partners',
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
    title: 'Partners — First Commits',
    description: 'First Commits is supported by venture firms and organizations that back founding engineers.',
    images: ['/og-image.jpg'],
  },
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
