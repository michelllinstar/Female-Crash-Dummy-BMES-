import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header.js";
import Footer from './components/footer.js';
import TextBox from './components/textBox.js';
import Button from './components/button.js';
import Label from './components/label.js';
import Info from "./Info.js";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Simulator from "./Simulator.js";
import RealData from "./RealData.js";

function App() {

return (
    <div className="app-container">
      <div className="App">
        <Header title="Female Crash Dummy Website" links={[
          { label: "About Us", path: "/about_us" },
          { label: "Simulator", path: "/simulator" },
          { label: "Real Data", path: "/real_data" },
          { label: "Info", path: "/info" },
        ]} />
      </div>
      
      <div className="page-content">
        <div className="routes-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            {/* Added these so your links actually work */}
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

