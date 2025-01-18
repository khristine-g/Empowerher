import React from 'react';
import { useNavigate } from 'react-router-dom';
import { seedData } from './Data.js'; // Assuming you have seedData imported
import '../ProjectList.css'; // Reusing the styles for consistency

const ViewAllProjects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id) => navigate(`/projects/${id}`);

  return (
    <div className="project-list-container">
      <h1>ALL PROJECTS</h1>
      <p>Browse through all our projects</p>

      <div className="project-list">
        {seedData.map((project) => {
          const progress = (project.amount_raised / project.goal_amount) * 100;
          return (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
            >
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${project.image || 'default-image.jpg'})`,
                }}
              ></div>
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>${project.amount_raised} raised of ${project.goal_amount}</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <p>{Math.round(progress)}% of goal reached</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewAllProjects;
