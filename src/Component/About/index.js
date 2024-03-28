// About.js

import React from 'react';
import './index.css'; // Importing the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>
      <p className="about-content">This is the about page content.</p>
      <div className="dashboard-features">
        <h3>Dashboard Features:</h3>
        <ul>
          <li>Population Statistics</li>
          <li>Cryptocurrency Data</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
