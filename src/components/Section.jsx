export default function Section({ id, title, children, alt = false }) {
  return (
    <section id={id} className={`section${alt ? ' alt' : ''}`}>
      <div className="container">
        {title && <h2>{title}</h2>}
        <div>{children}</div>
      </div>
    </section>
  )
}

