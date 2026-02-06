import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header.js";
import Footer from './components/footer.js';

function App() {
  const NavLinks = [
    { label: 'About Us', path: '/' },
    { label: 'Simulator', path: '/' },
    { label: 'Real Data', path: '/' },
    { label: 'Info', path: '/' },
  ];

  return (
    <div className="App">
      <Header title="title" links={NavLinks}/>
      <div className="main-layout">
      </div>
      <Footer />
    </div>
  );

  
}

export default App;

// const [count, setCount] = useState(0)
  
  // const simulateCrash = async () => {
  //   const res = await fetch("http://localhost:8000/simulate?speed=70&angle=15")
  //   const data = await res.json()
  //   setResult(data)
  // }

  // return (
  //   <div style={{ textAlign: "center", marginTop: "40px" }}>
  //     <h1>Crash Simulation Website</h1>
  //     <button onClick={simulateCrash}>Run Simulation</button>
  //     {result && (
  //       <p>
  //         Speed: {result.speed} km/h <br/>
  //         Angle: {result.angle}° <br/>
  //         Injury Score: {result.injury_score}
  //       </p>
  //     )}
  //   </div>
  // )