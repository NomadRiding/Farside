import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import '../styles/Pages.css'

export default function ContactsPage() {
  return (
    <>
      <PageMeta
        title="Contacts | FarSide Charters"
        description="Get in touch with FarSide Charters to book a trip or ask questions about South Florida fishing charters."
      />
      <div className="page">
        <header className="page__header">
          <h1>Contact Us</h1>
          <p>
            Have questions about a charter, group booking, or availability? Reach out
            — we typically respond within one business day.
          </p>
        </header>

        <div className="page__content contact-grid">
          <section className="about-card">
            <h2>Phone</h2>
            <p>
              <a href="tel:+15551234567">(555) 123-4567</a>
            </p>
            <p className="form-hint">Daily, 7am – 7pm ET</p>
          </section>

          <section className="about-card">
            <h2>Email</h2>
            <p>
              <a href="mailto:info@farsidecharters.com">info@farsidecharters.com</a>
            </p>
            <p className="form-hint">For bookings, group inquiries, and general questions</p>
          </section>

          <section className="about-card">
            <h2>Departure Location</h2>
            <p>
              Marina Bay<br />
              South Florida, FL
            </p>
            <p className="form-hint">Exact dock details sent after booking confirmation</p>
          </section>

          <section className="about-card">
            <h2>Book Online</h2>
            <p>
              Prefer to reserve instantly? Choose your charter package and secure your
              date with online payment.
            </p>
            <Link to="/book" className="btn btn-primary">
              Book Now
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}
