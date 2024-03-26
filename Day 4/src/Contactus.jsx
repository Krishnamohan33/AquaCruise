import React from 'react';

function ContactUs() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
      <p className="text-xl mb-6">We'd love to hear from you</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contacting Cruise</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block">Name*</label>
                <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md px-4 py-2" />
              </div>
              <div>
                <label htmlFor="email" className="block">Email ID*</label>
                <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md px-4 py-2" />
              </div>
              <div>
                <label htmlFor="phone" className="block">Phone Number*</label>
                <input type="tel" id="phone" name="phone" className="w-full border-gray-300 rounded-md px-4 py-2" />
              </div>
              <div>
                <label htmlFor="address" className="block">Address</label>
                <input type="text" id="address" name="address" className="w-full border-gray-300 rounded-md px-4 py-2" />
              </div>
              <div>
                <label htmlFor="city" className="block">City*</label>
                <input type="text" id="city" name="city" className="w-full border-gray-300 rounded-md px-4 py-2" />
              </div>
              <div>
                <label htmlFor="query" className="block">Type Of Query*</label>
                <select id="query" name="query" className="w-full border-gray-300 rounded-md px-4 py-2">
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="message" className="block">Your Message*</label>
                <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md px-4 py-2"></textarea>
              </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Submit Information</button>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-bold">For Service & Technical Support</h3>
          <p className="mb-4">Please call our toll-free helpline:</p>
          <p className="text-xl mb-4">829 123 8800</p>
          <p>7 DAYS A WEEK, 8 AM TO 8 PM</p>
          <h3 className="text-xl font-bold mt-6">Contact Us</h3>
          <p className="mb-4">Corporate</p>
          <address>
            CRUISE APPLIANCES PVT LTD<br />
            G2 Industry House,<br />
            23B Mahal Industrial Estate,<br />
            Mahakali Caves Road, Andheri (E),<br />
            Mumbai 400093, India
          </address>
          <p className="mb-4 mt-6">Works</p>
          <address>
            CRUISE ELECTRIC PVT LTD<br />
            Survey No. 221/1,<br />
            Gala No. A5,6,17,18,19,<br />
            Zero Tax Industrial Estate,<br />
            Dadra, Silvassa - 396230
          </address>
          <p className="mt-6">Connect</p>
          <p className="text-xl">+91 22 4242 2222</p>
          <p>info@cruiseac.com</p>
          <p><a href="https://www.cruiseac.com" className="text-blue-500">www.cruiseac.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
