import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply — First Commits',
  description: 'Request membership to First Commits, an invite-only community for founding engineers. The first technical hires at startups.',
  openGraph: {
    title: 'Apply — First Commits',
    description: 'Request membership to First Commits, an invite-only community for founding engineers.',
    type: 'website',
    url: 'https://firstcommits.com/apply',
  },
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
