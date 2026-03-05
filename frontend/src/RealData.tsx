import React from "react";
import "./RealData.css";
import TextBox from './components/textBox.js';
import femalecd from './assets/femalecd.png';
import Footer from './components/footer.js';


export function Header({ text }: { text: string }) {
  return <header className="app-header">{text}</header>;
}

const RealData: React.FC = () => {
  return (
   <div className="RealData-page">
     <Header text="Real Data" />


      {/* HStack: Image on left, TextBox on right */}
      <div className="info-hstack">
        {/* Left Image */}
        <div className="info-image-container">
          <img src={femalecd} alt="Crash Test Data" className="info-image" />
        </div>
        {/* Right TextBox */}
       <TextBox
          title="BIG INSIGHT!!!"
          text={`Discover key findings from our crash test data and analysis.`}
        />
      </div>
    </div>
  );
};

export default RealData;
