import React, { useState } from 'react';
import '../SubmitProject.css'; // Import CSS file for styling

const SubmitProject = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    contactEmail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/submit_projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          submit_project: {
            name: formData.projectName,
            description: formData.projectDescription,
            contact_email: formData.contactEmail
          }
        })
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert('Project submitted successfully:', result);
        // Optionally reset the form or show a success message
      } else {
        console.error('Error submitting project:', result.errors);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="submit-project-container">
      
      <div className="submit-project-content">
        <h2 className="submit-project-title">Submit Your Groundbreaking Project</h2>
        <p className="submit-project-subtitle">
          We want to help turn your idea into reality! Provide detailed information about your project to get started.
        </p>
        <ul className="submit-project-features">
          <li><span className="tick-icon">✔</span> Raise funding for your project from a supportive community.</li>
          <li><span className="tick-icon">✔</span> Get noticed by investors and industry experts.</li>
          <li><span className="tick-icon">✔</span> Share your project with a global audience.</li>
          <li><span className="tick-icon">✔</span> Track progress and grow your network.</li>
        </ul>
      </div>
      <div className="submit-project-form-container">
        <form className="submit-project-form" onSubmit={handleSubmit}>
         
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Enter the name of your project"
            required
          />
       
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Describe your project in detail"
            required
          />
      
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="submit-project-button">Submit Project</button>
        </form>
      </div>
    </div>
  );
};

export default SubmitProject;
