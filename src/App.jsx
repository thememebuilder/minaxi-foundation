import Section from './components/Section'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import './styles.css'

export default function App() {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <header className="hero">
        <div className="container-wide">
          <h1>Empowering Communities with Compassion & Action</h1>
          <p>
            Minaxi Foundation supports education, health, and livelihood initiatives
            in underserved communities. Transparent. Local-first. Impact-driven.
          </p>
          <a className="btn-primary" href="#donate">Donate Now</a>
        </div>
      </header>

      {/* TRUST / CREDIBILITY */}
      <Section alt>
        <div className="trustbar">
          <div className="badges" aria-label="Credibility badges">
            {/* Replace with your real statuses when ready */}
            <span className="badge" title="Registered NGO">Registered NGO</span>
            <span className="badge" title="Tax Exemption">80G Eligible</span>
            <span className="badge" title="Compliance">12A Compliant</span>
            <span className="badge" title="Transparency">Annual Report</span>
          </div>
        </div>
      </Section>

      {/* MISSION with bullet points */}
      <Section id="mission" title="Our Mission">
        <ul className="list">
          <li>Educate children in rural and underserved areas.</li>
          <li>Support women-led livelihoods with skills and micro-grants.</li>
          <li>Improve local healthcare access through preventive programs.</li>
        </ul>
      </Section>

      {/* PROGRAMS (unchanged) */}
      <Section id="programs" title="Programs" alt>
        <div className="cards">
          <div className="card">
            <h3>Education</h3>
            <p>Scholarships, school supplies, and mentoring to keep children learning.</p>
          </div>
          <div className="card">
            <h3>Health</h3>
            <p>Preventive health camps, nutrition support, and awareness drives.</p>
          </div>
          <div className="card">
            <h3>Livelihood</h3>
            <p>Skill training and micro-grants for small, sustainable businesses.</p>
          </div>
        </div>
      </Section>

      {/* PARTNERS (logos) */}
      <Section alt={false} title="Partners & Supporters">
        <div className="partners" aria-label="Partner logos">
          {/* Replace these placeholders with real partner logos when available */}
          <div className="partner"><img src="public/partners/partner-a.svg" alt="Partner A" /></div>
          <div className="partner"><img src="public/partners/partner-b.svg" alt="Partner B" /></div>
          <div className="partner"><img src="public/partners/partner-c.svg" alt="Partner C" /></div>
          <div className="partner"><img src="public/partners/partner-d.svg" alt="Partner D" /></div>
        </div>
      </Section>

      {/* DONATE */}
      <Section id="donate" title="Donate" alt>
        <p>
          Your contribution directly funds verified field projects. Until payment
          is integrated, use the contact details below to pledge support.
        </p>
        <p>
          <a className="btn" href="#contact">Pledge Support</a>
        </p>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <p style={{ marginBottom: 16 }}>
          Prefer email? <a href="mailto:jugalvaidya@gmail.com">hello@minaxi.org</a>
        </p>
        <ContactForm />
      </Section>
      <Footer />
    </>
  )
}
