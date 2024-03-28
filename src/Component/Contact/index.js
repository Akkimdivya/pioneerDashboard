import React from 'react';
import './index.css'; // Importing the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div className="contact-item">
          📧 Email: divyaakkim@gmail.com
        </div>
        <div className="contact-item">
          📞 Phone: +91 934767****
        </div>
        <div className="contact-item">
          🏢 Address: 3-9B village , City, Country
        </div>
        <div className="contact-item">
          💬 Social Media: 
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>, 
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer"> Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
