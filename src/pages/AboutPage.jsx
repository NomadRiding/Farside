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
          <h1>About FarSide Outfitters</h1>
          <p>
            Family-owned. Coast Guard licensed. Passionate about putting you on
            fish.
          </p>
        </header>

        <div className="page__content about-grid">
          <section className="about-card">
            <h2>Our Story</h2>
            <p>
              Established in 2019, FarSide Outfitters was created to share the
              South Florida lifestyle. Delivering a premier offshore experience
              rooted in tradition, hospitality, and attention to detail. Located
              in the heart of Miami we have created a first class operation to
              make sure your offshore experience will keep you coming back. From
              client to family.
            </p>
          </section>

          {/* <section className="about-card">
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
          </section> */}

          <section className="about-card">
            <h2>The Fleet</h2>
            <p>
              Our flagship vessel is our 34 Ft Seavee powered by twin Yamaha
              300s. Equipped with the latest electronics and technology. All
              charters include our tournament grade gear, ice and top quality
              bait.
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
              <strong>What to bring:</strong> Sunscreen, sunglasses, hat, towel,
              any medication you may need, food and drinks are not included.
            </li>
            <li>
              <strong>License:</strong> All licenses are provided under our
              charter license. It is encouraged to purchase your own Florida
              State License as it helps conservation efforts.
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
