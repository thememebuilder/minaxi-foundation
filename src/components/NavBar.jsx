import { createNavHandler, toHref } from '../router'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/mission', label: 'Mission' },
  { to: '/programs', label: 'Programs' },
  { to: '/partners', label: 'Partners' },
  { to: '/contact', label: 'Contact' },
]

export default function NavBar({ currentPath = '/' }) {
  return (
    <nav className="nav">
      <div className="brand">
        <a
          href={toHref('/')}
          onClick={createNavHandler('/')}
          className="brand-link"
          aria-label="Minaxi Foundation home"
        >
          <span className="brand-mark" aria-hidden="true">MF</span>
          <span className="brand-name">Minaxi Foundation</span>
        </a>
      </div>
      <div className="nav-links">
        {navLinks.map(({ to, label }) => {
          const isActive = currentPath === to
          return (
            <a
              key={to}
              href={toHref(to)}
              onClick={createNavHandler(to)}
              className={isActive ? 'nav-link active-link' : 'nav-link'}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </a>
          )
        })}
        <a
          href={toHref('/donate')}
          onClick={createNavHandler('/donate')}
          className="btn-cta"
          aria-current={currentPath === '/donate' ? 'page' : undefined}
        >
          Donate
        </a>
      </div>
    </nav>
  )
}
