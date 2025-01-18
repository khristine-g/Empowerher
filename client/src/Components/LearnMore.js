import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // For the tick/checkmark icon
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import '../LearnMore.css'; // Import the CSS file for styling

const LearnMore = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <div className="learnmore-grid-container">
      <div className="learnmore-content">
        <h2 className="learnmore-title">
          We Help at Every Step from Concept to Market
        </h2>
        <p className="learnmore-paragraph">
          Discover projects just for you and get great recommendations when you
          select your interests.
        </p>
        <ul className="learnmore-bullets">
          <li>
            <FaCheckCircle className="bullet-icon" />
            Raise funds with a crowdfunding campaign
          </li>
          <li>
            <FaCheckCircle className="bullet-icon" />
            Extend your campaign with InDemand
          </li>
          <li>
            <FaCheckCircle className="bullet-icon" />
            Fast track to the global market
          </li>
        </ul>
        <button
          className="learnmore-submit-button"
          onClick={() => navigate('/submit-project')}
        >
          Submit Your Project
        </button>
      </div>

      <div className="learnmore-image-container">
        <img
          src="https://www.cosmeticdigital.co.uk/wp-content/uploads/2023/09/The-Best-Hashtags-for-Instagram.jpg"
          alt="Creative Project"
          className="learnmore-image"
        />
      </div>
    </div>
  );
};

export default LearnMore;
