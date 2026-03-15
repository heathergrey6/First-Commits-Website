import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brief — First Commits',
  description: 'First Commits is a community of founding engineers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function BriefLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
