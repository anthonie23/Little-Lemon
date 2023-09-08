import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm test", () => {
  const dispatch = jest.fn();
  const handleSubmit = jest.fn();
  const register = jest.fn();
  const reset = jest.fn();
  const errors = {};
  const isValid = true;
  const isDirty = true;
  const control = jest.fn();
  const watch = jest.fn();
  const availableTimes = ["17:00", "17:30"];
  const props = {
    availableTimes,
    dispatch,
    register,
    handleSubmit,
    reset,
    errors,
    isValid,
    isDirty,
    control,
    watch,
  };
  const today = new Date().toISOString().split("T")[0];

  test("Renders the BookingForm Heading", () => {
    render(<BookingForm {...props} />);

    const headingElement = screen.getByText("Table Reservation");
    expect(headingElement).toBeInTheDocument();
  });

  test("render all fields correctly", () => {
    render(<BookingForm {...props} />);
    const dateInput = screen.getByLabelText(/Date/);
    const timeInput = screen.getByLabelText(/Time/);
    const numberOfGuestInput = screen.getByLabelText(/Number of Guests/);
    const occassionInput = screen.getByLabelText(/Occassion/);
    const firstNameInput = screen.getByLabelText(/First Name/);
    const lastNameInput = screen.getByLabelText(/Last Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const phoneNumberInput = screen.getByLabelText(/Phone Number/);
    const submitButton = screen.getByRole("button");
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(numberOfGuestInput).toBeInTheDocument();
    expect(occassionInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Booking form can be submitted when there are fields are not empty", () => {
    render(<BookingForm {...props} handleSubmit={handleSubmit} />);

    const dateInput = screen.getByLabelText(/Date/);
    const timeInput = screen.getByLabelText(/Time/);
    const numberOfGuestInput = screen.getByLabelText(/Number of Guests/);
    const occassionInput = screen.getByLabelText(/Occassion/);
    const firstNameInput = screen.getByLabelText(/First Name/);
    const lastNameInput = screen.getByLabelText(/Last Name/);
    const emailInput = screen.getByLabelText(/Email/);
    const phoneNumberInput = screen.getByLabelText(/Phone Number/);
    const submitButton = screen.getByRole("button");

    fireEvent.change(dateInput, { target: { value: today } });
    fireEvent.change(timeInput, { target: { value: "17:00" } });
    fireEvent.change(numberOfGuestInput, { target: { value: "1" } });
    fireEvent.change(occassionInput, { target: { value: "birthday" } });
    fireEvent.change(firstNameInput, { target: { value: "Alexa" } });
    fireEvent.change(lastNameInput, { target: { value: "Miro" } });
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(phoneNumberInput, { target: { value: "111111" } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
