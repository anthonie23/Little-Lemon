import React, { useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import Input from "../../components/Input";
import { useBooking } from "../../context/BookingContext";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const {
    register,
    reset,
    errors,
    isValid,
    isDirty,
    control,
    watch,
    state,
    dispatch,
  } = useBooking();
  const date = watch("date");

  const onSubmit = (data) => {
    reset();
    setFormData(data);
    dispatch({ type: "submitData", payload: data });
    navigate("/confirmed");
  };

  useEffect(() => {
    dispatch({ type: "updateTime", payload: date });
  }, [date, dispatch]);

  return (
    <>
      <div className="bg-[#495e57] text-3xl text-white font-semibold">
        <h1 className="mx-auto max-w-5xl py-9 text-center">
          Table Reservation
        </h1>
      </div>
      <section className="max-w-5xl mx-auto p-6">
        <form
          data-testid="booking-form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reservation Information */}
            <section>
              <h2 className="text-xl font-semibold  border-b-2 border-green-950 pb-2 my-4 w-fit">
                Booking Information
              </h2>

              <Input type="date" label="Date" error={errors?.date?.message}>
                <input
                  id="date"
                  className="border border-green-800/50 md:w-[22rem] w-80 py-2 px-2 rounded-md"
                  type="date"
                  {...register("date", {
                    required: {
                      valueAsDate: true,
                      value: true,
                      message: "Date is required",
                    },
                  })}
                />
              </Input>

              <Input type="time" label="Time" error={errors?.time?.message}>
                <select
                  className="border border-green-800/50 md:w-[22rem] w-80 py-2 px-2 rounded-md"
                  id="time"
                  {...register("time", {
                    required: {
                      value: true,
                      message: "Time is required",
                    },
                  })}
                >
                  {state?.availableTimes?.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </Input>

              <Input
                type="number"
                label="Number of Guests"
                error={errors?.guestNumber?.message}
              >
                <input
                  id="number"
                  className="border border-green-800/50 md:w-[22rem] w-80 py-2 px-2 rounded-md"
                  type="number"
                  min="1"
                  max="10"
                  {...register("guestNumber", {
                    required: {
                      value: true,
                      message: "Number of guests is required",
                    },
                  })}
                />
              </Input>
              <Input
                type="occassion"
                label="Occassion"
                error={errors?.occassion?.message}
              >
                <select
                  id="occassion"
                  className="border border-green-800/50 md:w-[22rem] w-80 py-2 px-2 rounded-md"
                  {...register("occassion", {
                    required: {
                      value: true,
                      message: "Occassion is required",
                    },
                  })}
                >
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Casual">Casual</option>
                  <option value="Others">Others</option>
                </select>
              </Input>
            </section>

            {/* Personal Information */}
            <section>
              <h2 className="text-xl font-semibold  border-b-2 border-green-950 pb-2 my-4 w-fit">
                Personal Information
              </h2>
              <Input
                type="firstName"
                label="First Name"
                error={errors?.firstName?.message}
              >
                <input
                  id="firstName"
                  className="border border-green-800/50 md:w-[22rem] w-80 py-2 px-2 rounded-md"
                  type="text"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "First name is required",
                    },
                  })}
                />
              </Input>
              <Input
                type="lastName"
                label="Last Name"
                error={errors?.lastName?.message}
              >
                <input
                  id="lastName"
                  className="border border-green-800/50 md:w-[22rem] w-80 py-2 px-2 rounded-md"
                  type="text"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Last name is required",
                    },
                  })}
                />
              </Input>
              <Input type="email" label="Email" error={errors?.email?.message}>
                <input
                  id="email"
                  className="border border-green-800/50 md:w-[22rem] w-80 py-2 px-2 rounded-md"
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value:
                        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
                      message: "Input a valid email address",
                    },
                  })}
                />
              </Input>
              <Input
                type="phoneNumber"
                label="Phone Number"
                error={errors?.phoneNumber?.message}
              >
                <input
                  id="phoneNumber"
                  className="border border-green-800/50 md:w-[22rem] w-80 py-2 px-2 rounded-md"
                  type="text"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                  })}
                />
              </Input>
            </section>
          </div>
          <button
            type="submit"
            className="bg-[#f4ce14] inline-block disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-lg md:w-full lg:w-[78%] w-80 text-center mt-2 py-2 px-4  hover:shadow-lg active:shadow-md md:py-3 md:px-6 md:text-lg font-medium text-green-950 hover:bg-yellow-500 duration-300 "
            disabled={!isDirty || !isValid}
          >
            Book Now
          </button>
        </form>
        <DevTool control={control} />
      </section>
    </>
  );
};

export default BookingForm;
