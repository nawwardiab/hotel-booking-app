import React, { createContext, useState, useMemo, useEffect } from "react";
import hotelsData from "../data/hotels-details.json";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    ratings: 0,
    amenities: [],
    priceRange: [0, 500],
  });

  const [filteredHotels, setFilteredHotels] = useState([]);

  const filterHotels = (params) => {
    const results = hotelsData.filter((hotel) => {
      if (params.location && hotel.location !== params.location) {
        return false;
      }

      if (
        params.roomType &&
        !hotel.rooms.some((room) => room.type === params.roomType)
      ) {
        return false;
      }

      if (params.checkIn && params.checkOut) {
        const hasAvailableRoom = hotel.rooms.some(
          (room) =>
            room.availability.includes(params.checkIn) &&
            room.availability.includes(params.checkOut)
        );
        if (!hasAvailableRoom) return false;
      }

      if (
        !hotel.rooms.some(
          (room) =>
            room.pricePerNight >= params.priceRange[0] &&
            room.pricePerNight <= params.priceRange[1]
        )
      ) {
        return false;
      }

      if (params.ratings && hotel.ratings < params.ratings) {
        return false;
      }

      if (params.amenities.length > 0) {
        const hasAllAmenities = hotel.rooms.some((room) =>
          params.amenities.every((amenity) => room.amenities.includes(amenity))
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    });

    setFilteredHotels(results);
  };

  useEffect(() => {
    filterHotels(searchParams);
  }, [searchParams]);

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
