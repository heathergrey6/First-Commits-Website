'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.logo}>First Commits</span>
          <div className={styles.navLinks}>
            <Link href="/partners" className={styles.navLink}>
              Partners
            </Link>
            <Link href="/apply" className={styles.navLink}>
              Request Invitation
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            For those before<br />
            it was built.
          </h1>
          <p className={styles.heroSubtitle}>
            An invite-only community for startup early hires.
          </p>
          <Link href="/apply" className="btn btn-primary">
            Request an Invite
          </Link>
        </div>
        <div className={styles.heroScroll}>
          <span className={styles.scrollIndicator}>Scroll</span>
        </div>
      </section>

      {/* Ethos Section */}
      <section className={styles.section}>
        <div className={`container ${styles.ethosContent}`}>
          <div className="reveal">
            <span className={styles.sectionLabel}>The Ethos</span>
            <div className={styles.dividerShort}></div>
          </div>
          <div className={styles.manifesto}>
            <p className="reveal">
              You joined when the product was a prototype. When the equity was theoretical.
              When "company culture" meant whatever the four of you decided it was.
            </p>
            <p className="reveal">
              You weren't the founder. You weren't employee #47. You were somewhere
              in between — the kind of person who sees potential in chaos and finds
              clarity where others see risk.
            </p>
            <p className="reveal">
              First Commits is for those people. The early hires. The ones who
              shipped the first version, closed the first deals, designed the first
              interface that customers actually saw.
            </p>
            <p className="reveal">
              Not founders. Not employees. Something else entirely.
            </p>
          </div>
        </div>
      </section>

      {/* What We Mean Section */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className="reveal">
            <span className={styles.sectionLabelLight}>What "First Commits" Means</span>
            <div className={styles.dividerShortLight}></div>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.columnLeft}>
              <p className="reveal text-muted" style={{ color: 'var(--color-gray-400)' }}>
                In software, the first commit is the initial contribution to a codebase.
                It's the moment something becomes real. Before product-market fit.
                Before the Series A deck. Before anyone knew if it would work.
              </p>
            </div>
            <div className={styles.columnRight}>
              <p className="reveal" style={{ color: 'var(--color-gray-200)' }}>
                We believe early hires deserve recognition distinct from founders
                and later employees. You took founder-level risk without founder-level
                equity. You built the foundation others now stand on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className={styles.section}>
        <div className="container">
          <div className="reveal">
            <span className={styles.sectionLabel}>What You Get</span>
            <div className={styles.dividerShort}></div>
          </div>
          <div className={styles.valueGrid}>
            <div className={`${styles.valueItem} reveal`}>
              <span className={styles.valueNumber}>01</span>
              <h3 className={styles.valueTitle}>Access</h3>
              <p className={styles.valueDesc}>
                Direct lines to operators who've been where you are. No cold intros.
                No performative networking.
              </p>
            </div>
            <div className={`${styles.valueItem} reveal`}>
              <span className={styles.valueNumber}>02</span>
              <h3 className={styles.valueTitle}>Signal</h3>
              <p className={styles.valueDesc}>
                Membership indicates you've done the work. A quiet credential
                recognized by those who matter.
              </p>
            </div>
            <div className={`${styles.valueItem} reveal`}>
              <span className={styles.valueNumber}>03</span>
              <h3 className={styles.valueTitle}>Craft</h3>
              <p className={styles.valueDesc}>
                Intimate dinners, small gatherings, and candid conversations with
                people who've built what you're building. No panels. No pitches.
              </p>
            </div>
            <div className={`${styles.valueItem} reveal`}>
              <span className={styles.valueNumber}>04</span>
              <h3 className={styles.valueTitle}>Network</h3>
              <p className={styles.valueDesc}>
                A curated group of early hires from companies you'd recognize.
                Future co-founders, advisors, references.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Coming Soon
      <section className={styles.sectionProof}>
        <div className="container">
          <div className="reveal">
            <p className={styles.proofLabel}>
              Members have made their first commits at
            </p>
          </div>
          <div className={`${styles.proofGrid} reveal`}>
            <span className={styles.proofItem}>Stripe</span>
            <span className={styles.proofItem}>Figma</span>
            <span className={styles.proofItem}>Notion</span>
            <span className={styles.proofItem}>Linear</span>
            <span className={styles.proofItem}>Vercel</span>
            <span className={styles.proofItem}>Ramp</span>
            <span className={styles.proofItem}>Plaid</span>
            <span className={styles.proofItem}>Scale</span>
          </div>
          <div className="reveal">
            <p className={styles.proofNote}>
              And others we can't mention yet.
            </p>
          </div>
        </div>
      </section>
      */}

      {/* Exclusivity Section */}
      <section className={styles.section}>
        <div className={`container ${styles.exclusivityContent}`}>
          <div className="reveal">
            <span className={styles.sectionLabel}>How It Works</span>
            <div className={styles.dividerShort}></div>
          </div>
          <div className={styles.exclusivityText}>
            <p className="reveal">
              First Commits is invite-only and referral-based. We don't optimize for
              growth. We optimize for density — ensuring every member has genuinely
              done the work.
            </p>
            <p className="reveal">
              Applications are reviewed by current members. We look for evidence of
              early-stage contribution: founding team experience, pre-Series A
              involvement, demonstrable impact when things were still uncertain.
            </p>
            <p className="reveal text-muted">
              We accept applications on a rolling basis. If you're not accepted immediately,
              you may be added to our waitlist for future consideration.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.sectionFinal}>
        <div className="container">
          <div className={styles.finalContent}>
            <h2 className={`${styles.finalTitle} reveal`}>
              If this resonates, you<br />
              probably belong here.
            </h2>
            <div className="reveal">
              <Link href="/apply" className="btn btn-primary">
                Request Invitation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerLogo}>First Commits</span>
          <span className={styles.footerCopy}>For early hires, by early hires.</span>
        </div>
      </footer>
    </main>
  )
}
