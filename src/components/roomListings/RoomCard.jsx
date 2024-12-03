// src/components/RoomCard.jsx
import { useNavigate } from "react-router-dom";

const RoomCard = ({ hotel, room }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking', { 
      state: { 
        hotelId: hotel.id,
        selectedRoomType: room.type
      } 
    });
  };

  return (
    <div className="room-card">
      <h3>{room.type}</h3>
      <p>Price per Night: €{room.pricePerNight}</p>
      <p>Amenities: {room.amenities.join(", ")}</p>
      <p>Cancellation Policy: {room.cancellationPolicy}</p>
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default RoomCard;
