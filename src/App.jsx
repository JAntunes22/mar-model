import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Import Navbar
import InstaSection from './components/InstaSection/InstaSection'; // Import InstaSection
import ContactSection from './components/ContactSection/ContactSection'; // Import ContactSection
// import Portfolio from './components/Portfolio'; // No longer needed here
// import Footer from './components/Footer'; // No longer needed here

function App() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar */}
      <main>
        {/* Use Routes to render the correct page component based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define other routes later if needed */}
        </Routes>
        <InstaSection /> {/* Render InstaSection */}
      </main>
      <ContactSection /> {/* Render ContactSection as footer */}
    </Router>
  );
}

export default App;
