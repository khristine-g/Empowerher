import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { seedData, categories } from './Data.js';
import '../ProjectList.css';

const ProjectList = ({ showAll }) => {
  const [projects] = useState(seedData); // Seed data for projects
  const [selectedCategory, setSelectedCategory] = useState(''); // Empty means "All"
  const navigate = useNavigate();

  // Handle project click to navigate to the details page
  const handleProjectClick = (id) => navigate(`/projects/${id}`);

  // Handle "View All Projects" button click
  const handleViewAllClick = () => navigate('/projects');

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === parseInt(selectedCategory))
    : projects;

  // Display only the first 6 filtered projects
  const displayedProjects = filteredProjects.slice(0, 6);

  return (
    <div className="project-list-container">
      <h1 className='project-list-title'>FEATURED PROJECTS</h1>
      <p className='project-list-subtitle'> Browse our featured projects</p>

      {showAll && (
        <div className="filter-container">
          <div className="category-buttons">
            <button
              className={`category-button ${selectedCategory === '' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('')}
            >
              All
            </button>
           
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-button ${
                  selectedCategory === String(category.id) ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(String(category.id))}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="project-list">
        {displayedProjects.map((project) => {
          const progress = (project.amount_raised / project.goal_amount) * 100;
          return (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
            >
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image || 'default-image.jpg'})` }}
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

      <button className="view-all-button" onClick={handleViewAllClick}>
        View All Projects
      </button>
    </div>
  );
};


export default ProjectList;
