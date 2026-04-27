import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

const TopBar = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row items-center justify-between md:mx-auto p-4 md:max-w-[1200px] '>

      <div className='flex items-center gap-2 mb-5'>
        <p className='text-3xl text-[#3e8cff] cursor-pointer'><BiPhoneCall /></p>
        <h1 className='text-xl font-semibold hover:text-[#3e8cff] cursor-pointer'>Call Us - (+92) 123 456 7890</h1>
      </div>
      <div>
        <ul className='flex items-center justify-between gap-5 w-fit'>
            <li className='text-lg hover:text-[#3e8cff] cursor-pointer'><FaXTwitter /></li>
            <li className='text-lg hover:text-[#3e8cff] cursor-pointer'><FaSquareInstagram /></li>
            <li className='text-lg hover:text-[#3e8cff] cursor-pointer'><FaFacebookSquare /></li>
            <li className='text-lg hover:text-[#3e8cff] cursor-pointer'><FaLinkedin /></li>
        </ul>
      </div>

    </div>
    </div>
  )
}

export default TopBar
