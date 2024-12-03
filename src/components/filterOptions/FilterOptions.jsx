import React, { useState, useEffect } from "react";
import Select from "react-select";
import hotelsData from "../../data/hotels-details.json";
import "./FilterOptions.css";

const FilterOptions = ({ setFilteredHotels }) => {
    const [budget, setBudget] = useState([0, 500]);
    const [rating, setRating] = useState(0);
    const [searchParams, setSearchParams] = useState({
        location: "",
        checkIn: "",
        checkOut: "",
        roomType: "",
        amenities: [],
    });

    // Create options from data
    const locationOptions = [...new Set(hotelsData.map((hotel) => hotel.location))]
        .map((loc) => ({ value: loc, label: loc }));

    const roomTypeOptions = [...new Set(hotelsData.flatMap(hotel =>
        hotel.rooms.map(room => room.type)
    ))].map(type => ({ value: type, label: type }));

    // Filter logic
    useEffect(() => {
        const results = hotelsData.filter((hotel) => {
            const isLocationMatch = !searchParams.location || hotel.location === searchParams.location;
            const isRoomTypeMatch = !searchParams.roomType ||
                hotel.rooms.some(room => room.type === searchParams.roomType);
            const isDateMatch = (!searchParams.checkIn || !searchParams.checkOut) ? true :
                hotel.rooms.some(room =>
                    room.availability.includes(searchParams.checkIn) &&
                    room.availability.includes(searchParams.checkOut)
                );
            const isAmenityMatch = searchParams.amenities.length === 0 ? true :
                hotel.rooms.some(room =>
                    searchParams.amenities.every(amenity =>
                        room.amenities.includes(amenity)
                    )
                );
            const isBudgetMatch = hotel.rooms.some(
                room => room.pricePerNight >= budget[0] && room.pricePerNight <= budget[1]
            );
            const isRatingMatch = hotel.ratings >= rating;

            return isLocationMatch && isRoomTypeMatch && isDateMatch &&
                isAmenityMatch && isBudgetMatch && isRatingMatch;
        });

        setFilteredHotels(results);
    }, [searchParams, budget, rating, setFilteredHotels]);

    return (
        <aside className="filters">
            <h3>Refine your search</h3>
            <div className="filter-group">

                {/* Budget Range Slider */}
                <div className="filter-section">
                    <h4>Price Range</h4>
                    <p>Budget Range: ${budget[0]} - ${budget[1]}</p>
                    <input
                        type="range"
                        min="0"
                        max="500"
                        step="10"
                        value={budget[1]}
                        onChange={(e) => setBudget([budget[0], parseInt(e.target.value)])}
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
                        onChange={(e) => setRating(Number(e.target.value))}
                    />
                </div>

                {/* Amenities */}
                <div className="amenities-section">
                    <h4>Amenities</h4>
                    {[
                        "Pool",
                        "Gym",
                        "Free WiFi",
                        "Breakfast Included",
                        "Mini Bar",
                        "Ocean View",
                        "Mountain View",
                        "City View"
                    ].map((amenity) => (
                        <label key={amenity}>
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    const updatedAmenities = e.target.checked
                                        ? [...searchParams.amenities, amenity]
                                        : searchParams.amenities.filter(a => a !== amenity);
                                    setSearchParams({ ...searchParams, amenities: updatedAmenities });
                                }}
                            />
                            {amenity}
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default FilterOptions;

