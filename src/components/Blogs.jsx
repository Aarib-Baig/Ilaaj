import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import cardio from "../assets/cardiology.jpg";
import nutrition from "../assets/nutrition.jpg";
import dentist from "../assets/dentist.jpg";

const Blogs = () => {
  const data = [
    {
      id: 1,
      type: "cardiology",
      desc: "Potential treatment for an Inflammatory blood disease",
      name: "Dane Christan",
      date: "May 12, 2022",
      img: cardio,
      link: "https://www.cardassoc.com/cardiology-blog",
    },
    {
      id: 2,
      type: "nutrition",
      desc: "Bone health exercise : A guide to maintaining healthy bones",
      name: "Jack Sparrow",
      date: "April 12, 2021",
      img: nutrition,
      link: "https://www.julienutrition.com/nutrition-blog/",
    },
    {
      id: 3,
      type: "Dentist",
      desc: "Helping your child cope with separation anxiety",
      name: "Martin Devan",
      date: "April 24, 2022",
      img: dentist,
      link: "https://blog.dental.com/",
    },
  ];
  return (
    <div>
      <div className="max-w-[1200px] mx-auto mt-[100px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex items-center gap-2  text-md font-semibold uppercase">
            <span className="text-2xl text-[#3e8cff]">
              <TbActivityHeartbeat />
            </span>{" "}
            our blogs
            <span className="text-2xl text-[#3e8cff]">
              <TbActivityHeartbeat />
            </span>{" "}
          </h1>

          <h1 className="font-bold text-4xl">Latest Articles</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around gap-4 my-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 w-[350px] shadow-2xl hover:translate-y-[-10px] transform duration-300 rounded-2xl p-4"
            >
              <div>
                <img
                  className="w-full rounded-2xl max-h-[200px]"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="font-semibold w-fit p-2 border-[1px] text-[#3e8cff] border-[#3e8cff] rounded-3xl uppercase text-sm bg-blue-100 hover:bg-white hover:text-black duration-300">
                  {item.type}
                </h1>
                <h1 className="font-bold text-lg hover:text-[#3e8cff]">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  {item.desc}
                  </a>
                </h1>
                <div className="flex items-center gap-4">
                  <h1 className="font-semibold text-sm text-slate-500 uppercase flex items-center gap-2">
                    <span className="text-lg text-[#3e8cff]">
                      <GoPerson />
                    </span>

                    {item.name}
                  </h1>
                  <h1 className="font-semibold text-sm text-slate-500 uppercase flex items-center gap-2">
                    <span className="text-lg text-[#3e8cff] ">
                      <SlCalender />
                    </span>
                    {item.date}
                  </h1>
                </div>
                <h1 className="mt-5 font-bold text-md uppercase border-b-2 border-[#3e8cff] hover:text-[#3e8cff]">
                  + Read More
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
