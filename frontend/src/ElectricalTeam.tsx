import React from "react";
import "./TeamPage.css";
import TextBox from "./components/textBox.js";
import teamPhoto from "./assets/kitty2.png";

const ElectricalTeam: React.FC = () => {
  return (
    <div className="team-page">
      <h1 className="team-title">Electrical Team</h1>

      <div className="team-photo-wrapper">
        <img src={teamPhoto} alt="Electrical Team" className="team-photo" />
      </div>

      <div className="process-section">
        <div className="process-intro">
          <TextBox
            title="Our Process"
            text="The electrical team designs and integrates the sensor and signal pipeline that turns crash forces into measurable data. We move from circuit prototyping on breadboards, to PCB design, to a fully wired dummy ready for impact testing."
          />
        </div>

        <div className="process-steps">
          <TextBox
            title="1. Sensor Selection"
            text="We evaluate accelerometers, load cells, and pressure sensors based on g-range, sampling rate, and cost, then map each sensor to the head, neck, chest, femur, and pelvis injury criteria."
          />
          <TextBox
            title="2. Circuit Prototyping"
            text="Each sensor is prototyped with conditioning circuits on a breadboard. We validate signal integrity, filter noise, and confirm output ranges against expected crash loads."
          />
          <TextBox
            title="3. PCB Design & Fabrication"
            text="Validated circuits are laid out in KiCad as compact PCBs that fit inside the dummy cavity. Boards are ordered, populated, and bench-tested before assembly."
          />
          <TextBox
            title="4. Microcontroller Integration"
            text="An onboard microcontroller samples all channels in sync, timestamps the data, and streams it to the software team's pipeline over a serial or wireless link."
          />
          <TextBox
            title="5. Power & Wiring"
            text="We design the battery, regulation, and harness so the system survives a crash event without losing data, while keeping cable routing clean inside the dummy."
          />
          <TextBox
            title="6. Calibration & Testing"
            text="Final boards are calibrated against known reference loads, then stress-tested in mock impact runs to verify that data matches expected biomechanics."
          />
        </div>
      </div>
    </div>
  );
};

export default ElectricalTeam;
