import React, { useState } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#07306e] mt-5">
      <div className="max-w-[1200px] mx-auto p-4 md:py-16 flex flex-col md:flex-row items-center gap-3">
        <div className="md:w-1/2 p-4">
          <h1 className="flex items-center gap-2 text-[#3e8cff] text-lg font-semibold uppercase">
            <span>
              <TbActivityHeartbeat />
            </span>{" "}
            get an appointment
          </h1>
          <h1 className="mt-2 font-bold text-3xl md:text-5xl md:leading-16 text-white">
            The Wide Network of Best Healthcare
          </h1>
          <h1 className="text-white mt-4 md:text-xl">
            Our team of highly trained professionals uses the latest healing
            technologies to restore you to pain-free health quickly and easily.
          </h1>
        </div>

        <div className="md:w-1/2">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                className=" bg-white p-4 rounded-2xl border focus:outline-none focus:ring-0 focus:border-gray-300"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                className=" bg-white p-4 rounded-2xl border focus:outline-none focus:ring-0 focus:border-gray-300"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className=" bg-white p-4 rounded-2xl border focus:outline-none focus:ring-0 focus:border-gray-300"
                type="tel"
                name="phone"
                pattern="[0-9]{11}"
                maxLength={11}
                required
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                className=" bg-white p-4 rounded-2xl border focus:outline-none focus:ring-0 focus:border-gray-300"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <button className="mt-5 bg-[#3e8cff] border-2 border-[#3e8cff] hover:bg-[#07306e] duration-300 text-white font-semibold uppercase rounded-2xl p-4 cursor-pointer">
                Book an Appointment
              </button>
              <h1 className="text-white font-bold text-xl">(OR)</h1>
              <h1 className="text-white border-2 p-4 rounded-2xl flex items-center gap-2 font-bold mt-5 hover:text-[#3e8cff] cursor-pointer duration-300">
                <span className="text-[#3e8cff] text-xl">
                  <TbPhoneCall />
                </span>
                +92 300 1234567
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
