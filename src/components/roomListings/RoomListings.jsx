// src/components/RoomListings.jsx
import hotels from "../../data/hotels-details.json";
import RoomCard from "./RoomCard";
import "./RoomCard";

const RoomListings = () => {
  const allRooms = hotels.flatMap((hotel) =>
    hotel.rooms.map((room) => ({
      ...room,
      hotelName: hotel.name,
      hotelId: hotel.id,
    }))
  );

  return (
    <div className="room-listings">
      {allRooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
  );
};

export default RoomListings;
