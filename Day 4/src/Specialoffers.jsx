import React, { useState, useEffect } from 'react';

function SpecialOffers() {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const text = "New Announcement: Special Offers! Get up to 20% off on selected bookings! Limited time offer. Book now! Contact us for more details: +123-456-7890";
    const wordsArray = text.split(' ');
    setWords(wordsArray);
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 200); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-500 text-white py-4 text-center rounded-lg shadow-lg">
      <p className="text-lg font-bold">
        {words.slice(0, currentIndex).join(' ')}
      </p>
    </div>
  );
}

export default SpecialOffers;
