import React from 'react';
import './Hero.css'; // Import the CSS file
import heroImage from '../assets/hero-image.jpg'; // Import the hero image

const Hero = () => {
  return (
    // Use class names for CSS targeting
    <section className="hero-section">
      {/* Replace Video Background with Image Background */}
      <img 
        src={heroImage}
        alt="Background image of Mar Coutinho"
        className="hero-image" // Use a new class for styling
      />
      
      {/* Re-enable Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="hero-name-first">Mar</span> Coutinho
        </h1> 
        <p className="hero-title">Model</p> 
      </div>
    </section>
  );
};

export default Hero;
