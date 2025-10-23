export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide glass-panel footer-panel">
        &copy; {new Date().getFullYear()} Minaxi Foundation &middot; Registered NGO
        <br />
        <a href="mailto:jugalvaidya@gmail.com">hello@minaxi.org</a>
      </div>
    </footer>
  )
}
