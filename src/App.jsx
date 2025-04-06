import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Import Navbar
// import Portfolio from './components/Portfolio'; // No longer needed here
// import Footer from './components/Footer'; // Import Footer later

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
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
