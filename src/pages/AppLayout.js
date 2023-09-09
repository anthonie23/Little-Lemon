import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/NavBar";

const AppLayout = () => {
  return (
    <>
      <header className="h-[105px] flex justify-center">
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="fixed right-20 top-36 z-[100] h-14 w-14 bg-white rounded-full hover:scale-110 hover:shadow-lg">
        <div className="relative">
          <div className="absolute w-6 h-6 rounded-full bg-yellow-500 -top-1 -right-1">
            {" "}
            <p className="flex items-center justify-center text-xs h-full w-full text-green-900 font-bold">
              2
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
