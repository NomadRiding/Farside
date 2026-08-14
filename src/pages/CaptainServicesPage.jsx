import { Link } from "react-router-dom"
import PageMeta from "../components/PageMeta"
import "../styles/Pages.css"

const services = [
  {
    title: "Private Fishing Charters",
    description:
      "Fully crewed trips tailored to your group — inshore, offshore, reef, or swordfish. Captain Alex handles navigation, rigging, and fish handling so you can focus on the action.",
  },
  {
    title: "Corporate & Group Outings",
    description:
      "Team-building days on the water with flexible itineraries, catering coordination, and multi-boat options for larger groups.",
  },
  {
    title: "Special Occasion Trips",
    description:
      "Birthdays, bachelor parties, and family reunions. We customize the pace, target species, and onboard experience for your celebration.",
  },
  {
    title: "Captain-for-Hire Consultations",
    description:
      "Planning your own vessel trip? Book Captain Alex for route planning, species targeting advice, and on-water coaching.",
  },
]

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

        {/* <div className="page__content about-grid">
          {services.map((service) => (
            <section key={service.title} className="about-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </section>
          ))}
        </div> */}

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
