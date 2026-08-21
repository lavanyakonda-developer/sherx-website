import { WhatsAppIcon, PhoneIcon, MailIcon } from "./Icons";
import { WHATSAPP_LINK, PHONE_DISPLAY, EMAIL } from "../whatsapp";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__text">
          <p className="section-tag">Consistent Today</p>
          <h2 className="section-title">Stronger Tomorrow.</h2>
          <p className="section-subtitle contact__lead">
            We're here to guide you every step of the way. Reach out and let's build your program.
          </p>

          <ul className="contact__list">
            <li>
              <WhatsAppIcon className="contact__icon" />
              <div>
                <span className="contact__label">WhatsApp</span>
                <span>{PHONE_DISPLAY}</span>
              </div>
            </li>
            <li>
              <PhoneIcon className="contact__icon" />
              <div>
                <span className="contact__label">Call</span>
                <span>{PHONE_DISPLAY}</span>
              </div>
            </li>
            <li>
              <MailIcon className="contact__icon" />
              <div>
                <span className="contact__label">Mail</span>
                <span>{EMAIL}</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact__cta-card">
          <h3>Let's Connect!</h3>
          <p>Message us on WhatsApp for a free consult and we'll set up your first session.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary contact__cta-btn"
          >
            <WhatsAppIcon className="contact__cta-icon" />
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
