import { useState, useCallback, useEffect } from 'react'
import { carouselImages } from '../data/charterPackages'
import '../styles/Carousel.css'

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)
  const total = carouselImages.length

  const goTo = useCallback(
    (index) => {
      setCurrent(((index % total) + total) % total)
    },
    [total],
  )

  const prev = useCallback(() => goTo(current - 1), [current, goTo])
  const next = useCallback(() => goTo(current + 1), [current, goTo])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prev, next])

  return (
    <section className="carousel-section" aria-labelledby="carousel-heading">
      <div className="carousel-section__header">
        <h2 id="carousel-heading">Life on the Water</h2>
        <p>Moments from recent charters aboard the FarSide.</p>
      </div>

      <div
        className="carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Charter photo gallery"
      >
        <button
          type="button"
          className="carousel__btn carousel__btn--prev"
          onClick={prev}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className="carousel__viewport">
          <ul
            className="carousel__track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <li
                key={image.id}
                className="carousel__slide"
                aria-hidden={index !== current}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="carousel__btn carousel__btn--next"
          onClick={next}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className="carousel__dots" role="tablist" aria-label="Carousel slides">
        {carouselImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            role="tab"
            className={`carousel__dot ${index === current ? 'is-active' : ''}`}
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  )
}
