import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RxEyeOpen } from "react-icons/rx";
import { profileViewsAndLikes } from "../../Data/profile";
import Chart from "../../Utils/Chart";

const UserProfileCard = () => {
  return (
    <div className="overflow-hidden shadow-4xl rounded-md">
      <div className="w-full h-auto p-3">
        <div className="w-full h-auto flex justify-center items-center relative">
          {/* profile image  */}
          <img
            className="w-[100px] h-[100px] rounded-full shadow-3xl border"
            src={"https://avatars3.githubusercontent.com/u/2763884?s=128"}
            alt=""
          />
        </div>
        <div>
          <div className="p-2 w-full h-auto flex justify-center items-center flex-col">
            <h1 className="inline-block text-xl font-semibold text-center pl-2">
              Profile
            </h1>
            <span className="w-[150px] h-[1px] inline-block bg-gray-400 rounded-md"></span>
            <div className="flex flex-row justify-center items-center">
              <div className="w-auto flex flex-col justify-center items-center align-middle p-2 pr-5 text-[#CE1C34]">
                <div className=" text-lg mb-1">Views</div>
                <div className=" mb-1 flex gap-2">
                  <span className=" text-base text-gray-800 font-semibold">
                    {profileViewsAndLikes.profileViews}
                  </span>
                  <RxEyeOpen className="w-6 h-6" />
                </div>
              </div>
              <span className="w-[1px] h-[60px] bg-gray-400 inline-block "></span>
              <div className="w-auto flex flex-col justify-center items-center align-middle p-2 pl-5 text-[#6ed3cf]">
                <div className="text-lg mb-1">Likes</div>
                <div className=" mb-1 flex gap-2">
                  <span className=" text-base text-gray-800 font-semibold">
                    {profileViewsAndLikes.profileViews}
                  </span>
                  <AiOutlineLike className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chart
        categories={[
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ]}
        series={[
          {
            name: "views",
            data: [11, 32, 45, 32, 34, 52, 41],
          },
          {
            name: "Like",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
        ]}
      />
    </div>
  );
};

export default UserProfileCard;
