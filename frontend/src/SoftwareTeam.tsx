import React from "react";
import "./TeamPage.css";
import TextBox from "./components/textBox.js";
import TeamNav from "./components/TeamNav";
import teamPhoto from "./assets/pictures/software.jpg";

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
            text="The software team develops the simulator, data pipeline, and website that bring the crash dummy to life. We transform raw sensor signals into injury metrics and present them in a form that researchers and the public can readily use."
          />
        </div>

        <div className="process-steps">
          <TextBox
            title="1. Requirements & UX"
            text="We begin by identifying what users need to see, including injury criteria, crash parameters, and comparison data, and then sketch the simulator and website flows in Figma before any code is written."
          />
          <TextBox
            title="2. Frontend Development"
            text="The website and simulator interface are built in React and TypeScript. We implement the glass aesthetic design system, routing, and interactive components such as the simulator inputs and results view."
          />
          <TextBox
            title="3. Simulation Engine"
            text="Crash physics and injury metrics, including HIC, Nij, chest deflection, and femur load, are modeled in code so that users can run virtual impact scenarios and receive standardized scores in return."
          />
          <TextBox
            title="4. Data Pipeline"
            text="Sensor data from the electrical team is ingested, timestamped, and converted into the same metrics that the simulator produces, allowing physical and virtual runs to be compared directly."
          />
          <TextBox
            title="5. Visualization"
            text="Results are rendered as charts, body diagrams, and summaries classified by the Abbreviated Injury Scale, enabling researchers to identify where injury risk concentrates in a given crash."
          />
          <TextBox
            title="6. Testing & Deployment"
            text="We author unit and integration tests, run the site locally for every change, and deploy through Vite so that updates are released cleanly without disrupting existing pages."
          />
        </div>
      </div>

      <TeamNav current="software" />
    </div>
  );
};

export default SoftwareTeam;
