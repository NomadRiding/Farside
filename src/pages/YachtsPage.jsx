import PageMeta from '../components/PageMeta'
import '../styles/Pages.css'

const yachts = [
  {
    name: 'FarSide',
    type: '34\' Center Console',
    capacity: '6 guests',
    description:
      'Our flagship charter vessel — built for offshore performance and all-day comfort. Full shade, restroom, fish-finding electronics, and premium tackle come standard.',
    features: ['Offshore & reef capable', 'Premium rods & reels', 'Ice & bottled water included'],
  },
  {
    name: 'FarSide II',
    type: '42\' Sportfish',
    capacity: '8 guests',
    description:
      'Expanded deck space and overnight-ready amenities for longer runs and larger groups. Ideal for full-day offshore missions and swordfish trips.',
    features: ['Extended range', 'Enhanced seating & shade', 'Ideal for swordfish & pelagics'],
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
          <h1>Our Fleet</h1>
          <p>
            Well-maintained vessels outfitted for safety, comfort, and serious fishing
            across South Florida waters.
          </p>
        </header>

        <div className="page__content yacht-grid">
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
        </div>
      </div>
    </>
  )
}
