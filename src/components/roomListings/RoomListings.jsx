// src/components/RoomListings.jsx
import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import RoomCard from "./RoomCard";
import "./RoomCard";
import "./RoomListings.css";

const RoomListings = () => {
  const { filteredHotels, searchParams } = useContext(SearchContext);

  // Only show rooms that match all the search criteria
  const filteredRooms = filteredHotels.flatMap((hotel) =>
    hotel.rooms
      .filter((room) => {
        // Check if room matches price range
        const isPriceInRange =
          room.pricePerNight >= searchParams.priceRange[0] &&
          room.pricePerNight <= searchParams.priceRange[1];

        // Check if room matches room type
        const isRoomTypeMatch =
          !searchParams.roomType || room.type === searchParams.roomType;

        // Check if room matches dates
        const isDateMatch =
          !searchParams.checkIn || !searchParams.checkOut
            ? true
            : room.availability.includes(searchParams.checkIn) &&
              room.availability.includes(searchParams.checkOut);

        // Check if room has all selected amenities
        const hasAllAmenities =
          searchParams.amenities.length === 0 ||
          searchParams.amenities.every((amenity) =>
            room.amenities.includes(amenity)
          );

        return (
          isPriceInRange && isRoomTypeMatch && isDateMatch && hasAllAmenities
        );
      })
      .map((room) => ({
        ...room,
        hotelName: hotel.name,
        hotelId: hotel.id,
        location: hotel.location,
        ratings: hotel.ratings,
        roomUniqueId: `${hotel.id}-${room.type}`,
      }))
  );

  return (
    <div className="rooms-container">
      {filteredRooms.length === 0 ? (
        <div className="no-results">
          <h3>No rooms found matching your search criteria</h3>
          <p>Try adjusting your filters or search parameters</p>
        </div>
      ) : (
        <div className="rooms-grid">
          {filteredRooms.map((room) => (
            <RoomCard key={room.roomUniqueId} room={room} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomListings;
