import React from 'react';
import { useNavigate } from 'react-router-dom';

const Model = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="landing-container">
        <h1>AI Model Details</h1>
        <p>Explore our cutting-edge AI technologies and model specifications.</p>
        
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

export default Model;