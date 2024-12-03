// src/components/RoomCard.jsx
// import "./RoomCard.css"
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  const { type, pricePerNight, amenities, photos, hotelName, roomUniqueId } =
    room;

  // const handleBookNow = () =>
  //   navigate(`/hotels/${hotelId}/rooms/${room.type}/booking`);

  return (
    <div className="room-card">
      {/* Image of the room */}
      <img
        className="room-card-image"
        src={photos[0]}
        alt={`Image of ${type}`}
      />

      {/* Room details */}
      <div className="room-card-info">
        <h3 className="room-card-title">
          {type} - {hotelName}
        </h3>
        <p className="room-card-price">${pricePerNight} per night</p>
        <ul className="room-card-features">
          {/* List features of the room */}
          {amenities.slice(0, 3).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          {amenities.length > 3 && <li>+ more...</li>}
        </ul>
        <Link to={`/room/${roomUniqueId}`} className="room-card-book-button">
          View Details
        </Link>
        <Link to={`/booking/${roomUniqueId}`} className="room-card-book-button">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
