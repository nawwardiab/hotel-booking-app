// src/components/RoomCard.jsx
// import "./RoomCard.css"

const RoomCard = ({ room }) => {
  const { type, pricePerNight, amenities, photos, hotelName } = room;

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

      {/* <button onClick={handleBookNow}>Book {room.type} Now</button> */}
    </div>
  );
};

export default RoomCard;
