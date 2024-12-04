import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';
import PaymentMethods from '../../components/payment/PaymentMethods';
import BookingSummary from '../../components/payment/BookingSummary';
import CreditCardForm from '../../components/payment/CreditCardForm';
import SecurityBadges from '../../components/payment/SecurityBadges';

const PaymentPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state?.bookingDetails;

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to confirmation page with booking details
      navigate('/confirmation', {
        state: {
          bookingDetails,
          bookingId: 'BOK' + Date.now()
        }
      });
    } catch (error) {
      console.error('Payment failed:', error);
      setIsProcessing(false);
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <BookingSummary bookingDetails={bookingDetails} />
        
        <div className="payment-section">
          <h2>Select Payment Method</h2>
          <PaymentMethods 
            selected={selectedPaymentMethod}
            onSelect={setSelectedPaymentMethod}
          />

          <div className="payment-form">
            {selectedPaymentMethod === 'card' && <CreditCardForm />}
            {/* Add other payment method forms as needed */}
          </div>

          <SecurityBadges />

          <button 
            className="pay-now-btn"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Pay Now - €${bookingDetails?.total || '0'}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage; 