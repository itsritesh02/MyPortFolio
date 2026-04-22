import "./Footer.css";

const socials = [
  { label: "GitHub", href: "https://github.com", symbol: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com", symbol: "LI" },
  { label: "Twitter", href: "https://twitter.com", symbol: "TW" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-credit">
          Designed & Built by <span className="accent">Ritesh Kumar</span>
        </p>
        <div className="footer-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="footer-social-link" target="_blank" rel="noreferrer" aria-label={s.label}>
              {s.symbol}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom-line">
        <span className="footer-copy">© {new Date().getFullYear()} — All rights reserved.</span>
      </div>
    </footer>
  );
}