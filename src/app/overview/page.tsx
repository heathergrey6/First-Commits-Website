'use client'

import { useEffect } from 'react'
import Nav from '@/components/Nav'
import styles from './overview.module.css'

export default function Overview() {
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
        threshold: 0.1,
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
      <div id="main-content"></div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>First Commits</h1>
          <div className={styles.heroDivider}></div>
          <p className={styles.heroSubtitle}>
            A community of founding engineers
          </p>
        </div>
      </section>

      {/* The Community */}
      <section className={styles.section}>
        <div className={`container ${styles.narrowContent}`}>
          <div className="reveal">
            <span className={styles.sectionLabel}>The Community</span>
            <div className={styles.dividerShort}></div>
          </div>
          <div className={styles.bodyText}>
            <p className="reveal">
              First Commits is a community of founding engineers &mdash; the people
              who wrote the first production code, built the first systems, and helped
              shape the earliest versions of ambitious startups.
            </p>
            <p className="reveal">
              The community brings together engineers who were among the first
              technical hires at their companies, many of whom have gone on to lead
              teams, start companies, or build widely used infrastructure.
            </p>
            <p className="reveal">
              Members come from a range of early-stage and high-growth startups
              across the ecosystem, including companies like Baseten, Decagon,
              Delphi, Pylon, Gem, Doss, Convex, Vapi, Exa, Kaizen, Orb,
              Coefficient, Britton AI, Town, Tightrope, Column, and Forge.
            </p>
          </div>
        </div>
      </section>

      {/* The Events */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className="reveal">
            <span className={styles.sectionLabelLight}>The Events</span>
            <div className={styles.dividerShortLight}></div>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.columnLeft}>
              <p className="reveal" style={{ color: 'var(--color-gray-400)' }}>
                We host small, private gatherings designed to create the kinds of
                conversations that only founding engineers tend to have with one
                another.
              </p>
            </div>
            <div className={styles.columnRight}>
              <p className="reveal" style={{ color: 'var(--color-gray-200)' }}>
                Most events are intimate dinners with around 15&ndash;25 engineers
                in the room. Rather than traditional networking, the focus is on
                thoughtful discussions about the real work of building early
                systems &mdash; topics like scaling the first architecture, hiring the
                first engineers, rebuilding v1 systems, and navigating the
                founder&ndash;engineering relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className={styles.section}>
        <div className={`container ${styles.narrowContent}`}>
          <div className="reveal">
            <span className={styles.sectionLabel}>Partnerships</span>
            <div className={styles.dividerShort}></div>
          </div>
          <div className={styles.bodyText}>
            <p className="reveal">
              We partner with venture firms, startups, and infrastructure
              companies that want to support the founding engineer community.
              Partners typically host or sponsor the dinner and may invite a few
              partners and engineers from their network to join the room.
            </p>
            <p className="reveal">
              We keep partner participation intentionally lightweight so the
              event remains peer-driven and conversational rather than
              promotional.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={`container ${styles.narrowContent}`}>
          <div className="reveal">
            <span className={styles.sectionLabel}>How It Works</span>
            <div className={styles.dividerShort}></div>
          </div>
          <div className={styles.bodyText}>
            <p className="reveal">
              When we collaborate on an event, we usually coordinate on a few
              basic details together &mdash; the date, venue, and overall capacity
              for the evening. First Commits handles most of the rest, including
              curating the guest list, managing invitations and RSVPs, and
              facilitating the flow of the event so the room is set up for great
              conversations.
            </p>
          </div>
        </div>
      </section>

      {/* The Goal — closing section */}
      <section className={styles.sectionFinal}>
        <div className="container">
          <div className={styles.finalContent}>
            <div className="reveal">
              <span className={styles.finalLabel}>The Goal</span>
              <div className={styles.finalDivider}></div>
            </div>
            <p className={`${styles.finalText} reveal`}>
              To create a space for the engineers who helped build companies from
              their earliest days to connect with peers, share lessons, and have
              the kinds of honest conversations about building that are hard to
              find elsewhere.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerLogo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fc-logo.svg" alt="" className={styles.footerLogoIcon} />
            First Commits
          </span>
          <span className={styles.footerCopy}>For founding engineers, by founding engineers.</span>
        </div>
      </footer>
    </main>
  )
}
