import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamMember from './components/TeamMember.jsx';
import './AboutUs.css';
import Button from './components/button.js';
import meow from './assets/kitty2.png';
import ellie from './assets/ellie2.jpg';
import ellen from './assets/ellen2.png';
import kevin from './assets/kevin.png';
import justine from './assets/justine.png';
import will from './assets/will.png';
import nikita from './assets/nikita2.png';
import miriam from './assets/miriam.png';
import madeleine from './assets/madeleine2.png .png'; 
import andrew from './assets/andrew.png';
import celine from './assets/celine.png';
import michelle from './assets/michelle.jpg';
import priya from './assets/priya2.png';
import shreeya from './assets/shreeya.png';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();
  const teamData = [
    { name: 'Ellie Lin', year: '3rd Year', major: 'Bioengineering', imageUrl: ellie },
    { name: 'Ellen Zulkarnain', year: '3rd Year', major: 'Mechanical Engineering', imageUrl: ellen },

    { name: 'Kevin Liu', year: '3rd Year', major: 'Electrical Engineering', imageUrl: kevin },
    { name: 'Justine Lin', year: '2nd Year', major: 'Bioengineering', imageUrl: justine },
    { name: 'Will Zheng', year: '2nd Year', major: 'Bioengineering', imageUrl: will },
    { name: 'Nikita Senthil', year: '3rd Year', major: 'Computer Engineering', imageUrl: nikita },

    { name: 'Miriam Pomerantev', year: '2nd Year', major: 'Mechanial Engineering', imageUrl: miriam },
    { name: 'Madeleine Tsoi', year: '3rd Year', major: 'Bioengineering', imageUrl: madeleine },
    { name: 'Andrew Cardoza', year: '3rd Year', major: 'Mechanical Engineering', imageUrl: andrew },
    { name: 'Celine Oh', year: '4th Year', major: 'Mechanical Engineering', imageUrl: celine }, 

    { name: 'Michelle Lin', year: '2nd Year', major: 'Computer Science', imageUrl: michelle },
    { name: 'Priya Ravi', year: '3rd Year', major: 'Bioengineering', imageUrl: priya },
    { name: 'Shreeya Sharma', year: '1st Year', major: 'Computer Science', imageUrl: shreeya }
  ];

  const group1 = teamData.slice(0, 2);
  const group2 = teamData.slice(2, 6);
  const group3 = teamData.slice(6, 10);
  const group4 = teamData.slice(10);

  const renderGroup = (group: typeof teamData) =>
    group.map((member, index) => (
      <TeamMember
        key={member.name + index}
        name={member.name}
        year={member.year}
        major={member.major}
        imageUrl={member.imageUrl}
      />
    ));

  return (
    <section className="about-us-container">

      <h2 className="section-title">Our Team</h2>

    <div className="v-stack"> 
     <div className="sec-tit">Project Leads</div>
      <div className="pm-grid">
              {renderGroup(group1)}
            </div>
    </div>

     <div className="bottom-row">

        <div className="v-stack"> 
          <div className="sec-tit">Electrical Team</div>
          <div className="elec-grid">{renderGroup(group2)}</div>
          <div className="rd-value-spacer" />
                <Button className="rd-learn-more" onClick={() => navigate("/team/electrical")}>LEARN MORE</Button>

        </div>

       <div className="v-stack"> 
            <div className="sec-tit">Mechanical Team</div>
            <div className="mech-grid">{renderGroup(group3)}</div>
            <div className="rd-value-spacer" />
                <Button className="rd-learn-more" onClick={() => navigate("/team/mechanical")}>LEARN MORE</Button>
           
      </div>

        <div className="v-stack"> 
          <div className="sec-tit">Software Team</div>
          <div className="soft-grid">{renderGroup(group4)}</div>
           <div className="rd-value-spacer" />
                <Button className="rd-learn-more" onClick={() => navigate("/team/software")}>LEARN MORE</Button>
           </div>
       
        </div>


    </section>
  );
};

export default AboutUs;