import { Link } from 'react-router-dom'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-section__overlay" />
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">South Florida Fishing Charters</p>
        <h1 id="hero-heading" className="hero-section__title">
          Your Next Great Catch Starts Here
        </h1>
        <p className="hero-section__subtitle">
          Join Captain Alex aboard the FarSide for half-day and full-day charters.
          All gear included — just bring your sense of adventure.
        </p>
        <div className="hero-section__actions">
          <Link to="/book" className="btn btn-primary btn-lg">
            Book Now
          </Link>
          <Link to="/about" className="btn btn-secondary btn-lg">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
