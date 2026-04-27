import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Consulation from "./components/Consulation";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Blogs from "./components/Blogs";
import { Footer } from "./components/Footer";
import Reminder from "./components/Reminder";

const App = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Section />
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Reminder />
      <Consulation />
      <Testimonials />
      <Stats />
      <Blogs />
      <Footer />
    </>
  );
};

export default App;
