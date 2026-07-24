import { Outlet, Link } from "react-router-dom"
import Header from "../components/Header"
import "../styles/Layout.css"

export default function MainLayout() {
  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p className="site-footer__brand">FarSide Charters</p>
          <p className="site-footer__tagline">
            South Florida fishing adventures since 2019
          </p>
          <nav className="site-footer__nav" aria-label="Footer navigation">
            <Link to="/about">About</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/book">Book Now</Link>
            <Link to="/get-started">Charter Info</Link>
          </nav>
          <p className="site-footer__copy">
            &copy; {new Date().getFullYear()} FarSide Charters. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
