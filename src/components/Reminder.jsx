import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TbActivityHeartbeat } from "react-icons/tb";

const Reminder = () => {
  const [minutes, setMinutes] = useState(1)

  const notify = () => {
    const timeInMs = minutes * 60 * 1000

    toast(`Reminder set for ${minutes} minute(s)`)

    setTimeout(() => {
      toast("💊 Take Your Meds Now!!!!")
    }, timeInMs)
  }

  return (
    <div className='max-w-[1200px] mx-auto mt-[50px]'>
        <div className='flex flex-col items-center gap-5'>
      <h3 className='font-bold flex items-center gap-3 text-3xl'>Medicine Reminder <span className="text-[#3e8cff]">
                    <TbActivityHeartbeat />
                  </span>{" "}</h3>

      <input
      className=" bg-white p-4 rounded-2xl border focus:outline-none focus:ring-0 focus:border-gray-300"
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        placeholder="Enter minutes"
      />

      <button className="bg-[#3e8cff] border-2 border-[#3e8cff] hover:bg-[#07306e] duration-300 text-white font-semibold uppercase rounded-2xl p-4 cursor-pointer" onClick={notify}>Set Reminder</button>

      <ToastContainer />
    </div>
    </div>
  )
}

export default Reminder