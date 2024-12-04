import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/design/LandingPage";
import HotelDetails from "../pages/HotelDetails";
import Booking from "../pages/Booking";
import RoomSearchPage from "../pages/design/RoomSearchPage";
import RoomDetailPage from "../pages/design/RoomDetailPage";
import BookingPage from "../pages/design/BookingPage";
import PaymentPage from "../pages/design/PaymentPage";
import ConfirmationPage from "../pages/design/ConfirmationPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<RoomSearchPage />} />
        <Route path="/room" element={<RoomDetailPage />} />
        <Route path="/hotel" element={<HotelDetails />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
