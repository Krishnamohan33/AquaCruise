import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out z-50">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Boat House</h1>
        <ul>
          <li className="mb-2">
            <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/about" className="block px-4 py-2 rounded hover:bg-gray-700">About</Link>
          </li>
          <li className="mb-2">
            <Link to="/services" className="block px-4 py-2 rounded hover:bg-gray-700">Services</Link>
          </li>
          <li className="mb-2">
            <Link to="/contact" className="block px-4 py-2 rounded hover:bg-gray-700">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
