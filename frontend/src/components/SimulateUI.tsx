import React, { useState } from "react";
import "./SimulateUI.css";

const SimulateUI: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>(Array(7).fill(""));
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    // Update step based on which input is being filled
    if (index < 4) {
      setCurrentStep(1);
    } else {
      setCurrentStep(2);
    }
  };

  const handleSimulate = () => {
    console.log("Simulate clicked with inputs:", inputs);
  };

  const rows = [
    { label: "Please Enter Your Information: ", divider: true },
    { staticLabel: "bust", index: 0 },
    { staticLabel: "waist", index: 1 },
    { staticLabel: "hip", index: 2 },
    { staticLabel: "height", index: 3 },
    { label: "Type of Crash: ", divider: true },
    { staticLabel: "angle", index: 4 },
    { staticLabel: "type", index: 5 },
    { staticLabel: "speed", index: 6 },
  ];

  return (
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
            {!row.divider && 'index' in row && (
              <div className="simulate-row">
                <div className="simulate-col">
                  <div className="simulate-label">{row.staticLabel}</div>
                </div>
                <div className="simulate-col">
                  <input
                    type="text"
                    placeholder="Enter value"
                    value={inputs[row.index!]}
                    onChange={(e) => handleChange(row.index!, e.target.value)}
                    className="simulate-input"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="simulate-button" onClick={handleSimulate}>
        Simulate
      </button>
    </div>
  );
};

export default SimulateUI;
