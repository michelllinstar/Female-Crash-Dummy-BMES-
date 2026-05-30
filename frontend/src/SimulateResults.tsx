import React, { useState } from "react";
import "./SimulateResults.css";
import SimulateUI from "./components/SimulateUI.js";
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

const SimulateResults: React.FC = () => {
	return ( 
	<div className="SimulatorResults-page">
        <AIC/>
		
		<TextBox title="Injury Prediction" />
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
	

	
	);
};

export default SimulateResults;