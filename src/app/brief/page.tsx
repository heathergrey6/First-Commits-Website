'use client'

import styles from './brief.module.css'

export default function Brief() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.headerTitle}>First Commits</h1>
          <div className={styles.headerDivider}></div>
          <p className={styles.headerSubtitle}>
            The community of founding engineers
          </p>

          {/* Partner Logos */}
          <div className={styles.logoGrid}>
            <div className={styles.logoCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bessemer_logo.png" alt="Bessemer Venture Partners" className={styles.logoImageBessemer} />
            </div>
            <div className={styles.logoCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/forerunner-logo.png" alt="Forerunner" className={styles.logoImage} />
            </div>
            <div className={styles.logoCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/accel-logo.png" alt="Accel" className={styles.logoImage} />
            </div>
            <div className={styles.logoCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bullpen-logo.jpeg" alt="Bullpen" className={styles.logoImage} />
            </div>
          </div>
        </div>
      </header>

      {/* The Community */}
      <section className={styles.section}>
        <div className={styles.content}>
          <span className={styles.label}>The Community</span>
          <div className={styles.divider}></div>
          <p>
            First Commits is a community of founding engineers &mdash; the people
            who wrote the first production code, built the first systems, and helped
            shape the earliest versions of ambitious startups.
          </p>
          <p>
            The community brings together engineers who were among the first
            technical hires at their companies, many of whom have gone on to lead
            teams, start companies, or build widely used infrastructure.
          </p>
          <p>
            Members come from a range of early-stage and high-growth startups
            across the ecosystem, including companies like Baseten, Decagon,
            Delphi, Pylon, Gem, Doss, Convex, Vapi, Exa, Kaizen, Orb, 
            Hyperscale, Resolve AI, Reevo, Coefficient, Britton AI, Town,
            Tightrope, Column, Forge, and many more.
          </p>
        </div>
      </section>

      {/* Photo Strip */}
      <section className={styles.photoStrip}>
        <div className={styles.photoGrid}>
          <div className={styles.photoItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/event-dinner.webp"
              alt="First Commits dinner gathering"
              className={styles.photoImage}
            />
          </div>
          <div className={styles.photoItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/event-lounge.webp"
              alt="First Commits lounge conversation"
              className={styles.photoImage}
            />
          </div>
        </div>
      </section>

      {/* The Events */}
      <section className={styles.section}>
        <div className={styles.content}>
          <span className={styles.label}>The Events</span>
          <div className={styles.divider}></div>
          <p>
            We host small, private gatherings designed to create the kinds of
            conversations that only founding engineers tend to have with one
            another. Most events are intimate dinners with around 15&ndash;25
            engineers in the room. Rather than traditional networking, the focus
            is on thoughtful discussions about the real work of building early
            systems &mdash; topics like scaling the first architecture, hiring the
            first engineers, rebuilding v1 systems, and navigating the
            founder&ndash;engineering relationship.
          </p>
        </div>
      </section>

      {/* Partnerships */}
      <section className={styles.sectionDark}>
        <div className={styles.content}>
          <span className={styles.labelLight}>Partnerships</span>
          <div className={styles.divider}></div>
          <p style={{ color: 'var(--color-gray-200)' }}>
            We partner with venture firms, startups, and infrastructure
            companies that want to support the founding engineer community.
            Partners typically host or sponsor the dinner and may invite a few
            partners and engineers from their network to join the room.
          </p>
          <p style={{ color: 'var(--color-gray-200)' }}>
            We keep partner participation intentionally lightweight so the
            event remains peer-driven and conversational rather than
            promotional.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.section}>
        <div className={styles.content}>
          <span className={styles.label}>How It Works</span>
          <div className={styles.divider}></div>
          <p>
            When we collaborate on an event, we usually coordinate on a few
            basic details together &mdash; the date, venue, and overall capacity
            for the evening. First Commits handles most of the rest, including
            curating the guest list, managing invitations and RSVPs, and
            facilitating the flow of the event so the room is set up for great
            conversations.
          </p>
        </div>
      </section>

      {/* The Goal */}
      <section className={styles.sectionDark}>
        <div className={styles.content}>
          <span className={styles.labelLight}>The Goal</span>
          <div className={styles.divider}></div>
          <p className={styles.goalText}>
            To create a space for the engineers who helped build companies from
            their earliest days to connect with peers, share lessons, and have
            the kinds of honest conversations about building that are hard to
            find elsewhere.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerLogo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fc-logo.png" alt="" className={styles.footerLogoIcon} />
            First Commits
          </span>
          <span className={styles.footerCopy}>For founding engineers, by founding engineers.</span>
        </div>
      </footer>
    </main>
  )
}
