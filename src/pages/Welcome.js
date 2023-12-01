import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Welcome.css';

import caveImage from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/hospital.png';
import geminiArtImage from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/doc-removebg-preview.png';
import monaLisaImage from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/nurse-removebg-preview.png';
import imh1 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/hospi.png';
import videoBackground from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/welcome1.mp4';

function Welcome() {
  const images = [caveImage, geminiArtImage, monaLisaImage, imh1];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000, // 1 second per slide
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 3 seconds per slide
  };

  return (
    <div className="welcome-container">
      <video autoPlay muted loop id="video-background" className="video-background">
        <source src={videoBackground} type="video/mp4" />
      </video>

      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image">
            <img src={image} alt={`Image ${index + 1}`} className="image-thumbnail" />
          </div>
        ))}
      </Slider>

      <h1 className="welcome-title"><strong>Welcome to SymptoCare</strong></h1>
      <p className="welcome-text">
        Please login to get started in the world of Health care Assistance.
      </p>
      
      <Link to="/login" className="login-button">
        Login
      </Link>
    </div>
  );
}

export default Welcome;
