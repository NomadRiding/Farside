import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import BookingForm from '../components/BookingForm'
import { charterPackages } from '../data/charterPackages'
import '../styles/Pages.css'

async function createCheckoutSession(bookingData) {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Unable to start checkout. Please try again.')
  }

  return data
}

export default function BookNowPage() {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  const handleSubmit = async (bookingData) => {
    setLoading(true)
    setApiError('')

    try {
      const pkg = charterPackages.find((p) => p.id === bookingData.charterType)
      const { url } = await createCheckoutSession({
        ...bookingData,
        priceId: pkg?.priceId,
      })

      if (url) {
        window.location.href = url
      } else {
        throw new Error('No checkout URL received.')
      }
    } catch (err) {
      setApiError(err.message)
      setLoading(false)
    }
  }

  return (
    <>
      <PageMeta
        title="Book Now | FarSide Charters"
        description="Reserve your Gulf Coast fishing charter. Choose your date, party size, and pay securely with Stripe."
      />
      <div className="page">
        <header className="page__header">
          <h1>Book Your Charter</h1>
          <p>
            Fill in your details below and pay securely to confirm your trip.
            All gear is included — just show up ready to fish.
          </p>
        </header>

        <div className="page__content page__content--narrow">
          <BookingForm onSubmit={handleSubmit} loading={loading} apiError={apiError} />
        </div>
      </div>
    </>
  )
}

export function BookSuccessPage() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <>
      <PageMeta
        title="Booking Confirmed | FarSide Charters"
        description="Your fishing charter booking is confirmed. See you on the water!"
      />
      <div className="page">
        <div className="success-card">
          <div className="success-card__icon" aria-hidden="true">✓</div>
          <h1>You&apos;re Booked!</h1>
          <p>
            Thank you for choosing FarSide Charters. Your payment was successful and your
            trip is confirmed. Captain Jake will reach out with dock details and any
            last-minute updates.
          </p>
          {sessionId && (
            <p className="success-card__ref">
              Reference: <code>{sessionId}</code>
            </p>
          )}
          <div className="success-card__actions">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link to="/about#policies" className="btn btn-secondary">
              View Policies
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
