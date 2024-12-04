// src/components/HotelCard.jsx
import { Link } from "react-router-dom";
import "./HotelCard.css"

/**
 * Component representing a hotel card.
 * Displays hotel information including name, rating, and available rooms.
 * Uses hotel data from the dataset.
 */
const HotelCard = ({ hotel }) => {
  const { name, ratings, rooms, photos, id } = hotel;

  return (
    <div className="hotel-card">
      {/* Hotel image */}
      <img
        className="hotel-card-image"
        src={photos[0]}
        alt={`Image of ${name}`}
      />

      {/* Hotel details */}
      <div className="hotel-card-info">
        <h2 className="hotel-card-name">{name}</h2>
        <p className="hotel-card-rating">Rating: {ratings}/5</p>
        <p className="hotel-card-rooms">Rooms Available: {rooms.length}</p>
        <Link to={`/hotel/${id}`} className="hotel-card-view-button">
          View Hotel
        </Link>
        <Link to={`/hotel/${id}/rooms`} className="hotel-card-explore-button">
          Explore Rooms
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
