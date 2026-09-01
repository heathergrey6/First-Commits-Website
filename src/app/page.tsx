'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EventCarousel from '@/components/EventCarousel'
import styles from './page.module.css'

const partnerNames = [
  'Bessemer Venture Partners',
  'Forerunner',
  'Accel',
  'Bullpen Capital',
  'Crosslink Capital',
  'LangChain',
  'Alpha Partners',
  'Greycroft',
  'M13',
  'Precursor Ventures',
  'Bain Capital Ventures',
  'Scale Venture Partners',
  'IVP',
  'Battery Ventures',
  'ElevenLabs',
]

const representedStartups = [
  'Aleph',
  'Ambient.ai',
  'Amdahl',
  'Ampersand',
  'Anori',
  'Anything',
  'Anzenna',
  'Assert',
  'Babs',
  'Baseten',
  'Bem',
  'Blockit AI',
  'Bluejay',
  'Boxes.dev',
  'Bretton AI',
  'Centralize',
  'Chalk',
  'Coefficient',
  'Column',
  'Console',
  'Convex',
  'Coval',
  'Cursor',
  'Decagon',
  'Delphi',
  'Delve',
  'Doss',
  'Echelon',
  'Exa',
  'fal',
  'Fermat',
  'Fifteenth',
  'Flagship',
  'Flint',
  'Forge',
  'Fragment',
  'Frontier Security',
  'Fulcrum',
  'Gem',
  'Hyperscale',
  'Inception',
  'Kaizen',
  'Kestral',
  'Marin',
  'Max AI',
  'Maximal',
  'Merge API',
  'Monaco',
  'Nash',
  'Nile',
  'Orb',
  'Paraform',
  'Paramark',
  'Parcha',
  'Persona',
  'Phonely',
  'Pi Security',
  'Pivot Robotics',
  'Ploy',
  'Poetic',
  'Pylon',
  'Reevo',
  'Resolve AI',
  'Rundoo',
  'Serafis',
  'Shepherd Insurance',
  'Simile',
  'Soma Health',
  'Specter',
  'Sphere',
  'Spot AI',
  'Styleframe AI',
  'Superscript',
  'Tandemn',
  'Tightrope',
  'Town',
  'TruckSmarter',
  'Unify',
  'Vapi',
  'Virescent',
  'Voicebit',
  'Yutori',
]

const eventPhotos = [
  {
    src: '/event-scale-1.jpg',
    alt: 'Founding engineers at a dinner with Scale Venture Partners',
    caption: 'Dinner with Scale Venture Partners',
  },
  {
    src: '/event-dinner.jpeg',
    alt: 'Founding engineers at a First Commits dinner table',
    caption: 'A First Commits private dinner',
  },
  {
    src: '/founding-engineers-dinner-room.jpeg',
    alt: 'A private dinner room set for a First Commits gathering',
    caption: 'A private dinner in San Francisco',
  },
  {
    src: '/partner-dinner.jpeg',
    alt: 'Members talking at a partner-hosted dinner',
    caption: 'A partner-hosted dinner',
  },
  {
    src: '/partner-hosted-room.jpeg',
    alt: 'A partner-hosted room during a First Commits event',
    caption: 'A partner-hosted room',
  },
  {
    src: '/event-lounge.jpeg',
    alt: 'Members mingling in a lounge before a First Commits event',
    caption: 'Mingling before the main event',
  },
]

const membershipBenefits = [
  {
    label: 'Active Slack community',
    description: 'The Slack channel actually gets used — architecture debates, hiring calls, and outage post-mortems happen there daily, not once a quarter.',
  },
  {
    label: 'Social events',
    description: "Private dinners and working salons in real rooms, with people who've carried the same kind of pressure you have.",
  },
  {
    label: 'Early access to products',
    description: 'See what other founding engineers are building before it ships, and get first access when it does.',
  },
  {
    label: 'Shameless plugs',
    description: 'Post what you’re hiring for, what you built, or what you need — the room is built for asks, not just conversation.',
  },
  {
    label: 'Resource for questions',
    description: "A direct line to people who've already made the call you're stuck on — architecture, hiring, or otherwise.",
  },
]

