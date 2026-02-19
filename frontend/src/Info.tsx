import React from "react";
import "./Info.css";
import TextBox from './components/textBox.js';
import femalecd from './assets/femalecd.jpeg';


export function Header({ text }: { text: string }) {
  return <header className="app-header">{text}</header>;
}

const Info: React.FC = () => {
  return (
   <div className="info-page">
     <Header text="Information" />
      {/* Top TextBox centered */}
      <div className="top-textbox-container">
        <TextBox
          title="ABREVIATED INJURY SCALE"
          text={`A globally recognized system used to describe and classify the severity of injuries.
It provides a standardized way to assess trauma, making it easier for clinicians, researchers,
and safety professionals to communicate injury severity, compare outcomes, 
and support data-driven decisions in injury prevention and care.`}
        />
      </div>

      {/* HStack: Image on left, Vstack of TextBoxes on right */}
      <div className="info-hstack">
        {/* Left Image */}
        <div className="info-image-container">
          <img src={femalecd} alt="Crash Dummy" className="info-image" />
        </div>

        {/* Right VStack of TextBoxes */}
        <div className="info-vstack">
          <TextBox title="Head Injury Criteria" />
          <TextBox title="Femur Load Risk" />
          <TextBox title="Chest Injury" />
          <TextBox title="Neck Injury Criteria" />
          <TextBox title="Pelvis Load Risk" />
          <TextBox title="AIS" />
        </div>
      </div>
    </div>
  );
};

export default Info;
