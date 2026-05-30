import React from "react";
import "./TeamPage.css";
import TextBox from "./components/textBox.js";
import teamPhoto from "./assets/kitty2.png";

const MechanicalTeam: React.FC = () => {
  return (
    <div className="team-page">
      <h1 className="team-title">Mechanical Team</h1>

      <div className="team-photo-wrapper">
        <img src={teamPhoto} alt="Mechanical Team" className="team-photo" />
      </div>

      <div className="process-section">
        <div className="process-intro">
          <TextBox
            title="Our Process"
            text="The mechanical team builds the physical body of the 50th percentile female crash dummy. We work from anthropometric data to CAD models, prototype with low-cost materials, and iterate until the dummy responds to impact like a real human body."
          />
        </div>

        <div className="process-steps">
          <TextBox
            title="1. Anthropometric Research"
            text="We start from published 50th percentile female body geometry — limb lengths, joint locations, mass distribution — and translate the data into target dimensions for every segment."
          />
          <TextBox
            title="2. CAD Modeling"
            text="Each body segment is modeled in SolidWorks with mounting points for electronics and joints. Assemblies are checked for clearance, alignment, and serviceability."
          />
          <TextBox
            title="3. Material Selection"
            text="We pick low-cost, accessible materials — PLA, silicone, foam, and steel hardware — that approximate human stiffness and damping while staying affordable to reproduce."
          />
          <TextBox
            title="4. Prototyping"
            text="Parts are 3D printed, laser cut, or machined. Soft tissue analogs are cast in silicone and assembled into limbs that match target weight and flexibility."
          />
          <TextBox
            title="5. Joint & Skeleton Assembly"
            text="A central skeleton ties the segments together with articulated joints calibrated for realistic range of motion and resistance under load."
          />
          <TextBox
            title="6. Impact Validation"
            text="The full dummy is run through drop tests and sled impacts. Results are compared with biomechanical references, and parts are revised until the response is realistic."
          />
        </div>
      </div>
    </div>
  );
};

export default MechanicalTeam;
