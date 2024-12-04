import React from 'react';
import { useLocation } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import './ConfirmationPage.css';
import BookingPDF from '../../components/pdf/BookingPDF';
import QRCode from 'react-qr-code';

const ConfirmationPage = () => {
  const location = useLocation();
  const bookingDetails = location.state?.bookingDetails;
  const bookingId = location.state?.bookingId || 'BOK' + Date.now();

  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        {/* Success Message */}
        <div className="success-message">
          <div className="checkmark">✓</div>
          <h1>Thank You for Your Booking!</h1>
          <p>Booking ID: {bookingId}</p>
        </div>

        {/* Booking Summary */}
        <div className="confirmation-summary">
          <h2>Booking Details</h2>
          <div className="summary-details">
            <p><strong>Guest Name:</strong> {bookingDetails?.fullName}</p>
            <p><strong>Hotel:</strong> {bookingDetails?.hotelName}</p>
            <p><strong>Room Type:</strong> {bookingDetails?.roomType}</p>
            <p><strong>Check-in:</strong> {bookingDetails?.checkIn}</p>
            <p><strong>Check-out:</strong> {bookingDetails?.checkOut}</p>
            <p><strong>Total Paid:</strong> €{bookingDetails?.total}</p>
          </div>
        </div>

        {/* Download Section */}
        <div className="download-section">
          <PDFDownloadLink
            document={<BookingPDF bookingDetails={bookingDetails} />}
            fileName={`booking-${bookingId}.pdf`}
          >
            {({ loading }) => (
              <button className="download-btn">
                {loading ? 'Generating PDF...' : 'Download Booking Confirmation'}
              </button>
            )}
          </PDFDownloadLink>
        </div>

        {/* QR Code */}
        <div className="qr-code-section">
          <QRCode value={bookingId} />
          <p>Scan for quick check-in</p>
        </div>

        {/* Additional Actions */}
        <div className="additional-actions">
          <button className="modify-btn">Modify Booking</button>
          <button className="support-btn">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage; 