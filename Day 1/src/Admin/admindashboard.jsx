import React, { useState } from 'react';

const AdminDashboard = () => {
  const [boatDetails, setBoatDetails] = useState({ boatName: '', description: '' });
  const [displayedBoatDetails, setDisplayedBoatDetails] = useState([]);
  const [selectedBoatIndex, setSelectedBoatIndex] = useState(null);

  const handlePostBoatDetails = () => {
    if (selectedBoatIndex !== null) {
      // Update existing boat details
      const updatedBoatDetails = [...displayedBoatDetails];
      updatedBoatDetails[selectedBoatIndex] = boatDetails;
      setDisplayedBoatDetails(updatedBoatDetails);
      setSelectedBoatIndex(null);
    } else {
      // Add new boat details
      setDisplayedBoatDetails([...displayedBoatDetails, { ...boatDetails }]);
    }
    setBoatDetails({ boatName: '', description: '' }); // Clear input fields after posting
  };

  const handleEditBoatDetails = (index) => {
    setBoatDetails({ ...displayedBoatDetails[index] });
    setSelectedBoatIndex(index);
  };

  const handleDeleteBoatDetails = (index) => {
    const updatedBoatDetails = [...displayedBoatDetails];
    updatedBoatDetails.splice(index, 1);
    setDisplayedBoatDetails(updatedBoatDetails);
  };

  const handleViewAllBoats = () => {
    // Implement view all boats functionality
    console.log('View All Boats');
  };

  const handleViewAllBookings = () => {
    // Implement view all bookings functionality
    console.log('View All Bookings');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBoatDetails({ ...boatDetails, [name]: value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="boatName">
            Boat Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="boatName"
            type="text"
            name="boatName"
            placeholder="Enter boat name"
            value={boatDetails.boatName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Enter boat description"
            rows="3"
            value={boatDetails.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handlePostBoatDetails}
          >
            {selectedBoatIndex !== null ? 'Update Boat Details' : 'Post Boat Details'}
          </button>
        </div>
      </form>

      {displayedBoatDetails.map((boat, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-md mt-4">
          <h2 className="text-lg font-semibold mb-2">Cruise Details #{index + 1}</h2>
          <p>
            <strong>Cruise Name:</strong> {boat.boatName}
          </p>
          <p>
            <strong>Description:</strong> {boat.description}
          </p>
          <div className="mt-2">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
              onClick={() => handleEditBoatDetails(index)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleDeleteBoatDetails(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleViewAllBoats}
        >
          View All Boats
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleViewAllBookings}
        >
          View All Bookings
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
