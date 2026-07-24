import '../styles/Reviews.css'

function StarRating({ rating }) {
  return (
    <div className="review-card__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'star filled' : 'star'} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

export default function ReviewCard({ name, rating, text, date }) {
  return (
    <article className="review-card">
      <StarRating rating={rating} />
      <blockquote className="review-card__text">&ldquo;{text}&rdquo;</blockquote>
      <footer className="review-card__footer">
        <cite className="review-card__name">{name}</cite>
        {date && <span className="review-card__date">{date}</span>}
      </footer>
    </article>
  )
}
