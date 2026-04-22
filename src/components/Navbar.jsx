import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">

        {/* Logo */}
        <a href="#" className="navbar-logo">
          <span className="navbar-logo-symbol">&lt;</span>
          Ritesh Kumar
          <span className="navbar-logo-symbol">/&gt;</span>
        </a>

        {/* Nav Links */}
        <ul className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="navbar-link-num"></span>
                {link.label}
              </a>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href="/resume.pdf"
              className="btn btn-outline navbar-resume-btn"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button
          className={`navbar-hamburger ${menuOpen ? "navbar-hamburger-active" : ""
            }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}