import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="booking" element={<Booking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
