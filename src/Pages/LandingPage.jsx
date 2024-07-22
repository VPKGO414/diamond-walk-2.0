import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="diamond-container">
        <h1>Welcome to Diam💎nd Walk 2.0</h1>
        <p>The best Diamond Walk one needs to embark on in this life</p>
        <button className="signin-button" onClick={() => alert('Sign In')}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
