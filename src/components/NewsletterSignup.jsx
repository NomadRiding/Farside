import { useState } from 'react'
import '../styles/Newsletter.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('success')
    setEmail('')
  }

  return (
    <section className="newsletter-section" aria-labelledby="newsletter-heading">
      <div className="newsletter-section__inner">
        <h2 id="newsletter-heading">Stay in the Loop</h2>
        <p>
          Get seasonal fishing reports, charter specials, and availability updates
          delivered to your inbox.
        </p>

        {status === 'success' ? (
          <p className="newsletter-section__success" role="status">
            Thanks for subscribing! We will be in touch soon.
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby={error ? 'newsletter-error' : undefined}
              aria-invalid={error ? 'true' : 'false'}
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
            {error && (
              <p id="newsletter-error" className="form-error" role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
