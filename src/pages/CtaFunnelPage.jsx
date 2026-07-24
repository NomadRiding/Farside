import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { reviews } from '../data/reviews'
import '../styles/Pages.css'
import '../styles/CtaFunnel.css'

export default function CtaFunnelPage() {
  const featured = reviews[0]

  return (
    <>
      <PageMeta
        title="Book Your Gulf Coast Charter | FarSide Charters"
        description="Limited availability — reserve your half-day or full-day fishing charter today. All gear included."
      />
      <div className="cta-funnel">
        <div className="cta-funnel__hero">
          <p className="cta-funnel__eyebrow">Limited Season Availability</p>
          <h1>The SEA is Calling. Are You Ready?</h1>
          <p className="cta-funnel__subtitle">
            Half-day and full-day charters with a USCG-licensed captain.
            All tackle, bait, and ice included — you just bring the excitement.
          </p>

          <ul className="cta-funnel__benefits">
            <li>Up to 6 guests per trip — perfect for families and groups</li>
            <li>Inshore &amp; offshore options tailored to conditions</li>
            <li>Secure online booking with instant confirmation</li>
          </ul>

          <Link to="/book" className="btn btn-primary btn-lg cta-funnel__cta">
            Book Your Trip
          </Link>

          <div className="cta-funnel__proof">
            <div className="cta-funnel__stars" aria-label={`${featured.rating} out of 5 stars`}>
              {'★'.repeat(featured.rating)}
            </div>
            <blockquote>&ldquo;{featured.text}&rdquo;</blockquote>
            <cite>— {featured.name}</cite>
          </div>

          <div className="cta-funnel__links">
            <Link to="/about">About the Captain</Link>
            <span aria-hidden="true">·</span>
            <Link to="/reviews">Read Reviews</Link>
          </div>
        </div>
      </div>
    </>
  )
}
