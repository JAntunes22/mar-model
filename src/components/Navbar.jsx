import React from 'react';
// import { Link } from 'react-router-dom'; // Keep if needed for actual routes later
import './Navbar.css';

const Navbar = () => {

  // Function to handle smooth scroll to top
  const scrollToTop = (event) => {
    event.preventDefault(); // Prevent default anchor jump
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Enable smooth scrolling
    });
  };

  // Function to handle smooth scroll to a specific section
  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor jump
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Remove the logo Link */}
        <ul className="nav-menu">
          <li className="nav-item">
            {/* Scroll to top */}
            <a href="#" className="nav-link" onClick={scrollToTop}>Home</a>
          </li>
          <li className="nav-item">
            {/* Scroll to Portfolio section */}
            <a href="#portfolio" className="nav-link" onClick={(e) => scrollToSection(e, 'portfolio')}>Portfolio</a>
          </li>
          <li className="nav-item">
            {/* Scroll to About section */}
            <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          </li>
          <li className="nav-item">
            {/* Scroll to Instagram section */}
            <a href="#insta-section" className="nav-link" onClick={(e) => scrollToSection(e, 'insta-section')}>Insta</a>
          </li>
          <li className="nav-item">
            {/* Scroll to Contact section */}
            <a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
