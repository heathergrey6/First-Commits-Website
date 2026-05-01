'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import styles from './apply.module.css'

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    linkedin: '',
    why: '',
    referral: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/community@firstcommits.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          company: formData.company,
          linkedin: formData.linkedin || 'Not provided',
          why: formData.why,
          referral: formData.referral || 'None',
          _subject: `First Commits Application: ${formData.name}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('There was an error submitting your application. Please try again.')
      }
    } catch {
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
            <span className={styles.confirmationLabel}>Application Received</span>
            <div className={styles.dividerShort}></div>
            <h1 className={styles.confirmationTitle}>Thank you.</h1>
            <p className={styles.confirmationText}>
              Your application has been received and will be reviewed by our
              membership committee. We review applications on a rolling basis and will be
              in touch if there's a fit.
            </p>
            <p className={styles.confirmationNote}>
              We don't send rejection emails. If you haven't heard from us within
              90 days, you're welcome to reapply with updated information.
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

      {/* Application Form */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <header className={styles.formHeader}>
            <span className={styles.formLabel}>Application</span>
            <div className={styles.dividerShort}></div>
            <h1 className={styles.formTitle}>Request Membership</h1>
            <p className={styles.formIntro}>
              First Commits is for founding engineers — the first technical hires
              at startups. The ones who shipped v1, architected the stack, and
              wrote the code before anyone else believed.
            </p>
            <p className={styles.formNote}>
              All applications are reviewed by current members. We're looking for
              evidence of early-stage engineering and genuine technical impact
              during the uncertain phase.
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
              <label htmlFor="role" className={styles.label}>
                Your Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className={styles.select}
              >
                <option value="">Select your role</option>
                <option value="founding-engineer-1-5">Founding Engineer (#1-5)</option>
                <option value="founding-engineer-6-10">Early Engineer (#6-10)</option>
                <option value="first-eng-hire">First Engineering Hire</option>
                <option value="eng-lead-early">Early Engineering Lead / CTO Hire</option>
                <option value="other-technical">Other Technical Role (First 10)</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                Company / Past Companies
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Where you made your first commits"
                aria-describedby="company-hint"
              />
              <span id="company-hint" className={styles.hint}>
                Include the company name and your employee number if known (e.g., "Stripe, #12")
              </span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="linkedin" className={styles.label}>
                LinkedIn
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className={styles.input}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="why" className={styles.label}>
                Why do you belong in First Commits?
              </label>
              <textarea
                id="why"
                name="why"
                value={formData.why}
                onChange={handleChange}
                required
                className={styles.textarea}
                placeholder="Tell us about your early-stage engineering experience. What did you build? What was the stack? What technical decisions were yours?"
                rows={6}
                aria-describedby="why-hint"
              />
              <span id="why-hint" className={styles.hint}>
                Be specific. We're looking for evidence, not claims.
              </span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="referral" className={styles.label}>
                Referral
                <span className={styles.optional}>(Optional)</span>
              </label>
              <input
                type="text"
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className={styles.input}
                placeholder="Name of the member who referred you"
                aria-describedby="referral-hint"
              />
              <span id="referral-hint" className={styles.hint}>
                Referred applicants are prioritized but not guaranteed acceptance.
              </span>
            </div>

            <div className={styles.formFooter}>
              <p className={styles.reviewNote}>
                Applications are reviewed by humans. We read every response.
              </p>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerText}>
            Questions? Reach out to community@firstcommits.com
          </span>
        </div>
      </footer>
    </main>
  )
}
