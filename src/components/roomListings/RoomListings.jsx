// src/components/RoomListings.jsx
import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import RoomCard from "./RoomCard";
import "./RoomListings.css";

const RoomListings = () => {
  const { filteredHotels } = useContext(SearchContext);

  return (
    <div className="rooms-grid">
      {filteredHotels.map((hotel) =>
        hotel.rooms.map((room) => (
          <RoomCard
            key={`${hotel.id}-${room.id}`}
            room={room}
            hotel={hotel}
          />
        ))
      )}
    </div>
  );
};

export default RoomListings;
