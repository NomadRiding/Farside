import { Link } from "react-router-dom"
import PageMeta from "../components/PageMeta"
import "../styles/Pages.css"

const yachts = [
  {
    name: "FarSide",
    type: "34' Center Console",
    capacity: "6 guests",
    description:
      "Our flagship charter vessel — built for offshore performance and all-day comfort. Full shade, restroom, fish-finding electronics, and premium tackle come standard.",
    features: [
      "Offshore & reef capable",
      "Premium rods & reels",
      "Ice & bottled water included",
    ],
  },
  {
    name: "FarSide II",
    type: "42' Sportfish",
    capacity: "8 guests",
    description:
      "Expanded deck space and overnight-ready amenities for longer runs and larger groups. Ideal for full-day offshore missions and swordfish trips.",
    features: [
      "Extended range",
      "Enhanced seating & shade",
      "Ideal for swordfish & pelagics",
    ],
  },
]

export default function YachtsPage() {
  return (
    <>
      <PageMeta
        title="Yachts | FarSide Charters"
        description="Explore the FarSide charter fleet — center console and sportfish vessels equipped for South Florida fishing."
      />
      <div className="page">
        <header className="page__header">
          <h1>Yacht Sales</h1>
          <p>
            If you are looking to sell or purchase your dream boat we are here
            to help. Our experienced broker team working under Rick Obey Yacht
            Sales, we can find you the right fitting boat. Whether you are a
            die-hard fishing team or looking for a fun with the whole family. We
            can find you the boat that fits your needs.
          </p>
          <div className="page__cta">
            <p>Ready to buy or sell?</p>
            <Link
              to="/contacts"
              className="btn btn-primary btn-book-now btn-lg"
            >
              Contact Us
            </Link>
          </div>
        </header>

        {/* <div className="page__content yacht-grid">
          {yachts.map((yacht) => (
            <article key={yacht.name} className="yacht-card">
              <div className="yacht-card__image" aria-hidden="true" />
              <div className="yacht-card__body">
                <h2>{yacht.name}</h2>
                <p className="yacht-card__meta">
                  {yacht.type} · {yacht.capacity}
                </p>
                <p>{yacht.description}</p>
                <ul className="yacht-card__features">
                  {yacht.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div> */}
      </div>
    </>
  )
}
