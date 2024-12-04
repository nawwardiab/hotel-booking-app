import React, { useState } from "react";
import FilterOptions from "../../components/filterOptions/FilterOptions";
import hotelsData from "../../data/hotels-details.json";
import SearchBar from "../../components/searchBar/SearchBar";
import RoomListings from "../../components/roomListings/RoomListings";
import "./RoomSearchPage.css";

const RoomSearchPage = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

  return (
    <div className="room-search-page">
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
          <RoomListings />
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
