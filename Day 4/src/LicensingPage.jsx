import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function LicensingPage() {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">Licensing Information</h1>

        <div className="mt-6 prose prose-blue prose-lg text-gray-700">
          <p>Boat House Booking is a platform designed to facilitate the booking of houseboats for customers' recreational purposes. As a user of Boat House Booking, please be aware of the following licensing information:</p>

          <h2 className="text-xl font-semibold mt-4">Licensing Agreement</h2>
          <p>By using Boat House Booking, you agree to adhere to the terms and conditions outlined in our licensing agreement. This agreement governs the use of our platform and any associated services provided by Boat House Booking.</p>

          <h2 className="text-xl font-semibold mt-4">Use of Content</h2>
          <p>All content provided on the Boat House Booking platform, including but not limited to text, images, logos, and graphics, is the property of Boat House Booking or its licensors and is protected by copyright laws.</p>
          <p>Users are prohibited from reproducing, distributing, or modifying any content from the Boat House Booking platform without prior written consent from Boat House Booking.</p>

          <h2 className="text-xl font-semibold mt-4">Liability Disclaimer</h2>
          <p>While Boat House Booking strives to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the platform for any purpose.</p>
          <p>Users acknowledge that any reliance they place on such information is strictly at their own risk.</p>

          <h2 className="text-xl font-semibold mt-4">Contact Information</h2>
          <p>If you have any questions or concerns about our licensing information, please contact us at <a href="mailto:info@boathousebooking.com" className="text-blue-500">info@boathousebooking.com</a>.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default LicensingPage;
