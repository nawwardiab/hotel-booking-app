// src/components/HotelCard.jsx
// import "./HotelCard.css"

const HotelCard = ({ hotel }) => {
  const { name, ratings, rooms, photos } = hotel;

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
      </div>
    </div>
  );
};

export default HotelCard;
