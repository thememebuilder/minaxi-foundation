import Section from '../components/Section'
import { createNavHandler } from '../router'

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="container-wide glass-panel hero-panel">
          <h1>Empowering Communities with Compassion & Action</h1>
          <p>
            Minaxi Foundation supports education, health, and livelihood initiatives
            in underserved communities. Transparent. Local-first. Impact-driven.
          </p>
          <a className="btn-primary" href="/donate" onClick={createNavHandler('/donate')}>
            Donate Now
          </a>
        </div>
      </header>

      <Section alt wide>
        <div className="trustbar" aria-label="Credibility highlights">
          <p className="trustbar-intro">
            Recognised by the authorities and trusted by community partners.
          </p>
          <div className="trustbar-grid">
            <div className="trustcard" title="Registered NGO">
              <span className="trustcard-title">Registered NGO</span>
              <span className="trustcard-copy">Societies Act compliant</span>
            </div>
            <div className="trustcard" title="Income Tax Benefits">
              <span className="trustcard-title">80G Eligible</span>
              <span className="trustcard-copy">Donor tax exemption ready</span>
            </div>
            <div className="trustcard" title="Regulatory Compliance">
              <span className="trustcard-title">12A Verified</span>
              <span className="trustcard-copy">Audited & transparent</span>
            </div>
            <div className="trustcard" title="Annual Reporting">
              <span className="trustcard-title">Annual Report</span>
              <span className="trustcard-copy">Impact data published</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
