import React from 'react';
import './Hero.css'; // Import the CSS file
import heroVideo from '../assets/hero-video.mp4'; // Re-enable video import

const Hero = () => {
  return (
    // Use class names for CSS targeting
    <section className="hero-section">
      {/* Re-enable Video Background */}
      <video 
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video" 
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
