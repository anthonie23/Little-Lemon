import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link
      to="reservations"
      className="bg-[#f4ce14] rounded-full text-center py-2 px-4 w-auto hover:shadow-lg active:shadow-md md:py-3 md:px-6 md:text-lg font-medium text-green-950 hover:bg-yellow-500 duration-300 "
    >
      Reserve a Table
    </Link>
  );
};

export default Button;
