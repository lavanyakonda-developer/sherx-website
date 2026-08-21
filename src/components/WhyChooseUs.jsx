import { ClockIcon, StarIcon, PersonIcon, ShieldIcon, TrendUpIcon } from "./Icons";
import "./WhyChooseUs.css";

const ITEMS = [
  { icon: ClockIcon, title: "Convenient", desc: "Save time, train in your own society." },
  { icon: StarIcon, title: "Flexible", desc: "Flexible timings that fit your schedule." },
  { icon: PersonIcon, title: "For Everyone", desc: "All age groups, all fitness levels, one program." },
  {
    icon: ShieldIcon,
    title: "Safe & Professional",
    desc: "Structured, proven and results-focused approach.",
  },
  {
    icon: TrendUpIcon,
    title: "Sustainable Results",
    desc: "Build habits that create long-term transformation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container why-us__inner">
        {ITEMS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="why-us__item">
            <Icon className="why-us__icon" />
            <h3 className="why-us__title">{title}</h3>
            <p className="why-us__desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
