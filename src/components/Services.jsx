import React from 'react'
import { TbActivityHeartbeat } from "react-icons/tb";
import { PiHeartbeatBold } from "react-icons/pi";
import { BsLungs } from "react-icons/bs";
import { PiRadioactiveBold } from "react-icons/pi";
import { GiKidneys } from "react-icons/gi";
import { LuBrain } from "react-icons/lu";
import { GiStomach } from "react-icons/gi";
import { MdAdd } from "react-icons/md";

const Services = () => {
    const data = [
        {
            id:1,
            name: "Cardiologist",
            desx: "Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures.",
            icon: <PiHeartbeatBold />,
        },
        {
            id:2,
            name: "Pulmonary",
            desx: "Interactively productize premium technologies where interdependent quality vectors available.",
            icon: <BsLungs />
        },
        {
            id:3,
            name: "Radiology",
            desx: "The point of using Lorem Ipsum that it has a more-or-less distribution of look like readable English.",
            icon: <PiRadioactiveBold />
        },
        {
            id:4,
            name: "Urology",
            desx: "Uniquely matrix economically sound value through the cooperative technology competently.",
            icon: <GiKidneys />
        },
        {
            id:5,
            name: "Neurology",
            desx: "Quickly communicate enabled technology and turnkey leadership skills for the doctor.",
            icon: <LuBrain />
        },
        {
            id:6,
            name: "Hypnotherapy",
            desx: "services and helps to complete and file the necessary paperwork with county and state offices.",
            icon: <GiStomach />
        },
    ]
  return (
    <div>
      <div className='max-w-[1200px] mx-auto mt-15 text-center'>
       <div className='flex flex-col gap-4 md:flex-row items-center justify-between'>
         <div className='flex flex-col items-start'>
            <h2 className='flex items-center text-xl text-[#3e8cff] uppercase font-semibold'><i><TbActivityHeartbeat /></i>Departments</h2>
            <h1 className='font-bold text-6xl'>Explore Our Services</h1>
        </div>
        <div>
            <button className="w-full bg-[#3e8cff] text-white py-6 px-20 rounded-3xl font-semibold hover:bg-white border-2 border-[#3e8cff] hover:text-black transition duration-300 cursor-pointer">
                View All Services
              </button>
        </div>
       </div>

       {/* <div className='flex items-center justify-between flex-wrap gap-6 mt-18'>
        {data.map((item)=>(
            <div key={item.id} className='max-w-[370px] flex flex-col items-center border-2 rounded-4xl border-white hover:border-[#3e8cff] p-8 duration-300 hover:translate-y-[-50px] transform bg-white hover:shadow-2xl'>
                <h1 className='text-7xl bg-[#3e8cff] p-5 rounded-full text-white'>{item.icon}</h1>
                <h1 className='mt-2 text-3xl font-bold'>{item.name}</h1>
                <h1 className='text-slate-600 mt-2'>{item.desx}</h1>
                <h1 className='font-bold uppercase text-sm flex items-center gap-2 mt-4 border-b-3 border-[#3e8cff] hover:text-[#3e8cff] duration-300 cursor-pointer '><span><MdAdd /></span> ReadMore</h1>
            </div>
        ))}
       </div> */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18">
  {data.map((item) => (
    <div
      key={item.id}
      className="w-full flex flex-col items-center text-center border-2 rounded-4xl border-white hover:border-[#3e8cff] p-8 duration-300 hover:-translate-y-6 bg-white hover:shadow-2xl"
    >
      <div className="text-7xl bg-[#3e8cff] p-5 rounded-full text-white">
        {item.icon}
      </div>

      <h1 className="mt-4 text-2xl md:text-3xl font-bold">
        {item.name}
      </h1>

      <p className="text-slate-600 mt-2">
        {item.desx}
      </p>

      <div className="font-bold uppercase text-sm flex items-center gap-2 mt-4 border-b-2 border-[#3e8cff] hover:text-[#3e8cff] duration-300 cursor-pointer">
        <span><MdAdd /></span> Read More
      </div>
    </div>
  ))}
</div>
      </div>

    </div>
  )
}

export default Services
