'use client'
import Image from "next/image";
import Navbar from "./Home/Navbar";
import Banner from "./Home/Banner";
import Footer from "./Home/Footer";
import Description from "./Home/Description";
import About from "./Home/About";
import Contact from "./Home/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <>
    <Navbar />
    <Banner />
    <Description />
    <About />
    <Contact />
    <Footer />
    </>
  );
}
