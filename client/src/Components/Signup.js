import React, { useState } from 'react';
import '../Signup.css'; // Import CSS file for styling

const Signup = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: { username, email, password, password_confirmation: confirmPassword },
        }),
      });

      if (response.ok) {
        window.location.href = '/login'; // Redirect after successful signup
      } else {
        const errorMessage = await response.text();
        setError(`Signup failed: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('An error occurred during signup.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2 className="signup-title">Join Our Community</h2>
        <p className="signup-description">Create an account and start your journey with us.</p>
        <ul className="signup-features">
          <li><span className="tick-icon">✔</span> Share your amazing projects with the world.</li>
          <li><span className="tick-icon">✔</span> Connect with investors and collaborators.</li>
          <li><span className="tick-icon">✔</span> Track your project's progress easily.</li>
        </ul>
      </div>
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={username}
              onChange={handleUserNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {confirmPassword !== password && <p className="input-error-message">Passwords do not match.</p>}
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
