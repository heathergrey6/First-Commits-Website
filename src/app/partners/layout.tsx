import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partners — First Commits',
  description: 'First Commits partners with venture firms and organizations that support founding engineers. Backed by Bessemer Venture Partners and Forerunner.',
  openGraph: {
    title: 'Partners — First Commits',
    description: 'First Commits partners with venture firms and organizations that support founding engineers.',
    type: 'website',
    url: 'https://firstcommits.com/partners',
  },
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
