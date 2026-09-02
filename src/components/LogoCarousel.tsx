'use client'

import styles from './LogoCarousel.module.css'

interface Logo {
  src: string
  alt: string
  large?: boolean
}

export default function LogoCarousel({ logos }: { logos: Logo[] }) {
  const track = [...logos, ...logos]

  return (
    <div className={styles.viewport} role="region" aria-label="Our partners">
      <div className={styles.track}>
        {track.map((logo, index) => (
          <div className={styles.card} key={`${logo.src}-${index}`} aria-hidden={index >= logos.length}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={logo.alt} className={logo.large ? styles.logoLarge : styles.logo} />
          </div>
        ))}
      </div>
    </div>
  )
}
