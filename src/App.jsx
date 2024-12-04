import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoomSearchPage from './pages/design/RoomSearchPage';
import RoomDetailPage from './pages/design/RoomDetailPage';
import BookingPage from './pages/design/BookingPage';
import PaymentPage from './pages/design/PaymentPage';
import CreditCardForm from './components/payment/CreditCardForm';
import { BookingProvider } from './context/BookingContext';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <BookingProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RoomSearchPage />} />
            <Route path="/search" element={<RoomSearchPage />} />
            <Route path="/room/:roomId" element={<RoomDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/payment" element={<CreditCardForm />} />
            <Route path="*" element={<RoomSearchPage />} />
          </Routes>
        </BrowserRouter>
      </BookingProvider>
    </SearchProvider>
  );
}

export default App;
