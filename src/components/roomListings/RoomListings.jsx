// src/components/RoomListings.jsx
import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import RoomCard from "./RoomCard";
import "./RoomCard";
import "./RoomListings.css";

const RoomListings = () => {
  const { filteredHotels } = useContext(SearchContext);

  const allRooms = filteredHotels.flatMap((hotel) =>
    hotel.rooms.map((room, index) => ({
      ...room,
      hotelName: hotel.name,
      hotelId: hotel.id,
      ratings: hotel.ratings,
      roomUniqueId: `${hotel.id}-${index}`,
    }))
  );

  return (
    <div className="rooms-grid">
      {allRooms.map((room) => (
        <RoomCard key={room.roomUniqueId} room={room} />
      ))}
    </div>
  );
};

export default RoomListings;
