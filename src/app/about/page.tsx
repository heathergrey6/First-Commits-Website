import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './about.module.css'

const founders: {
  name: string
  role: string
  photo?: string
  title?: string
  url?: string
}[] = [
  {
    photo: '/founder-sujay.jpg',
    name: 'Sujay Khandekar',
    role: 'Co-founder',
    title: 'Founding Engineer at Orb',
    url: 'https://www.linkedin.com/in/sujaykhandekar/',
  },
  {
    photo: '/founder-william.jpg',
    name: 'William Namen',
    role: 'Co-founder',
    title: 'Founding Engineer at Coefficient',
    url: 'https://www.linkedin.com/in/williamnamen/?skipRedirect=true',
  },
  {
    photo: '/team-heather.jpg',
    name: 'Heather Chen',
    role: 'Community Manager',
    url: 'https://www.linkedin.com/in/heather-chen6/',
  },
  {
    photo: '/team-anshika.jpg',
    name: 'Anshika Agrawal',
    role: 'Community Manager',
    url: 'https://www.linkedin.com/in/anshika-agrawal-733277389/',
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
          <h1 className={styles.heroTitle}>Our Why</h1>
        </div>

        <div className={styles.heroPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/event-scale-2.webp" alt="Founding engineers gathered around the table at a First Commits dinner" />
        </div>
      </section>

      <section className={styles.story}>
        <div className="container-wide">
          <h2>Sujay and William met at a founding engineer event.</h2>
          <div className={styles.storyCopy}>
            <p>
              The room immediately felt different: less performative, less scripted 
              and full of people who really understood what it takes lay the technical foundations of a startup. Why weren't there more of these events?
            </p>
            <p>
              They ended the night with a shared vision: to create a community for founding engineers to connect, learn from each other, and build lifelong relationships.
            </p>
            <p>
              What started as scrappy dinners in a living room turned into bi-monthly in-person events supported by a vast network of venture partners and sponsors. Today, we are proud to host over 100 members who represent 80+ of the most innovative startups in Silicon Valley.
            </p>
            <p>
              First Commits is a professional network, a social community, and a resource for founding engineers based in the Bay Area. We are committed to creating a genuine and inclusive space for early technical hires to build in community.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.people}>
        <div className="container-wide">
          <h2>The FC Team</h2>

          <div className={styles.founderGrid}>
            {founders.map((founder) => (
              <article className={styles.founderCard} key={founder.name}>
                {founder.photo && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={founder.photo} alt={founder.name} className={styles.founderPhoto} />
                )}
                <h3>{founder.name}</h3>
                <p>{founder.role}</p>
                {founder.title && <p className={styles.founderTitle}>{founder.title}</p>}
                {founder.url && (
                  <a href={founder.url} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
