import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./LandingPage.css";

const cities = [
  "Paris",
  "New York",
  "Tokyo",
  "Dubai",
  "Sydney",
  "Rio de Janeiro",
];
const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1>Discover your perfect room on StayEasy</h1>
        <p>Find your ideal room among thousands available!</p>
        <SearchBar />
      </header>

      <section className="explore-section">
        <h2>Explore top destinations on</h2>
        <div className="destinations-grid">
          {cities.map((city, index) => (
            <div key={index} className="destination-card">
              <img
                src={`./public/images/cities/${city.toLowerCase()}.jpg`}
                alt={city}
              />
              <p>{city}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="top-rated-hotels">
        <h2>Top-rated hotels on StayEasy</h2>
        <div className="hotels-grid">
          {[
            {
              name: "Harbor Hotel Sydney",
              price: "$150/night",
              image: "./public/images/resorts/rydges-sydney-harbour.jpg",
            },
            {
              name: "Mountain View Resort",
              price: "$250/night",
              image: "./public/images/resorts/mountain-view.jpg",
            },
            {
              name: "Oceanfront Villa Maldives",
              price: "$600/night",
              image: "./public/images/resorts/oceanfront.jpg",
            },
            {
              name: "Riverside Retreat Amazon",
              price: "$180/night",
              image: "./public/images/resorts/riverside.jpg",
            },
            {
              name: "Sunrise Suites Bali",
              price: "$120/night",
              image: "./public/images/resorts/sunrise-suite.jpg",
            },
          ].map((hotel, index) => (
            <div key={index} className="hotel-card">
              <img src={hotel.image} alt={hotel.name} />
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
