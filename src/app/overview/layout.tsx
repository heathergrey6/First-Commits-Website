import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Overview — First Commits',
  description: 'First Commits is a community of founding engineers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
