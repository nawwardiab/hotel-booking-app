// src/components/RoomCard.jsx
import "./RoomCard.css";
import { Link } from "react-router-dom";
import hotels from "../../data/hotels-details.json";

const RoomCard = ({ room }) => {
  const {
    type,
    pricePerNight,
    amenities,
    location,
    hotelName,
    roomUniqueId,
    ratings,
  } = room;

  // Add error handling for image loading
  // const handleImageError = (e) => {
  //   e.target.src = "/images/placeholder.jpg";
  //   console.log("Failed to load image:", photos[0]);
  // };

  return (
    <div className="room-card">
      <img
        src={room.photos?.[0] || "./images/room-placeholder.jpg"}
        alt={room.type}
      />
      <p>Rating: {ratings} ⭐</p>

      {/* Room details */}

      <h3 className="room-card-title">
        {type} - {hotelName}
      </h3>
      <p>{location}</p>
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
  );
};

export default RoomCard;
