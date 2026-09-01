'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './EventCarousel.module.css'

interface Photo {
  src: string
  alt: string
  caption: string
}

export default function EventCarousel({ photos }: { photos: Photo[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const slide = track.children[index] as HTMLElement | undefined
    if (!slide) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    slide.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }

  const handlePrev = () => scrollToIndex(Math.max(activeIndex - 1, 0))
  const handleNext = () => scrollToIndex(Math.min(activeIndex + 1, photos.length - 1))

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      handleNext()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      handlePrev()
    }
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(track.children).indexOf(entry.target)
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      { root: track, threshold: 0.6 }
    )

    Array.from(track.children).forEach((child) => observer.observe(child))
    return () => observer.disconnect()
  }, [photos.length])

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Past First Commits events"
    >
      <div className={styles.track} ref={trackRef} tabIndex={0} onKeyDown={handleKeyDown}>
        {photos.map((photo, index) => (
          <div
            className={styles.slide}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${photos.length}`}
            key={photo.src}
          >
            <div className={styles.slidePhoto}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} />
            </div>
            <p className={styles.slideCaption}>{photo.caption}</p>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrowBtn}
          onClick={handlePrev}
          aria-label="Previous event photo"
          disabled={activeIndex === 0}
        >
          ‹
        </button>
        <div className={styles.dots}>
          {photos.map((photo, index) => (
            <button
              type="button"
              key={photo.src}
              className={index === activeIndex ? styles.dotActive : styles.dot}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.arrowBtn}
          onClick={handleNext}
          aria-label="Next event photo"
          disabled={activeIndex === photos.length - 1}
        >
          ›
        </button>
      </div>
    </div>
  )
}
