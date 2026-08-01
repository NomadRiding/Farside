import PageMeta from "../components/PageMeta"
import VideoHeroShell from "../components/VideoHeroShell"
import ReviewsSection from "../components/ReviewsSection"
import ImageCarousel from "../components/ImageCarousel"
import NewsletterSignup from "../components/NewsletterSignup"

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="FarSide Charters | South Florida Fishing Charters"
        description="Book half-day and full-day fishing charters on the South Florida. All gear included. Reserve your trip with FarSide Charters today."
      />
      <VideoHeroShell />
      <ReviewsSection limit={3} />
      <ImageCarousel />
      <NewsletterSignup />
    </>
  )
}
