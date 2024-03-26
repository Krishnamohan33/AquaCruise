import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewReservationPage() {
  const [houseType, setHouseType] = useState('Casino Houseboat');
  const [roomType, setRoomType] = useState('Super Deluxe Room');
  const [numGuests, setNumGuests] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to handle house type change
  const handleHouseTypeChange = (event) => {
    setHouseType(event.target.value);
  };

  // Function to handle room type change
  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
  };

  // Function to handle number of guests change
  const handleNumGuestsChange = (event) => {
    setNumGuests(parseInt(event.target.value));
  };

  // Function to handle date selection
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    // Calculate total price based on house type, room type, and number of guests
    calculateTotalPrice(event.target.value, houseType, roomType, numGuests);
  };

  // Function to calculate total price
  const calculateTotalPrice = (date, house, room, guests) => {
    // Dummy calculation logic (replace with actual calculation)
    let price = 1000; // Dummy price, replace with your calculation logic
    // Add logic to calculate price based on selected options
    setTotalPrice(price * guests); // Multiply price by number of guests
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Save selected data to local storage
    localStorage.setItem('houseType', houseType);
    localStorage.setItem('roomType', roomType);
    localStorage.setItem('numGuests', numGuests);
    localStorage.setItem('selectedDate', selectedDate);
    localStorage.setItem('totalPrice', totalPrice);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold">New Houseboat Reservation</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          {/* Reservation form */}
          <form className="p-6">
            {/* House type selection */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Select Houseboat</h2>
              <select
                className="form-select mt-1 block w-full"
                value={houseType}
                onChange={handleHouseTypeChange}
              >
                <option value="Casino Houseboat">Casino Houseboat</option>
                {/* Add more houseboat options here */}
              </select>
            </div>

            {/* Room type selection */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Select Room Type</h2>
              <select
                className="form-select mt-1 block w-full"
                value={roomType}
                onChange={handleRoomTypeChange}
              >
                <option value="Super Deluxe Room">Super Deluxe Room</option>
                {/* Add more room options here */}
              </select>
            </div>

            {/* Number of guests selection */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Number of Guests</h2>
              <input
                type="number"
                className="form-input mt-1 block w-full"
                value={numGuests}
                onChange={handleNumGuestsChange}
                min={1}
              />
            </div>

            {/* Date selection */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Select Date</h2>
              <input
                type="date"
                className="form-input mt-1 block w-full"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>

            {/* Total price */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Total Price</h2>
              <p>{totalPrice}</p>
            </div>

            {/* Submit button */}
            <div className="text-right">
              <Link to="/payment">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default NewReservationPage;
