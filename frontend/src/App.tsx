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


function App() {
  return (
    <div className="app-container">
      {/* ← removed the <div className="App"> wrapper */}
      <Header title="Female Crash Dummy Website" links={[
        { label: "About Us", path: "/about_us" },
        { label: "Simulator", path: "/simulator" },
        { label: "Real Data", path: "/real_data" },
        { label: "Info", path: "/info" },
      ]} />

      <div className="page-content">
        <div className="routes-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/simulator" element={<Simulator />} />
            <Route path="/real_data" element={<RealData />} />
            <Route path="/about_us" element={<AboutUs />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

