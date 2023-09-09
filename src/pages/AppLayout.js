import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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
    </>
  );
};

export default AppLayout;
