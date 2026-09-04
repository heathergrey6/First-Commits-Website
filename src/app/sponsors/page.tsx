'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LogoCarousel from '@/components/LogoCarousel'
import styles from './sponsors.module.css'

const partnerLogos = [
  { src: '/bessemer_logo.png', alt: 'Bessemer Venture Partners', large: true },
  { src: '/forerunner-logo.png', alt: 'Forerunner' },
  { src: '/accel-logo.png', alt: 'Accel' },
  { src: '/bullpen-logo.jpeg', alt: 'Bullpen' },
  { src: '/crosslink.svg', alt: 'Crosslink Capital' },
  { src: '/langchain.png', alt: 'LangChain' },
  { src: '/alpha.png', alt: 'Alpha' },
  { src: '/greycroft.png', alt: 'Greycroft' },
  { src: '/ivp.svg', alt: 'IVP' },
  { src: '/battery.png', alt: 'Battery Ventures' },
  { src: '/scale.png', alt: 'Scale Venture Partners' },
  { src: '/bcv.webp', alt: 'Bain Capital Ventures', large: true },
  { src: '/precursor.png', alt: 'Precursor Ventures', large: true },
  { src: '/elevenlabs.png', alt: 'ElevenLabs' },
]

export default function Partners() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/partnerships@firstcommits.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `First Commits Partnership Inquiry: ${formData.company}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('There was an error submitting your inquiry. Please try again.')
      }
    } catch {
      alert('There was an error submitting your inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <main className={styles.main}>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Nav />
        <div id="main-content"></div>

        <section className={styles.confirmation}>
          <div className={styles.confirmationContent}>
            <span className={styles.confirmationLabel}>Inquiry Received</span>
            <div className={styles.dividerShort}></div>
            <h1 className={styles.confirmationTitle}>Thank you.</h1>
            <p className={styles.confirmationText}>
              Your partnership inquiry has been received. Our team will review
              your message and get back to you shortly.
            </p>
            <p className={styles.confirmationNote}>
              We typically respond to partnership inquiries within 5 business days.
            </p>
            <Link href="/" className={styles.backLink}>
              Return Home
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Nav />
      <div id="main-content"></div>

      {/* Partners Banner */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerRow}>
          <header className={styles.bannerHeader}>
            <h1 className={styles.bannerTitle}>Sponsors and Partners</h1>
            <p className={styles.bannerIntro}>
              First Commits is supported by sponsors and partners who understand
              the value of early contributors; entrepreneurial folks who dive head-first into the technical weeds, and
              who know how to scale. Being a sponsor demonstrates your commitment
              to our active community and gives you exclusive access to a thriving network of
              founding engineers at world-class startups.
            </p>
          </header>

          <div className={styles.bannerPhoto}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/scale-partners.webp"
              alt="First Commits x Scale Venture Partners dinner"
              className={styles.bannerPhotoImage}
            />
          </div>
        </div>

        <div className={styles.bannerContainer}>
          <div className={styles.partnersCarousel}>
            <span className={styles.carouselEyebrow}>OUR SPONSORS</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/spacex.png" alt="SpaceX" className={styles.featuredLogo} />
            <h2 className={styles.carouselTitle}>OUR PARTNERS</h2>
            <LogoCarousel logos={partnerLogos} />
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <header className={styles.formHeader}>
            <h2 className={styles.formTitle}>Become a sponsor</h2>
            <p className={styles.formIntro}>
              Interested in supporting the next generation of founding engineers?
              We partner with venture firms, accelerators, and organizations who share our belief of investing early to make our events possible. If this sounds like a fit, please fill out the form below and we&apos;ll be in touch.
            </p>
          </header>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="you@company.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Your company or organization"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                placeholder="Tell us about your interest in partnering with First Commits and how you'd like to support early technical hires."
                rows={6}
              />
            </div>

            <div className={styles.formFooter}>
              <p className={styles.reviewNote}>
                All inquiries are reviewed by our partnerships team.
              </p>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Let\'s Connect!'}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer tagline="Questions? Reach out to partnerships@firstcommits.com" />
    </main>
  )
}
