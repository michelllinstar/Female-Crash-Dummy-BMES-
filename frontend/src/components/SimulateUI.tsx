import React, { useState } from "react";
import "./SimulateUI.css";

interface UserInput {
  head_circumference: string;
  height: string;
  sitting_height: string;
  weight: string;
  angle: string;
  speed: string;
}

const SimulateUI: React.FC = () => {
  const [inputs, setInputs] = useState<UserInput>({
    head_circumference: "",
    height: "",
    sitting_height: "",
    weight: "",
    angle: "",
    speed: "",
  });
  
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleChange = (name: keyof UserInput, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    // logic for the progress bar
    const step1Fields: (keyof UserInput)[] = ["head_circumference", "height", "sitting_height", "weight"];
    setCurrentStep(step1Fields.includes(name) ? 1 : 2);
  };

  const handleSimulate = async (e: { preventDefault: () => void; }) => {
    console.log("Simulate clicked with inputs:", inputs);

    e.preventDefault(); // Prevent page reload

    const payload = Object.fromEntries(
      Object.entries(inputs).map(([key, val]) => [key, parseFloat(val) || 0])
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
        alert("Simulation Successful!");
        console.log(result);
      } else {
        console.error("Backend returned an error:", response.status);
      }
    } catch (error) {
      // if the backend is not running or CORS is blocked
      console.error("Network error - is your backend running?", error);
    }
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
      <button className="simulate-button" onClick={(e) => handleSimulate(e)}>
        Simulate
      </button>
    </div>
  );
};

export default SimulateUI;
