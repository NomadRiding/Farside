import { useState, useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import "../styles/Header.css"
import logo from "../assets/farside_logo.png"

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/reviews", label: "Reviews" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo">
          <img src={logo} alt="Farside Logo" />
        </Link>

        <nav className="site-header__nav" aria-label="Main navigation">
          <ul className="site-header__links">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className="site-header__link">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/book" className="btn btn-primary site-header__cta">
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
        </button>
      </div>

      {menuOpen && (
        <div
          className="site-header__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <nav
        id="mobile-nav"
        ref={menuRef}
        className={`site-header__mobile ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="site-header__mobile-links">
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className="site-header__mobile-link"
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/book"
              className="btn btn-primary site-header__mobile-cta"
              onClick={closeMenu}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
