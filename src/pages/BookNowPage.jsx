import PageMeta from '../components/PageMeta'
import SquareAppointmentsEmbed from '../components/SquareAppointmentsEmbed'
import '../styles/Pages.css'

export default function BookNowPage() {
  return (
    <>
      <PageMeta
        title="Book Now | FarSide Charters"
        description="Schedule your South Florida fishing charter online with FarSide Charters through Square Appointments."
      />
      <div className="page">
        <header className="page__header">
          <h1>Book Your Charter</h1>
          <p>
            Choose your service, pick an available date and time, and complete your
            booking securely through Square. All gear is included — just show up ready
            to fish.
          </p>
        </header>

        <div className="page__content page__content--wide">
          <SquareAppointmentsEmbed />
          <p className="booking-page__legal">
            By booking, you agree to our cancellation policy. Cancellations made 48+
            hours before your trip receive a full refund. See our{' '}
            <a href="/about#policies">policies</a> for details.
          </p>
        </div>
      </div>
    </>
  )
}
