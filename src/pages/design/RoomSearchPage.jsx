import React from "react";
import "./RoomSearchPage.css";

const RoomSearchPage = () => {
  return (
    <div className="room-search-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">Hotel Rooms</div>
        <ul className="navbar-links">
          <li>Overview</li>
          <li>Find a room</li>
          <li>About us</li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Search for available rooms and make a reservation</h1>
        <p>Select your room type and preferred dates to book your stay</p>
        <div className="search-box">
          <select>
            <option>Room type / Hotel name</option>
          </select>
          <select>
            <option>Location</option>
          </select>
          <input type="date" placeholder="Check-in date" />
          <button className="search-btn">Search</button>
        </div>
      </header>

      {/* Filters and Results Section */}
      <div className="main-content">
        {/* Filters Sidebar */}
        <aside className="filters">
          <h3>Refine your search</h3>
          <div className="filter-group">
            <input type="text" placeholder="Search" />
            <h4>Room type</h4>
            <ul>
              {[
                "Amenities",
                "Breakfast",
                "Spa services",
                "Pool",
                "Fitness center",
                "Jacuzzi",
                "Sauna",
              ].map((feature, index) => (
                <li key={index}>
                  <label>
                    <input type="checkbox" />
                    {feature}
                  </label>
                </li>
              ))}
            </ul>
            <h4>Room features</h4>
            <ul>
              {["Balcony", "Kitchenette", "Minibar", "Room service"].map(
                (feature, index) => (
                  <li key={index}>
                    <label>
                      <input type="checkbox" />
                      {feature}
                    </label>
                  </li>
                )
              )}
            </ul>
            <h4>View</h4>
            <select>
              <option>Country (Code)</option>
            </select>
            <select>
              <option>City (Code)</option>
            </select>
            <button className="apply-filters-btn">Apply filter</button>
          </div>
        </aside>

        {/* Rooms List */}
        <section className="room-list">
          <div className="results-header">
            <p>Showing 175 room options</p>
            <select>
              <option>Sort by: Price</option>
            </select>
          </div>
          <div className="rooms-grid">
            {[
              { name: "Cozy Retreat", description: "Queen bed suite" },
              { name: "Sunset View", description: "Panoramic oceanfront room" },
              {
                name: "City Lights",
                description: "Downtown skyline view suite",
              },
              {
                name: "Tranquil Haven",
                description: "Spa and wellness retreat",
              },
              { name: "Rustic Charm", description: "Countryside cottage room" },
              { name: "Ocean Breeze", description: "Beachfront villa room" },
              { name: "Mountain Escape", description: "Alpine cabin room" },
              { name: "Urban Oasis", description: "Metropolitan loft room" },
              {
                name: "Serene Sanctuary",
                description: "Nature-inspired eco room",
              },
            ].map((room, index) => (
              <div key={index} className="room-card">
                <img src="./images/room-placeholder.jpg" alt={room.name} />
                <h3>{room.name}</h3>
                <p>{room.description}</p>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="pagination">
            <button>&lt;</button>
            {[1, 2, 3, "…", 20].map((page, index) => (
              <button key={index} className="page-btn">
                {page}
              </button>
            ))}
            <button>&gt;</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoomSearchPage;
