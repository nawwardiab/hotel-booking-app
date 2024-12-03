import React from "react";
import "./RoomDetailPage.css";

const RoomDetailPage = () => {
  return (
    <div className="room-detail-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">StayEasy</div>
        <ul className="navbar-links">
          <li>Search for available rooms</li>
          <li>View search</li>
          <li>Explore</li>
        </ul>
        <button className="login-btn">Log In</button>
      </nav>

      {/* Room Detail Section */}
      <header className="room-header">
        <img
          src="./images/room-header.jpg"
          alt="Cozy Comfort Room"
          className="header-image"
        />
        <div className="room-info">
          <h1>Cozy Comfort (DE)</h1>
          <p>Relaxation Retreat - 17/08/2023</p>
          <p>
            Indulge in comfort at Cozy Comfort, a tranquil haven offering a
            blend of modern amenities and serene ambiance. Unwind in style with
            plush furnishings and impeccable service. Experience true relaxation
            at Relaxation Retreat, where every detail is designed to enhance
            your stay and provide a peaceful escape from the everyday hustle and
            bustle.
          </p>
        </div>
        <div className="booking-widget">
          <h2>Book Now</h2>
          <div className="booking-details">
            <p>Room Details</p>
            <div className="quantity">
              <button>-</button>
              <input type="text" value="2" readOnly />
              <button>+</button>
            </div>
            <p>100€</p>
          </div>
          <button className="select-btn">Select</button>
        </div>
      </header>

      {/* Related Rooms Section */}
      <section className="related-rooms">
        <h2>Explore Related Rooms</h2>
        <div className="related-rooms-grid">
          {[
            { name: "Room 1", image: "./images/related-room-1.jpg" },
            { name: "Room 2", image: "./images/related-room-2.jpg" },
            { name: "Room 3", image: "./images/related-room-3.jpg" },
          ].map((room, index) => (
            <div key={index} className="related-room-card">
              <img src={room.image} alt={room.name} />
              <p>{room.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-left">
          <h3>Connect with StayEasy</h3>
          <input
            type="email"
            placeholder="Enter your email address"
            className="subscribe-input"
          />
          <button className="subscribe-btn">Submit</button>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h4>About</h4>
            <a href="#about">About StayEasy</a>
            <a href="#features">Features</a>
            <a href="#policies">Policies</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <h4>Follow</h4>
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
            <a href="#pinterest">Pinterest</a>
          </div>
          <div className="footer-column">
            <h4>For Hoteliers</h4>
            <a href="#partnerships">Partnerships</a>
            <a href="#collaboration">Collaboration</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RoomDetailPage;
