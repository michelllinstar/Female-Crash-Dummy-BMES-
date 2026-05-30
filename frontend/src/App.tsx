import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header.js";
import Footer from './components/footer.js';
import Info from "./Info.js";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Simulator from "./Simulator.js";
import RealData from "./RealData.js";
import SimulateUI from "./components/SimulateUI.js";
import SimulateResults from "./SimulateResults.js";
import ElectricalTeam from "./ElectricalTeam.js";
import MechanicalTeam from "./MechanicalTeam.js";
import SoftwareTeam from "./SoftwareTeam.js";


function App() {
  return (
    <div className="app-container">
      {/* ← removed the <div className="App"> wrapper */}
      <Header title="Female Crash Dummy Website" links={[
        { label: "Info", path: "/info" },
        { label: "Real Data", path: "/real_data" },
        { label: "Simulator", path: "/simulator" },
        { label: "About Us", path: "/about_us" }
      ]} />

      <div className="page-content">
        <div className="routes-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/simulator" element={<Simulator />} />
            <Route path="/real_data" element={<RealData />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/simulate" element={<SimulateUI />} />
          <Route path="/simulateresults" element={<SimulateResults />} />
            <Route path="/team/electrical" element={<ElectricalTeam />} />
            <Route path="/team/mechanical" element={<MechanicalTeam />} />
            <Route path="/team/software" element={<SoftwareTeam />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

