import Section from './components/Section'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './styles.css'

export default function App() {
  return (
    <>
      <NavBar />
      <header className="hero">
        <div className="container">
          <h1>Empowering Communities with Compassion & Action</h1>
          <p>
            Minaxi Foundation supports education, health, and livelihood
            initiatives in underserved communities. Transparent. Local-first.
            Impact-driven.
          </p>
          <a className="btn" href="#donate">Donate Now</a>
        </div>
      </header>

      <Section id="mission" title="Our Mission">
        <p>
          We partner with grassroots organizations to deliver practical, measurable
          programs that improve quality of life—especially for children and women.
        </p>
      </Section>

      <Section id="programs" title="Programs">
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

      <Section id="donate" title="Donate">
        <p>
          Your contribution directly funds verified field projects. Until payment
          is integrated, use the contact details below to pledge support.
        </p>
        <p>
          <a className="btn" href="#contact">Pledge Support</a>
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p>
          Email: <a href="mailto:hello@minaxi.org">hello@minaxi.org</a><br/>
          Address: Add your registered address here.<br/>
          Social: <a href="#" aria-disabled>Twitter</a> · <a href="#" aria-disabled>LinkedIn</a>
        </p>
      </Section>

      <Footer />
    </>
  )
}
