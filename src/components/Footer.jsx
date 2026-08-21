import logo from "../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__brand">
          <img src={logo} alt="Team SHERX logo" className="footer__logo" />
          <span>
            TEAM <strong>SHERX</strong>
          </span>
        </a>

        <p className="footer__tagline">TRAIN SMART &bull; STAY CONSISTENT &bull; GET RESULTS</p>

        <p className="footer__copy">&copy; {year} Team SHERX. All rights reserved.</p>
      </div>
    </footer>
  );
}
