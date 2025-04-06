import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css'; // Import Flickity CSS
import './Portfolio.css'; // Your custom styles (we'll adjust this)

// Import images from the assets folder
import img1 from '../assets/portfolio/IMG_9939.jpg';
import img2 from '../assets/portfolio/IMG_9924.jpg';
import img3 from '../assets/portfolio/IMG_0114.jpg';
import img4 from '../assets/portfolio/IMG_9905.jpg';
import img5 from '../assets/portfolio/IMG_9911.jpg';
import img6 from '../assets/portfolio/IMG_9910.jpg';
import img7 from '../assets/portfolio/IMG_9908.jpg';
import img8 from '../assets/portfolio/IMG_9907.jpg';
import img9 from '../assets/portfolio/IMG_5820.JPG'; // Note .JPG extension
import img10 from '../assets/portfolio/IMG_5810.JPG'; // Note .JPG extension

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
];

const Portfolio = () => {
  const carouselRef = useRef(null); // Ref to attach Flickity

  useEffect(() => {
    // Ensure the ref is current and Flickity hasn't already been initialized
    if (carouselRef.current && !carouselRef.current.flickityInstance) {
      const flkty = new Flickity(carouselRef.current, {
        // Flickity options
        cellAlign: 'left',
        // contain: true, // Removed: May interfere with smooth wrapAround
        wrapAround: true, // Loop back to the beginning
        pageDots: false, // Hide default dots if using custom arrows
        prevNextButtons: true, // Use Flickity's default buttons initially
        // Consider adding responsive settings if needed:
        // adaptiveHeight: true, // Adjust height based on content
      });

      // Store the instance on the ref to prevent re-initialization
      // and allow potential cleanup
      carouselRef.current.flickityInstance = flkty;

      // Cleanup function to destroy Flickity instance on component unmount
      return () => {
        if (carouselRef.current && carouselRef.current.flickityInstance) {
          carouselRef.current.flickityInstance.destroy();
          carouselRef.current.flickityInstance = null; // Clear instance
        }
      };
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      {/* Main Flickity container - add Flickity classes */}
      <div
        className="main-carousel" // Flickity default class
        ref={carouselRef} // Attach the ref here
      >
        {images.map((imageSrc, index) => (
          /* Each image is a carousel cell */
          <div className="carousel-cell" key={index}>
            {imageSrc && <img src={imageSrc} alt={`Portfolio item ${index + 1}`} />}
          </div>
        ))}
      </div>
      {/* Optional: Custom arrows could be placed outside/overlayed if needed,
          but we'll start with Flickity's built-in ones */}
    </section>
  );
};

export default Portfolio; 