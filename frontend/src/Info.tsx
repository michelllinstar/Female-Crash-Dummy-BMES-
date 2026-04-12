import React, { useState } from "react";
import "./Info.css";
import TextBox from './components/textBox.js';
import femalecd from './assets/femalecd.png';
import AIC from './components/aic.js';

export function Header({ text }: { text: string }) {
  return <header className="app-header">{text}</header>;
}

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  height?: string;
  variant?: "fade" | "flip";
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back, height = "160px", variant = "fade" }) => {
  const [flipped, setFlipped] = useState(false);

  const containerClass = variant === "fade"
    ? "top-textbox-container top-flip-container"
    : "top-textbox-container";

  return (
    <div
      className={containerClass}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Ghost: invisible copy of front, stays in flow to hold height */}
      <div className="flip-ghost" aria-hidden="true">
        {front}
      </div>

      <div className={`flip-card ${flipped ? "flipped" : ""}`}>
        <div className="flip-front">{front}</div>
        <div className="flip-back">{back}</div>
      </div>
    </div>
  );
};

const Info: React.FC = () => {
  return (
    <div className="info-page">
      <div className="info-vstack">

        {/* Top card: fades between front and back */}
        <FlipCard
          variant="fade"
          height="160px"
          front={
            <TextBox
              title="ABBREVIATED INJURY SCALE"
              text={`A globally recognized system used to describe and classify the severity of injuries.
It provides a standardized way to assess trauma, making it easier for clinicians, researchers,
and safety professionals to communicate injury severity, compare outcomes,
and support data-driven decisions in injury prevention and care.`}
            />
          }
         back={
          <div className="aic-shrink">
            <AIC />
          </div>
        }
        />

        {/* hstack: image + inner vstack of 3D flip cards */}
        <div className="info-hstack">
          <div className="info-image-container">
            <img src={femalecd} alt="Crash Dummy" className="info-image" />
          </div>

          <div className="info-inner-vstack">
            <FlipCard variant="flip" front={<TextBox title="Head Injury Criteria" />} back={<TextBox text="HIC measures the likelihood of head injury based on the acceleration of the head during a crash. A HIC value above 1000 indicates a serious risk of skull fracture or brain injury." />} />
            <FlipCard variant="flip" front={<TextBox title="Femur Load Risk" />} back={<TextBox text="Compressive forces transmitted through the femur during a frontal crash. Loads exceeding 10 kN are associated with a high risk of femur fracture and hip joint injury." />} />
            <FlipCard variant="flip" front={<TextBox title="Chest Injury" />} back={<TextBox text="Chest deflection and acceleration are used to assess rib fractures and internal organ damage. Deflection greater than 63mm indicates serious thoracic injury risk." />} />
            <FlipCard variant="flip" front={<TextBox title="Neck Injury Criteria" />} back={<TextBox text="Nij combines axial force and bending moment to assess cervical spine injury risk. Values above 1.0 indicate a significant probability of neck injury." />} />
            <FlipCard variant="flip" front={<TextBox title="Pelvis Load Risk" />} back={<TextBox text="Lateral forces on the pelvis during side impacts. Peak pubic symphysis forces exceeding 6 kN are associated with pelvic fracture risk." />} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Info;