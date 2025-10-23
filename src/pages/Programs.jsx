import Section from '../components/Section'

export default function ProgramsPage() {
  return (
    <Section id="programs" title="Programs" alt wide>
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
  )
}
