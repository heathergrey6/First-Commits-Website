'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
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
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Nav />
      <div id="main-content"></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            For those before<br />
            it was built.
          </h1>
          <p className={styles.heroSubtitle}>
            An invite-only community for founding engineers.
          </p>
          <div className={styles.heroDivider}></div>
          <div className={styles.heroCta}>
            <Link href="/apply" className={styles.heroBtn}>
              Request an Invite
            </Link>
          </div>
        </div>
        <div className={styles.heroPartnerBar}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bessemer_logo.png" alt="Bessemer Venture Partners" className={styles.partnerBarLogo} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/forerunner-logo.png" alt="Forerunner" className={styles.partnerBarLogo} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/accel-logo.png" alt="Accel" className={styles.partnerBarLogo} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bullpen-logo.jpeg" alt="Bullpen" className={styles.partnerBarLogo} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/crosslink.svg" alt="Crosslink Capital" className={styles.partnerBarLogo} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/langchain.png" alt="LangChain" className={styles.partnerBarLogo} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/alpha.png" alt="Alpha" className={styles.partnerBarLogo} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/greycroft.png" alt="Greycroft" className={styles.partnerBarLogo} />
        </div>
      </section>

      {/* Ethos Section */}
      <section className={styles.section}>
        <div className={`container ${styles.ethosContent}`}>
          <div className="reveal">
            <h2 className={styles.sectionLabel}>The Ethos</h2>
            <div className={styles.dividerShort}></div>
          </div>
          <div className={styles.manifesto}>
            <p className="reveal">
              You joined when the codebase was a single repo. When the architecture
              was whatever you decided it was. When "the engineering team" meant you
              and maybe one other person.
            </p>
            <p className="reveal">
              You weren't the founder. You weren't engineer #47. You were the one
              they called first — the one who turned a pitch deck into a working
              product, who shipped v1 when nothing was certain.
            </p>
            <p className="reveal">
              First Commits is for those engineers. The first technical hires. The
              ones who wrote the code that everything else was built on.
            </p>
            <p className="reveal">
              Not founders. Not late hires. Founding engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className={styles.photoStrip}>
        <div className={styles.photoGrid}>
          <div className={styles.photoItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/event-dinner.jpeg"
              alt="First Commits dinner gathering"
              className={styles.photoImage}
            />
          </div>
          <div className={styles.photoItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/event-lounge.jpeg"
              alt="First Commits lounge conversation"
              className={styles.photoImage}
            />
          </div>
        </div>
      </section>

      {/* What We Mean Section */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className="reveal">
            <h2 className={styles.sectionLabelLight}>What &ldquo;First Commits&rdquo; Means</h2>
            <div className={styles.dividerShortLight}></div>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.columnLeft}>
              <p className="reveal text-muted" style={{ color: 'var(--color-gray-400)' }}>
                In software, the first commit is the initial contribution to a codebase.
                It's the moment an idea becomes code. Before product-market fit.
                Before the Series A deck. Before anyone knew if it would work.
              </p>
            </div>
            <div className={styles.columnRight}>
              <p className="reveal" style={{ color: 'var(--color-gray-200)' }}>
                We believe founding engineers deserve recognition distinct from founders
                and later engineers. You took founder-level risk without founder-level
                equity. You wrote the code that everything else was built on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className={styles.section}>
        <div className="container">
          <div className="reveal">
            <h2 className={styles.sectionLabel}>What You Get</h2>
            <div className={styles.dividerShort}></div>
          </div>
          <div className={styles.valueGrid}>
            <div className={`${styles.valueItem} reveal`}>
              <span className={styles.valueNumber}>01</span>
              <h3 className={styles.valueTitle}>Access</h3>
              <p className={styles.valueDesc}>
                Direct lines to engineers who've been where you are. No cold intros.
                No performative networking.
              </p>
            </div>
            <div className={`${styles.valueItem} reveal`}>
              <span className={styles.valueNumber}>02</span>
              <h3 className={styles.valueTitle}>Signal</h3>
              <p className={styles.valueDesc}>
                Membership indicates you've shipped the code. A quiet credential
                recognized by those who matter.
              </p>
            </div>
            <div className={`${styles.valueItem} reveal`}>
              <span className={styles.valueNumber}>03</span>
              <h3 className={styles.valueTitle}>Craft</h3>
              <p className={styles.valueDesc}>
                Intimate dinners, small gatherings, and candid conversations with
                engineers who've built what you're building. No panels. No pitches.
              </p>
            </div>
            <div className={`${styles.valueItem} reveal`}>
              <span className={styles.valueNumber}>04</span>
              <h3 className={styles.valueTitle}>Network</h3>
              <p className={styles.valueDesc}>
                A curated group of founding engineers from companies you'd recognize.
                Future co-founders, technical advisors, references.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusivity Section */}
      <section className={styles.section}>
        <div className={`container ${styles.exclusivityContent}`}>
          <div className="reveal">
            <h2 className={styles.sectionLabel}>How It Works</h2>
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
              early-stage engineering: founding team experience, pre-Series A
              technical contribution, demonstrable impact when the codebase was still taking shape.
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
          <span className={styles.footerLogo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fc-logo.svg" alt="" className={styles.footerLogoIcon} />
            First Commits
          </span>
          <span className={styles.footerCopy}>For founding engineers, by founding engineers.</span>
          <a
            href="https://www.linkedin.com/company/first-commits"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  )
}
