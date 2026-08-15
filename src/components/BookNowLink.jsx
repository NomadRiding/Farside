import { Link } from 'react-router-dom'

export default function BookNowLink({
  children = 'Book Now',
  className = 'btn btn-primary btn-book-now',
}) {
  return (
    <Link
      to="/book"
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  )
}
