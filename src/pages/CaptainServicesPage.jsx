import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import '../styles/Pages.css'

const services = [
  {
    title: 'Private Fishing Charters',
    description:
      'Fully crewed trips tailored to your group — inshore, offshore, reef, or swordfish. Captain Alex handles navigation, rigging, and fish handling so you can focus on the action.',
  },
  {
    title: 'Corporate & Group Outings',
    description:
      'Team-building days on the water with flexible itineraries, catering coordination, and multi-boat options for larger groups.',
  },
  {
    title: 'Special Occasion Trips',
    description:
      'Birthdays, bachelor parties, and family reunions. We customize the pace, target species, and onboard experience for your celebration.',
  },
  {
    title: 'Captain-for-Hire Consultations',
    description:
      'Planning your own vessel trip? Book Captain Alex for route planning, species targeting advice, and on-water coaching.',
  },
]

export default function CaptainServicesPage() {
  return (
    <>
      <PageMeta
        title="Captain Services | FarSide Charters"
        description="Private charters, group outings, special occasions, and captain-for-hire services with FarSide Charters."
      />
      <div className="page">
        <header className="page__header">
          <h1>Captain Services</h1>
          <p>
            USCG-licensed leadership on every trip — plus custom services for groups,
            events, and anglers who want expert guidance on the water.
          </p>
        </header>

        <div className="page__content about-grid">
          {services.map((service) => (
            <section key={service.title} className="about-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </section>
          ))}
        </div>

        <div className="page__cta">
          <p>Ready to plan your trip?</p>
          <Link to="/book" className="btn btn-primary btn-lg">
            Book a Charter
          </Link>
        </div>
      </div>
    </>
  )
}
