'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav({ gradient = false }: { gradient?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`${styles.nav} ${gradient ? styles.navGradient : ''}`} aria-label="Main navigation">
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoCursor} aria-hidden="true" />
          <span>First Commits</span>
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`${styles.menuBar} ${isOpen ? styles.menuBarOpen1 : ''}`} />
          <span className={`${styles.menuBar} ${isOpen ? styles.menuBarOpen2 : ''}`} />
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
          <Link
            href="/about"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/sponsors"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            Become a Sponsor
          </Link>
          <Link
            href="/apply"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            Request Invitation
          </Link>
        </div>
      </div>
    </nav>
  )
}
