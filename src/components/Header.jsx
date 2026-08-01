import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { navLinksLeft, navLinksRight, allNavLinks } from '../data/navigation'
import '../styles/Header.css'
import logo from '../assets/farside_logo.png'

export default function Header({ overlay = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`site-header${overlay ? ' site-header--overlay' : ''}`}>
      <div className="site-header__inner">
        <nav className="site-header__desktop" aria-label="Main navigation">
          <ul className="site-header__desktop-links">
            {navLinksLeft.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className="site-header__link">
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="site-header__logo-item">
              <Link to="/" className="site-header__logo" aria-label="FarSide Charters home">
                <img src={logo} alt="FarSide Charters" />
              </Link>
            </li>
            {navLinksRight.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className="site-header__link">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="/"
          className="site-header__logo site-header__logo--mobile"
          aria-label="FarSide Charters home"
        >
          <img src={logo} alt="FarSide Charters" />
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
        className={`site-header__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="site-header__mobile-links">
          {allNavLinks.map(({ to, label, end }) => (
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
        </ul>
      </nav>
    </header>
  )
}
