import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seedData } from './Data.js'; // Importing seedData
import '../ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState({ comments: [] });
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');

  // Fetch project data from seedData instead of API
  useEffect(() => {
    const foundProject = seedData.find(project => project.id === parseInt(id));
    if (foundProject) {
      setProject({
        ...foundProject,
        comments: foundProject.comments || [], // Ensure comments exist if not present
      });
    } else {
      setError('Project not found');
    }
  }, [id]);

  const progress = (project.amount_raised / project.goal_amount) * 100;

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!newComment.trim()) {
      setError('Comment cannot be empty');
      return;
    }

    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('You must be logged in to submit a comment');
      return;
    }

    // Simulate adding a new comment
    const newCommentObj = {
      id: project.comments.length + 1, // Generate a new ID for the comment
      content: newComment,
      contributor_name: 'User', // Simulate the contributor name
    };

    setProject(prevProject => ({
      ...prevProject,
      comments: [...prevProject.comments, newCommentObj],
    }));

    setNewComment('');
    setError('');
  };

  const handleCommentDelete = (commentId) => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('You must be logged in to delete a comment');
      return;
    }

    setProject(prevProject => ({
      ...prevProject,
      comments: prevProject.comments.filter(comment => comment.id !== commentId),
    }));
  };

  return (
    <div className="project-detail">
      <div className="left-section">
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} />
        <h1>About this project...</h1>
        <p>{project.detailed_description}</p>
        <h1>Why we’ve come to Empowerher…</h1>
        <p>{project.small_description}</p>
      </div>

      <div className="right-section">
        <div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="progress-text">{Math.round(progress)}% of ${project.goal_amount} raised</p>

          <div className="owner-section">
            {project.owner && (
              <>
                <img src={project.owner.image} alt={project.owner.name} />
                <h4>Project Owner: {project.owner.name}</h4>
                <p>{project.owner.about}</p>
              </>
            )}
          </div>

          <h4>Category: {project.category ? project.category.name : 'Uncategorized'}</h4>

          <p className='amount-raised'>Raised: ${project.amount_raised} / ${project.goal_amount}</p>

          <Link to={`/projects/${id}/contribute`} className="contribute-button">
            Contribute Now
          </Link>
        </div>

        <div className='project-comment'>
          <h4>Comments:</h4>
          <ul>
            {project.comments?.map(comment => (
              <li key={comment.id}>
                <strong>{comment.contributor_name}</strong>: {comment.content}
                {localStorage.getItem('authToken') && comment.contributor_name === localStorage.getItem('username') && (
                  <button onClick={() => handleCommentDelete(comment.id)}>Delete</button>
                )}
              </li>
            )) || <li>No comments yet</li>}
          </ul>

          {/* Comment submission form */}
          <form onSubmit={handleCommentSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
            />
            <button type="submit">Submit Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
