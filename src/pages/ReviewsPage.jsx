import PageMeta from "../components/PageMeta"
import ReviewsSection from "../components/ReviewsSection"
import "../styles/Pages.css"

export default function ReviewsPage() {
  return (
    <>
      <PageMeta
        title="Reviews | FarSide Charters"
        description="Read reviews from guests who have fished with FarSide Charters in South Florida."
      />
      <div className="page">
        <header className="page__header">
          <h1>Guest Reviews</h1>
          <p>
            Honest feedback from anglers who have been on the water with us.
          </p>
        </header>
        <ReviewsSection showHeading={false} />
      </div>
    </>
  )
}
