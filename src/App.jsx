import { useEffect } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import MissionPage from './pages/Mission'
import ProgramsPage from './pages/Programs'
import PartnersPage from './pages/Partners'
import DonatePage from './pages/Donate'
import ContactPage from './pages/Contact'
import { usePathname } from './router'
import './styles.css'

const ROUTES = {
  '/': HomePage,
  '/mission': MissionPage,
  '/programs': ProgramsPage,
  '/partners': PartnersPage,
  '/donate': DonatePage,
  '/contact': ContactPage,
}

export default function App() {
  const path = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [path])

  const ActivePage = ROUTES[path] || NotFoundPage

  return (
    <div className="app-shell">
      <NavBar currentPath={path} />
      <main className="page">
        <ActivePage />
      </main>
      <Footer />
    </div>
  )
}

function NotFoundPage() {
  return (
    <section className="section">
      <div className="container-wide glass-panel">
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist. Please use the navigation to continue.</p>
      </div>
    </section>
  )
}
