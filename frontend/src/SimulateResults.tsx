import React from "react";
import "./SimulateResults.css";
import AIC from "./components/aic.js";
import TextBox from "./components/textBox.js";

const crashData = {
  values: {
    HIC: 67,
    FLR: 67,
    CI: 67,
    NIC: 67,
    PLR: 67,
  },
};

const metricLabels: Record<string, string> = {
  HIC: "Head Injury Criteria",
  FLR: "Femur Load Risk",
  CI: "Chest Injury",
  NIC: "Neck Injury Criteria",
  PLR: "Pelvis Load Risk",
};

const SimulateResults: React.FC = () => {
  return (
    <div className="sim-results-page">
      <h1 className="sim-results-title">Simulation Results</h1>

      <div className="sim-results-intro">
        <TextBox
          title="Injury Prediction"
          text="Predicted injury values from your simulated crash scenario, scored against the Abbreviated Injury Scale."
        />
      </div>

      <div className="sim-results-aic">
        <AIC />
      </div>

      <div className="sim-results-grid">
        {Object.entries(crashData.values).map(([key, val]) => (
          <TextBox
            key={key}
            title={`${key} — ${val}`}
            text={metricLabels[key] ?? ""}
          />
        ))}
      </div>
    </div>
  );
};

export default SimulateResults;
