// src/components/RoomListings.jsx
import hotelsData from "../../data/hotels.json";
import HotelCard from "./HotelCard";

const RoomListings = () => {
  if (!hotelsData || hotelsData.length === 0) {
    return <p>No hotels available at the moment. Please try again later.</p>;
  }

  return (
    <div className="room-listings">
      {hotelsData.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default RoomListings;
