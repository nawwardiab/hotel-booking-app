import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/design/LandingPage";
import HotelDetails from "../pages/HotelDetails";
import RoomSearchPage from "../pages/design/RoomSearchPage";
import RoomDetailPage from "../pages/design/RoomDetailPage";
import BookingPage from "../pages/design/BookingPage";
// import CreditCardForm from '../components/payment/CreditCardForm';
import ConfirmationPage from "../pages/design/ConfirmationPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentPage from "../pages/design/PaymentPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<RoomSearchPage />} />
        <Route path="/room/:roomId" element={<RoomDetailPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
