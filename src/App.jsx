import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <AppRoutes />
    </SearchProvider>
  );
}

export default App;
