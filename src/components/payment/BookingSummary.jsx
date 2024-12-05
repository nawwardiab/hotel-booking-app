import React from "react";
import "./BookingSummary.css";

const BookingSummary = ({ bookingDetails }) => {
  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>
      <div className="summary-details">
        <p>
          <strong>Hotel:</strong> {bookingDetails?.hotelName || "N/A"}
        </p>
        <p>
          <strong>Room Type:</strong> {bookingDetails?.roomType || "N/A"}
        </p>
        <p>
          <strong>Check-in:</strong>{" "}
          {bookingDetails?.checkIn
            ? new Date(bookingDetails.checkIn).toLocaleDateString()
            : "N/A"}
        </p>
        <p>
          <strong>Check-out:</strong>{" "}
          {bookingDetails?.checkOut
            ? new Date(bookingDetails.checkOut).toLocaleDateString()
            : "N/A"}
        </p>
        <div className="price-breakdown">
          <p>
            <strong>Room Total:</strong> ${bookingDetails?.roomTotal || 0}
          </p>
          <p>
            <strong>Taxes & Fees:</strong> $
            {((bookingDetails?.roomTotal || 0) * 0.1).toFixed(2)}
          </p>
          <h3>
            <strong>Total:</strong> $
            {((bookingDetails?.roomTotal || 0) * 1.1).toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
