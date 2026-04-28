import React from 'react';
import { FaUserMd, FaIdCard, FaStethoscope, FaHistory } from 'react-icons/fa';

const DoctorSignup = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-[100px] px-4'>
      <div className='bg-[#07306e] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-12 text-white relative overflow-hidden'>

        {/* Background Accents */}
        <div className='absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#3e8cff] opacity-20 rounded-full blur-3xl'></div>
        <div className='absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-[#3e8cff] opacity-20 rounded-full blur-3xl'></div>

        {/* Text Content */}
        <div className='md:w-1/2 z-10 flex flex-col gap-4'>
          <div className='inline-flex items-center gap-2 bg-[#3e8cff]/20 px-4 py-2 rounded-full border border-[#3e8cff]/30 text-[#3e8cff] font-semibold w-max'>
            <FaUserMd /> Careers at Ilaaj
          </div>
          <h2 className='font-bold text-4xl md:text-5xl leading-tight'>
            Join Our Global <br /> Medical Network
          </h2>
          <p className='text-blue-100 font-light text-lg mt-2'>
            Become a part of a revolutionary digital healthcare platform. We are looking for passionate, certified professionals to help us provide 24/7 care to patients worldwide.
          </p>

          <div className='mt-6 grid grid-cols-2 gap-4'>
            <div className='flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10'>
              <span className='text-[#3e8cff] text-2xl font-bold'>10k+</span>
              <span className='text-sm text-blue-100'>Active Patients</span>
            </div>
            <div className='flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10'>
              <span className='text-[#3e8cff] text-2xl font-bold'>24/7</span>
              <span className='text-sm text-blue-100'>Flexible Hours</span>
            </div>
          </div>
        </div>

        {/* Form Area */}
        <div className='md:w-1/2 w-full z-10'>
          <div className='bg-white text-slate-800 p-8 rounded-3xl shadow-xl flex flex-col gap-5'>
            <h3 className='font-bold text-2xl mb-2 border-b pb-4'>Doctor Registration</h3>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-semibold text-slate-600'>Full Name</label>
              <div className='relative'>
                <input className='w-full bg-slate-50 p-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-[#3e8cff]' type='text' placeholder='Dr. Jane Doe' />
                <FaUserMd className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-sm font-semibold text-slate-600'>Specialty</label>
              <div className='relative'>
                <select className='w-full bg-slate-50 p-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-[#3e8cff] appearance-none cursor-pointer'>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                  <option>Pediatrician</option>
                  <option>General Practitioner</option>
                  <option>Neurologist</option>
                  <option>Other</option>
                </select>
                <FaStethoscope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold text-slate-600'>Experience</label>
                <div className='relative'>
                  <input className='w-full bg-slate-50 p-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-[#3e8cff]' type='text' placeholder='e.g. 5 Years' />
                  <FaHistory className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-sm font-semibold text-slate-600'>Medical License</label>
                <div className='relative'>
                  <input className='w-full bg-slate-50 p-3 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-[#3e8cff]' type='text' placeholder='License No.' />
                  <FaIdCard className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
                </div>
              </div>
            </div>

            <button className='w-full mt-4 bg-[#3e8cff] hover:bg-[#07306e] transition duration-300 text-white font-bold py-4 rounded-xl uppercase tracking-wide cursor-pointer'>
              Submit Application
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorSignup;
