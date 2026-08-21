import { WhatsAppIcon } from "./Icons";
import { WHATSAPP_LINK } from "../whatsapp";
import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with Team SHERX on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
