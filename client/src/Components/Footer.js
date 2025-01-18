import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>Get Started</h3>
          <ul>
            <li>News</li>
            <li>Explore</li>
            <li>FAQs</li>
            <li>About</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Dashboard</h3>
          <ul>
            <li>Login</li>
            <li>Edit Profile</li>
            <li>Start a Project</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>Education</li>
            <li>Film & Video</li>
            <li>Food</li>
            <li>Games</li>
            <li>Technology</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Join us in our mission! Subscribe to our weekly email campaigns.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Empowerher. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
