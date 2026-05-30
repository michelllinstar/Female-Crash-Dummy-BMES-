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
        // alert("Simulation Successful!\n\n== Results ==\n" + result);
        setSimulationResult(result);
        setIsPopupOpen(true);
        console.log("Result:", result);
        // navigate("/simulateresults", { state: { result } });
      } else {
        console.error("Backend returned an error:", response.status);
      }
    } catch (error) {
      // if the backend is not running or CORS is blocked
      console.error("Network error - is your backend running?", error);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
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
                        <span className="result-value">{String(value)}</span>
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
