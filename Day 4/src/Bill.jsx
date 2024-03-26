import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BillPage() {
  const [houseType, setHouseType] = useState('');
  const [roomType, setRoomType] = useState('');
  const [numGuests, setNumGuests] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Function to retrieve data from local storage
    const retrieveDataFromLocalStorage = () => {
      const storedHouseType = localStorage.getItem('houseType');
      const storedRoomType = localStorage.getItem('roomType');
      const storedNumGuests = localStorage.getItem('numGuests');
      const storedSelectedDate = localStorage.getItem('selectedDate');
      const storedTotalPrice = localStorage.getItem('totalPrice');

      setHouseType(storedHouseType);
      setRoomType(storedRoomType);
      setNumGuests(parseInt(storedNumGuests));
      setSelectedDate(storedSelectedDate);
      setTotalPrice(parseInt(storedTotalPrice));
    };

    // Call the function to retrieve data from local storage
    retrieveDataFromLocalStorage();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold">Reservation Bill</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          {/* Bill display */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">Reservation Details</h2>
            <p><strong>Houseboat Type:</strong> {houseType}</p>
            <p><strong>Room Type:</strong> {roomType}</p>
            <p><strong>Number of Guests:</strong> {numGuests}</p>
            <p><strong>Selected Date:</strong> {selectedDate}</p>
            <p><strong>Total Price:</strong> {totalPrice}</p>

            {/* Pay button and link */}
            <div className="mt-4">
              <Link to="/razorpay">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Pay Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BillPage;
