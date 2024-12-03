import React from "react";
import "./BookingPage.css";

const BookingPage = () => {
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

      {/* Main Content */}
      <div className="main-content">
        {/* Left Section: Forms */}
        <div className="form-section">
          <div className="form-card">
            <h2>Guest Details</h2>
            <div className="form-group">
              <label>Primary</label>
              <input type="text" placeholder="Enter Full Name" />
              <input type="date" placeholder="Select Birthdate" />
            </div>
            <div className="form-group">
              <label>Additional</label>
              <input type="text" placeholder="Enter Full Name" />
              <input type="date" placeholder="Select Birthdate" />
            </div>
          </div>
          <div className="form-card">
            <h2>Billing Details</h2>
            <input type="text" placeholder="Enter Street Address" />
            <input type="text" placeholder="Enter Post Code" />
            <input type="text" placeholder="Enter City" />
          </div>
          <div className="form-card">
            <h2>Contact Information</h2>
            <input type="email" placeholder="Enter Email Address" />
            <div className="phone-input-group">
              <input type="text" placeholder="Enter Prefix" />
              <input type="text" placeholder="Enter Phone Number" />
            </div>
          </div>
        </div>

        {/* Right Section: Booking Summary */}
        <div className="summary-section">
          <h2>Location:</h2>
          <p>Torre de Paris, Mallorca</p>
          <h2>Accommodation:</h2>
          <p>Grand Beach Hotel</p>
          <h2>Rating:</h2>
          <p>4</p>
          <h2>Room Type:</h2>
          <p>Standard Double Room</p>
          <h2>Transfer Type:</h2>
          <p>Flight Details</p>
          <h2>Check-In Date:</h2>
          <p>10/08 - 17/08/2023</p>
          <div className="cost-breakdown">
            <p>Additional Guest Fee: €500</p>
            <p>Travel Fee: €100</p>
            <p>Service Fee: €200</p>
            <h3>TOTAL COST: €1420</h3>
          </div>
          <button className="confirm-btn">Confirm Booking</button>
        </div>
      </div>

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
