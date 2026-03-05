import React from "react";
import "./Home.css";
import TextBox from './components/textBox.js';
import Button from './components/button.js';
import Label from './components/label.js';



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
  );
};

export default Home;
