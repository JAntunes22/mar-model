import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Import Navbar
// import Footer from './components/Footer'; // Import Footer later

function App() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define other routes later (e.g., /portfolio) */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
