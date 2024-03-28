import React, { useState, useEffect } from 'react';
import './index.css'; // Importing the CSS file for styling

const Crypto = () => {
  // Sample cryptocurrency data (replace with actual data or API call)
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // Sample data fetching (replace with actual data fetching logic)
    const fetchData = async () => {
      // Example data format: [{ name: 'Bitcoin', price: '$57,230' }, { name: 'Ethereum', price: '$3,438' }]
      const data = [
        { name: 'Bitcoin', price: '$57,230' },
        { name: 'Ethereum', price: '$3,438' },
        { name: 'Ripple', price: '$1.20' },
        { name: 'Litecoin', price: '$180' },
        // Add more cryptocurrencies as needed
      ];
      setCryptoData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-container">
      <h2>Cryptocurrency Information</h2>
      <div className="crypto-list">
      <h3>{crypto.name}</h3>
        {cryptoData.map((crypto, index) => (
          <div key={index} className="crypto-item">
            <p>Price: {crypto.price}</p>
            {/* Add more information if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crypto;
