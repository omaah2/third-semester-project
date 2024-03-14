import React from "react";
import Navbar from "../../Components/Navbar/M-navbar";
import Hero from "./Hero/Hero";
import Service from "./Service/service";
import Doctor from "../Doctor/Doctor";
import About from "../About/About";
import How from "./How/How";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Service />
      <Doctor />
      <About />
      <How />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
