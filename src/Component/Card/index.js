import React, { useState, useEffect } from 'react';
import './index.css';
import { FaBitcoin, FaCoins } from 'react-icons/fa';

function Card() {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [ethereumPrice, setEthereumPrice] = useState(null);
  const [litecoinPrice, setLitecoinPrice] = useState(null);
  const [bitcoin, setBitcoin] = useState(null);
  
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        setBitcoin(data.chartName);
        setBitcoinPrice(data.bpi.USD.rate);
        setEthereumPrice(data.bpi.EUR.rate);
        setLitecoinPrice(data.bpi.GBP.rate);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="main-cards">
         <div className="card">
          <div className="card-inner">
            <h3>Symbol</h3>
            <FaBitcoin className="card_icon bitcoin" />
          </div>
         
          <h1>{bitcoin}</h1>
        </div> 
        <div className="card">
          <div className="card-inner">
            <h3>&#36</h3>
            <FaCoins className="card_icon" />
          </div>
          <h1>{bitcoinPrice}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>&pound</h3>
            <FaCoins className="card_icon" />
          </div>
          <h1>{ethereumPrice}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>&euro</h3>
            <FaCoins className="card_icon" />
          </div>
          <h1>{litecoinPrice}</h1>
        </div> 
       
    </div>
  );
}

export default Card;
