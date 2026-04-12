import React from 'react';
import TeamMember from './components/TeamMember.jsx';
import './AboutUs.css';
import Button from './components/button.js';
import meow from './assets/kitty2.png';

const AboutUs: React.FC = () => {
  const teamData = [
    { name: 'Ellie Lin', year: 'Founder & CEO', major: 'Computer Science', imageUrl: meow },
    { name: 'Ellen Zulkarnain', year: 'Lead Developer', major: 'Software Engineering', imageUrl: meow },

    { name: 'Kevin', year: 'Designer', major: 'Graphic Design', imageUrl: meow },
    { name: 'Justine', year: 'Marketing', major: 'Business Administration', imageUrl: meow },
    { name: 'Will', year: 'Data Scientist', major: 'Data Science', imageUrl: meow },
    { name: 'Nikita', year: 'Product Manager', major: 'Product Management', imageUrl: meow },

    { name: 'Miriam', year: 'QA Engineer', major: 'Software Testing', imageUrl: meow },
    { name: 'Madeline', year: 'HR Manager', major: 'Human Resources', imageUrl: meow },
    { name: 'Andrew', year: 'DevOps Engineer', major: 'Cloud Computing', imageUrl: meow },
    { name: 'Amanda Martinez', year: 'Customer Support', major: 'Communications', imageUrl: meow }, 

    { name: 'Michelle Lin', year: 'Intern', major: 'Computer Science', imageUrl: meow },
    { name: 'Priya Ravi', year: 'Intern', major: 'Software Engineering', imageUrl: meow },
    { name: 'Shreeya Sharma', year: 'Intern', major: 'Graphic Design', imageUrl: meow }
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
                <Button className="rd-learn-more">LEARN MORE</Button>

        </div>

       <div className="v-stack"> 
            <div className="sec-tit">Mechanical Team</div>
            <div className="mech-grid">{renderGroup(group3)}</div>
            <div className="rd-value-spacer" />
                <Button className="rd-learn-more">LEARN MORE</Button>
           
      </div>

        <div className="v-stack"> 
          <div className="sec-tit">Software Team</div>
          <div className="soft-grid">{renderGroup(group4)}</div>
           <div className="rd-value-spacer" />
                <Button className="rd-learn-more">LEARN MORE</Button>
           </div>
       
        </div>


    </section>
  );
};

export default AboutUs;