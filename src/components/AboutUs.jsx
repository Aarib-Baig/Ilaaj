import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { TiInputChecked } from "react-icons/ti";
import DocImage from "../assets/doc.png";

const AboutUs = () => {
  const data = [
    {
      id: 1,
      name: "20+ years of excellence",
      icon: <TiInputChecked />,
    },
    {
      id: 2,
      name: "Professional Experts",
      icon: <TiInputChecked />,
    },
    {
      id: 3,
      name: "24 Hours Medical Service",
      icon: <TiInputChecked />,
    },
    {
      id: 4,
      name: "Multi Speciality Hospital",
      icon: <TiInputChecked />,
    },
  ];
  return (
    <div>
      <div className="max-w-[1200px] mx-auto flex items-center gap-2 mt-[50px] flex-col-reverse md:flex-row">
        <div className=" md:w-1/2">
          <img className="object-contain" src={DocImage} alt="" />
        </div>
        <div className=" p-4 md:w-1/2 flex flex-col items-start">
          <div className="">
            <h2 className="flex items-center gap-2 text-xl font-semibold uppercase text-[#3e8cff]">
              <span>
                <TbActivityHeartbeat />
              </span>
              About Us
            </h2>
            <h1 className="font-bold text-2xl md:text-5xl">
              Welcome To Ilaaj, your online health partner
            </h1>
            <h2 className="text-lg font-light text-slate-600 mt-3">
              Our team of highly trained medical professionals ensure that
              you return to pain-free health quickly and easily.
            </h2>
          </div>

          <div className="blueBox p-2 md:p-8 bg-blue-900 rounded-3xl mt-5 w-full shadow-2xl">
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.map((item) => (
                <div key={item.id}>
                  <h1 className="flex items-center gap-3 text-white text-lg md:text-xl font-medium">
                    <span className="text-[#3e8cff] text-xl md:text-3xl">
                      {item.icon}
                    </span>
                    {item.name}
                  </h1>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-center">
              <button className="w-full md:w-[70%] bg-[#3e8cff] text-white p-2 md:py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
