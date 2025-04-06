import React from 'react';
// import { Link } from 'react-router-dom'; // Keep if needed for actual routes later
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Remove the logo Link */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a> {/* Placeholder href */}
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            {/* Assuming Insta links externally */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-link">Insta</a> 
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
