// RoomDetailPage.jsx
import React from "react";
import "./RoomDetailPage.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import hotels from "../../data/hotels-details.json";

/**
 * Component representing the detailed view of a room.
 * Displays room information, booking options, and related rooms.
 * Uses data from the provided dataset.
 */
const RoomDetailPage = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const allRooms = hotels.flatMap((hotel, hotelIndex) =>
    hotel.rooms.map((room, roomIndex) => ({
      ...room,
      hotelName: hotel.name,
      hotelId: hotel.id,
      roomUniqueId: `${hotel.id}-${roomIndex}`,
    }))
  );
  const room = allRooms.find((room) => room.roomUniqueId === roomId);

  // Ensure room exists before rendering details
  if (!room) {
    return <p>Room not found.</p>;
  }

  const { type, description, pricePerNight, photos, amenities, hotelName } =
    room;

  return (
    <div className="room-detail-page">
      <header className="room-header">
        {/* Main image of the room */}
        <img
          className="header-image"
          src={photos[0]}
          alt={`Image of ${type}`}
        />
        <h1>
          {type} - {hotelName}
        </h1>
      </header>

      {/* Room information */}
      <div className="room-info">
        <p>{description ? description : "No description available."}</p>
        <p>Price: ${pricePerNight} per night</p>
        <ul>
          {amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      {/* Booking widget */}
      <div className="booking-widget">
        <h3>Book this room</h3>
        <Link to={`/booking/${roomId}`} className="book-now-btn">
          Book Now
        </Link>
      </div>

      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-btn">
        Go Back
      </button>

      {/* Related rooms section */}
      <section className="related-rooms">
        <h3>Related Rooms</h3>
        <div className="related-rooms-grid">
          {allRooms
            .filter(
              (relatedRoom) =>
                relatedRoom.hotelId === room.hotelId &&
                relatedRoom.type !== type
            )
            .map((relatedRoom) => (
              <div key={relatedRoom.roomUniqueId} className="related-room-card">
                <img
                  src={relatedRoom.photos[0]}
                  alt={`Image of ${relatedRoom.type}`}
                />
                <p>{relatedRoom.type}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default RoomDetailPage;
