import React, { useReducer } from "react";

import BookingForm from "../features/Booking/BookingForm";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { fetchAPI } from "../api/fetchApi";

const Booking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
    control,
    watch,
  } = useForm({
    defaultValues: {
      date: new Date(),
    },
  });
  const initializeTimes = { availableTimes: fetchAPI(new Date()), data: {} };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "updateTime": {
        return { ...state, availableTimes: fetchAPI(new Date(action.payload)) };
      }
      case "submitData": {
        return { ...state, data: action.payload };
      }
      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  console.log(state);
  return (
    <>
      <ToastContainer />
      <BookingForm
        dispatch={dispatch}
        availableTimes={state.availableTimes}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        errors={errors}
        isValid={isValid}
        isDirty={isDirty}
        control={control}
        watch={watch}
      />
    </>
  );
};

export default Booking;
