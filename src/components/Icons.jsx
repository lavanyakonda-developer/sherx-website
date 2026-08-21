const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function DumbbellIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="1.5" y="9" width="3" height="6" rx="0.8" />
      <rect x="19.5" y="9" width="3" height="6" rx="0.8" />
      <rect x="4.5" y="7.5" width="2.5" height="9" rx="0.8" />
      <rect x="17" y="7.5" width="2.5" height="9" rx="0.8" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </svg>
  );
}

export function LeafIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4c-9 0-16 5-16 14 9 0 16-5 16-14Z" />
      <path d="M5 19c3-4 7-7 13-9" />
    </svg>
  );
}

export function ClipboardIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 3.5h6a1 1 0 0 1 1 1v1H8v-1a1 1 0 0 1 1-1Z" />
      <path d="M8.5 12.5l2 2 4.5-4.5" />
    </svg>
  );
}

export function TrendUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17l6-6 4 4 7-8" />
      <path d="M14 6h6v6" />
    </svg>
  );
}

export function PersonIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="7" r="3.4" />
      <path d="M4.5 20c0-4.2 3.4-6.5 7.5-6.5s7.5 2.3 7.5 6.5" />
    </svg>
  );
}

export function RunningIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="15" cy="4.5" r="1.6" />
      <path d="M6 20l3.5-4 2-3-1.5-4 4-1 2 3.5 4 1.5" />
      <path d="M9.5 13l-4 1.5" />
      <path d="M11.5 16.5L9 21" />
    </svg>
  );
}

export function LotusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c-4-1-7-4-7-8 3 0 5.5 1.6 7 4 1.5-2.4 4-4 7-4 0 4-3 7-7 8Z" />
      <path d="M12 17c0-4 1.5-7 4-9-1 4-1.5 7-4 9Z" />
      <path d="M12 17c0-4-1.5-7-4-9 1 4 1.5 7 4 9Z" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-8-4.8-8-11a4.8 4.8 0 0 1 8-3.5A4.8 4.8 0 0 1 20 9c0 6.2-8 11-8 11Z" />
    </svg>
  );
}

export function GroupIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="8" r="2.8" />
      <circle cx="16" cy="9" r="2.3" />
      <path d="M3.5 19c0-3.3 2.4-5 5-5s5 1.7 5 5" />
      <path d="M13.5 15.2c2.1.2 3.9 1.7 3.9 3.8" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l2.4 5.1 5.6.7-4.1 3.9 1.1 5.6L12 16l-5 2.8 1.1-5.6-4.1-3.9 5.6-.7Z" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l7 2.6v5.4c0 5-3 8.2-7 9.9-4-1.7-7-4.9-7-9.9V6.1Z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function StepsIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4.5h3a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 11 9.5H8" />
      <path d="M13 12.5h3a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-3" />
      <circle cx="6" cy="7.5" r="1" />
      <circle cx="11" cy="15.5" r="1" />
    </svg>
  );
}

export function SeniorIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="6" r="2.6" />
      <path d="M6 20l1.5-6.5L5 12l2.5-3.5c1-1 2.5-1.3 4-.9 1.5.4 2.5-.1 3.5-1" />
      <path d="M8.5 13.5l3 1 1.5 5.5" />
      <path d="M11.5 14.5l3.5-1 2 3" />
    </svg>
  );
}

export function MedalIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="14.5" r="5.5" />
      <path d="M10.7 10.2L8 3.5h2.4L12 8l1.6-4.5H16l-2.7 6.7" />
      <path d="M10.3 15.7l1.7 1.6 1.7-1.6" />
    </svg>
  );
}

export function BowlIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16a8 6 0 0 1-16 0Z" />
      <path d="M12 12V6.5" />
      <path d="M9 8c0-1.8 1.3-3.2 3-3.2S15 6.2 15 8" />
    </svg>
  );
}

export function LightningIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 3L6 13h5l-1 8 7-10h-5l1-8Z" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5A9.5 9.5 0 0 0 4 17.4L2.6 21.5l4.2-1.3A9.5 9.5 0 1 0 12 2.5Zm5.5 13.3c-.2.6-1.4 1.2-1.9 1.3-.5.1-1.1.2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3h.6c.2 0 .5-.1.7.5.3.7 1 2.1 1 2.3.1.2.1.4 0 .6-.2.4-.4.6-.7 1-.3.3-.6.6-.3 1.1.4.7 1.1 1.5 1.9 2.1.9.7 1.6 1 2 1.1.3.1.6.1.8-.1.3-.3.6-.9.9-1.3.2-.3.5-.3.8-.2.3.1 2 .9 2.3 1.1.3.2.5.3.6.4.1.2.1.7-.1 1.2Z" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.2l1.3 3.8-2 1.5a11.5 11.5 0 0 0 5.2 5.2l1.5-2 3.8 1.3V17a2 2 0 0 1-2 2c-6.1 0-13-6.9-13-13a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HandshakeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 11l3.5-3 3 1.2 2-1.7 2.3 1.7" />
      <path d="M21.5 11l-3.5-3-3 1.2" />
      <path d="M6 8l4.3 3.8a1.4 1.4 0 0 0 2-2l-1.8-1.6" />
      <path d="M13.5 9.7l1.6 1.5a1.3 1.3 0 0 1-1.8 1.9" />
      <path d="M11.3 11.4l1.6 1.5a1.3 1.3 0 0 1-1.8 1.9l-.7-.6" />
      <path d="M2.5 11l3 5 2 .8" />
      <path d="M21.5 11l-3 5-2.3.9" />
    </svg>
  );
}
