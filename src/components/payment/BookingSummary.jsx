import React from 'react';
import './BookingSummary.css';

const BookingSummary = ({ bookingDetails }) => {
  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>
      
      <div className="summary-content">
        <div className="summary-item">
          <span>Hotel</span>
          <span>{bookingDetails?.hotelName || 'N/A'}</span>
        </div>
        
        <div className="summary-item">
          <span>Room Type</span>
          <span>{bookingDetails?.roomType || 'N/A'}</span>
        </div>
        
        <div className="summary-item">
          <span>Check-in</span>
          <span>{bookingDetails?.checkIn || 'N/A'}</span>
        </div>
        
        <div className="summary-item">
          <span>Check-out</span>
          <span>{bookingDetails?.checkOut || 'N/A'}</span>
        </div>
        
        <div className="summary-item">
          <span>Guests</span>
          <span>{bookingDetails?.guests || '1'}</span>
        </div>

        <div className="divider"></div>
        
        <div className="summary-item">
          <span>Room Price</span>
          <span>€{bookingDetails?.price || '0'}</span>
        </div>
        
        <div className="summary-item">
          <span>Taxes & Fees</span>
          <span>€{bookingDetails?.taxes || '0'}</span>
        </div>
        
        <div className="summary-total">
          <span>Total</span>
          <span>€{bookingDetails?.total || '0'}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary; 