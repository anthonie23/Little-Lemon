import BookingForm from "../features/Booking/BookingForm";
import { useBooking } from "../context/BookingContext";

const Booking = () => {
  const { handleSubmit } = useBooking();

  return <BookingForm handleSubmit={handleSubmit} />;
};

export default Booking;
