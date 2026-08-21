const WHATSAPP_NUMBER = "919866917160";
const DEFAULT_MESSAGE = "Hi Team SHERX, I'm interested in your fitness programs!";

export function getWhatsAppLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK = getWhatsAppLink();
export const PHONE_DISPLAY = "+91 98669 17160";
export const EMAIL = "teamsherx@gmail.com";
export const INSTAGRAM_LINK = "https://www.instagram.com/teamsherx";
