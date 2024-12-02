import React from 'react';
import BookingForm from '../components/bookingForm/BookingForm';
import './Booking.css';

const Booking = () => {
  return (
    <div className="booking-page">
      <h1>Make a Reservation</h1>
      <BookingForm />
    </div>
  );
};

export default Booking;
