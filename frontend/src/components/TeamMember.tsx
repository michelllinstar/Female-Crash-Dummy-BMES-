import React from 'react';
import './TeamMember.css';

interface TeamMemberProps {
  name: string;
  year: string;
  major: string;
imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  imageUrl,
  name,
  year,
  major,
}) => {
  return (
    <div className="member-card">
      <div className="image-container">
        <img src={imageUrl} alt={name} className="member-image" />
      </div>

      <h3 className="member-name">{name}</h3>
      {year && <p className="member-year">{year}</p>}
      {major && <p className="member-major">{major}</p>}
    </div>
  );
};

export default TeamMember;