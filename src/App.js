import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import ConfirmedBooking from "./features/Booking/ConfirmedBooking";
import { BookingProvider } from "./context/BookingContext";

const App = () => {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="booking" element={<Booking />} />
            <Route path="confirmed" element={<ConfirmedBooking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
};

export default App;
