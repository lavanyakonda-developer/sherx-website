import logo from "../assets/logo.png";
import { DumbbellIcon } from "./Icons";
import { WHATSAPP_LINK } from "../whatsapp";
import QuickStrip from "./QuickStrip";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">— Your Complete</p>
          <h1 className="hero__title">
            Fitness
            <br />
            <span className="hero__title-accent">Program</span>
          </h1>
          <p className="hero__subtitle">— Right At Your Society —</p>

          <QuickStrip />

          <p className="hero__desc">
            A complete, personalized and sustainable fitness experience right
            where you live. Team SHERX brings certified trainers straight to
            your gated community gym.
          </p>

          <div className="hero__actions">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Contact Us on WhatsApp
            </a>
            <a href="#programs" className="btn btn--outline">
              View Programs
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__blob" aria-hidden="true" />
          <div className="hero__card">
            <img src={logo} alt="Team SHERX logo" className="hero__card-logo" />
            <p className="hero__card-tagline">
              Stronger Today.
              <br />
              Better Every Day.
            </p>
          </div>
          <div className="hero__floating-icon" aria-hidden="true">
            <DumbbellIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
