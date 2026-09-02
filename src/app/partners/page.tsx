'use client'

import { useEffect } from 'react'

export default function PartnersRedirect() {
  useEffect(() => {
    window.location.replace('/sponsors')
  }, [])

  return (
    <p style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      This page has moved to <a href="/sponsors">/sponsors</a>.
    </p>
  )
}
