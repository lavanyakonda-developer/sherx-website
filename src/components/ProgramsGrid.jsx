import {
  LightningIcon,
  PersonIcon,
  TrendUpIcon,
  HeartIcon,
  HandshakeIcon,
  MedalIcon,
  StepsIcon,
  SeniorIcon,
  LotusIcon,
  BowlIcon,
  ClipboardIcon,
} from "./Icons";
import "./ProgramsGrid.css";

const PROGRAMS = [
  { icon: LightningIcon, title: "Functional Fitness" },
  { icon: PersonIcon, title: "Body Sculpting" },
  { icon: TrendUpIcon, title: "Body Transformation" },
  { icon: HeartIcon, title: "Endurance & Conditioning" },
  { icon: HandshakeIcon, title: "1-on-1 Coaching" },
  { icon: MedalIcon, title: "Performance Classes" },
  { icon: StepsIcon, title: "Fitness Foundation" },
  { icon: SeniorIcon, title: "Active Ageing" },
  { icon: LotusIcon, title: "Movement & Mobility" },
  { icon: BowlIcon, title: "Nutrition Coaching" },
  { icon: ClipboardIcon, title: "Fitness Progress Monitoring" },
];

export default function ProgramsGrid() {
  return (
    <section className="section section--alt" id="programs">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Our Programs</p>
          <h2 className="section-title">Programs We Offer</h2>
          <p className="section-subtitle">
            One program, every goal — pick what fits you, or let a coach build a plan around it.
          </p>
        </div>

        <ul className="programs-grid">
          {PROGRAMS.map(({ icon: Icon, title }) => (
            <li key={title} className="programs-grid__tile">
              <Icon className="programs-grid__icon" />
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
