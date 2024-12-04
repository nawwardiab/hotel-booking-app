// RoomDetailPage.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../../context/BookingContext";
import "./RoomDetailPage.css";

const RoomDetailPage = () => {
  const navigate = useNavigate();
  const { bookingDetails, updateBookingDetails } = useContext(BookingContext);

  if (!bookingDetails.roomType) {
    return <div>Room not found</div>;
  }

  const handleBookNow = () => {
    // We already have the details in context, just navigate
    navigate('/booking');
  };

  return (
    <div className="room-detail-container">
      <div className="room-images">
        {bookingDetails.photos?.map((photo, index) => (
          <img key={index} src={photo} alt={`Room view ${index + 1}`} />
        ))}
      </div>

      <div className="room-info">
        <h1>{bookingDetails.roomType}</h1>
        <p className="hotel-name">{bookingDetails.hotelName}</p>
        <p className="location">{bookingDetails.location}</p>
        <div className="rating">
          <span>{bookingDetails.ratings} ⭐</span>
        </div>

        <div className="price-info">
          <h2>${bookingDetails.pricePerNight}</h2>
          <span>per night</span>
        </div>

        <div className="amenities">
          <h3>Amenities</h3>
          <ul>
            {bookingDetails.amenities?.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        <button 
          onClick={handleBookNow}
          className="book-now-button"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetailPage;
