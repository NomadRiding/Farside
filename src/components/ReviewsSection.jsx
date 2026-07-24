import { Link } from 'react-router-dom'
import { reviews } from '../data/reviews'
import ReviewCard from './ReviewCard'
import '../styles/Reviews.css'

export default function ReviewsSection({ limit, showHeading = true }) {
  const displayed = limit ? reviews.slice(0, limit) : reviews

  return (
    <section className="reviews-section" aria-labelledby="reviews-heading">
      {showHeading && (
        <div className="reviews-section__header">
          <h2 id="reviews-heading">What Our Guests Say</h2>
          <p>Real stories from anglers who have fished with FarSide Charters.</p>
        </div>
      )}
      <div className="reviews-section__grid">
        {displayed.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      {limit && (
        <div className="reviews-section__cta">
          <Link to="/reviews" className="btn btn-secondary">
            Read All Reviews
          </Link>
        </div>
      )}
    </section>
  )
}
