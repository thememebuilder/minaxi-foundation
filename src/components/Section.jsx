export default function Section({ id, title, children, alt = false, wide = false }) {
  return (
    <section id={id} className={`section${alt ? ' alt' : ''}`}>
      <div className={`${wide ? 'container-wide' : 'container'} glass-panel`}>
        {title && <h2>{title}</h2>}
        <div>{children}</div>
      </div>
    </section>
  )
}
