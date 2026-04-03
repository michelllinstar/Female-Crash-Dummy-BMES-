import React from "react";
import "./AIC.css";

const labels = ["None", "Minor", "Moderate", "Serious", "Severe", "Critical", "Dead"];

const AIC: React.FC = () => {
  return (
    <div className="aic-container">
      <div className="aic-labels">
        {labels.map((label, i) => (
          <span key={i} className="aic-label">{label}</span>
        ))}
      </div>
      <div className="aic-bar">
        {labels.map((_, i) => (
          <div key={i} className="aic-tick" />
        ))}
      </div>
    </div>
  );
};

export default AIC;