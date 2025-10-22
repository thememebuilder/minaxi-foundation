export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Minaxi Foundation · Registered NGO ·
        <br />
        <a href="mailto:hello@minaxi.org">hello@minaxi.org</a>
      </div>
    </footer>
  )
}
