import React from "react";

import profileBgImage from "../../Assets/ill_header_3.png";
import UserAboutContainer from "./UserAboutContainer";

const UserProfileHeader = () => {
  return (
    <div className="w-full h-auto p-4 md:p-2">
      {/* header background image start  */}
      <div
        className="w-full h-[350px] border-[10px] border-white rounded-md shadow-3xl"
        // style={{ boxShadow: "rgb(32 32 32 / 10%) 0vw -0.2vw 0.5vw 0vw" }}
      >
        <div
          className="w-full h-full rounded-md bg-cover md:bg-contain bg-center"
          style={{
            background: `url(${profileBgImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      {/* header background image end*/}

      <div className="w-full h-auto pt-4 md:p-0 md:-mt-24 md:px-20">
        <div className="w-full h-auto rounded-md p-2 shadow-3xl bg-white">
          <div className="w-full h-auto md:grid grid-cols-3 grid-rows-2 p-2">
            <div className="col-span-1 row-span-2 p-2 flex flex-col justify-center items-center align-middle h-auto md:h-[100px]">
              <div className="md:w-[250px] w-[200px] md:h-[280px] h-[220px] bg-white rounded-md p-2 shadow-4xl flex justify-center mt-[-150px] mb-1 md:mb-0">
                <img
                  className="w-full h-auto"
                  src={"https://avatars3.githubusercontent.com/u/2763884?s=128"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-start-2 col-span-3 lg:pr-12 md:pl-2 flex justify-center items-center align-middle">
              <h1 className="text-4xl sm:text-6xl font-semibold text-slate-800 uppercase text-center">
                Forhadul Islam Islam
              </h1>
            </div>
            <div className="col-start-2 col-span-3 lg:pr-12 md:pl-2 flex justify-center items-start align-top">
              <div className="w-[100px] h-[1px] bg-defult mb-4 mt-2"></div>
              <span className="text-defult transition-all duration-300 px-3">
                ENTERPRISE
              </span>
              <div className="w-[100px] h-[1px] bg-defult mb-4 mt-2"></div>
            </div>
          </div>
        </div>

        <UserAboutContainer />
      </div>
    </div>
  );
};

export default UserProfileHeader;
