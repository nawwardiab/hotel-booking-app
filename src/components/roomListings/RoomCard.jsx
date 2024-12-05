import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../../context/BookingContext";
import "./RoomCard.css";

const RoomCard = ({ room, hotel }) => {
  if (!hotel) {
    return null;
  }

  const { updateBookingDetails } = useContext(BookingContext);
  const navigate = useNavigate();

  const { type, pricePerNight, amenities, id, photos } = room;
  const roomUniqueId = id || room.roomUniqueId || room.id || room.uniqueId;

  console.log("Room Object:", room);
  console.log("Room Unique ID (updated):", roomUniqueId);
  console.log("Room ID:", id);

  const handleBookingData = (destination) => {
    // Common function to handle booking data for both buttons
    updateBookingDetails({
      roomType: type,
      hotelName: hotel.name,
      pricePerNight,
      location: hotel.location,
      roomUniqueId,
      photos,
      amenities,
      ratings: hotel.ratings,
      basePrice: pricePerNight,
      roomTotal: pricePerNight,
      serviceFee: 0,
      additionalGuestFee: 0,
      childrenFee: 0,
      nights: 0,
    });
    navigate(destination);
  };

  return (
    <div className="room-card">
      <img src={photos?.[0] || "./images/room-placeholder.jpg"} alt={type} />
      <p>Rating: {hotel?.ratings || "N/A"} ⭐</p>
      <h3 className="room-card-title">
        {type} - {hotel?.name}
      </h3>
      <p>{hotel?.location}</p>
      <p className="room-card-price">${pricePerNight} per night</p>
      <ul className="room-card-features">
        {amenities.slice(0, 3).map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
        {amenities.length > 3 && <li>+ more...</li>}
      </ul>
      <button
        onClick={() => handleBookingData(`/room/${roomUniqueId}`)}
        className="room-card-book-button"
      >
        View Details
      </button>
      <button
        onClick={() => handleBookingData("/booking")}
        className="room-card-book-button"
      >
        Book Now
      </button>
    </div>
  );
};

export default RoomCard;
