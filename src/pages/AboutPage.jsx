import PageMeta from "../components/PageMeta"
import "../styles/Pages.css"

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us | FarSide Charters"
        description="Meet Captain Jake and learn about FarSide Charters — your trusted Gulf Coast fishing charter since 2010."
      />
      <div className="page">
        <header className="page__header">
          <h1>About FarSide Charters</h1>
          <p>
            Family-owned. Coast Guard licensed. Passionate about putting you on
            fish.
          </p>
        </header>

        <div className="page__content about-grid">
          <section className="about-card">
            <h2>Our Story</h2>
            <p>
              FarSide Charters was founded in 2019 with one goal in minnd:
              creating unforgettable days on the water. Captain Alex and his
              team are dedicated to providing a safe, fun, and memorable fishing
              experience for anglers of all skill levels. From top quality gear
              to expert guidance, we ensure every trip is tailored to your needs
              and preferences. Booking a trip with FarSide Charters means more
              than just fishing.
            </p>
          </section>

          <section className="about-card">
            <h2>Meet the Owner</h2>
            <p>
              Captain Alex holds a USCG 100-ton Master License and is CPR/First
              Aid certified. He knows these waters inside and out — from inshore
              redfish flats to offshore grouper reefs. A lifelong passion for
              fishing, starting from summers spent on the water with his father
              to launching his career in commercial fishing immediately after
              high school. Whether you are a seasoned angler or picking up a rod
              for the first time, Alex will make sure you have a safe, fun, and
              memorable day on the water.
            </p>
          </section>

          <section className="about-card">
            <h2>The Boat</h2>
            <p>
              The <strong>FarSide</strong> is a 34-foot center console built for
              comfort and performance. Accommodating up to 6 guests, this vessel
              provides plenty of space for fishing, or enjoying a relaxing day
              on the water. Every charter includes top quality fishing gear,
              safety equipment, tackle, and bait along with water and ice so you
              can focus on what matters most; catching fish and making memories.
              The FarSide is equipped with the latest navigation and
              fish-finding technology, ensuring a safe and productive trip every
              time.
            </p>
          </section>
        </div>

        <section className="page__content policies" id="policies">
          <h2>Policies</h2>
          <ul>
            <li>
              <strong>Cancellation:</strong> Full refund for cancellations 48+
              hours before your scheduled trip. Cancellations within 48 hours
              are non-refundable.
            </li>
            <li>
              <strong>Weather:</strong> If the captain cancels due to unsafe
              conditions, you receive a full refund or free rescheduling.
            </li>
            <li>
              <strong>What to bring:</strong> Sunscreen, polarized sunglasses,
              hat, and non-skid shoes. We provide everything else.
            </li>
            <li>
              <strong>License:</strong> A valid fishing license is required for
              all anglers age 16 and older. We can help you purchase one before
              your trip.
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
