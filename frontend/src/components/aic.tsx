import React from "react";
import "./AIC.css";

const labels = ["none", "minor", "moderate", "serious", "severe", "critical", "dead"];
const numbers = ["0", "1", "2", "3", "4", "5", "6"];

export type AICProps = {
  score?: number; // 0–6, highlights the marker position
  orientation?: "horizontal" | "vertical";
};

const AIC: React.FC<AICProps> = ({ score, orientation = "horizontal" }) => {
  // position of the marker as a percentage (0–100)
  const markerPct = score !== undefined ? (score / 6) * 100 : undefined;
  const isVertical = orientation === "vertical";
  const markerStyle: React.CSSProperties | undefined =
    markerPct !== undefined
      ? isVertical
        ? { top: `${markerPct}%` }
        : { left: `${markerPct}%` }
      : undefined;

  return (
    <div className={`aic-container ${isVertical ? "aic-vertical" : ""}`}>
      {/* Text labels row */}
      <div className="aic-labels">
        {labels.map((label, i) => (
          <span key={i} className="aic-label">{label}</span>
        ))}
      </div>

      {/* Gradient bar + optional score marker */}
      <div className="aic-bar-track">
        <div className="aic-bar" />
        {markerStyle && <div className="aic-marker" style={markerStyle} />}
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