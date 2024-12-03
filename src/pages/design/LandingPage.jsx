import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-brand">StayEasy</div>
        <ul className="navbar-links">
          <li>Search for</li>
          <li>View search</li>
          <li>Explore</li>
        </ul>
        <div className="navbar-actions">
          <button className="search-btn">Search</button>
          <button className="view-btn">View</button>
        </div>
      </nav>

      <header className="hero-section">
        <h1>Discover your perfect room on StayEasy</h1>
        <p>Find your ideal room among thousands available!</p>
        <div className="search-box">
          <input type="text" placeholder="Check availability" />
          <input type="text" placeholder="Pick check-in" />
          <input type="text" placeholder="Pick check-out" />
          <input type="text" placeholder="Select guests" />
          <button className="search-icon-btn">→</button>
        </div>
      </header>

      <section className="explore-section">
        <h2>Explore top destinations on</h2>
        <div className="destinations-grid">
          {[
            "Paris",
            "New York",
            "Tokyo",
            "Dubai",
            "Sydney",
            "Rio de Janeiro",
          ].map((city, index) => (
            <div key={index} className="destination-card">
              <img src={`./images/${city.toLowerCase()}.jpg`} alt={city} />
              <p>{city}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="top-rated-hotels">
        <h2>Top-rated hotels on StayEasy</h2>
        <div className="hotels-grid">
          {[
            { name: "Harbor Hotel Sydney", price: "$150/night" },
            { name: "Mountain View Resort", price: "$250/night" },
            { name: "Oceanfront Villa Maldives", price: "$600/night" },
            { name: "Riverside Retreat Amazon", price: "$180/night" },
            { name: "Sunrise Suites Bali", price: "$120/night" },
          ].map((hotel, index) => (
            <div key={index} className="hotel-card">
              <img src="./images/hotel.jpg" alt={hotel.name} />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>{hotel.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="exclusive-deals">
        <h2>Exclusive deals for you!</h2>
        <p>
          Unlock special offers and discounts for your next stay! Join our
          StayEasy Club now!
        </p>
        <button className="join-now-btn">Join now</button>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <p>StayEasy</p>
          <p>Simplifying hotel bookings since 2022</p>
        </div>
        <div className="footer-right">
          <p>Support</p>
          <p>Help center</p>
          <p>Customer</p>
          <p>User manual</p>
          <p>Reach out to us</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
