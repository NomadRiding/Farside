import { useCallback, useRef, useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import useHeroVideoEnabled from '../hooks/useHeroVideoEnabled'
import '../styles/VideoHeroShell.css'

const HERO_POSTER_WEBP = '/images/hero-poster.webp'
const HERO_POSTER_PNG = '/images/hero-poster.png'
const HERO_VIDEO_WEBM = '/videos/farside-hero.webm'
const HERO_VIDEO_MP4 = '/videos/farside-hero.mp4'

export default function VideoHeroShell() {
  const videoEnabled = useHeroVideoEnabled()
  const [videoReady, setVideoReady] = useState(false)
  const readyReported = useRef(false)

  const handleVideoReady = useCallback(() => {
    if (readyReported.current) return
    readyReported.current = true
    setVideoReady(true)
  }, [])

  const showVideo = videoEnabled && videoReady

  return (
    <section className="video-hero-shell" aria-label="Welcome">
      <div className="video-hero-shell__media" aria-hidden="true">
        <picture
          className={`video-hero-shell__poster-wrap${showVideo ? ' is-hidden' : ''}`}
        >
          <source srcSet={HERO_POSTER_WEBP} type="image/webp" />
          <img
            className="video-hero-shell__poster"
            src={HERO_POSTER_PNG}
            alt=""
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        {videoEnabled && (
          <video
            className={`video-hero-shell__video${showVideo ? ' is-visible' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER_PNG}
            onCanPlay={handleVideoReady}
            onLoadedData={handleVideoReady}
          >
            <source src={HERO_VIDEO_WEBM} type="video/webm" />
            <source src={HERO_VIDEO_MP4} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="video-hero-shell__scrim" aria-hidden="true" />
      <div className="video-hero-shell__content">
        <Header overlay />
        <Hero />
      </div>
    </section>
  )
}
