import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="w-full relative">
      {/* Background Image */}
      <img
        className="w-full h-[60vh] min-h-[500px] object-cover"
        src="/src/assets/ICU.png"
        alt=""
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-start mt-20">
          <div className="px-2 lg:max-w-1/2 flex flex-col">
            <div className="text-lg mt-2 uppercase font-semibold flex items-center gap-2">
              <span className="text-[#3e8cff] text-3xl">
                <TbActivityHeartbeat />{" "}
              </span>
              Serving to the People Since 2000
            </div>

            <div className="text-4xl md:text-6xl lg:7xl font-bold">
              On a Pursuit of<br />Better Medicine
            </div>

            <div className="text-md md:text-xl max-w-2/3 lg:max-w-full mt-2 md:mt-5 font-normal flex flex-col items-start">
              This is open to everyone every day and provides primary health
              care and cutting-edge medicine in a central location
              <button className="mt-2 md:mt-5 bg-[#3e8cff] text-white p-4 rounded-xl items-center font-semibold hover:bg-blue-800 cursor-pointer text-sm duration-300">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
