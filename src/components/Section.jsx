import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { PiDna } from "react-icons/pi";
import { TbHealthRecognition } from "react-icons/tb";

const Section = () => {
    const data = [
        {
            id:1,
            name: "Our Doctors",
            text: "Once the family has reached a decision, the team informs the relevant parties",
            icon: <FaUserDoctor />,
            button: "+ Find A Doctor"
        },
         {
            id:2,
            name: "Health Foundation",
            text: "Medical professionals team is trained to provide you with the care and support",
            icon: <PiDna />,
            button: "+ View All Departments"
        },
         {
            id:3,
            name: "24/7 Services",
            text: "Emergency staff who are available 24 hours a day, seven days a week.",
            icon: <TbHealthRecognition />,
            button: "+ Contact Us"
        }
    ]
  return (
    <div className='p-8 max-w-[1200px] mx-auto '>
      <div className='flex flex-col lg:flex-row p-4 rounded-3xl bg-white shadow-2xl'>
        {data.map((item) =>(
            <div key={item.id} className="flex m-4 items-center gap-4 flex-col md:flex-row">
                <div className="img bg-[#3e8cff] w-fit p-6 rounded-full">
                    <i className='text-5xl text-white'>{item.icon}</i>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{item.name}</h1>
                    <h1 className='text-lg'>{item.text}</h1>
                    <button className='mt-5 font-bold text-sm uppercase border-b-2 border-[#3e8cff] hover:text-[#3e8cff] duration-300 cursor-pointer'>{item.button}</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Section
