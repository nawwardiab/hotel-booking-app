import React, { useState, useEffect } from "react";
import Select from "react-select";
import Slider from "react-slider";
import hotelsData from "../../data/hotels-details.json";
import "./FilterOptions.css"


function FilterOptions() {
    const [filteredHotels, setFilteredHotels] = useState(hotelsData);
    const [searchParams, setSearchParams] = useState({
        location: "",
        checkIn: "",
        checkOut: "",
        guests: {
            adults: 1,
            children: 0
        },
        amenities: [],
        budget: [0, 500],
        rating: 0,
        quickFilter: "",
    });

    // Available options
    const locationOptions = [...new Set(hotelsData.map((hotel) => hotel.location))].map((loc) => ({ value: loc, label: loc }));
    const amenitiesOptions = ["Pool", "Gym", "Pets Allowed", "Free WiFi", "Breakfast Included"].map((amenity) => ({
        value: amenity,
        label: amenity,
    }));
    const quickFilters = [
        { value: "Family Friendly", label: "Family Friendly" },
        { value: "Romantic Getaways", label: "Romantic Getaways" },
    ];

    // Handle Filters
    useEffect(() => {
        const results = hotelsData.filter((hotel) => {
            const isLocationMatch = searchParams.location ? hotel.location === searchParams.location : true;
            const isDateMatch = (searchParams.checkIn && searchParams.checkOut)
                ? hotel.rooms.some((room) =>
                    room.availability.includes(searchParams.checkIn) &&
                    room.availability.includes(searchParams.checkOut)
                )
                : true;
            const isAmenityMatch = searchParams.amenities.length
                ? hotel.rooms.some((room) =>
                    searchParams.amenities.every((amenity) => room.amenities.includes(amenity))
                )
                : true;
            const isBudgetMatch = hotel.rooms.some(
                (room) => room.pricePerNight >= searchParams.budget[0] && room.pricePerNight <= searchParams.budget[1]
            );
            const isRatingMatch = hotel.ratings >= searchParams.rating;
            const isQuickFilterMatch = searchParams.quickFilter
                ? hotel.tags && hotel.tags.includes(searchParams.quickFilter)
                : true;

            return isLocationMatch && isDateMatch && isAmenityMatch && isBudgetMatch && isRatingMatch && isQuickFilterMatch;
        });

        setFilteredHotels(results);
    }, [searchParams]);

    return (
        <div className="search-filter">
            <h2>Search and Filter Hotels</h2>

            {/* Location Filter */}
            <Select
                options={locationOptions}
                placeholder="Select Location"
                onChange={(selectedOption) => setSearchParams({ ...searchParams, location: selectedOption?.value || "" })}
            />

            {/* Date Filters */}
            <div className="date-filters">
                <input
                    type="date"
                    placeholder="Check-in Date"
                    onChange={(e) => setSearchParams({ ...searchParams, checkIn: e.target.value })}
                />
                <input
                    type="date"
                    placeholder="Check-out Date"
                    onChange={(e) => setSearchParams({ ...searchParams, checkOut: e.target.value })}
                />
            </div>

            {/* Guest Selection */}
            <div className="guest-selection">
                <h4>Who:</h4>
                <div className="guest-inputs">
                    <div className="guest-input">
                        <label>Adults:</label>
                        <input
                            type="number"
                            min="1"
                            value={searchParams.guests.adults}
                            onChange={(e) => setSearchParams({
                                ...searchParams,
                                guests: {
                                    ...searchParams.guests,
                                    adults: Math.max(1, parseInt(e.target.value) || 1)
                                }
                            })}
                        />
                    </div>
                    <div className="guest-input">
                        <label>Children:</label>
                        <input
                            type="number"
                            min="0"
                            value={searchParams.guests.children}
                            onChange={(e) => setSearchParams({
                                ...searchParams,
                                guests: {
                                    ...searchParams.guests,
                                    children: Math.max(0, parseInt(e.target.value) || 0)
                                }
                            })}
                        />
                    </div>
                </div>
            </div>

            {/* Amenities Filter */}
            <Select
                isMulti
                options={amenitiesOptions}
                placeholder="Select Amenities"
                onChange={(selectedOptions) =>
                    setSearchParams({ ...searchParams, amenities: selectedOptions.map((option) => option.value) })
                }
            />

            {/* Budget Range Slider */}
            <div>
                <p>Budget Range: ${searchParams.budget[0]} - ${searchParams.budget[1]}</p>
                <Slider
                    value={searchParams.budget}
                    onChange={(value) => setSearchParams({ ...searchParams, budget: value })}
                    min={0}
                    max={500}
                    step={10}
                    className="slider"
                />
            </div>

            {/* Star Rating */}
            <div>
                <p>Minimum Rating: {searchParams.rating} stars</p>
                <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.5"
                    value={searchParams.rating}
                    onChange={(e) => setSearchParams({ ...searchParams, rating: Number(e.target.value) })}
                />
            </div>

            {/* Quick Filters */}
            <Select
                options={quickFilters}
                placeholder="Quick Filters"
                onChange={(selectedOption) => setSearchParams({ ...searchParams, quickFilter: selectedOption?.value || "" })}
            />

            {/* Filtered Results */}
            <div className="results">
                <h3>Filtered Hotels:</h3>
                {filteredHotels.length > 0 ? (
                    filteredHotels.map((hotel) => (
                        <div key={hotel.id} className="hotel">
                            <h4>{hotel.name}</h4>
                            <p>Location: {hotel.location}</p>
                            <p>Rating: {hotel.ratings} stars</p>
                        </div>
                    ))
                ) : (
                    <p>No hotels match your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default FilterOptions

