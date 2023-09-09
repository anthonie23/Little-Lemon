import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const navlinkStyle =
    "py-4 px-4 border-b border-gray-500/50 hover:bg-yellow-400";

  return (
    <nav className="flex justify-center gap-24 items-center text-green-900 py-2 lg:py-0 md:px-6 fixed bg-white z-50 h-[105px] w-full mx-40 shadow-md">
      <NavLink to="/" className="">
        <img
          src="/assets/little lemon logo_nav.png"
          alt="little lemon logo"
          className="w-[280px] py-3 md:px-0 px-5"
        />
      </NavLink>
      <ul className="lg:flex hidden ">
        <NavLink
          to="/"
          className="px-5 py-10 hover:bg-yellow-400 transition-all duration-200"
        >
          Home
        </NavLink>

        <NavLink
          to="about"
          className="px-5 py-10 hover:bg-yellow-400 transition-all duration-200"
        >
          About
        </NavLink>

        <NavLink
          to="menu"
          className="px-5 py-10 hover:bg-yellow-400 transition-all duration-200"
        >
          Menu
        </NavLink>

        <NavLink
          to="booking"
          className="px-5 py-10 hover:bg-yellow-400 transition-all duration-200"
        >
          Reservations
        </NavLink>

        <NavLink
          to="orderOnline"
          className="px-5 py-10 hover:bg-yellow-400 transition-all duration-200"
        >
          Order Online
        </NavLink>

        <NavLink
          to="login"
          className="px-5 py-10 hover:bg-yellow-400 transition-all duration-200"
        >
          Login
        </NavLink>
      </ul>
      <div
        className="lg:hidden mr-8 cursor-pointer"
        onClick={() => setShowNav((prev) => !prev)}
      >
        {!showNav ? (
          <AiOutlineMenu size={35} className="text-green-900" />
        ) : (
          <AiOutlineClose size={35} className="text-green-900" />
        )}
      </div>

      <div
        className={`fixed lg:hidden bg-white w-[70%] border-r pr-4 transition-all ease-in-out duration-500 z-20 shadow-xl ${
          showNav ? "inset-0" : "inset-0 left-[-100%]"
        }`}
      >
        <img
          src="/assets/little lemon logo_nav.png"
          alt="little lemon logo"
          className="w-[280px] py-3 lg:px-0 px-5 mt-4 "
        />
        <ul className="flex flex-col m-4">
          <NavLink
            to="/"
            className={navlinkStyle}
            onClick={() => setShowNav((prev) => !prev)}
          >
            Home
          </NavLink>

          <NavLink
            to="about"
            className={navlinkStyle}
            onClick={() => setShowNav((prev) => !prev)}
          >
            About
          </NavLink>

          <NavLink
            to="menu"
            className={navlinkStyle}
            onClick={() => setShowNav((prev) => !prev)}
          >
            Menu
          </NavLink>

          <NavLink
            to="booking"
            className={navlinkStyle}
            onClick={() => setShowNav((prev) => !prev)}
          >
            Reservations
          </NavLink>

          <NavLink
            to="orderOnline"
            className={navlinkStyle}
            onClick={() => setShowNav((prev) => !prev)}
          >
            Order Online
          </NavLink>

          <NavLink
            to="login"
            className={navlinkStyle}
            onClick={() => setShowNav((prev) => !prev)}
          >
            Login
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
