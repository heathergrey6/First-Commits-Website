import Link from 'next/link'
import styles from './Footer.module.css'

interface FooterProps {
  tagline?: string
}

export default function Footer({
  tagline = 'For founding engineers, by founding engineers.',
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Link href="/" className={styles.footerLogo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/fc-logo.svg" alt="" className={styles.footerLogoIcon} />
          First Commits
        </Link>
        <span>{tagline}</span>
        <a
          href="https://www.linkedin.com/company/first-commits"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
