import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { useBooking } from "../../context/BookingContext";
const ConfirmedBooking = () => {
  const { state } = useBooking();
  const { data } = state;
  const { date, time, firstName, lastName, occassion, guestNumber } = data;

  return (
    <section className="border-t-8 border-[#495e57]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-[#495e57] mt-2 gap-2">
        <BiCheckCircle size={60} />
        <h2 className="text-2xl font-semibold">Booking Confirmed</h2>
        <div className="mt-4 space-y-2">
          <h3 className="border-b border-[#495e57] w-fit font-medium text-md">
            Booking Details:
          </h3>
          <p>Booking No. {Math.floor(100000 + Math.random() * 900000)}</p>
          <p>Name: {`${firstName} ${lastName}`}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Occassion: {occassion}</p>
          <p>Number of Guests: {guestNumber}</p>
        </div>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
