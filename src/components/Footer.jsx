import React from 'react'
import { TbActivityHeartbeat } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <div className='bg-[#07306e] text-white mt-[100px]'>
      <div className='max-w-[1200px] mx-auto p-4 md:p-8'>
        <div className='grid grid-cols-3'>
          <div>
            <h1 className='flex items-center font-bold text-2xl gap-2'>Explore <span className='text-[#3e8cff]'><TbActivityHeartbeat /></span></h1>
            <h2 className='mt-1 font-semibold'>Style Guide</h2>
            <h2 className='mt-1 font-semibold'>Changelog</h2>
            <h2 className='mt-1 font-semibold'>Licenses</h2>
            <h2 className='mt-1 font-semibold'>Protected Page</h2>
          </div>

          <div>
            <h1 className='flex items-center font-bold text-2xl gap-2'>Contact <span className='text-[#3e8cff]'><TbActivityHeartbeat /></span></h1>

            <h2 className='font-semibold mt-1 flex items-center gap-2 w-2/3'><span className='text-[#3e8cff] text-2xl'><CiLocationOn /></span>Office #12, 3rd Floor, Business Plaza
              I.I. Chundrigar Road, Saddar
              Karachi, 74000, Sindh
              Pakistan</h2>

            <h2 className='font-semibold mt-1 flex items-center gap-2'><span className='text-[#3e8cff] text-2xl'><MdOutlineMailOutline /></span>support@ilaaj.com</h2>

            <h2 className='font-semibold mt-1 flex items-center gap-2'><span className='text-[#3e8cff] text-2xl'><IoCallOutline /></span>0300-1234567</h2>
          </div>


          <div>
            <h1 className='flex items-center font-bold text-2xl gap-2 mb-2'>Book An Appointment <span className='text-[#3e8cff]'><TbActivityHeartbeat /></span></h1>

            <button className="mt-5 bg-[#3e8cff] border-2 border-[#3e8cff] hover:bg-[#07306e] duration-300 text-white font-semibold uppercase rounded-2xl p-4 cursor-pointer">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
