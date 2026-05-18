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

const heroCommits = [
  {
    hash: 'fc-0001',
    message: 'init room-for-founding-engineers',
    meta: 'A dinner felt obvious. The category did not exist yet.',
  },
  {
    hash: 'fc-0002',
    message: 'remove panels-and-pitches',
    meta: 'Keep the room small enough for useful context.',
  },
  {
    hash: 'fc-0003',
    message: 'merge early-builders into main',
    meta: 'Private dinners, referrals, and working sessions.',
  },
]

const gatherings = [
  {
    label: 'Private dinners',
    title: 'One table, no stage.',
    description: 'Fifteen to twenty-five founding engineers in a room built for the kind of candor that never happens on a panel.',
    image: '/founding-engineers-dinner-room.jpeg',
  },
  {
    label: 'Working salons',
    title: 'Technical context first.',
    description: 'Conversations around the early decisions that shape companies: architecture, hiring, incidents, velocity, and taste.',
    image: '/partner-dinner.jpeg',
  },
  {
    label: 'Partner-hosted rooms',
    title: 'Useful access, not sponsorship theater.',
    description: 'We bring together members, operators, and aligned partners when the room gets sharper because they are there.',
    image: '/partner-hosted-room.jpeg',
  },
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
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>For the first technical hires</p>
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

          <aside className={styles.heroPanel} aria-label="Commit-style First Commits preview">
            <div className={styles.heroPhoto}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/event-dinner.jpeg" alt="First Commits private dinner" />
            </div>
            <div className={styles.commitBrowser}>
              <div className={styles.commitBrowserTop}>
                <span>first-commits/main</span>
                <span>3 commits</span>
              </div>
              <div className={styles.commitRows}>
                {heroCommits.map((commit) => (
                  <div className={styles.commitRow} key={commit.hash}>
                    <span className={styles.commitHash}>{commit.hash}</span>
                    <div>
                      <span className={styles.commitMessage}>{commit.message}</span>
                      <span className={styles.commitMeta}>{commit.meta}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.diffStat} aria-label="Event format summary">
                <span>+ founding engineers</span>
                <span>- panels</span>
                <span>- pitches</span>
              </div>
            </div>
          </aside>
        </div>
        <div className={styles.partnerBlock}>
          <p className={styles.partnerLabel}>Our partners</p>
          <div className={styles.partnerRail} aria-label="Partner organizations">
            {partnerLogos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={logo.alt} src={logo.src} alt={logo.alt} className={styles.partnerLogo} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.manifestoSection}>
        <div className="container-wide">
          <div className={styles.manifestoGrid}>
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
            <p className={`${styles.sectionLabel} reveal`}>What we host</p>
            <h2 className="reveal">Small rooms with enough context to become useful.</h2>
          </div>
          <div className={styles.principleGrid}>
            {gatherings.map((gathering) => (
              <article key={gathering.title} className={`${styles.principleCard} reveal`}>
                <div className={styles.principleImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={gathering.image} alt="" />
                </div>
                <div className={styles.principleBody}>
                  <span>{gathering.label}</span>
                  <h3>{gathering.title}</h3>
                  <p>{gathering.description}</p>
                </div>
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
