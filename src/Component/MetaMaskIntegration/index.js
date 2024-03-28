import React, { Component } from 'react';
import Web3 from 'web3';
import './index.css'; // Import CSS file for styling

class MetaMaskIntegration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      errorMessage: ''
    };
  }

  connectWallet = async () => {
    try {
      if (window.ethereum) {
        console.log('MetaMask extension detected');
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to MetaMask');
        const web3 = new Web3(window.ethereum);
        // Check if connected
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          this.setState({ isConnected: true, errorMessage: '' });
        }
      } else {
        console.log('MetaMask extension not detected');
        this.setState({ isConnected: false, errorMessage: 'MetaMask extension not detected.' });
      }
    } catch (error) {
      console.error('MetaMask connection error:', error);
      this.setState({ isConnected: false, errorMessage: error.message });
    }
  };

  disconnectWallet = () => {
    // For security reasons, there's no direct way to programmatically disconnect from MetaMask.
    // Instruct the user to manually disconnect from the MetaMask extension.
    alert('To disconnect from MetaMask, please click on the MetaMask extension icon in your browser and log out or disconnect from the current account.');
    this.setState({ isConnected: false });
  };

  render() {
    const { isConnected, errorMessage } = this.state;
    return (
      <div className="container">
        {!isConnected && <button className="connect-button" onClick={this.connectWallet}>Connect Wallet</button>}
        {isConnected && <button className="disconnect-button" onClick={this.disconnectWallet}>Disconnect Wallet</button>}
        {isConnected && <p className="success-message">Wallet connected successfully!</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }
}

export default MetaMaskIntegration;
