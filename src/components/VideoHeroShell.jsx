import Header from './Header'
import Hero from './Hero'
import backgroundVideo from '../assets/FarsideBackground.mp4'
import heroPoster from '../assets/hero.png'
import '../styles/VideoHeroShell.css'

export default function VideoHeroShell() {
  return (
    <section className="video-hero-shell" aria-label="Welcome">
      <video
        className="video-hero-shell__video"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="video-hero-shell__scrim" aria-hidden="true" />
      <div className="video-hero-shell__content">
        <Header overlay />
        <Hero />
      </div>
    </section>
  )
}
