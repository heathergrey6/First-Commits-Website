'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import styles from './partners.module.css'

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

      {/* Split Layout */}
      <div className={styles.splitLayout}>
        {/* Left Column — Content */}
        <div className={styles.splitContent}>
          {/* Partners Banner */}
          <section className={styles.bannerSection}>
            <div className={styles.bannerContainer}>
              <header className={styles.bannerHeader}>
                <span className={styles.sectionLabel}>Our Partners</span>
                <div className={styles.dividerShort}></div>
                <h1 className={styles.bannerTitle}>
                  Backed by those who<br />
                  believe in the early.
                </h1>
                <p className={styles.bannerIntro}>
                  First Commits is supported by partners who understand that the
                  earliest contributions are often the most consequential. They
                  share our conviction that early hires deserve recognition,
                  community, and opportunity.
                </p>
              </header>

              <div className={styles.partnersGrid}>
                <div className={styles.partnerCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bessemer_logo.png"
                    alt="Bessemer Venture Partners"
                    className={styles.partnerLogoImageBessemer}
                  />
                </div>
                <div className={styles.partnerCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/forerunner-logo.png"
                    alt="Forerunner"
                    className={styles.partnerLogoImage}
                  />
                </div>
                <div className={styles.partnerCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/accel-logo.png"
                    alt="Accel"
                    className={styles.partnerLogoImage}
                  />
                </div>
                <div className={styles.partnerCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bullpen-logo.jpeg"
                    alt="Bullpen"
                    className={styles.partnerLogoImage}
                  />
                </div>
                <div className={styles.partnerCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/crosslink.svg"
                    alt="Crosslink Capital"
                    className={styles.partnerLogoImage}
                  />
                </div>
                <div className={styles.partnerCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/langchain.png"
                    alt="LangChain"
                    className={styles.partnerLogoImage}
                  />
                </div>
                <div className={styles.partnerCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/alpha.png"
                    alt="Alpha"
                    className={styles.partnerLogoImage}
                  />
                </div>
                <div className={styles.partnerCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/greycroft.png"
                    alt="Greycroft"
                    className={styles.partnerLogoImage}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Partnership Inquiry Form */}
          <section className={styles.formSection}>
            <div className={styles.formContainer}>
          <header className={styles.formHeader}>
            <span className={styles.sectionLabel}>Partnership Inquiry</span>
            <div className={styles.dividerShort}></div>
            <h2 className={styles.formTitle}>Become a Partner</h2>
            <p className={styles.formIntro}>
              Interested in supporting the next generation of early hires?
              We partner with venture firms, accelerators, and organizations
              that share our commitment to the people who build before
              it&apos;s obvious.
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
                placeholder="Tell us about your interest in partnering with First Commits and how you'd like to support early hires."
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
                {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
            </div>
          </section>
        </div>

        {/* Right Column — Photo */}
        <div className={styles.splitPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/partner-dinner.jpeg"
            alt="First Commits x Bessemer partner dinner"
            className={styles.splitPhotoImage}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerText}>
            Questions? Reach out to partnerships@firstcommits.com
          </span>
        </div>
      </footer>
    </main>
  )
}
