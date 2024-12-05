import React from 'react';
import { useLocation } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import BookingPDF from '../../components/pdf/BookingPDF';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const bookingDetails = location.state?.bookingDetails;

  if (!bookingDetails) {
    return <div className="confirmation-page">No booking details found</div>;
  }

  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <div className="success-message">
          <div className="checkmark">✓</div>
          <h1>Payment Successful!</h1>
          <p>Booking ID: {bookingDetails.bookingId}</p>
        </div>

        <div className="booking-details">
          <h2>Booking Details</h2>
          <p><strong>Hotel:</strong> {bookingDetails.hotelName}</p>
          <p><strong>Room Type:</strong> {bookingDetails.roomType}</p>
          <p><strong>Check-in:</strong> {bookingDetails.checkIn?.toLocaleDateString()}</p>
          <p><strong>Check-out:</strong> {bookingDetails.checkOut?.toLocaleDateString()}</p>
          <p><strong>Total Paid:</strong> ${(bookingDetails.roomTotal * 1.1).toFixed(2)}</p>
        </div>

        <div className="download-section">
          {bookingDetails && (
            <PDFDownloadLink
              document={<BookingPDF bookingDetails={bookingDetails} />}
              fileName={`booking-${bookingDetails.bookingId}.pdf`}
              className="download-btn"
            >
              {({ loading }) => 
                loading ? 'Generating PDF...' : 'Download Booking Confirmation'
              }
            </PDFDownloadLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage; 