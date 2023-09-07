import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import ReservationPage from "./pages/ReservationPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="reservations" element={<ReservationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
