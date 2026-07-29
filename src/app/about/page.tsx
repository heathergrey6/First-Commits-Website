import Nav from '@/components/Nav'
import styles from './about.module.css'

const companies = [
  'Babs', 'Baseten', 'Bem', 'Blockit AI', 'Bluejay', 'Boxes.dev', 'Bretton AI',
  'Centralize', 'Chalk', 'Column', 'Console', 'Convex', 'Coval', 'Cursor',
  'Decagon', 'Delphi', 'Doss', 'Echelon', 'Exa', 'fal', 'Fermat', 'Fifteenth',
  'Flagship', 'Flint', 'Forge', 'Fragment', 'Fulcrum', 'Gem', 'Hyperscale',
  'Inception', 'Kaizen', 'Kestral', 'Marin', 'Max AI', 'Maximal', 'Merge API',
  'Monaco', 'Nash', 'Nile', 'Orb', 'Paraform', 'Paramark', 'Parcha',
  'Pi Security', 'Pivot Robotics', 'Ploy', 'Poetic', 'Pylon', 'Reevo',
  'Resolve AI', 'Rundoo', 'Serafis', 'Shepherd Insurance', 'Simile',
  'Soma Health', 'Sphere', 'Spot AI', 'Styleframe AI', 'Superscript',
  'Tandemn', 'Tightrope', 'Town', 'TruckSmarter', 'Unify', 'Vapi',
  'Virescent', 'Yutori',
]

const founders = [
  {
    name: 'Sujay Khandekar',
    role: 'Co-founder, First Commits',
    title: 'Founding engineer, Orb',
    url: 'https://www.linkedin.com/in/sujaykhandekar/',
  },
  {
    name: 'William Namen',
    role: 'Co-founder, First Commits',
    title: 'Founding engineer, Coefficient',
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
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <strong>90+</strong>
                <span>Community members</span>
              </div>
              <div className={styles.statItem}>
                <strong>70+</strong>
                <span>Represented companies</span>
              </div>
            </div>
          </div>
          <div className={styles.companiesGrid}>
            <p className={styles.sectionLabel}>Represented companies</p>
            <ul className={styles.companyList}>
              {companies.map((company) => (
                <li key={company}>{company}</li>
              ))}
            </ul>
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
                <div>
                  <h3>{founder.name}</h3>
                  <p className={styles.founderRole}>{founder.role}</p>
                  <p>{founder.title}</p>
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
