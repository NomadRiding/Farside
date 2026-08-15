import { Link } from 'react-router-dom'

export default function BookNowLink({
  children = 'Book Now',
  className = 'btn btn-primary btn-book-now',
  href,
}) {
  if (href) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

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
