import React from "react";
import "./Simulator.css";
import SimulateUI from './components/SimulateUI.js';
import Footer from './components/footer.js';
import femalecd from './assets/pictures/femalecd.png';
import Title from "./components/title.js";
import AIC from "./components/aic.js";


export function Header({ text }: { text: string }) {
  return <header className="app-header">{text}</header>;
}

const Simulator: React.FC = () => {
  return (
    <div className="simulator-page">
      <div className="info-hstack">
        <div className="simulator-aic">
          <AIC orientation="vertical" />
        </div>
        <div className="info-image-container">
          <img src={femalecd} alt="Crash Dummy" className="info-image" />
        </div>
        <SimulateUI />
      </div>
    </div>
  );
};

export default Simulator;
