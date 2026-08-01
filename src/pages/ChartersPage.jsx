import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { charterPackageGroups } from '../data/charterPackages'
import '../styles/Pages.css'

export default function ChartersPage() {
  return (
    <>
      <PageMeta
        title="Charters | FarSide Charters"
        description="Browse half-day, full-day, reef, and swordfishing charters with FarSide Charters in South Florida."
      />
      <div className="page">
        <header className="page__header">
          <h1>Our Charters</h1>
          <p>
            From reef fishing to offshore adventures and swordfish specials — every
            trip includes premium gear, bait, and an experienced crew.
          </p>
        </header>

        <div className="page__content">
          {charterPackageGroups.map((group) => (
            <section key={group.label} className="charter-group">
              <h2 className="charter-group__title">{group.label}</h2>
              <div className="charter-grid">
                {group.packages.map((pkg) => (
                  <article key={pkg.id} className="charter-card">
                    <h3>{pkg.name}</h3>
                    <p className="charter-card__meta">
                      {pkg.duration} · Up to {pkg.maxParty} guests
                    </p>
                    <p>{pkg.description}</p>
                    <p className="charter-card__price">${pkg.price.toLocaleString()}</p>
                    <Link to="/book" className="btn btn-primary">
                      Book Now
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
