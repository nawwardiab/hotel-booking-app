import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import RoomCard from "./RoomCard";
import "./RoomListings.css";

const RoomListings = () => {
  const { filteredHotels } = useContext(SearchContext);

  console.log("Filtered Hotels", filteredHotels);
  return (
    <div className="rooms-grid">
      {filteredHotels.map((hotel) =>
        hotel.rooms.map((room, index) => (
          <RoomCard
            key={`${hotel.id}-${room.id || index}`}
            room={room}
            hotel={hotel}
          />
        ))
      )}
    </div>
  );
};

export default RoomListings;
