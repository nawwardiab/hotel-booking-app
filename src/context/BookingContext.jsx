import { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState({
    roomType: '',
    hotelName: '',
    pricePerNight: 0,
    location: '',
    roomUniqueId: '',
    photos: [],
    amenities: [],
    ratings: 0,
    basePrice: 0,
    additionalGuestFee: 0,
    childrenFee: 0,
    serviceFee: 0,
    roomTotal: 0,
    nights: 0,
    checkIn: null,
    checkOut: null,
    guests: 1
  });

  const updateBookingDetails = (details) => {
    console.log('Updating booking details with:', details);
    setBookingDetails(prev => ({
      ...prev,
      ...details
    }));
  };

  return (
    <BookingContext.Provider value={{ bookingDetails, updateBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider; 