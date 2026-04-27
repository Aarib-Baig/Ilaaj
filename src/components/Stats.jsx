import React from 'react'
import { RxPeople } from "react-icons/rx";
import { IoClipboardOutline } from "react-icons/io5";
import { PiMedal } from "react-icons/pi";

const Stats = () => {
    const data = [
        {
            id: 1,
            name: "1.5 Crore+",
            type: "Satisfied Patients",
            icon: <RxPeople />
        },
        {
            id: 1,
            name: "2 Million+",
            type: "Doctor Appointments",
            icon: <IoClipboardOutline />
        },
        {
            id: 1,
            name: "200,000+",
            type: "Certified Experts",
            icon: <PiMedal />
        },
    ]
  return (
    <div className='bg-[#07306e]'>
      <div className='max-w-[1200px] mx-auto mt-[100px] p-8 text-white'>
        <div className='flex flex-col gap-3 md:flex-row items-center justify-around my-8'>
            {data.map((item)=>(
            <div key={item.id} className='flex flex-col items-center gap-2'>
                <h1 className='font-bold bg-[#3e8cff] p-4 text-5xl rounded-full'>{item.icon}</h1>
                <h1 className='font-extrabold text-2xl'>{item.name}</h1>
                <h1 className='font-semibold text-lg'>{item.type}</h1>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
