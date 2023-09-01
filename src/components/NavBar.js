import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <img
        src="/assets/little lemon logo_nav.png"
        alt="little lemon logo"
        style={{ width: 200 }}
      />
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="menu">Menu</NavLink>
        <NavLink to="reservations">Reservations</NavLink>
        <NavLink to="orderOnline">Order Online</NavLink>
        <NavLink to="login">Login</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
