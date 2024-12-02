import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import Booking from "./pages/Booking";
import BookingForm from './components/bookingForm/BookingForm';

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Welcome to our Project</h1>
                <AppRoutes />
            </div>
        </BrowserRouter>
    );
}

export default App;
