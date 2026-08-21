import { useState } from "react";
import logo from "../assets/logo.png";
import { WHATSAPP_LINK } from "../whatsapp";
import "./Header.css";

const NAV_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Team SHERX logo" className="header__logo" />
          <span className="header__wordmark">
            TEAM <strong>SHERX</strong>
          </span>
        </a>

        <nav className={`header__nav ${open ? "header__nav--open" : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm header__cta"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </nav>

        <button
          type="button"
          className={`header__toggle ${open ? "header__toggle--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
