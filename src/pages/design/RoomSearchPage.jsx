import React, { useState } from "react";
import FilterOptions from "../../components/filterOptions/FilterOptions";
import hotelsData from "../../data/hotels-details.json";
import SearchBar from "../../components/searchBar/SearchBar";
import "./RoomSearchPage.css";

const RoomSearchPage = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

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
        <SearchBar />
      </header>

      {/* Main Content */}
      <div className="main-content">
        <FilterOptions
          filteredHotels={filteredHotels}
          setFilteredHotels={setFilteredHotels}
        />

        {/* Rooms List */}
        <section className="room-list">
          <div className="results-header">
            <p>Showing {filteredHotels.length} options</p>
            <select>
              <option>Sort by: Price</option>
            </select>
          </div>
          <div className="rooms-grid">
            {filteredHotels.map((hotel) => (
              hotel.rooms.map((room, roomIndex) => (
                <div key={`${hotel.id}-${roomIndex}`} className="room-card">
                  <img
                    src={room.photos?.[0] || "./images/room-placeholder.jpg"}
                    alt={room.type}
                  />
                  <h3>{hotel.name} - {room.type}</h3>
                  <p>{hotel.location}</p>
                  <p>Price: ${room.pricePerNight} per night</p>
                  <p>Rating: {hotel.ratings} ⭐</p>
                </div>
              ))
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
