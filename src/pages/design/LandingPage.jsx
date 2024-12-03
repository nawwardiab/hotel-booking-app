import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1>Discover your perfect room on StayEasy</h1>
        <p>Find your ideal room among thousands available!</p>
        <div>
          <SearchBar />
          <button onClick={handleSearchClick}>Search</button>
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
    </div>
  );
};

export default LandingPage;
