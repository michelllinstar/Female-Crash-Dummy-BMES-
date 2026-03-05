import React from "react";
import "./Simulator.css";
import SimulateUI from './components/SimulateUI.js';
import Footer from './components/footer.js';
import femalecd from './assets/femalecd.png';


export function Header({ text }: { text: string }) {
  return <header className="app-header">{text}</header>;
}

const Simulator: React.FC = () => {
  return (
    <div className="simulator-page">
      <Header text="Simulator" />
      <div className="info-hstack">
        <div className="info-image-container">
          <img src={femalecd} alt="Crash Dummy" className="info-image" />
        </div>
        <SimulateUI />
      </div>
    </div>
  );
};

export default Simulator;
