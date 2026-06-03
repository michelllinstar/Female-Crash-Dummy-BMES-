import React from "react";
import "./TeamPage.css";
import TextBox from "./components/textBox.js";
import TeamNav from "./components/TeamNav";
import teamPhoto from "./assets/pictures/mechanical.jpg";

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
            text="The mechanical team constructs the physical body of the 50th percentile female crash dummy. We progress from anthropometric data to CAD models, prototype with affordable materials, and iterate until the dummy responds to impact in a manner consistent with a real human body."
          />
        </div>

        <div className="process-steps">
          <TextBox
            title="1. Anthropometric Research"
            text="We begin with published 50th percentile female body geometry, including limb lengths, joint locations, and mass distribution, and translate the data into target dimensions for every segment."
          />
          <TextBox
            title="2. CAD Modeling"
            text="Each body segment is modeled in SolidWorks with mounting points for electronics and joints. Assemblies are reviewed for clearance, alignment, and serviceability."
          />
          <TextBox
            title="3. Material Selection"
            text="We select affordable and accessible materials such as PLA, silicone, foam, and steel hardware, which approximate human stiffness and damping while remaining economical to reproduce."
          />
          <TextBox
            title="4. Prototyping"
            text="Parts are produced through 3D printing, laser cutting, or machining. Soft tissue analogs are cast in silicone and assembled into limbs that match the target weight and flexibility."
          />
          <TextBox
            title="5. Joint & Skeleton Assembly"
            text="A central skeleton unites the segments through articulated joints calibrated for a realistic range of motion and resistance under load."
          />
          <TextBox
            title="6. Impact Validation"
            text="The complete dummy undergoes drop tests and sled impacts. Results are compared against biomechanical references, and components are revised until the response is realistic."
          />
        </div>
      </div>

      <TeamNav current="mechanical" />
    </div>
  );
};

export default MechanicalTeam;
