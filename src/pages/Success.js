import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import img from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/Order Confirmation.gif';
import '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/pages/success.css';
import videoBackground6 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/welcome1.mp4';

function Success() {
  useEffect(() => {
    // Clean up the confetti effect after 3 seconds
    const timer = setTimeout(() => {
      // Perform any necessary cleanup here
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-container">
      <div className="success-content">
      <video autoPlay muted loop id="video-background" className="video-background">
      <source src={videoBackground6} type="video/mp4" />
    </video>
        <h1>Success!</h1>
        <h1>Medicines have been Purchased!</h1>
        <h1>We Wish you get well soon</h1>
      </div>
      <img src={img} alt="Celebration" className="celebration-gif" style={{ width: '500px' }} />

      {/* "Know the Creators" button at the bottom and styled as a centered button */}
      <div className="know-creators-container">
        <Link to="/creators" className="know-creators-button-bottom">Know the Creators</Link>
      </div>

      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}

export default Success;
