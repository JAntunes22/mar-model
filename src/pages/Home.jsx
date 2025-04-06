import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
// Import other sections later: About, Gallery, Contact, Footer

const Home = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      {/* Render other sections here */}
      {/* <About /> */}
      {/* <Gallery /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
