import { useCallback, useEffect, useRef, useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import useHeroVideoEnabled from '../hooks/useHeroVideoEnabled'
import '../styles/VideoHeroShell.css'

const HERO_POSTER_PNG = '/images/hero-poster.png'
const HERO_VIDEO_MP4 = '/videos/farside-hero.mp4'

export default function VideoHeroShell() {
  const videoEnabled = useHeroVideoEnabled()
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)
  const readyReported = useRef(false)

  const markVideoReady = useCallback(() => {
    if (readyReported.current) return
    readyReported.current = true
    setVideoReady(true)
  }, [])

  useEffect(() => {
    if (!videoEnabled) return undefined

    const video = videoRef.current
    if (!video) return undefined

    const startPlayback = async () => {
      video.muted = true

      try {
        await video.play()
        markVideoReady()
      } catch {
        // Autoplay blocked — keep the poster visible.
      }
    }

    const handleCanPlay = () => {
      startPlayback()
    }

    video.addEventListener('canplay', handleCanPlay)

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      startPlayback()
    } else {
      video.load()
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [videoEnabled, markVideoReady])

  const showVideo = videoEnabled && videoReady

  return (
    <section className="video-hero-shell" aria-label="Welcome">
      <div className="video-hero-shell__media" aria-hidden="true">
        <picture
          className={`video-hero-shell__poster-wrap${showVideo ? ' is-hidden' : ''}`}
        >
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
            ref={videoRef}
            className={`video-hero-shell__video${showVideo ? ' is-visible' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={HERO_POSTER_PNG}
          >
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
