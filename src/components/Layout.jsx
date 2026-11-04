import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import PixelCat from './PixelCat.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="bar">
        <div className="wrap">
          <div className="brand">
            <Link className="logo" to="/">azra.exe</Link>
            <p>PERSONAL PORTFOLIO // GAME DEVELOPER</p>
          </div>
          <nav>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>
      </header>

      <main><Outlet /></main>

      <footer id="contact">
        <div className="wrap">
          <h2>Save point</h2>

          <div className="dialog">
            <PixelCat variant="calico" size={128} />

            <div className="save-info">
              <span>Azra Pamuk</span>
              <span>LV 23</span>
              <span>Game Developer in Progress</span>
            </div>

            <p>* A curious mind. A growing collection of ideas. There's still so much left to discover.</p>

            <div className="choices">
              <a className="choice" href="mailto:azrapamuk.sa@gmail.com">
                Say Hello
              </a>

              <button
                className="choice"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              >
                Return
              </button>
            </div>
          </div>

          <p className="ribbon">
            * Your journey doesn't end here. Feel free to reach out!
          </p>

          <p className="more-links">
            <a href="https://github.com/azrapamuk">GitHub</a>
            <a href="https://www.linkedin.com/in/azra-pamuk-373b16340">LinkedIn</a>
            <a href="https://azrapamuk.itch.io">itch.io</a>
          </p>

          <small>&copy; 2026 Azra Pamuk. Made with determination.</small>
        </div>
      </footer>
    </>
  )
}
