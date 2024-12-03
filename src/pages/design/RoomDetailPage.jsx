// RoomDetailPage.jsx
import React from "react";
import "./RoomDetailPage.css";
import { useParams } from "react-router-dom";
import hotels from "../../data/hotels-details.json";

/**
 * Component representing the detailed view of a room.
 * Displays room information, booking options, and related rooms.
 * Uses data from the provided dataset.
 */
const RoomDetailPage = () => {
  const { roomId } = useParams();

  // Flatten all rooms and create a unique room identifier
  const allRooms = hotels.flatMap((hotel) =>
    hotel.rooms.map((room) => ({
      ...room,
      hotelName: hotel.name,
      hotelId: hotel.id,
      roomId: `${hotel.id}-${room.type}`, // Create unique room ID
    }))
  );

  // Find room by unique identifier
  const room = allRooms.find((room) => room.roomId === roomId);

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
        <button className="select-btn">Select Dates</button>
      </div>

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
            .map((relatedRoom, index) => (
              <div key={index} className="related-room-card">
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
