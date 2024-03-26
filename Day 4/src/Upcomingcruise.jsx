import React from 'react';
import { Link } from 'react-router-dom';

function BoathouseCard({ date, duration, origin, destinations, price }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2">Boat House</h3>
      <p className="text-gray-600">{date}</p>
      <p className="text-gray-600">{duration} Nights</p>
      <p className="text-gray-600">{origin}</p>
      <p className="text-gray-600">{destinations.join(' > ')}</p>
      <p className="text-gray-600">From</p>
      <p className="text-xl font-semibold">₹ {price} per guest</p>
      <Link to="/view-boathouse" className="block mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
          View Boat House
        </button>
      </Link>
    </div>
  );
}

function UpcomingBoathouses() {
  const boathouses = [
    { date: "Mon, 01 Apr", duration: 4, origin: "Mumbai", destinations: ["Lakshadweep", "Mumbai"], price: 53286 },
    { date: "Fri, 05 Apr", duration: 3, origin: "Mumbai", destinations: ["Goa", "Mumbai"], price: 41583 },
    { date: "Mon, 08 Apr", duration: 5, origin: "Mumbai", destinations: ["Kochi", "Lakshadweep", "Mumbai"], price: 71712 },
    { date: "Mon, 08 Apr", duration: 2, origin: "Mumbai", destinations: ["Kochi"], price: 24402 },
    { date: "Wed, 10 Apr", duration: 3, origin: "Kochi", destinations: ["Lakshadweep", "Mumbai"], price: 44820 },
  ];

  // Change "Mumbai" to "Boarding House"
  const updatedBoathouses = boathouses.map(boathouse => ({
    ...boathouse,
    origin: boathouse.origin === "Mumbai" ? "Boarding House" : boathouse.origin,
    destinations: boathouse.destinations.map(destination => destination === "Mumbai" ? "Boarding House" : destination)
  }));

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Upcoming Boathouses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {updatedBoathouses.map((boathouse, index) => (
            <Link to={`/view-boathouse/${index}`} key={index}>
              <BoathouseCard
                date={boathouse.date}
                duration={boathouse.duration}
                origin={boathouse.origin}
                destinations={boathouse.destinations}
                price={boathouse.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingBoathouses;
