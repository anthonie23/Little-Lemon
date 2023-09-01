import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const navlinkStyle =
    "py-4 px-4 border-b border-gray-500/50 hover:bg-yellow-400";

  return (
    <nav className="flex justify-between items-center max-w-5xl mx-auto text-green-900 py-4 lg:py-0 md:px-6">
      <NavLink to="/" className="">
        <img
          src="/assets/little lemon logo_nav.png"
          alt="little lemon logo"
          className="w-[280px] py-3 md:px-0 px-5"
        />
      </NavLink>
      <ul className="lg:flex hidden">
        <NavLink to="/" className="px-5 py-10 hover:bg-yellow-400">
          Home
        </NavLink>

        <NavLink to="about" className="px-5 py-10 hover:bg-yellow-400">
          About
        </NavLink>

        <NavLink to="menu" className="px-5 py-10 hover:bg-yellow-400">
          Menu
        </NavLink>

        <NavLink to="reservations" className="px-5 py-10 hover:bg-yellow-400">
          Reservations
        </NavLink>

        <NavLink to="orderOnline" className="px-5 py-10 hover:bg-yellow-400">
          Order Online
        </NavLink>

        <NavLink to="login" className="px-5 py-10 hover:bg-yellow-400">
          Login
        </NavLink>
      </ul>
      <div
        className="lg:hidden mr-8 cursor-pointer"
        onClick={() => setShowNav((prev) => !prev)}
      >
        {showNav ? (
          <AiOutlineMenu size={35} className="text-green-900" />
        ) : (
          <AiOutlineClose size={35} className="text-green-900" />
        )}
      </div>

      <div
        className={`fixed lg:hidden bg-white w-[70%] border-r pr-4 transition-all ease-in-out duration-500 ${
          !showNav ? "inset-0" : "inset-0 left-[-100%]"
        }`}
      >
        <img
          src="/assets/little lemon logo_nav.png"
          alt="little lemon logo"
          className="w-[280px] py-3 md:px-0 px-5 mt-4"
        />
        <ul className="flex flex-col m-4">
          <NavLink to="/" className={navlinkStyle}>
            Home
          </NavLink>

          <NavLink to="about" className={navlinkStyle}>
            About
          </NavLink>

          <NavLink to="menu" className={navlinkStyle}>
            Menu
          </NavLink>

          <NavLink to="reservations" className={navlinkStyle}>
            Reservations
          </NavLink>

          <NavLink to="orderOnline" className={navlinkStyle}>
            Order Online
          </NavLink>

          <NavLink to="login" className={navlinkStyle}>
            Login
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
