import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="landing-container">
        <h1>About Us</h1>
        <p>Learn more about our mission, team, and vision.</p>
        
        <div className="button-container">
          <button 
            className="secondary-button" 
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;