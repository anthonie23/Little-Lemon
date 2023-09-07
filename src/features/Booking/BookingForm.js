// Email Regex "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Input from "../../components/Input";

const BookingForm = ({ availableTimes, dispatch }) => {
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

  const [formData, setFormData] = useState({});
  const date = watch("date");

  const onSubmit = (data) => {
    reset();
    setFormData(data);
    toast.success("Reservation Confirmed!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    dispatch({ type: "updateTime", payload: date });
  }, [date, dispatch]);

  return (
    <>
      <div className="max-w-5xl mx-auto p-6">
        <form
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
                  className="border border-green-800/50 md:w-96 w-80 py-2 px-2 rounded-md"
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
                  className="border border-green-800/50 md:w-96 w-80 py-2 px-2 rounded-md"
                  {...register("time", {
                    required: {
                      value: true,
                      message: "Time is required",
                    },
                  })}
                >
                  {availableTimes.map((time) => (
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
                  className="border border-green-800/50 md:w-96 w-80 py-2 px-2 rounded-md"
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
                  className="border border-green-800/50 md:w-96 w-80 py-2 px-2 rounded-md"
                  {...register("occassion", {
                    required: {
                      value: true,
                      message: "Occassion is required",
                    },
                  })}
                >
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="casual">Casual</option>
                  <option value="others">Others</option>
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
                  className="border border-green-800/50 md:w-96 w-80 py-2 px-2 rounded-md"
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
                  className="border border-green-800/50 md:w-96 w-80 py-2 px-2 rounded-md"
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
                  className="border border-green-800/50 md:w-96 w-80 py-2 px-2 rounded-md"
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
                  className="border border-green-800/50 md:w-96 w-80 py-2 px-2 rounded-md"
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
            className="bg-[#f4ce14] inline-block disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-lg md:w-full lg:w-[83%] w-80 text-center mt-2 py-2 px-4  hover:shadow-lg active:shadow-md md:py-3 md:px-6 md:text-lg font-medium text-green-950 hover:bg-yellow-500 duration-300 "
            disabled={!isDirty || !isValid}
          >
            Submit
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
};

export default BookingForm;
