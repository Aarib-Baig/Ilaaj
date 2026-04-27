import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { RiChatQuoteFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";

const Testimonials = () => {
    const data = [
        {
            id:1 ,
            name: "Abbas Shah",
            desc: "“I wish the world could know the wonderful things that are happening on the MediCore hospital. ”",
            type: "Customer Service",
            img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
        },
        {
            id:1 ,
            name: "Zunish Fatima",
            desc: "“I want to express my appreciation for a very finely run and professional facility. Doctors always encouraged to ask questions.”",
            type: "Cancer Patient",
            img: "https://images.squarespace-cdn.com/content/v1/5388d7e4e4b09e8a1d045c72/00e3a7ef-09f9-447c-bbcf-35dd7d65e325/outdoor+montreal+female+portrait+session.JPG"
        },
        {
            id:1 ,
            name: "Arbaz Nigam",
            desc: "“All the doctors, nurses, aides, food service employees, security and maintenance workers deserve such praise for their attention & care.”",
            type: "Dental Patient",
            img: "https://upaa.org/sites/default/files/styles/feature_1x_large/public/02photo_6.JPG.webp?itok=AzIKkD0I"
        },
    ]
  return (
    <div>
      <div className="max-w-[1200px] mx-auto mt-[100px] p-2">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
            <div className="flex flex-col gap-2">
          <h1 className="flex items-center gap-2 text-[#3e8cff] text-md font-semibold uppercase">
            <span className="text-2xl">
              <TbActivityHeartbeat />
            </span>{" "}
            testimonials
          </h1>

          <h1 className="font-bold text-5xl">What Our Patient Says</h1>
        </div>

        <div className="flex items-center gap-5">
            <span className="text-2xl p-4 text-[#3e8cff] border-2 border-white hover:border-[#3e8cff] rounded-2xl duration-300 cursor-pointer"><FaArrowLeft /></span>
            <span className="text-2xl p-4 text-[#3e8cff] border-2 border-white hover:border-[#3e8cff] rounded-2xl duration-300 cursor-pointer"><FaArrowRight /></span>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px] p-4 md:p-8 text-center md:text-start">
          {data.map((item)=>(
            <div key={item.id} className="flex flex-col gap-3 items-center md:items-start mt-5">
              <h1 className="font-bold text-7xl text-[#07306e]"><RiChatQuoteFill /></h1>
              <h1 className="max-w-3/4 text-lg">{item.desc}</h1>
              <div className="flex items-center gap-3">
                <div>
                  <img className="w-[50px] rounded-2xl" src={item.img} alt="" />
                </div>
                <div>
                  <h1 className="flex items-center text-lg font-semibold text-[#3e8cff]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke /></h1>
                  <h1 className="font-bold text-lg">{item.name}</h1>
                  <h1>{item.type}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
