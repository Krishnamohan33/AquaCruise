import React from 'react';
import { Link } from 'react-router-dom';
import SpecialOffers from './Specialoffers';
import cruiseVideo from './cruise.mp4';
import UpcomingCruises from './Upcomingcruise';

function Homepage() {
  return (
    <div>
      <SpecialOffers />

      <section className="relative bg-black py-16">
  <div className="container mx-auto text-center">
    <video autoPlay loop controls className="mx-auto" style={{ width: '80%', height: '80vh', objectFit: 'cover' }}>
      <source src={cruiseVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>

      <section className="relative bg-blue-500 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to AquaCruise CloudBooker</h1>
          <p className="text-lg mb-8">Your ultimate destination for hassle-free boating house reservations. Experience seamless booking, real-time availability tracking, and secure payment processing.</p>
          <Link to="/learn-more" className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-blue-200 transition duration-300">Learn More</Link>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="p-4 bg-gray-100 rounded-md">Easy reservation management</li>
            <li className="p-4 bg-gray-100 rounded-md">Real-time availability tracking</li>
            <li className="p-4 bg-gray-100 rounded-md">Secure payment processing</li>
            <li className="p-4 bg-gray-100 rounded-md">User-friendly interface</li>
            <li className="p-4 bg-gray-100 rounded-md">Unique selling points</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <h3 className="text-xl font-bold mb-4">India</h3>
              <ul>
                <li>Mumbai</li>
                <li>Goa</li>
                <li>Kochi</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Dubai</h3>
              <ul>
                <li>Dubai City</li>
                <li>Abu Dhabi</li>
                <li>Sharjah</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Sri Lanka</h3>
              <ul>
                <li>Colombo</li>
                <li>Kandy</li>
                <li>Galle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <UpcomingCruises/>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Customer Feedback</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-md shadow-md">
              <p className="text-lg">"Excellent Customer Service"</p>
              <p className="text-sm text-gray-600 mt-4">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <p className="text-lg">"Affordable and the experience was awesome"</p>
              <p className="text-sm text-gray-600 mt-4">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Homepage;
