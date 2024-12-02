import{BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import HotelDetails from "../pages/HotelDetails"
import Booking from "../pages/Booking"

const AppRoutes = () => {
  return (
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hotel" element={<HotelDetails />} />
    <Route path="/booking" element={<Booking />} />
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes