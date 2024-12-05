import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import hotelsData from "../../data/hotels-details.json";
import "./FilterOptions.css";
import { SearchContext } from "../../context/SearchContext";

const FilterOptions = () => {
  const { searchParams, setSearchParams, filteredHotels, setFilteredHotels } =
    useContext(SearchContext);
  const [budget, setBudget] = useState([0, 500]);
  const [rating, setRating] = useState(0);

  // Create options from data
  const locationOptions = [
    ...new Set(hotelsData.map((hotel) => hotel.location)),
  ].map((loc) => ({ value: loc, label: loc }));

  const roomTypeOptions = [
    ...new Set(
      hotelsData.flatMap((hotel) => hotel.rooms.map((room) => room.type))
    ),
  ].map((type) => ({ value: type, label: type }));

  // Filter logic
  useEffect(() => {
    const results = hotelsData.filter((hotel) => {
      const isLocationMatch =
        !searchParams.location || hotel.location === searchParams.location;
      const isRoomTypeMatch =
        !searchParams.roomType ||
        hotel.rooms.some((room) => room.type === searchParams.roomType);
      const isDateMatch =
        !searchParams.checkIn || !searchParams.checkOut
          ? true
          : hotel.rooms.some(
            (room) =>
              room.availability.includes(searchParams.checkIn) &&
              room.availability.includes(searchParams.checkOut)
          );
      const isAmenityMatch =
        searchParams.amenities.length === 0
          ? true
          : hotel.rooms.some((room) =>
            searchParams.amenities.every((amenity) =>
              room.amenities.includes(amenity)
            )
          );
      const isBudgetMatch = hotel.rooms.some(
        (room) =>
          room.pricePerNight >= budget[0] && room.pricePerNight <= budget[1]
      );
      const isRatingMatch = hotel.ratings >= rating;

      return (
        isLocationMatch &&
        isRoomTypeMatch &&
        isDateMatch &&
        isAmenityMatch &&
        isBudgetMatch &&
        isRatingMatch
      );
    });

    setFilteredHotels(results);
  }, [searchParams, budget, rating, setFilteredHotels]);

  // Get unique amenities from all rooms across all hotels
  const availableAmenities = [
    ...new Set(
      hotelsData.flatMap((hotel) =>
        hotel.rooms.flatMap((room) => room.amenities)
      )
    ),
  ].sort();

  const handlePriceChange = ([min, max]) => {
    setSearchParams((prev) => ({
      ...prev,
      priceRange: [min, max],
    }));
  };

  const handleRatingChange = (rating) => {
    setSearchParams((prev) => ({
      ...prev,
      ratings: rating,
    }));
  };

  return (
    <aside className="filters">
      <h3>Refine your search</h3>
      <div className="filter-group">
        {/* Budget Range Slider */}
        <div className="filter-section">
          <h4>Price Range</h4>
          <p>
            Budget Range: ${budget[0]} - ${budget[1]}
          </p>
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={budget[1]}
            onChange={(e) => {
              const newMax = parseInt(e.target.value);
              setBudget([budget[0], newMax]);
              handlePriceChange([budget[0], newMax]);
            }}
            className="slider"
          />
        </div>

        {/* Rating Filter */}
        <div className="filter-section">
          <h4>Minimum Rating</h4>
          <p>{rating} stars</p>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={rating}
            onChange={(e) => {
              const newRating = Number(e.target.value);
              setRating(newRating);
              handleRatingChange(newRating);
            }}
          />
        </div>

        {/* Amenities */}
        <div className="amenities-section">
          <h4>Amenities</h4>
          {availableAmenities.map((amenity) => (
            <div className="filter-amenities">
              <label key={amenity} className="amenity-checkbox">
                {amenity}
              </label>
              <input
                type="checkbox"
                checked={searchParams.amenities.includes(amenity)}
                onChange={(e) => {
                  const updatedAmenities = e.target.checked
                    ? [...searchParams.amenities, amenity]
                    : searchParams.amenities.filter((a) => a !== amenity);
                  setSearchParams({
                    ...searchParams,
                    amenities: updatedAmenities,
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterOptions;
