import React from "react";
import "./TeamPage.css";
import TextBox from "./components/textBox.js";
import teamPhoto from "./assets/kitty2.png";

const SoftwareTeam: React.FC = () => {
  return (
    <div className="team-page">
      <h1 className="team-title">Software Team</h1>

      <div className="team-photo-wrapper">
        <img src={teamPhoto} alt="Software Team" className="team-photo" />
      </div>

      <div className="process-section">
        <div className="process-intro">
          <TextBox
            title="Our Process"
            text="The software team builds the simulator, data pipeline, and website that bring the crash dummy to life. We turn raw sensor signals into injury metrics and present them in a way researchers and the public can actually use."
          />
        </div>

        <div className="process-steps">
          <TextBox
            title="1. Requirements & UX"
            text="We start by mapping what users need to see — injury criteria, crash parameters, comparison data — and sketch the simulator and website flows in Figma before any code is written."
          />
          <TextBox
            title="2. Frontend Development"
            text="The website and simulator UI are built in React and TypeScript. We implement the glass-style design system, routing, and interactive components like the simulator inputs and results view."
          />
          <TextBox
            title="3. Simulation Engine"
            text="Crash physics and injury metrics — HIC, Nij, chest deflection, femur load — are modeled in code so users can run virtual impact scenarios and get standardized scores back."
          />
          <TextBox
            title="4. Data Pipeline"
            text="Sensor data from the electrical team is ingested, timestamped, and converted into the same metrics the simulator produces, so physical and virtual runs can be compared side by side."
          />
          <TextBox
            title="5. Visualization"
            text="Results are rendered as charts, body diagrams, and AIS-coded summaries so a researcher can see at a glance where injury risk concentrates in a given crash."
          />
          <TextBox
            title="6. Testing & Deployment"
            text="We write unit and integration tests, run the site locally for every change, and deploy through Vite so updates ship cleanly without breaking the existing pages."
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareTeam;
