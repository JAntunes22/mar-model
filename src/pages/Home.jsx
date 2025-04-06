import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
// Import other sections later: Gallery, Contact, Footer

const Home = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      <About />
      {/* Render other sections here */}
      {/* <Gallery /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
