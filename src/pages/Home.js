import React from "react";
import { HeroSection } from "../components/HeroSection";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.home}>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
};

export default Home;
