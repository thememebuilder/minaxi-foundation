import Section from '../components/Section'

export default function PartnersPage() {
  return (
    <Section title="Partners & Supporters" wide>
      <div className="partners" aria-label="Partner logos">
        <div className="partner" aria-label="Partner A">Partner A</div>
        <div className="partner" aria-label="Partner B">Partner B</div>
        <div className="partner" aria-label="Partner C">Partner C</div>
        <div className="partner" aria-label="Partner D">Partner D</div>
      </div>
    </Section>
  )
}
