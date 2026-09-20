export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} <strong>Xentrepreneur</strong></span>
        <span className="footer-note">Made for builders, not dreamers.</span>
      </div>
    </footer>
  )
}
