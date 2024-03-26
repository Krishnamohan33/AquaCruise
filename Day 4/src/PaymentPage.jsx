import React, { useState, useEffect } from 'react';

function PaymentPage() {
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(1000); // Default amount
  const [processing, setProcessing] = useState(false);
  const [showNotification, setShowNotification] = useState(false); // State for notification

  useEffect(() => {
    // Retrieve payment amount from local storage if available
    const storedAmount = localStorage.getItem('paymentAmount');
    if (storedAmount) {
      setPaymentAmount(parseInt(storedAmount));
    }
  }, []);

  const handlePayment = () => {
    // Simulate payment process here
    setProcessing(true);
    setTimeout(() => {
      setPaymentStatus('success');
      setProcessing(false);
      setShowNotification(true); // Show notification after payment success
    }, 2000); // Simulating a 2-second delay for processing
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Make Payment</h2>
        {processing && (
          <div className="mb-4 text-blue-500">
            Processing your payment...
          </div>
        )}
        {paymentStatus === 'success' && (
          <p className="text-green-600 mb-4">Payment Successful!</p>
        )}
        <p className="mb-4">Amount: {paymentAmount} INR</p>
        
        {/* Bank Details */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold mb-2">Bank Information</h3>
          <p>Bank Name: XYZ Bank</p>
          <p>Account Number: 1234567890</p>
          <p>IFSC Code: ABCD1234</p>
          <p>Account Holder Name: Your Company Name</p>
        </div>
        
        <button
          onClick={handlePayment}
          disabled={processing || paymentStatus === 'success'}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4 ${
            processing || paymentStatus === 'success' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
        
        {/* Notification Pop-up */}
        {showNotification && (
          <div className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md">
            Payment Successful!
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentPage;
