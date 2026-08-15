import { Link } from "react-router-dom"
import PageMeta from "../components/PageMeta"
import "../styles/Pages.css"

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
      </div>
    </>
  )
}
