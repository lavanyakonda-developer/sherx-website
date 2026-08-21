import {
  PersonIcon,
  RunningIcon,
  LotusIcon,
  HeartIcon,
  StepsIcon,
  BowlIcon,
  TrendUpIcon,
  GroupIcon,
} from "./Icons";
import "./WhatWeProvide.css";

const ITEMS = [
  {
    icon: PersonIcon,
    title: "Body Transformation",
    desc: "Personalized programs to help you look better, feel better and become the best version of yourself.",
  },
  {
    icon: RunningIcon,
    title: "Everyday Fitness",
    desc: "Improve your energy, stamina, strength and overall physical performance.",
  },
  {
    icon: LotusIcon,
    title: "Movement & Mobility",
    desc: "Enhance flexibility, movement quality and posture. Move better, feel better every day.",
  },
  {
    icon: HeartIcon,
    title: "Conditioning",
    desc: "Build endurance, improve work capacity and support a healthier cardiovascular system.",
  },
  {
    icon: StepsIcon,
    title: "Fitness Foundation",
    desc: "Perfect for beginners. Learn the right way to train and build consistency.",
  },
  {
    icon: BowlIcon,
    title: "Nutrition Coaching",
    desc: "Simple, practical and sustainable nutrition guidance that fits your lifestyle and goals.",
  },
  {
    icon: TrendUpIcon,
    title: "Progress Tracking",
    desc: "Regular assessments, measurements and program adjustments to keep you moving forward.",
  },
  {
    icon: GroupIcon,
    title: "Group & Semi-Private Coaching",
    desc: "Train with your friends or in small groups for motivation, accountability and better results.",
  },
];

export default function WhatWeProvide() {
  return (
    <section className="section" id="what-we-provide">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">What We Provide</p>
          <h2 className="section-title">A Complete Fitness Experience</h2>
          <p className="section-subtitle">
            Everything you need to train smart, stay consistent and get results — right at your
            society.
          </p>
        </div>

        <div className="provide-grid">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="provide-card">
              <div className="provide-card__icon">
                <Icon />
              </div>
              <h3 className="provide-card__title">{title}</h3>
              <p className="provide-card__desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
