'use client'

import { useEffect, useRef, useState, FormEvent } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './apply.module.css'

const roleOptions = [
  { value: 'founding-engineer-1-5', label: 'Founding Engineer (#1-5)' },
  { value: 'founding-engineer-6-10', label: 'Early Engineer (#6-10)' },
  { value: 'first-eng-hire', label: 'First Engineering Hire' },
  { value: 'eng-lead-early', label: 'Early Engineering Lead / CTO Hire' },
  { value: 'other-technical', label: 'Other Technical Role (First 10)' },
]

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
  const [isRoleOpen, setIsRoleOpen] = useState(false)
  const roleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isRoleOpen) return

    const handleOutsideClick = (e: MouseEvent) => {
      if (roleRef.current && !roleRef.current.contains(e.target as Node)) {
        setIsRoleOpen(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsRoleOpen(false)
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isRoleOpen])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.role) {
      alert('Please select your role.')
      return
    }

    setIsSubmitting(true)

    const payload = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
      company: formData.company,
      linkedin: formData.linkedin || 'Not provided',
      why: formData.why,
      referral: formData.referral || 'None',
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/community@firstcommits.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...payload,
          _subject: `First Commits Application: ${formData.name}`,
        }),
      })

      // Send to Make.com webhook for downstream automation (e.g. Slack); best-effort so a Make outage doesn't block the application.
      fetch('https://hook.us2.make.com/79r4dmjd9qouki92vce958v34ck88acr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {})

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
            <h1 className={styles.formTitle}>Membership Application</h1>
            <p className={styles.formNote}>
              First Commits exist to honor and support founding engineers that are building from the ground up. With your membership comes access to our member-only events, our community slack channel, and discounts on your favorite tools. 
            </p>
            <p className={styles.formNote}>
              Applications are reviewed by our membership committee on a rolling basis. If your application is accepted, you will receive an email with next steps for joining the community.
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
                placeholder="you@domain.com"
                aria-describedby="email-hint"
              />
              <span id="email-hint" className={styles.hint}>
                Personal email is best here so you can stay in our system even if you switch jobs.
              </span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="role" className={styles.label}>
                Your Role
              </label>
              <div className={styles.customSelect} ref={roleRef}>
                <button
                  type="button"
                  id="role"
                  className={styles.selectTrigger}
                  onClick={() => setIsRoleOpen((open) => !open)}
                  aria-haspopup="listbox"
                  aria-expanded={isRoleOpen}
                >
                  <span className={formData.role ? '' : styles.selectPlaceholder}>
                    {roleOptions.find((option) => option.value === formData.role)?.label ?? 'Select your role'}
                  </span>
                  <span className={`${styles.selectChevron} ${isRoleOpen ? styles.selectChevronOpen : ''}`} aria-hidden="true" />
                </button>

                {isRoleOpen && (
                  <ul className={styles.selectMenu} role="listbox" aria-label="Your role">
                    {roleOptions.map((option) => (
                      <li key={option.value} role="option" aria-selected={formData.role === option.value}>
                        <button
                          type="button"
                          className={`${styles.selectOption} ${formData.role === option.value ? styles.selectOptionActive : ''}`}
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, role: option.value }))
                            setIsRoleOpen(false)
                          }}
                        >
                          {option.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
                Be specific -- anecdotes and examples are super helpful!
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
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <p className={styles.reviewNote}>
                Applications are reviewed by humans, we read every response! Questions? Reach out to community@firstcommits.com
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
