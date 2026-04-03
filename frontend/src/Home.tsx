import React from "react";
import "./Home.css";
import TextBox from './components/textBox.js';
import femalecd from './assets/femalecd.png';


const Home: React.FC = () => {
  const impact_text = "Our crash test dummy addresses this gap by accurately representing female body geometry \
and biomechanics using low-cost, accessible materials. This makes inclusive testing more affordable and scalable, \
allowing vehicle safety designs to better account for women’s injury risk without the high cost of traditional crash test models.";
  const ps_text = "According to a University of Virginia study, seatbelt-wearing female drivers are 47% more likely to \
  sustain severe injuries than belt-restrained males in comparable crashes. Current crash tests rely primarily on \
  50th-percentile male and 5th-percentile female dummies. As a result, vehicles remain largely untested for the average \
  woman’s body geometry, biomechanics, and injury risk. ";

  const pd_text = "Our platform leverages cutting-edge bioengineering tools to develop wearable sensors \
that monitor physiological signals in real time, ensuring accurate and personalized health insights across diverse users.";


  return (
    <div className="main-layout"> 
<div className="vstack">
  <div className="hero-content">
            <div className="vstack">
              <div className="hero-text">
                FEMALE CRASH DUMMY SIMULATOR
              </div>
                  <div className="hero-textboxes">  
                    <TextBox
                        text={`The Female Crash dummy simulator is a blah blah blah; placeholder text`}
                        style={{ width: '598px', height: '430px' }}
                    />
                    <TextBox
                        text={`Our Mission: We aim to develop a low-cost female crash 
                          test dummy modeled after a 50th percentile woman to address 
                          the gender gaps in vehicle safety testing. `}
                          style={{ width: '350px', height: '148px' }}
                    />
                  </div>
              </div>
            </div>
          <div className="buttons-container">
      <button className="Simulate" onClick={() => {}}>Simulate</button>
        <div className="hStack">  
          <button className="AboutUs" onClick={() => {}}>About Us</button>
          <button className="RealData" onClick={() => {}}>Real Data</button>
          <button className="Information" onClick={() => {}}>Information</button>
        </div>
        <div className="descriptions">
          <div className="description-block">
            <h1>Problem Statement</h1>
            <TextBox
              text={ps_text}
              className="bottom-textboxes"
            />
          </div>

          <div className="description-block">
            <h1 style={{textAlign: "right"}}>Impact</h1>
            <TextBox
              text={impact_text}
              className="bottom-textboxes"
            />
          </div>
          
          <div className="description-block">
            <h1>Product Description</h1>
            <TextBox
              text={`dummy go crash. ${pd_text}`}
              className="bottom-textboxes"
            />
          </div>
        </div>
      </div>
  
</div>
  
    </div>
  );
};

export default Home;
