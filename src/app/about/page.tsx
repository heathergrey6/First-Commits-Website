import Nav from '@/components/Nav'
import styles from './about.module.css'

const founders = [
  {
    initials: 'SK',
    name: 'Sujay Khandekar',
    role: 'Co-founder, First Commits',
    url: 'https://www.linkedin.com/in/sujaykhandekar/',
  },
  {
    initials: 'WN',
    name: 'William Namen',
    role: 'Co-founder, First Commits',
    url: 'https://www.linkedin.com/in/williamnamen/?skipRedirect=true',
  },
]

export default function About() {
  return (
    <main className={styles.main}>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Nav />
      <div id="main-content" />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>About First Commits</p>
          <h1>Why we started First Commits.</h1>
        </div>
      </section>

      <section className={styles.story}>
        <div className="container-wide">
          <div className={styles.storyGrid}>
            <p className={styles.sectionLabel}>The story</p>
            <div className={styles.storyCopy}>
              <h2>Sujay and William met at a founding engineer event.</h2>
              <p>
                The room felt immediately different: less performative, more
                specific, and full of people who understood what it takes to make
                a company real before the company knows what it is yet.
              </p>
              <p>
                Afterward, the question was obvious: why were there not more
                rooms like this for founding engineers?
              </p>
              <p>
                Founder events were founder-first. Engineering events were often
                too broad. Operator dinners rarely centered the person who chose
                the first stack, shipped the first workflow, and made the company
                technically real.
              </p>
              <p>
                First Commits gives that specific role a place to meet peers who
                understand the zero-to-one engineering job without needing it
                explained.
              </p>
            </div>
          </div>
          <div className={styles.statsGrid}>
            <p className={styles.sectionLabel}>By the numbers</p>
            <div className={styles.statItem}>
              <strong>80+</strong>
              <span>Community members</span>
              <p>
                Founding engineers and first technical hires across the First
                Commits network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.people}>
        <div className="container-wide">
          <div className={styles.peopleHeader}>
            <p className={styles.sectionLabel}>Founders</p>
            <h2>The people behind First Commits.</h2>
          </div>

          <div className={styles.founderGrid}>
            {founders.map((founder) => (
              <article className={styles.founderCard} key={founder.name}>
                <div className={styles.initials}>{founder.initials}</div>
                <div>
                  <h3>{founder.name}</h3>
                  <p>{founder.role}</p>
                </div>
                <a href={founder.url} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
