import React from 'react';
import './index.css'
const Reports = () => {
  return (
    <div className="report-container">
      <h2 className="report-title">Monthly Report</h2>
      <div className="report-summary">
        <h3>Summary</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          fermentum turpis, ut posuere turpis. Nullam fermentum mi eget erat
          aliquet ullamcorper. Integer non semper odio. Integer euismod augue
          vitae felis fermentum, a pulvinar urna ultricies.
        </p>
      </div>
      <div className="report-details">
        <h3>Details</h3>
        <ul>
          <li>Population statistics for major cities</li>
          <li>Cryptocurrency market analysis</li>
          <li>Economic trends overview</li>
          <li>Regional weather patterns</li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;
