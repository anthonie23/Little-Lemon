import React, { useReducer } from "react";

import BookingForm from "../features/Booking/BookingForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchAPI, submitAPI } from "../api/fetchApi";

const Booking = () => {
  const initializeTimes = { availableTimes: fetchAPI(new Date()) };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "updateTime": {
        return { ...state, availableTimes: fetchAPI(new Date(action.payload)) };
      }
      default:
        return;
    }
  };
  const [{ availableTimes }, dispatch] = useReducer(
    updateTimes,
    initializeTimes
  );

  return (
    <>
      <ToastContainer />
      <div className="bg-[#495e57] text-3xl text-white font-semibold">
        <h1 className="mx-auto max-w-5xl py-9 text-center">
          Table Reservation
        </h1>
      </div>
      <BookingForm dispatch={dispatch} availableTimes={availableTimes} />
    </>
  );
};

export default Booking;
