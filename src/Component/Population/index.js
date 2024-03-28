import React from 'react';
import './index.css'; // Importing the CSS file for styling

const Population = () => {
  // Sample population data
  const cities = [
    { name: 'New York City', population: '8.4 million' },
    { name: 'Los Angeles', population: '3.9 million' },
    { name: 'Chicago', population: '2.7 million' },
    { name: 'Houston', population: '2.3 million' },
    { name: 'Phoenix', population: '1.7 million' },
  ];

  return (
    <div className="population-container">
      <h2>Population Statistics</h2>
      <div className="population-list">
        {cities.map(city => (
          <div key={city.name} className="city-item">
            <h3>{city.name}</h3>
            <p>Population: {city.population}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Population;
