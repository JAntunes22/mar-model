import React from 'react';
import { useParallax } from 'react-scroll-parallax'; // Import useParallax
import './About.css';
import aboutImage from '../assets/about/IMG_5810.JPG'; // Import the image

const About = () => {
  // Apply parallax hook to the image container
  const { ref: imageRef } = useParallax({ speed: -20 });

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* Add more paragraphs as needed */}
      </div>
      {/* Apply the ref from the hook to the div containing the image */}
      <div className="about-image" ref={imageRef}>
        <img src={aboutImage} alt="Mar Coutinho" />
      </div>
    </section>
  );
};

export default About;
