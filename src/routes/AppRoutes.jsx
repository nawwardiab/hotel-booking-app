import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/design/LandingPage";
import HotelDetails from "../pages/HotelDetails";
import RoomSearchPage from "../pages/design/RoomSearchPage";
import RoomDetailPage from "../pages/design/RoomDetailPage";
import BookingPage from "../pages/design/BookingPage";
import PaymentPage from "../pages/design/PaymentPage";
import ConfirmationPage from "../pages/design/ConfirmationPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoomListings from "../components/roomListings/RoomListings";
import CreditCardForm from '../components/payment/CreditCardForm';
import LandingPage from "../pages/design/LandingPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<RoomSearchPage />} />
        <Route path="/room/:roomId" element={<RoomDetailPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<CreditCardForm />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
