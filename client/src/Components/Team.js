import React from "react";
import "../Team.css";

const Team = () => {
  return (
    <div className="team-section">
      <h1 className="team-title">MEET OUR TEAM</h1>
      <p className="team-description">
        Our team is dedicated to delivering the best results with expertise and passion.
      </p>
      <div className="team-container">
        {[
          {
            name: "Yara Jenkins",
            role: "Co-Founder",
            img: "https://peopleofcolorintech.com/wp-content/uploads/2022/10/AdobeStock_297800292-scaled-1.jpeg",
          },
          {
            name: "Mark Newland",
            role: "CTO",
            img: "https://www.stemwomen.com/wp-content/uploads/2021/03/Meet-Mark-Newland...-44-720x520.jpg",
          },
          {
            name: "Aisha Davis",
            role: "Lead Developer",
            img: "https://afrikanheroes.com/wp-content/uploads/2022/07/women-in-tech.jpg",
          },
          {
            name: "John Doe",
            role: "Project Manager",
            img: "https://imageio.forbes.com/specials-images/imageserve/65a6147061a04b75f1e7064b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          },
        ].map((member, index) => (
          <div className="team-card" key={index}>
            <div
              className="team-image"
              style={{ backgroundImage: `url(${member.img})` }}
            ></div>
            <div className="team-info">
              <h2 className="team-name">{member.name}</h2>
              <h4 className="team-role">{member.role}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
