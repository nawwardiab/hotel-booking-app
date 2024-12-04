import React, { useState, useEffect } from "react";
import Select from "react-select";
import hotelsData from "../../data/hotels-details.json";
import './SearchBar.css';

function SearchBar() {
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

    return (
        <div className="search-box" >
            <Select
                options={roomTypeOptions}
                placeholder="Room type"
                onChange={(option) => setSearchParams({ ...searchParams, roomType: option?.value })}
            />
            <Select
                options={locationOptions}
                placeholder="Location"
                onChange={(option) => setSearchParams({ ...searchParams, location: option?.value })}
            />
            <input
                type="date"
                placeholder="Check-in date"
                onChange={(e) => setSearchParams({ ...searchParams, checkIn: e.target.value })}
            />
            <input
                type="date"
                placeholder="Check-out date"
                onChange={(e) => setSearchParams({ ...searchParams, checkOut: e.target.value })}
            />
        </div >
    )
}

export default SearchBar