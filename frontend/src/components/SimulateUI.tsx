import React, { useState } from "react";
import "./SimulateUI.css";
import { useNavigate } from "react-router-dom";


interface UserInput {
  head_circumference: string;
  height: string;
  sitting_height: string;
  weight: string;
  angle: string;
  speed: string;
}

const SimulateUI: React.FC = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<UserInput>({
    head_circumference: "",
    height: "",
    sitting_height: "",
    weight: "",
    angle: "",
    speed: "",
  });
  
  const [currentStep, setCurrentStep] = useState<number>(1);

  // NEW: State for popup visibility and storing the result data
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [simulationResult, setSimulationResult] = useState<any>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const ranges: Record<keyof UserInput, { min: number; max: number; minInclusive?: boolean; maxInclusive?: boolean; label: string; unit: string }> = {
    head_circumference: { min: 30, max: 70, label: "Head Circumference", unit: "cm" },
    height: { min: 50, max: 250, label: "Height", unit: "cm" },
    sitting_height: { min: 30, max: 150, label: "Sitting Height", unit: "cm" },
    weight: { min: 1, max: 300, label: "Weight", unit: "kg" },
    angle: { min: 0, max: 180, minInclusive: true, maxInclusive: true, label: "Angle", unit: "°" },
    speed: { min: 0, max: 300, maxInclusive: true, label: "Closing Speed", unit: "km/h" },
  };

  const validateInputs = (): string | null => {
    const parsed: Record<string, number> = {};
    const missing: string[] = [];
    const nonNumeric: string[] = [];
    const outOfRange: string[] = [];

    for (const key of Object.keys(ranges) as (keyof UserInput)[]) {
      const { min, max, minInclusive, maxInclusive, label, unit } = ranges[key];
      const raw = inputs[key].trim();
      if (raw === "") {
        missing.push(label);
        continue;
      }
      const n = Number(raw);
      if (!Number.isFinite(n)) {
        nonNumeric.push(label);
        continue;
      }
      const lowOk = minInclusive ? n >= min : n > min;
      const highOk = maxInclusive ? n <= max : n < max;
      if (!lowOk || !highOk) {
        outOfRange.push(`${label} (must be between ${min} and ${max} ${unit})`);
        continue;
      }
      parsed[key] = n;
    }

    const messages: string[] = [];
    if (nonNumeric.length) {
      messages.push(`These fields must be a number: ${nonNumeric.join(", ")}.`);
    }
    if (missing.length) {
      messages.push(`Required fields are missing: ${missing.join(", ")}.`);
    }
    if (outOfRange.length) {
      messages.push(`Out of range: ${outOfRange.join("; ")}.`);
    }
    if (
      parsed.sitting_height !== undefined &&
      parsed.height !== undefined &&
      parsed.sitting_height >= parsed.height
    ) {
      messages.push("Sitting Height must be less than Height.");
    }

    return messages.length ? messages.join(" ") : null;
  };

  const handleChange = (name: keyof UserInput, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    // logic for the progress bar
    const step1Fields: (keyof UserInput)[] = ["head_circumference", "height", "sitting_height", "weight"];
    setCurrentStep(step1Fields.includes(name) ? 1 : 2);
  };

  const handleSimulate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSimulationResult(null);
    setValidationError(null);

    const err = validateInputs();
    if (err) {
      setValidationError(err);
      return;
    }

    const payload = Object.fromEntries(
      Object.entries(inputs).map(([key, val]) => [key, Number(val)])
    );

    try {
      const response = await fetch('http://127.0.0.1:8000/simulate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        setSimulationResult(result);
        setIsPopupOpen(true);
      } else {
        let message = `Backend rejected the inputs (status ${response.status}).`;
        try {
          const body = await response.json();
          if (body?.detail) {
            if (Array.isArray(body.detail)) {
              message = body.detail
                .map((d: any) => `${(d.loc || []).slice(-1)[0] || "input"}: ${d.msg}`)
                .join("; ");
            } else {
              message = String(body.detail);
            }
          }
        } catch { /* ignore parse errors */ }
        setValidationError(message);
      }
    } catch (error) {
      setValidationError("Network error — is the backend running?");
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSimulationResult(null);
  };

  const rows = [
    { label: "Please Enter Your Information: ", divider: true },
    { staticLabel: "Head Circumference (cm)", key: "head_circumference" },
    { staticLabel: "Height (cm)", key: "height" },
    { staticLabel: "Sitting Height (cm)", key: "sitting_height" },
    { staticLabel: "Weight (kg)", key: "weight" },
    { label: "Type of Crash: ", divider: true },
    { staticLabel: "Angle (degrees)", key: "angle" },
    { staticLabel: "Closing Speed (km/h)", key: "speed" },
  ];

  return (
    <>
    <div className="simulate-ui-container">
      <div className="progress-indicator">
        <div className={`progress-step ${currentStep === 1 ? 'active' : ''}`}>
          <div className="progress-circle">1</div>
        </div>
        <div className="progress-line"></div>
        <div className={`progress-step ${currentStep === 2 ? 'active' : ''}`}>
          <div className="progress-circle">2</div>
        </div>
      </div>
      <div className="simulate-ui-grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.divider && (
              <div className="simulate-divider">
                <span>{row.label}</span>
              </div>
            )}
            {!row.divider && 'key' in row && (
              <div className="simulate-row">
                <div className="simulate-col">
                  <div className="simulate-label">{row.staticLabel}</div>
                </div>
                <div className="simulate-col">
                  <input
                    type="text"
                    placeholder="Enter value"
                    value={inputs[row.key as keyof UserInput]}
                    onChange={(e) => handleChange(row.key as keyof UserInput, e.target.value)}
                    className="simulate-input"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {validationError && (
        <div className="simulate-error" role="alert">{validationError}</div>
      )}
      <button className="simulate-button" onClick={(e) => handleSimulate(e)}>
        Simulate
      </button>
    </div>

    {/* NEW: The Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Simulation Results</h2>
            
            <div className="results-display">
              {typeof simulationResult === 'object' && simulationResult !== null ? (
                <div className="formatted-results">
                  {Object.entries(simulationResult).map(([key, value]) => {
                    // Formats keys like "impact_force" to "Impact Force"
                    const formattedKey = key
                      .split('_')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');

                    return (
                      <div className="result-item" key={key}>
                        <span className="result-label">{formattedKey}</span>
                        <span className="result-value">{typeof value === "number" ? value.toFixed(2) : String(value)}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // Fallback just in case the backend sends a plain string instead of JSON
                <p className="fallback-text">{String(simulationResult)}</p>
              )}
            </div>

            <button onClick={closePopup} className="btn-close">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SimulateUI;
