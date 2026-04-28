import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TbBellRinging } from "react-icons/tb";
import { FaPills } from "react-icons/fa";
import { MdOutlineTimer, MdOutlineMedication } from "react-icons/md";

const Reminder = () => {
  const [minutes, setMinutes] = useState(1)
  const [dose, setDose] = useState('1 Pill')
  const [medicineName, setMedicineName] = useState('')

  const notify = () => {
    if (minutes <= 0) {
      toast.error("Please enter a valid time!")
      return
    }
    const timeInMs = minutes * 60 * 1000
    const medNameDisplay = medicineName.trim() ? medicineName.trim() : "your medication"

    toast.success(`Reminder set for ${dose} of ${medNameDisplay} in ${minutes} minute(s) 🕒`)

    setTimeout(() => {
      toast(`💊 Time to take ${dose} of ${medNameDisplay}!`, {
        style: {
          backgroundColor: "#3e8cff",
          color: "white",
          fontWeight: "bold",
        }
      })
    }, timeInMs)
  }

  return (
    <div className='max-w-[1200px] mx-auto mt-[100px] px-4'>
      <div className='relative overflow-hidden bg-gradient-to-br from-[#f8fbff] to-[#e6f0ff] p-8 md:p-12 rounded-[2rem] border border-[#d6e5ff] shadow-sm flex flex-col md:flex-row items-center justify-between gap-10 group'>
        
        {/* Background decorative elements */}
        <div className='absolute -top-20 -right-20 w-64 h-64 bg-[#3e8cff] opacity-10 rounded-full blur-3xl group-hover:scale-110 duration-700 ease-in-out'></div>
        <div className='absolute -bottom-20 -left-20 w-72 h-72 bg-[#07306e] opacity-5 rounded-full blur-3xl group-hover:scale-110 duration-700 ease-in-out'></div>

        <div className='flex flex-col items-start gap-4 z-10 md:w-1/2'>
          <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-50 text-[#3e8cff] font-medium text-sm'>
            <TbBellRinging className="text-lg animate-bounce" /> Smart Alerts
          </div>
          <h3 className='font-extrabold flex flex-wrap items-center gap-3 text-4xl md:text-5xl text-slate-800 leading-tight'>
            Never Miss a <br className="hidden md:block" /> Dose Again
          </h3>
          <p className="text-slate-500 text-lg font-light leading-relaxed max-w-md">
            Set up a quick reminder and we'll notify you when it's time to take your prescribed medication. Your health is your wealth.
          </p>
        </div>

        <div className='z-10 w-full md:w-[400px] bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col gap-6 transform hover:-translate-y-1 transition-all duration-300'>
          <div className='flex items-center justify-between border-b pb-4'>
            <h4 className='font-bold text-xl text-slate-700 flex items-center gap-2'>
              <FaPills className="text-[#3e8cff]" /> Set Reminder
            </h4>
            <span className="text-[#3e8cff] bg-blue-50 p-2 rounded-full"><MdOutlineTimer className="text-xl" /></span>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold text-slate-600 ml-1'>Medicine Name</label>
            <div className='relative'>
              <input
                className="w-full bg-slate-50 text-slate-700 p-4 pl-12 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#3e8cff]/50 focus:border-[#3e8cff] transition-all font-medium text-lg"
                type="text"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
                placeholder="e.g. Paracetamol"
                list="medicines"
              />
              <datalist id="medicines">
                <option value="Paracetamol" />
                <option value="Ibuprofen" />
                <option value="Amoxicillin" />
                <option value="Omeprazole" />
                <option value="Cetirizine" />
                <option value="Azithromycin" />
                <option value="Metformin" />
                <option value="Amlodipine" />
                <option value="Loratadine" />
                <option value="Aspirin" />
                <option value="Losartan" />
                <option value="Atorvastatin" />
                <option value="Pantoprazole" />
                <option value="Levothyroxine" />
                <option value="Lisinopril" />
                <option value="Albuterol" />
                <option value="Gabapentin" />
                <option value="Hydrochlorothiazide" />
                <option value="Sertraline" />
                <option value="Ciprofloxacin" />
              </datalist>
              <MdOutlineMedication className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-2xl pointer-events-none" />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold text-slate-600 ml-1'>Dosage</label>
            <div className='relative'>
              <select
                className="w-full bg-slate-50 text-slate-700 p-4 pl-12 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#3e8cff]/50 focus:border-[#3e8cff] transition-all font-medium text-lg appearance-none cursor-pointer"
                value={dose}
                onChange={(e) => setDose(e.target.value)}
              >
                <option value="1 Pill">1 Pill</option>
                <option value="2 Pills">2 Pills</option>
                <option value="1/2 Pill">1/2 Pill</option>
                <option value="1 Tablespoon">1 Tablespoon</option>
                <option value="2 Tablespoons">2 Tablespoons</option>
                <option value="1 Teaspoon">1 Teaspoon</option>
                <option value="10 ml">10 ml</option>
              </select>
              <FaPills className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl pointer-events-none" />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold text-slate-600 ml-1'>Remind me in (minutes)</label>
            <div className='relative'>
              <input
                className="w-full bg-slate-50 text-slate-700 p-4 pl-12 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#3e8cff]/50 focus:border-[#3e8cff] transition-all font-medium text-lg"
                type="number"
                min="1"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="e.g. 30"
              />
              <MdOutlineTimer className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-2xl pointer-events-none" />
            </div>
          </div>

          <button 
            className="w-full bg-[#3e8cff] hover:bg-[#07306e] hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-white font-bold uppercase tracking-wide rounded-2xl p-4 flex items-center justify-center gap-2" 
            onClick={notify}
          >
            <TbBellRinging className="text-xl" /> Set Alarm
          </button>
        </div>

      </div>
      <ToastContainer position="bottom-right" />
    </div>
  )
}

export default Reminder