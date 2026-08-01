import { useState, useEffect, useCallback } from 'react'
import {
  instagramPosts,
  instagramHandle,
  instagramProfileUrl,
  instagramAutoLoopMs,
} from '../data/instagramPosts'
import '../styles/Carousel.css'

function wrapIndex(index, total) {
  return ((index % total) + total) % total
}

function CarouselSlide({ post, position, direction, onSelect }) {
  const isCenter = position === 'center'
  const enterClass =
    direction >= 0
      ? 'instagram-carousel__slide--enter-next'
      : 'instagram-carousel__slide--enter-prev'

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`instagram-carousel__slide instagram-carousel__slide--${position} ${enterClass}`}
      aria-label={
        isCenter
          ? `View ${post.type === 'reel' ? 'reel' : 'photo'} on Instagram`
          : `Show ${post.alt}`
      }
      onClick={(e) => {
        if (!isCenter) {
          e.preventDefault()
          onSelect()
        }
      }}
    >
      <img src={post.src} alt={post.alt} loading="lazy" />
      {post.type === 'reel' && (
        <span className="instagram-carousel__reel-badge" aria-hidden="true">
          ▶
        </span>
      )}
    </a>
  )
}

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const total = instagramPosts.length

  const goTo = useCallback(
    (index, dir) => {
      setDirection(dir)
      setCurrent(wrapIndex(index, total))
    },
    [total],
  )

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo])

  const goToDot = useCallback(
    (index) => {
      if (index === current) return
      const forward = (index - current + total) % total
      const backward = (current - index + total) % total
      goTo(index, forward <= backward ? 1 : -1)
    },
    [current, goTo, total],
  )

  useEffect(() => {
    if (paused) return undefined

    const timer = window.setInterval(() => {
      setDirection(1)
      setCurrent((index) => wrapIndex(index + 1, total))
    }, instagramAutoLoopMs)

    return () => window.clearInterval(timer)
  }, [paused, total])

  const centerPost = instagramPosts[current]
  const leftPost = instagramPosts[wrapIndex(current - 1, total)]
  const rightPost = instagramPosts[wrapIndex(current + 1, total)]

  return (
    <section className="carousel-section" aria-labelledby="carousel-heading">
      <div className="carousel-section__header">
        <h2 id="carousel-heading">Life on the Water</h2>
        <p>
          Latest moments from{' '}
          <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
            @{instagramHandle}
          </a>
        </p>
      </div>

      <div
        className={`instagram-carousel instagram-carousel--dir-${direction >= 0 ? 'next' : 'prev'}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Instagram photo gallery"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <button
          type="button"
          className="carousel__btn carousel__btn--prev"
          onClick={prev}
          aria-label="Previous post"
        >
          ‹
        </button>

        <div className="instagram-carousel__stage">
          <CarouselSlide
            key={`left-${current}-${leftPost.id}`}
            post={leftPost}
            position="left"
            direction={direction}
            onSelect={prev}
          />
          <CarouselSlide
            key={`center-${current}-${centerPost.id}`}
            post={centerPost}
            position="center"
            direction={direction}
            onSelect={() => {}}
          />
          <CarouselSlide
            key={`right-${current}-${rightPost.id}`}
            post={rightPost}
            position="right"
            direction={direction}
            onSelect={next}
          />
        </div>

        <button
          type="button"
          className="carousel__btn carousel__btn--next"
          onClick={next}
          aria-label="Next post"
        >
          ›
        </button>
      </div>

      <div className="carousel__dots" role="tablist" aria-label="Instagram slides">
        {instagramPosts.map((post, index) => (
          <button
            key={post.id}
            type="button"
            role="tab"
            className={`carousel__dot ${index === current ? 'is-active' : ''}`}
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToDot(index)}
          />
        ))}
      </div>
    </section>
  )
}
