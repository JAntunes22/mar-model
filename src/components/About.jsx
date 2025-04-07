import React from 'react';
import { Parallax } from 'react-parallax'; // Import Parallax component
import './About.css';
import aboutImage from '../assets/about/about.jpg'; // Import the image

const About = () => {
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
      {/* Use Parallax component here */}
      <div className="about-image-container"> {/* Add a container for sizing */}
        <Parallax
          bgImage={aboutImage}
          strength={300} // Adjust for desired effect
          bgImageAlt="Mar Coutinho"
          className="about-parallax-component" // Add class for potential styling
        >
          {/* The height of the Parallax component is determined by its content.
              Add an empty div with height to define the visible parallax area. */}
          <div className="parallax-content-sizer" />
        </Parallax>
      </div>
    </section>
  );
};

export default About;
