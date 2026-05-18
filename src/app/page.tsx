'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import styles from './page.module.css'

const partnerLogos = [
  { src: '/bessemer_logo.png', alt: 'Bessemer Venture Partners' },
  { src: '/forerunner-logo.png', alt: 'Forerunner' },
  { src: '/accel-logo.png', alt: 'Accel' },
  { src: '/bullpen-logo.jpeg', alt: 'Bullpen' },
  { src: '/crosslink.svg', alt: 'Crosslink Capital' },
  { src: '/langchain.png', alt: 'LangChain' },
  { src: '/alpha.png', alt: 'Alpha' },
  { src: '/greycroft.png', alt: 'Greycroft' },
]

const principles = [
  ['01', 'Proof over pedigree', 'We care less about where you went and more about what you shipped when the company was still fragile.'],
  ['02', 'Small rooms, real context', 'Dinners, salons, and working sessions built for candor instead of performance.'],
  ['03', 'The early operator graph', 'Founding engineers, first technical hires, and the investors who know how much that work matters.'],
  ['04', 'Compounding access', 'References, operator intros, advisory paths, and future co-founder conversations that happen because trust already exists.'],
]

const signals = [
  'first technical hire',
  'pre-Series A builder',
  'wrote v1',
  'owned architecture',
  'scaled the first team',
  'made the first commits',
]

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className={styles.main}>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Nav />
      <div id="main-content" />

      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/event-dinner.jpeg" alt="" className={styles.heroImage} />
        </div>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>First Commits / founding engineer society</p>
            <h1 className={styles.heroTitle}>Founding engineers deserve their own room.</h1>
            <p className={styles.heroText}>
              First Commits is a private community for the first technical hires:
              operators who turned an idea into a product, a repo into a company,
              and uncertainty into working software.
            </p>
            <div className={styles.heroActions}>
              <Link href="/apply" className={styles.primaryAction}>Request an invite</Link>
              <Link href="/partners" className={styles.secondaryAction}>Partner with us</Link>
            </div>
          </div>

          <aside className={styles.heroPanel} aria-label="Community signals">
            <p className={styles.panelKicker}>Member signal</p>
            <div className={styles.commitCard}>
              <span className={styles.commitHash}>commit 000001</span>
              <span className={styles.commitMessage}>make the first version real</span>
            </div>
            <div className={styles.signalList}>
              {signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </aside>
        </div>
        <div className={styles.partnerRail} aria-label="Partner organizations">
          {partnerLogos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={logo.alt} src={logo.src} alt={logo.alt} className={styles.partnerLogo} />
          ))}
        </div>
      </section>

      <section className={styles.positioning}>
        <div className="container-wide">
          <div className={styles.positioningGrid}>
            <p className={`${styles.sectionLabel} reveal`}>Positioning</p>
            <div className={styles.positioningCopy}>
              <h2 className="reveal">Not a networking group. A reputation layer for zero-to-one engineers.</h2>
              <p className="reveal">
                The first engineering hires operate in a strange middle: not founders,
                not employees in a machine, but the people who make the machine possible.
                First Commits gives that role a name, a standard, and a room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.manifestoSection}>
        <div className="container-wide">
          <div className={styles.manifestoGrid}>
            <div className={styles.photoStack}>
              <div className={`${styles.photoFrame} reveal`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/event-lounge.jpeg" alt="First Commits members in conversation" />
              </div>
              <div className={`${styles.photoFrame} ${styles.photoFrameOffset} reveal`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/partner-dinner.jpeg" alt="First Commits private partner dinner" />
              </div>
            </div>
            <div className={styles.manifestoCopy}>
              <p className={`${styles.sectionLabel} reveal`}>Why we exist</p>
              <h2 className="reveal">The earliest builders deserve a category of their own.</h2>
              <p className="reveal">
                You joined when the product was mostly conviction. You chose the stack,
                handled the outage, shipped the demo, hired the next engineer, and made
                the technical bets that everyone else later inherited.
              </p>
              <p className="reveal">
                First Commits exists to recognize that work and connect the people who
                have done it with others operating at the same level of trust, taste,
                and urgency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <p className={`${styles.sectionLabel} reveal`}>Community design</p>
            <h2 className="reveal">Built like the best early teams: small, technical, and useful.</h2>
          </div>
          <div className={styles.principleGrid}>
            {principles.map(([number, title, description]) => (
              <article key={title} className={`${styles.principleCard} reveal`}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.membershipSection}>
        <div className="container-wide">
          <div className={styles.membershipGrid}>
            <div>
              <p className={`${styles.sectionLabel} reveal`}>Membership standard</p>
              <h2 className="reveal">Invite-only, referral-led, evidence-based.</h2>
            </div>
            <div className={styles.membershipCopy}>
              <p className="reveal">
                We are looking for people who can point to the work: the first repo,
                the first launch, the early architecture, the production incidents,
                the first hires, and the hard technical calls made without much cover.
              </p>
              <p className="reveal">
                The goal is not scale. The goal is density: every member should make
                the room sharper for every other member.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalInner}>
          <p className={`${styles.sectionLabel} reveal`}>First Commits</p>
          <h2 className="reveal">If you built the first version, this is your room.</h2>
          <Link href="/apply" className={`${styles.primaryAction} reveal`}>Request an invite</Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link href="/" className={styles.footerLogo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fc-logo.svg" alt="" className={styles.footerLogoIcon} />
            First Commits
          </Link>
          <span>For founding engineers, by founding engineers.</span>
          <a
            href="https://www.linkedin.com/company/first-commits"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  )
}
