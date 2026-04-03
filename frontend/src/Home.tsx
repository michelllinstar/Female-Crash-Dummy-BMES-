import React from "react";
import "./Home.css";
import TextBox from './components/textBox.js';
import Button from './components/button.js';
import Label from './components/label.js';
import femalecd from './assets/femalecd.png';


const Home: React.FC = () => {
    const ps_title = "Product Statement";
    const ps_text = "Our platform leverages cutting-edge bioengineering tools to develop wearable sensors \
that monitor physiological signals in real time, ensuring accurate and personalized health insights across diverse users.";

  const impact_title = "Impact";
  const impact_text = "Our crash test dummy addresses this gap by accurately representing female body geometry \
and biomechanics using low-cost, accessible materials. This makes inclusive testing more affordable and scalable, \
allowing vehicle safety designs to better account for women’s injury risk without the high cost of traditional crash test models.";

  const pd_title = "Product Description";
  const pd_text = "Some text about the product.";

  const image_info1 = "placeholder";
  const image_info2 = "placeholder";
  const image_info3 = "placeholder";

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
      </div>
  
</div>
  
    </div>
  );
};

export default Home;
