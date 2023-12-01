import React from "react";
import { DayPicker } from "react-day-picker";
import { MdOutlineBloodtype, MdWorkOutline } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";

const UserAboutContainer = () => {
  return (
    <div className="w-full h-auto lg:grid grid-cols-3 flex flex-col justify-center align-middle lg:items-start items-center shadow-4xl rounded-md mt-4 p-2">
      <div className="w-full col-span-1 p-2 flex justify-center align-middle items-center">
        <div className="w-full h-auto flex justify-center align-middle items-center lg:ml-[14px]">
          <DayPicker
            selected={new Date()}
            className={
              "w-full sm:w-auto flex justify-center align-middle items-center sm:block text-center h-auto shadow-3xl rounded-lg p-3"
            }
          />
        </div>
      </div>
      <div className="w-full col-start-2 col-span-1  p-2 lg:pr-4">
        <div className="w-full h-auto shadow-3xl rounded-lg p-3">
          <h1 className="text-2xl font-semibold uppercase">Forhadul Islam</h1>
          <div className="w-[100px] h-[1px] bg-[#ce1c34] mb-4 mt-2"></div>

          <div className="hover:text-[#ce1c34] transition-all duration-300 flex items-center align-middle text-left mb-2">
            <MdWorkOutline className="w-6 h-6" />
            <div className=" ml-2 text-[16px]">Work At Study</div>
          </div>

          <div className="hover:text-[#ce1c34] transition-all duration-300 flex items-center align-middle text-left  mb-2">
            <TbCurrentLocation className="w-6 h-6" />
            <div className=" ml-2 text-[16px]">Dhaka,Bangladesh</div>
          </div>

          <div className="hover:text-[#ce1c34] transition-all duration-300 flex items-center align-middle text-left  mb-2">
            <MdOutlineBloodtype className="w-6 h-6" />
            <div className=" ml-2 text-[16px]">27/02/2023 Last Donate Date</div>
          </div>
        </div>
      </div>
      <div className="w-full col-start-3 col-span-1  p-2 lg:pr-4">
        <div className="w-full h-auto shadow-3xl rounded-lg p-3">
          <h1 className="text-2xl font-semibold uppercase">About Myself</h1>
          <div className="w-[100px] h-[1px] bg-[#ce1c34] mb-4 mt-2"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            sapiente dolores dolorum pariatur nesciunt beatae cum laboriosam,
            sed corporis porro laudantium inventore totam esse maiores illo
            aspernatur ipsa provident maxime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserAboutContainer;
