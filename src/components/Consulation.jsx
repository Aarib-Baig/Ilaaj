import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import { MdOutlineHeadphones } from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Consulation = () => {
  const data = [
    {
      id: 1,
      name: "Consult Top Doctors 24x7",
      icon: <MdOutlineHeadphones />,
    },
    {
      id: 2,
      name: "Quality & Patient Safety",
      icon: <GoShieldCheck />,
    },
    {
      id: 3,
      name: "Perfect Health Essentials",
      icon: <TbHealthRecognition />,
    },
  ];
  return (
    <div>
      <div className="max-w-[1200px] mx-auto mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
          <div className="flex flex-col gap-2">
            <h1 className="flex items-center gap-2 text-[#3e8cff] text-md font-semibold uppercase">
              <span className="text-2xl">
                <TbActivityHeartbeat />
              </span>{" "}
              BENEFITS OF CONSULTATION
            </h1>

            <h1 className="font-bold text-4xl">
              Consult The Best Doctor In The Department
            </h1>

            <h1 className="mt-5 text-lg text-slate-600">
              Doctor are choosing from our diverse pool of health specialists.
              Discover better health & wellness by using our doctor ratings &
              reviews to make your choice.
            </h1>
          </div>

          <div className="px-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border-2 border-[#3e8cff] my-4 rounded-2xl cursor-pointer"
              >
                <h1 className="flex items-center font-semibold gap-4 text-xl">
                  <span className="text-[#3e8cff] text-4xl">{item.icon}</span>
                  {item.name}
                </h1>
                <span className="text-5xl bg-[#3e8cff] border-2 border-[#3e8cff] text-white rounded-xl hover:bg-white hover:text-[#3e8cff] duration-300">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </div>
            ))}
          </div>

          <div>
            <iframe
              className="w-full h-[300px] rounded-xl"
              src="https://www.youtube.com/embed/0CFLTrPvwFY"
              allowFullScreen
            ></iframe>
          </div>

          <div>
            <iframe
              className="w-full h-[300px] rounded-xl"
              src="https://www.youtube.com/embed/bzW1ynK_J28"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulation;
