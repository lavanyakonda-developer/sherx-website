import { DumbbellIcon, LeafIcon, ClipboardIcon, TrendUpIcon } from "./Icons";
import "./QuickStrip.css";

const ITEMS = [
  { icon: DumbbellIcon, label: "Training" },
  { icon: LeafIcon, label: "Nutrition" },
  { icon: ClipboardIcon, label: "Assessment" },
  { icon: TrendUpIcon, label: "Progress" },
];

export default function QuickStrip() {
  return (
    <ul className="quick-strip">
      {ITEMS.map(({ icon: Icon, label }) => (
        <li key={label} className="quick-strip__item">
          <Icon className="quick-strip__icon" />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
