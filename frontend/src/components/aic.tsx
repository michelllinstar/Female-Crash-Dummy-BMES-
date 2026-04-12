import React from "react";
import "./AIC.css";

const labels = ["none", "minor", "moderate", "serious", "severe", "critical", "dead"];
const numbers = ["0", "1", "2", "3", "4", "5", "6"];

export type AICProps = {
  score?: number; // 0–6, highlights the marker position
};

const AIC: React.FC<AICProps> = ({ score }) => {
  // position of the marker as a percentage (0–100)
  const markerPct = score !== undefined ? (score / 6) * 100 : undefined;

  return (
    <div className="aic-container">
      {/* Text labels row */}
      <div className="aic-labels">
        {labels.map((label, i) => (
          <span key={i} className="aic-label">{label}</span>
        ))}
      </div>

      {/* Gradient bar + optional score marker */}
      <div className="aic-bar-track">
        <div className="aic-bar" />
        {markerPct !== undefined && (
          <div
            className="aic-marker"
            style={{ left: `${markerPct}%` }}
          />
        )}
      </div>

      {/* Number labels row */}
      <div className="aic-numbers">
        {numbers.map((n, i) => (
          <span key={i} className="aic-number">{n}</span>
        ))}
      </div>
    </div>
  );
};

export default AIC;