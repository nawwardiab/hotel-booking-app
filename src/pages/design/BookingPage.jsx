import React from "react";
import { useLocation } from "react-router-dom";
import "./BookingPage.css";
import BookingForm from "../../components/bookingForm/BookingForm";

const BookingPage = () => {
  const location = useLocation();
  const { hotelId, selectedRoomType } = location.state || {};

  return (
    <div className="booking-page">
      {/* Booking Header */}
      <header className="booking-header">
        <h1>Book a Trip to Mallorca, Spain</h1>
      </header>

      {/* Booking Form with selected hotel ID */}
      <BookingForm
        selectedHotelId={hotelId}
        selectedRoomType={selectedRoomType}
      />
    </div>
  );
};

export default BookingPage;
