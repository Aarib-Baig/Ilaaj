import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { gsap } from "gsap";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [locOpen, setLocOpen] = useState(false);

  const menuRef = useRef(null);
  const locRef = useRef(null);

  const handleChange = () => setClicked(!clicked);

  useEffect(() => {
    if (clicked) {
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [clicked]);

  useEffect(() => {
    if (locOpen && locRef.current) {
      gsap.fromTo(
        locRef.current,
        { opacity: 0, y: -10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.2 }
      );
    }
  }, [locOpen]);

  return (
    <div className="relative z-50 border-t-[1px] border-slate-400 bg-white">

      {/* TOP NAV */}
      <div className="max-w-[1200px] flex justify-between items-center px-2 mx-auto">

        {/* LOGO */}
        <div className="flex items-center">
          <img src="src/assets/logo.png" alt="" width={80} />
          <h1 className="text-5xl font-bold font-mono text-[#3e8cff]">
            Ilaaj
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-8 p-4">

          <li className="hover:text-[#3e8cff] cursor-pointer"><a href="/">Home</a></li>
          <li className="hover:text-[#3e8cff] cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-[#3e8cff] cursor-pointer"><a href="#services">Services</a></li>
          <li className="hover:text-[#3e8cff] cursor-pointer"><a href="#doctor-signup">Sign Up as Doctor</a></li>

          {/* DROPDOWN */}
          <li className="relative ">
            <button
              onClick={() => setLocOpen(!locOpen)}
              className="hover:text-[#3e8cff] cursor-pointer"
            >
              Locations ▼
            </button>

            {locOpen && (
              <ul
                ref={locRef}
                className="absolute top-8 left-0 w-40 bg-white shadow-lg rounded-lg z-50"
              >
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Karachi
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Lahore
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Islamabad
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-[#3e8cff] cursor-pointer"><a href="#contact">Contact</a></li>

          <button className="flex bg-[#3e8cff] text-white p-2 rounded-lg items-center gap-2 uppercase font-semibold hover:bg-blue-800">
            <SlCalender />
            Appointment
          </button>
        </ul>

        {/* MOBILE ICON */}
        <div className="lg:hidden" onClick={handleChange}>
          {clicked ? (
            <RxCross2 className="text-3xl cursor-pointer" />
          ) : (
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className="relative z-50"
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <ul className="flex flex-col items-center p-4 gap-4">

          <li className="hover:text-[#3e8cff]"><a href="/">Home</a></li>
          <li className="hover:text-[#3e8cff]"><a href="#about">About</a></li>
          <li className="hover:text-[#3e8cff]"><a href="#services">Services</a></li>
          <li className="hover:text-[#3e8cff]"><a href="#doctor-signup">Sign Up as Doctor</a></li>

          {/* MOBILE DROPDOWN */}
          <li className="text-center w-full">
            <button
              onClick={() => setLocOpen(!locOpen)}
              className="hover:text-[#3e8cff]"
            >
              Locations ▼
            </button>

            {locOpen && (
              <ul className="mt-2 bg-white shadow-md rounded-lg z-50">
                <li className="p-2 hover:bg-gray-100">Karachi</li>
                <li className="p-2 hover:bg-gray-100">Lahore</li>
                <li className="p-2 hover:bg-gray-100">Islamabad</li>
              </ul>
            )}
          </li>

          <li className="hover:text-[#3e8cff]">Contact</li>

          <button className="flex mt-4 bg-[#3e8cff] text-white p-2 rounded-lg items-center gap-2 uppercase font-semibold hover:bg-blue-800">
            <SlCalender />
            Appointment
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;