import { Outlet, Link, useLocation } from "react-router-dom"
import Header from "../components/Header"
import "../styles/Layout.css"

export default function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  return (
    <div className="site-layout">
      {!isHome && <Header />}
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
            <Link to="/">Home</Link>
            <Link to="/charters">Charters</Link>
            <Link to="/about">About</Link>
            <Link to="/captain-services">Captain Services</Link>
            <Link to="/yachts">Yachts</Link>
            <Link to="/contacts">Contacts</Link>
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
