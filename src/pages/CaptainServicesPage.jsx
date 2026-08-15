import { Link } from "react-router-dom"
import PageMeta from "../components/PageMeta"
import "../styles/Pages.css"

export default function CaptainServicesPage() {
  return (
    <>
      <PageMeta
        title="Captain Services | FarSide Charters"
        description="Private charters, group outings, special occasions, and captain-for-hire services with FarSide Charters."
      />
      <div className="page">
        <header className="page__header">
          <h1>Captain Services</h1>
          <p>
            <strong>Captain for Hire:</strong> We can offer you a captain to go
            on your boat and take you fishing locally in South Florida or to
            take you and your boat to the Bahamas or up the coast.
          </p>
          <p>
            <strong>Tournament Program:</strong> We can help you and your crew
            build a tournament program. We help outfit the boat and make sure
            your gear is up to the standard. We also create a bait operation and
            train up the crew to the tournament fishing standard.
          </p>
          <p>
            <strong>Boat Delivery:</strong> We can help you set up your boat to
            and from anywhere. If you want to take your boat somewhere but don't
            have the time or if you purchased a boat and want it brought home.
            We can provide a safe travel home for your investment.
          </p>
          <p>
            <strong>Management Program:</strong> We can help keep your boat and
            fishing program up to date with a managing schedule tailored to you.
            We provide services such as bi-weekly washes, engine flushes, detail
            and waxing. Making sure the boats fueled up. We make sure your
            fishing gear is clean serviced and in a ready state. We can provide
            help with haul-outs either on a trailer or at a boat yard.
          </p>
        </header>

        <div className="page__cta">
          <p>Ready to plan your trip?</p>
          <Link to="/contacts" className="btn btn-primary btn-book-now btn-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}
