import React from "react";
import { HeroSection } from "../components/HeroSection";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
};

export default Home;