const communityStats = [
  { value: '100+', label: 'Members' },
  { value: '80+', label: 'Startups represented' },
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

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Founding engineers deserve their own room.</h1>
          <p className={styles.heroText}>
            First Commits is a curated community for the founding engineers
            who turned an idea into a product, a repo into a company, and
            uncertainty into working software.
          </p>
        </div>

        <div className={styles.heroPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/event-scale.jpg" alt="Founding engineers at a First Commits dinner" />
        </div>
      </section>

      {/* Who we are and what we do */}
      <section className={styles.whoWeAre}>
        <div className="container-wide">
          <h2 className="reveal">Who we are</h2>
          <div className={styles.whoWeAreCopy}>
            <p className="reveal">
              Building early can be lonely. First Commits exists to connect the people who are boldly building the technical foundations of a business from the ground up. We are a professional network, a resource, and a community of peers who understand the unique challenges of being a founding engineer. 
            </p>
            <p className="reveal">
              Through in-person events and a lively Slack forum, we provide opportunities to connect, brainstorm, test early versions of products, and build relationships that last. These are folks who will cheer you on when you ship, who understand the late nights, and maybe one-day be your co-founder.
            </p>
          </div>
          <div className={`${styles.statsRow} reveal`}>
            {communityStats.map((stat) => (
              <div className={styles.statItem} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className={`${styles.infoRow} reveal`}>
            <p className={styles.partnerLabel}>Our sponsors</p>
            <div className={styles.sponsorsRow}>
              <span className={styles.sponsorWordmark}>SpaceXAI</span>
            </div>
          </div>
          <div className={`${styles.infoRow} reveal`}>
            <p className={styles.partnerLabel}>Our partners</p>
            <div className={styles.partnerNamesColumns}>
              {(() => {
                const sorted = [...partnerNames].sort((a, b) => a.localeCompare(b))
                const splitIndex = sorted.indexOf('Forerunner')
                const columns = [sorted.slice(0, splitIndex), sorted.slice(splitIndex)]
                return columns.map((column, i) => (
                  <ul className={styles.partnerNamesList} key={i}>
                    {column.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                ))
              })()}
            </div>
          </div>
          <div className={`${styles.infoRow} reveal`}>
            <p className={styles.partnerLabel}>Represented startups</p>
            <ul className={styles.startupsList}>
              {[...representedStartups]
                .sort((a, b) => a.localeCompare(b))
                .map((name) => (
                  <li key={name}>{name}</li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className={styles.events}>
        <div className="container-wide">
          <h2 className="reveal">Events</h2>
          <div className={styles.eventsCopy}>
            <p className="reveal">
              We host bi-monthly in-person events with our partners for founding engineers to share experiences, learn from each other, and build lifelong connections. Instead of the usual tech talks, pitches, and panels, we focus on small intimate gatherings that feel personal, authentic, and fun. 
            </p>
            <p className="reveal">
              Interested in becoming a sponsor? Visit our <Link href="/partners" className={styles.link}>sponsors page</Link> to learn more.
            </p>
          </div>

          <div className={`${styles.carouselBlock} reveal`}>
            <EventCarousel photos={eventPhotos} />
          </div>
        </div>
      </section>

      {/* Membership benefits */}
      <section className={styles.benefits}>
        <div className="container-wide">
          <h2 className="reveal">Membership benefits</h2>
          <p className={`${styles.benefitsKicker} reveal`}>
            The goal is not scale. The goal is density: every member should make
            the room sharper for every other member.
          </p>

          <div className={styles.benefitsGrid}>
            {membershipBenefits.map((benefit) => (
              <div key={benefit.label} className={`${styles.benefitCard} reveal`}>
                <h3>{benefit.label}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className={styles.finalCta}>
        <div className={styles.finalInner}>
          <h2 className="reveal">If you built the first version, this is your room.</h2>
          <div className={`${styles.ctaActions} reveal`}>
            <Link href="/apply" className={styles.ctaPrimary}>Request Membership</Link>
            <Link href="/partners" className={styles.ctaSecondary}>Sponsor us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
