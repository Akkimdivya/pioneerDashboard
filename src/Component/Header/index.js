import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify } from 'react-icons/bs';
import MetaMaskIntegration from '../MetaMaskIntegration';

import './index.css'

function Header({ OpenSidebar }) {
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const handleBellClick = () => {
        // Add functionality for bell icon click
        console.log('Bell icon clicked!');
        // Example: Show a notification
        alert('You have a new notification!');
    };

    const handleEnvelopeClick = () => {
        // Add functionality for envelope icon click
        console.log('Envelope icon clicked!');
        // Example: Open a messaging window
        window.open('https://example.com/messages', '_blank');
    };

    const handlePersonClick = () => {
        // Add functionality for person icon click
        console.log('Person icon clicked!');
        // Open profile modal
        setIsProfileModalOpen(true);
    };

    const handleCloseProfileModal = () => {
        // Close profile modal
        setIsProfileModalOpen(false);
    };

    return (
      <div>
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>  
            <div className='header-right'>
                <BsFillBellFill className='icon' onClick={handleBellClick} />
                <BsFillEnvelopeFill className='icon' onClick={handleEnvelopeClick} />
                <BsPersonCircle className='icon' onClick={handlePersonClick} />
            </div>
            <div className='metadata'><MetaMaskIntegration/></div>

           
        </header>
         {/* Profile Modal */}
         {isProfileModalOpen && (
                <div className="profile-modal">
                    <div className="profile-content">
                        <span className="close" onClick={handleCloseProfileModal}>&times;</span>
                        <h2>User Profile</h2>
                        <p>This is where your profile information would be displayed.</p>
                    </div>
                </div>
            )}
      </div>  
    );
}

export default Header;
