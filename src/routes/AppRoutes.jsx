import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HotelDetails from '../pages/HotelDetails';
import Booking from '../pages/Booking';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel/:id" element={<HotelDetails />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/bookingform" element={<Booking />} />
    </Routes>
  );
};

export default AppRoutes;