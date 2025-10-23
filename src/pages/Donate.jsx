import Section from '../components/Section'
import { createNavHandler, toHref } from '../router'

export default function DonatePage() {
  return (
    <Section id="donate" title="Donate" alt wide>
      <p>
        Your contribution directly funds verified field projects. Until payment
        is integrated, use the contact details below to pledge support.
      </p>
      <p>
        <a className="btn" href={toHref('/contact')} onClick={createNavHandler('/contact')}>
          Pledge Support
        </a>
      </p>
    </Section>
  )
}
