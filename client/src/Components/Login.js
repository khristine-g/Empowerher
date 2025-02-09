import React, { useState } from 'react';
import '../Login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Save token to localStorage
        localStorage.setItem('authToken', data.token);
        navigate('/');
      } else {
        const errorMessage = await response.text();
        setError(`Login failed: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-description">Log in to access your dashboard and manage your projects.</p>
        <ul className="login-features">
          <li><span className="tick-icon">✔</span> Manage your projects seamlessly.</li>
          <li><span className="tick-icon">✔</span> Track funding progress and contributors.</li>
          <li><span className="tick-icon">✔</span> Stay connected with your supporters.</li>
        </ul>
      </div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={handleEmailChange}
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              disabled={loading}
            />
          </div>
          <Link to="/forgot-password">Forgot Password?</Link>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
