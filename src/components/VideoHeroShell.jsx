import Header from './Header'
import Hero from './Hero'
import '../styles/VideoHeroShell.css'

const HERO_VIDEO_SRC =
  'https://videos.pexels.com/video-files/4763822/4763822-uhd_2560_1440_25fps.mp4'

export default function VideoHeroShell() {
  return (
    <section className="video-hero-shell" aria-label="Welcome">
      <video
        className="video-hero-shell__video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="video-hero-shell__scrim" aria-hidden="true" />
      <div className="video-hero-shell__content">
        <Header overlay />
        <Hero />
      </div>
    </section>
  )
}
