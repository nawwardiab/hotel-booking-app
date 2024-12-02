// src/components/RoomCard.jsx
import { useNavigate } from "react-router-dom";

const RoomCard = ({ hotelId, room }) => {
  const navigate = useNavigate();

  const handleBookNow = () =>
    navigate(`/hotels/${hotelId}/rooms/${room.type}/booking`);

  return (
    <div className="room-card">
      <h3>{room.type}</h3>
      <p>Price per Night: ${room.pricePerNight}</p>
      <p>Amenities: {room.amenities.join(", ")}</p>
      <p>Cancellation Policy: {room.cancellationPolicy}</p>
      <div className="room-photos">
        {room.photos.map((photo, idx) => (
          <img
            key={idx}
            src={photo}
            alt={`${room.type} photo ${idx + 1}`}
            loading="lazy"
          />
        ))}
      </div>
      <button onClick={handleBookNow}>Book {room.type} Now</button>
    </div>
  );
};

export default RoomCard;
