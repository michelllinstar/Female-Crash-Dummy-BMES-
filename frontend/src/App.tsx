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

function Home() {
  const ps_title = "Product Statement";
  const ps_text = "Our platform leverages cutting-edge bioengineering tools to develop wearable sensors \
that monitor physiological signals in real time, ensuring accurate and personalized health insights across diverse users.";

  const impact_title = "Impact";
  const impact_text = "Our crash test dummy addresses this gap by accurately representing female body geometry \
and biomechanics using low-cost, accessible materials. This makes inclusive testing more affordable and scalable, \
allowing vehicle safety designs to better account for women’s injury risk without the high cost of traditional crash test models.";

  const pd_title = "Product Description";
  const pd_text = "Some text about the product.";

  return (
    <div className="main-layout">
      <TextBox title={ps_title} text={ps_text} />
      <TextBox title={impact_title} text={impact_text} />
      <TextBox title={pd_title} text={pd_text} />
    </div>
  );
}

function Simulator() {
  return <h1>Simulator Page</h1>;
}

function RealData() {
  return <h1>Real Data Page</h1>;
}

function AboutUs() {
  return <h1>About Us Page</h1>;
}

function App() {

  const ps_title = "Product Statement";
  const ps_text = "Our platform leverages cutting-edge bioengineering tools to develop wearable sensors \
                   that monitor physiological signals in real time, ensuring accurate and personalized \
                   health insights across diverse users.";

  const impact_title = "Impact";
  const impact_text = "Our crash test dummy addresses this gap by accurately representing female body \
                       geometry and biomechanics using low-cost, accessible materials. This makes \
                       inclusive testing more affordable and scalable, allowing vehicle safety designs \
                       to better account for women’s injury risk without the high cost of traditional crash test models.";

  const pd_title = "Product Description";
  const pd_text = "some text that lwk might have to wait for a bit";

  const image_info1 = "placeholder";
  const image_info2 = "placeholder";
  const image_info3 = "placeholder";

return (
    <>
      <div className="App">
        <Header title="Female Crash Dummy Website" links={[
          { label: "About Us", path: "/about_us" },
          { label: "Simulator", path: "/simulator" },
          { label: "Real Data", path: "/real_data" },
          { label: "Info", path: "/info" },
        ]} />

        <div className="main-layout">
          <Label className="frontpage-image" info={image_info1}></Label>
          <Label className="frontpage-image" info={image_info2}></Label>
          <Label className="frontpage-image" info={image_info3}></Label>

          <Button className="simulate-button" nameOfButton="Simulate"></Button>
          <Button className="frontpage-button" nameOfButton="About Us"></Button>
          <Button className="frontpage-button" nameOfButton="Real Data"></Button>
          <Button className="frontpage-button" nameOfButton="Information"></Button>

          <TextBox title={ps_title} text={ps_text}/>
          <TextBox title={impact_title} text={impact_text}/>
          <TextBox title={pd_title} text={pd_text}/>
        </div>
      </div>
      
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          {/* Added these so your links actually work */}
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/real_data" element={<RealData />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Routes>
      </div>

      <Footer />
    </>
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