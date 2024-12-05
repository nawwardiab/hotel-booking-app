import React from "react";
import BookingForm from "../../components/bookingForm/BookingForm";
import "./BookingPage.css";

const BookingPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>
        Complete Your Booking
      </h1>
      <BookingForm />
    </div>
  );
};

export default BookingPage;
