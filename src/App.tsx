import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Process from './components/Process';
import Commitments from './components/Commitments';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Banner />
      <Process />
      <Pricing />
      <Contact />
      <Commitments />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;