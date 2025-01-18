import React from 'react';
import { useNavigate } from 'react-router-dom';
import { relatedProjects } from './Data.js';
import '../RelatedProjects.css';

const RelatedProjects = ({ showAll }) => {
  const navigate = useNavigate();

  // Handle project click to navigate to the details page
  const handleProjectClick = (id) => navigate(`/projects/${id}`);


  
  return (
    <div className="related-project-list-container">
      <h1 className='related-project-list-title'>Related Projects</h1>
      <p className='related-project-list-subtitle'>Browse our featured projects</p>

      <div className="related-project-list">
        {relatedProjects.map((project) => {
          const progress = (project.amount_raised / project.goal_amount) * 100;
          return (
            <div
              key={project.id}
              className="related-project-card"
              onClick={() => handleProjectClick(project.id)}
            >
              <div
                className="related-project-image"
                style={{ backgroundImage: `url(${project.image || 'default-image.jpg'})` }}
              ></div>
              <div className="related-project-info">
                <h4>{project.title}</h4>
                <p>${project.amount_raised} raised of ${project.goal_amount}</p>
                <div className="related-progress-bar">
                  <div className="related-progress" style={{ width: `${progress}%` }}></div>
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

export default RelatedProjects;
