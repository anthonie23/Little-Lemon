import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import ConfirmedBooking from "./features/Booking/ConfirmedBooking";
import { BookingProvider } from "./context/BookingContext";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Appetizer from "./components/Menu/Appetizer";
import MainCourse from "./components/Menu/MainCourse";
import Dessert from "./components/Menu/Dessert";
import Drinks from "./components/Menu/Drinks";
import Order from "./pages/Order";
import About from "./components/About";

const App = () => {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="booking" element={<Booking />} />
            <Route path="menu" element={<Menu />}>
              <Route path="appetizer" element={<Appetizer />} />
              <Route path="main-course" element={<MainCourse />} />
              <Route path="dessert" element={<Dessert />} />
              <Route path="drinks" element={<Drinks />} />
            </Route>
            <Route path="order" element={<Order />} />
            <Route path="login" element={<Login />} />
            <Route path="confirmed" element={<ConfirmedBooking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
};

export default App;
