import Section from '../components/Section'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <Section id="contact" title="Contact" wide>
      <div className="contact-layout">
        <aside className="contact-card">
          <h3>We’d love to hear from you</h3>
          <p>
            Share your questions, partnership ideas, or volunteer interest. We usually respond
            within two working days.
          </p>
          <div className="contact-meta">
            <div>
              <span className="contact-label">Email</span>
              <a href="mailto:hello@minaxi.org">hello@minaxi.org</a>
            </div>
            <div>
              <span className="contact-label">Phone / WhatsApp</span>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <div>
              <span className="contact-label">Office Hours</span>
              <span>Mon – Sat · 9 AM to 6 PM IST</span>
            </div>
          </div>
        </aside>

        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
