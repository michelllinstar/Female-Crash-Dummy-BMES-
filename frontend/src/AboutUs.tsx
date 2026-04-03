import React from "react";
import "./Info.css";
import TextBox from './components/textBox.js';
import femalecd from './assets/femalecd.png';
import Footer from './components/footer.js';


export function Header({ text }: { text: string }) {
  return <header className="app-header">{text}</header>;
}

const AboutUs: React.FC = () => {
  return (
   <div className="info-page">
      {/* Top TextBox centered */}
      <div className="top-textbox-container">
        <TextBox
          title="ABOUT OUR TEAM"
          text={`Meet the UCLA BMES Design Team dedicated to creating innovative solutions for crash safety testing.`}
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
          <TextBox title="Our Mission" />
          <TextBox title="Innovation" />
          <TextBox title="Diversity" />
          <TextBox title="Excellence" />
          <TextBox title="Collaboration" />
          <TextBox title="Impact" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
