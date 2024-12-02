// src/components/HotelCard.jsx
import RoomCard from "./RoomCard";

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <h2>{hotel.name}</h2>
      <p>{hotel.location}</p>
      <p>Rating: {hotel.ratings} / 5</p>
      <div className="hotel-photos">
        {hotel.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`${hotel.name} photo ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
      <div className="rooms">
        {hotel.rooms.map((room, index) => (
          <RoomCard key={index} hotelId={hotel.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default HotelCard;
