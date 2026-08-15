import { Link } from "react-router-dom"
import PageMeta from "../components/PageMeta"
import BookNowLink from "../components/BookNowLink"
import "../styles/Pages.css"

export default function ContactsPage() {
  return (
    <>
      <PageMeta
        title="Contact | FarSide Charters"
        description="Get in touch with FarSide Charters to book a trip or ask questions about South Florida fishing charters."
      />
      <div className="page">
        <header className="page__header">
          <h1>Contact Us</h1>
          <p>
            Have questions about a charter, group booking, or availability?
            Reach out — we typically respond within one business day.
          </p>
        </header>

        <div className="page__content contact-grid">
          <section className="about-card">
            <h2>Phone</h2>
            <p>
              <a href="tel:+17863262519">(786) 326-2519</a>
            </p>
            <p className="form-hint">Daily, 7am – 7pm ET</p>
          </section>

          <section className="about-card">
            <h2>Email</h2>
            <p>
              <a href="mailto:farsideoutfitters@gmail.com">
                farsideoutfitters@gmail.com
              </a>
            </p>
            <p className="form-hint">
              For bookings, group inquiries, and general questions
            </p>
          </section>

          <section className="about-card">
            <h2>Departure Location</h2>
            <p>
              Marina Bay
              <br />
              South Florida, FL
            </p>
            <p className="form-hint">
              Exact dock details sent after booking confirmation
            </p>
          </section>

          <section className="about-card">
            <h2>Book Online</h2>
            <p>
              Prefer to reserve instantly? Choose your charter package and book
              your date online through Square.
            </p>
            <BookNowLink />
          </section>
        </div>
      </div>
    </>
  )
}
