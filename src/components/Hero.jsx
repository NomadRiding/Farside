import { Link } from "react-router-dom"
import "../styles/Hero.css"

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">South Florida Fishing Charters</p>
        <h1 id="hero-heading" className="hero-section__title">
          FarSide Charters
        </h1>
        <p className="hero-section__subtitle">
          Welcome to South Florida's Premier Offshore Fishing Experience.
        </p>
        <div className="hero-section__actions">
          <Link to="/book" className="btn btn-primary btn-book-now btn-lg">
            Book Now
          </Link>
          <Link to="/about" className="btn btn-secondary btn-lg">
            About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
