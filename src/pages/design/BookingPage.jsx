import React from "react";
import { useLocation } from "react-router-dom";
import "./BookingPage.css";
import BookingForm from "../../components/bookingForm/BookingForm";

const BookingPage = () => {
  const location = useLocation();
  const { hotelId, selectedRoomType } = location.state || {};

  return (
    <div className="booking-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">Explore</div>
        <ul className="navbar-links">
          <li>Search</li>
          <li>View Offer</li>
          <li>Book Now</li>
          <li>Help</li>
        </ul>
        <input
          type="text"
          placeholder="Search for rooms"
          className="search-input"
        />
      </nav>

      {/* Booking Header */}
      <header className="booking-header">
        <h1>Book a Trip to Mallorca, Spain</h1>
      </header>

      {/* Booking Form with selected hotel ID */}
      <BookingForm 
        selectedHotelId={hotelId} 
        selectedRoomType={selectedRoomType}
      />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <p>StayEasy</p>
          <p>Simplifying hotel bookings since 2022</p>
        </div>
        <div className="footer-right">
          <div>
            <p>Support</p>
            <p>Help center</p>
            <p>Customer</p>
            <p>User manual</p>
            <p>Reach out to us</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookingPage;
