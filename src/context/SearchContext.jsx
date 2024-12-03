import React, { createContext, useState, useMemo } from "react";
import hotelsData from "../data/hotels-details.json";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    amenities: [],
  });

  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

  // Create memoized options
  const locationOptions = useMemo(
    () =>
      [...new Set(hotelsData.map((hotel) => hotel.location))].map((loc) => ({
        value: loc,
        label: loc,
      })),
    []
  );

  const roomTypeOptions = useMemo(
    () =>
      [
        ...new Set(
          hotelsData.flatMap((hotel) => hotel.rooms.map((room) => room.type))
        ),
      ].map((type) => ({ value: type, label: type })),
    []
  );

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        setSearchParams,
        filteredHotels,
        setFilteredHotels,
        locationOptions,
        roomTypeOptions,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
