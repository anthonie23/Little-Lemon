import React from "react";

import NavMenu from "../components/Menu/NavMenu";
import { Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div className="space-y-8 h-[82vh]">
      <div className="bg-[#495e57]">
        <h2 className="text-3xl font-semibold text-center py-8 text-white">
          Our Menu
        </h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <NavMenu />
        <Outlet />
      </div>
    </div>
  );
};

export default Menu;
