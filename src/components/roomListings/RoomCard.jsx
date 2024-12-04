import React from "react";

const RoomCard = ({ room }) => {
  const { type, pricePerNight, amenities, photos, hotelName } = room;

  // Add error handling for image loading
  const handleImageError = (e) => {
    e.target.src = "/images/placeholder.jpg";
    console.log("Failed to load image:", photos[0]);
  };

  return (
    <div className="room-card">
      <img
        className="room-card-image"
        src={photos?.[0] || "/images/placeholder.jpg"}
        alt={`Image of ${type}`}
        onError={handleImageError}
      />

      {/* Room Details */}
      <div className="room-card-info">
        <h3 className="room-card-title">
          {type} - {hotelName}
        </h3>
        <p className="room-card-price">Price per Night: ${pricePerNight}</p>

        <ul className="room-card-features">
          {amenities.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <button className="room-card-book-button">Book Now</button>
    </div>
  );
};

export default RoomCard;
