import React from "react";
import { useNavigate } from "react-router-dom";

interface TeamNavProps {
  current: "electrical" | "mechanical" | "software";
}

const allTeams = [
  { key: "electrical", label: "Electrical Team", path: "/team/electrical" },
  { key: "mechanical", label: "Mechanical Team", path: "/team/mechanical" },
  { key: "software", label: "Software Team", path: "/team/software" },
] as const;

const TeamNav: React.FC<TeamNavProps> = ({ current }) => {
  const navigate = useNavigate();
  const others = allTeams.filter((t) => t.key !== current);

  return (
    <div className="team-nav">
      <div className="team-nav-label">Explore other teams</div>
      <div className="team-nav-buttons">
        {others.map((t) => (
          <button
            key={t.key}
            className="team-nav-btn"
            onClick={() => navigate(t.path)}
          >
            {t.label}
          </button>
        ))}
        <button className="team-nav-btn" onClick={() => navigate("/about_us")}>
          About Us
        </button>
      </div>
    </div>
  );
};

export default TeamNav;
