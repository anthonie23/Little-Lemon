// Email Regex "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputContainer from "../components/InputContainer";
const ReservationPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
    control,
  } = useForm();

  const [formData, setFormData] = useState({});

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
  console.log(formData);

  return (
    <>
      <ToastContainer />
      <div className="bg-[#495e57] text-3xl text-white font-semibold">
        <h1 className="mx-auto max-w-5xl py-9 text-center">
          Table Reservation
        </h1>
      </div>
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
              <InputContainer
                type="date"
                label="Date"
                error={errors?.date?.message}
              >
                <input
                  className="border border-green-800/50 md:w-96 w-80 py-2 px-2 rounded-md"
                  type="date"
                  {...register("date", {
                    required: {
                      value: true,
                      message: "Date is required",
                    },
                  })}
                />
              </InputContainer>

              <InputContainer
                type="time"
                label="Time"
                error={errors?.time?.message}
              >
                <select
                  className="border border-green-800/50 md:w-96 w-80 py-2 px-2 rounded-md"
                  {...register("time", {
                    required: {
                      value: true,
                      message: "Time is required",
                    },
                  })}
                >
                  <option value="4:30">4:30 PM</option>
                  <option value="5:00">5:00 PM</option>
                  <option value="5:30">5:30 PM</option>
                  <option value="6:00">6:00 PM</option>
                  <option value="6:30">6:30 PM</option>
                  <option value="7:00">7:00 PM</option>
                  <option value="7:30">7:30 PM</option>
                  <option value="8:00">8:00 PM</option>
                  <option value="8:30">8:30 PM</option>
                </select>
              </InputContainer>

              <InputContainer
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
              </InputContainer>
              <InputContainer
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
              </InputContainer>
            </section>

            {/* Personal Information */}
            <section>
              <h2 className="text-xl font-semibold  border-b-2 border-green-950 pb-2 my-4 w-fit">
                Personal Information
              </h2>
              <InputContainer
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
              </InputContainer>
              <InputContainer
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
              </InputContainer>
              <InputContainer
                type="email"
                label="Email"
                error={errors?.email?.message}
              >
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
              </InputContainer>
              <InputContainer
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
              </InputContainer>
            </section>
          </div>
          <button
            type="submit"
            className="bg-[#f4ce14] inline-block disabled:bg-zinc-400 disabled:cursor-not-allowed rounded-lg md:w-full lg:w-[83%] w-80 text-center mt-2 py-2 px-4  hover:shadow-lg active:shadow-md md:py-3 md:px-6 md:text-lg font-medium text-green-950 hover:bg-yellow-500 duration-300 "
            // disabled={!isDirty || !isValid}
          >
            Submit
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
};

export default ReservationPage;
