import PageMeta from "../components/PageMeta"
import BookNowLink from "../components/BookNowLink"
import { charterPackageGroups } from "../data/charterPackages"
import "../styles/Pages.css"

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
            We have dedicated to making your South Florida fishing experience
            like no other, We have developed a well trained team who works
            together to bring you an offshore tournament experience for all
            levels of anglers.
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
                    <p className="charter-card__price">
                      ${pkg.price.toLocaleString()}
                    </p>
                    <BookNowLink href={pkg.bookingUrl} />
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
