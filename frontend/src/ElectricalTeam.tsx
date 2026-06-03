import React from "react";
import "./TeamPage.css";
import TextBox from "./components/textBox.js";
import TeamNav from "./components/TeamNav";
import teamPhoto from "./assets/pictures/electric.jpg";

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
            text="The electrical team designs and integrates the sensor and signal pipeline that translates crash forces into measurable data. Our work progresses from circuit prototyping on breadboards, to printed circuit board design, to a fully wired dummy prepared for impact testing."
          />
        </div>

        <div className="process-steps">
          <TextBox
            title="1. Sensor Selection"
            text="We evaluate accelerometers, load cells, and pressure sensors according to acceleration range, sampling rate, and cost, and then map each sensor to the head, neck, chest, femur, and pelvis injury criteria."
          />
          <TextBox
            title="2. Circuit Prototyping"
            text="Each sensor is prototyped with conditioning circuits on a breadboard. We validate signal integrity, filter noise, and confirm output ranges against expected crash loads."
          />
          <TextBox
            title="3. PCB Design & Fabrication"
            text="Validated circuits are laid out in KiCad as compact printed circuit boards that fit within the dummy cavity. Boards are ordered, populated, and tested on the bench prior to assembly."
          />
          <TextBox
            title="4. Microcontroller Integration"
            text="An onboard microcontroller samples all channels in synchrony, timestamps the data, and streams it to the software team's pipeline over a serial or wireless link."
          />
          <TextBox
            title="5. Power & Wiring"
            text="We design the battery, regulation, and harness so that the system withstands a crash event without losing data, while maintaining clean cable routing inside the dummy."
          />
          <TextBox
            title="6. Calibration & Testing"
            text="Final boards are calibrated against known reference loads and then evaluated under simulated impact conditions to verify that the recorded data aligns with expected biomechanics."
          />
        </div>
      </div>

      <TeamNav current="electrical" />
    </div>
  );
};

export default ElectricalTeam;
