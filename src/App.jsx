import React from 'react';
import { BookingProvider } from './context/BookingContext';
import { SearchProvider } from './context/SearchContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <SearchProvider>
      <BookingProvider>
        <AppRoutes></AppRoutes>
      </BookingProvider>
    </SearchProvider>
  );
}

export default App;
