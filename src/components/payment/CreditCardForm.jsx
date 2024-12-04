import React, { useState, useContext } from 'react';
import ReactCardFlip from 'react-card-flip';
import { BookingContext } from '../../context/BookingContext';
import './CreditCardForm.css';

const CreditCardForm = () => {
  const { bookingDetails } = useContext(BookingContext);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="payment-container">
      {/* Booking Summary Section */}
      <div className="booking-summary">
        <h2>Booking Summary</h2>
        <div className="summary-details">
          <p><strong>Hotel:</strong> {bookingDetails?.hotelName}</p>
          <p><strong>Room Type:</strong> {bookingDetails?.roomType}</p>
          <p><strong>Check-in:</strong> {bookingDetails?.checkIn?.toLocaleDateString()}</p>
          <p><strong>Check-out:</strong> {bookingDetails?.checkOut?.toLocaleDateString()}</p>
          <div className="price-breakdown">
            <p><strong>Room Total:</strong> ${bookingDetails?.roomTotal}</p>
            <p><strong>Taxes & Fees:</strong> ${(bookingDetails?.roomTotal * 0.1).toFixed(2)}</p>
            <h3><strong>Total:</strong> ${(bookingDetails?.roomTotal * 1.1).toFixed(2)}</h3>
          </div>
        </div>
      </div>

      {/* Credit Card Form Section */}
      <div className="credit-card-form">
        <h2>Payment Details</h2>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          {/* Front of the card */}
          <div className="card-front">
            <div className="card-number">{cardData.number || '•••• •••• •••• ••••'}</div>
            <div className="card-name">{cardData.name || 'FULL NAME'}</div>
            <div className="card-expiry">{cardData.expiry || 'MM/YY'}</div>
          </div>

          {/* Back of the card */}
          <div className="card-back">
            <div className="card-stripe"></div>
            <div className="card-cvc">{cardData.cvc || '•••'}</div>
          </div>
        </ReactCardFlip>

        <form className="card-form">
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              value={cardData.number}
              onChange={handleInputChange}
              onFocus={() => setIsFlipped(false)}
              maxLength="16"
            />
          </div>

          <div className="form-group">
            <label>Cardholder Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name on Card"
              value={cardData.name}
              onChange={handleInputChange}
              onFocus={() => setIsFlipped(false)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardData.expiry}
                onChange={handleInputChange}
                onFocus={() => setIsFlipped(false)}
                maxLength="4"
              />
            </div>
            <div className="form-group">
              <label>CVC</label>
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={cardData.cvc}
                onChange={handleInputChange}
                onFocus={() => setIsFlipped(true)}
                maxLength="3"
              />
            </div>
          </div>
          <button type="submit" className="pay-button">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm; 