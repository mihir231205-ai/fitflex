import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/workouts', label: 'Muscle Workout' },
  { to: '/bmi', label: 'BMI Calculator' },
  { to: '/diet', label: 'Diet Plan' },
  { to: '/nutrition', label: 'Nutrition Checker' },
  { to: '/goals', label: 'Fitness Goals' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">FF</span>
          <span className="logo-text">FitFlex</span>
        </NavLink>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive || (link.to === '/workouts' && location.pathname.startsWith('/workout')) ? 'is-active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
