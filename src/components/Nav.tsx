'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/fc-logo.svg" alt="First Commits logo" className={styles.logoIcon} />
          First Commits
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
            href="/partners"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            Partners
          </Link>
          <Link
            href="/apply"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            Request Invitation
          </Link>
          <a
            href="https://www.linkedin.com/company/first-commits/"
            className={styles.navLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  )
}
