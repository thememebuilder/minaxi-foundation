export default function NavBar() {
  return (
    <nav className="nav">
      <div className="brand">
        <img src="public/logo.png" alt="" width="24" height="24" aria-hidden="true" />
        <span>Minaxi Foundation</span>
      </div>
      <div>
        <a href="#mission">Mission</a>
        <a href="#programs">Programs</a>
        <a href="#contact">Contact</a>
        <a href="#donate" className="btn-cta" style={{ marginLeft: 16 }}>Donate</a>
      </div>
    </nav>
  )
}
