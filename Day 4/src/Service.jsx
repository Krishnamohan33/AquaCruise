import React from 'react';
import cruiseVideo from './service.mp4';
import Navbar from './Navbar';
import Footer from './Footer';

const Services = () => {
  return (
    <div>
      <Navbar/>
    <section className="relative bg-black py-16">
      <div className="container mx-auto text-center">
        <video autoPlay loop controls className="mx-auto" style={{ width: '80%', height: '80vh', objectFit: 'cover' }}>
          <source src={cruiseVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-white text-2xl font-bold mb-4">Bringing Wanderlust to Life with Unforgettable Retail Experiences</h2>
        <p className="text-white">The World’s Leading Retail Curator at Sea</p>
        <p className="text-white">Sailing on more than 100 cruise ships worldwide, our retail shops offer irresistible duty-free shopping. But we don’t just sell merchandise; we create unique shopping experiences for every guest on board.</p>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Services;
