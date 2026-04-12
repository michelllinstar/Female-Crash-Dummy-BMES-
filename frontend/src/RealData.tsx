import React from "react";
import AIC from "./components/aic.js";
import "./RealData.css";
import meow from "./assets/meow.png";


const crashData = {
  id: 1,
  timestamp: "3.4.5",
  video: "/assets/crash1.mp4",
  angle: "67",
  type: "Frontal",
  speed: "10 mph",
  values: {
    HIC: 67,
    FLR: 67,
    CI: 67,
    NIC: 67,
    PLR: 67,
  },
  measured: {
    Head:   { acceleration: 67, gyroscope: 67 },
    Neck:   { force: 67 },
    Torso:  { force: 67, acceleration: 67, gyroscope: 67 },
    Body:   { force: 67 },
    Pelvis: { force: 67 },
  },
  aicScore: 4,
};

const RealData: React.FC = () => {
  return (
    <div className="rd-page">
      <div className="rd-content">

        {/* ── Crash Video ── */}
        <div className="rd-video-wrapper">
          <video
            className="rd-crash-video"
            src={crashData.video}
            controls
            playsInline
          />
          <div className="rd-video-meta">
            <span className="rd-crash-label">Crash {crashData.id}:</span>
            <span className="rd-timestamp">timestamp: {crashData.timestamp}</span>
          </div>
        </div>

        {/* ── AIC Severity Bar ── */}
        <div className="rd-aic-wrapper">
          <AIC score={crashData.aicScore} />
        </div>

        {/* ── Two-column panels ── */}
        <div className="rd-panels">

          {/* Type of Crash */}
          <div className="rd-panel rd-panel-left">
            <span className="rd-panel-title">Type of Crash:</span>
            <div className="rd-panel-left-body">
              <div className="rd-crash-fields">
                <div className="rd-field-row">
                  <div className="rd-field-label">Angle</div>
                  <div className="rd-field-value">{crashData.angle}</div>
                </div>
                <div className="rd-field-row">
                  <div className="rd-field-label">Type</div>
                  <div className="rd-field-value">{crashData.type}</div>
                </div>
                <div className="rd-field-row">
                  <div className="rd-field-label">Speed</div>
                  <div className="rd-field-value">{crashData.speed}</div>
                </div>
              </div>
              <div className="rd-car-diagram">
                <img src={meow} alt="Car diagram" className="rd-car-img" />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="rd-panel rd-panel-right">
            <span className="rd-panel-title">Values:</span>
            <div className="rd-values-list">
              {Object.entries(crashData.values).map(([key, val]) => (
                <div className="rd-value-row" key={key}>
                  <div className="rd-value-label">{key}</div>
                  <div className="rd-value-num">{val}</div>
                </div>
              ))}
              <div className="rd-value-row">
                <div className="rd-value-spacer" />
                <button className="rd-learn-more">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Measured Data ── */}
        <div className="rd-panel rd-panel-measured">
          <span className="rd-panel-title">Measured Data:</span>
          <div className="rd-measured-grid">

            <div className="rd-measured-row">
              <div className="rd-measured-part">Head</div>
              <div className="rd-measured-metric">Acceleration</div>
              <div className="rd-measured-val">{crashData.measured.Head.acceleration}</div>
              <div className="rd-measured-metric">Gyroscope</div>
              <div className="rd-measured-val">{crashData.measured.Head.gyroscope}</div>
            </div>

            <div className="rd-measured-row">
              <div className="rd-measured-part">Neck</div>
              <div className="rd-measured-metric">Force</div>
              <div className="rd-measured-val">{crashData.measured.Neck.force}</div>
            </div>

            <div className="rd-measured-row">
              <div className="rd-measured-part">Torso</div>
              <div className="rd-measured-metric">Force</div>
              <div className="rd-measured-val">{crashData.measured.Torso.force}</div>
              <div className="rd-measured-metric">Acceleration</div>
              <div className="rd-measured-val">{crashData.measured.Torso.acceleration}</div>
              <div className="rd-measured-metric">Gyroscope</div>
              <div className="rd-measured-val">{crashData.measured.Torso.gyroscope}</div>
            </div>

            <div className="rd-measured-row">
              <div className="rd-measured-part">Body</div>
              <div className="rd-measured-metric">Force</div>
              <div className="rd-measured-val">{crashData.measured.Body.force}</div>
            </div>

            <div className="rd-measured-row">
              <div className="rd-measured-part">Pelvis</div>
              <div className="rd-measured-metric">Force</div>
              <div className="rd-measured-val">{crashData.measured.Pelvis.force}</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RealData;