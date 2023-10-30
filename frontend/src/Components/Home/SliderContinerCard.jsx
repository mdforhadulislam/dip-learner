import React from "react";

const SliderContinerCard = ({ children }) => {
  return (
    <div className="w-full m-auto flex flex-col lg:flex-row justify-between items-center align-middle z-10 pb-5">
      {/* left start  */}
      <div className="w-full lg:w-[700px] h-auto md:h-[600px] relative">
        <img
          className="w-[600px] h-auto"
          src={"./hero-banar.png"}
          alt="Hero Banar"
        />
        <div className=" w-auto  lg:w-full absolute top-[5%] left-[4%] sm:top-[6%]  md:top-[16%] lg:top-[105px] lg:left-[20px] md:left-[10%]">
          <div className="w-[120px] h-[6.5px] bg-[#1d90b3] block rounded-md mb-1"></div>

          <h1 className="text-[30px] sm:text-[55px] m-0 mb-5 p-0 w-[285px] sm:w-[550px] backdrop-blur-lg  bg-gradient-to-r from-[#00B1E9]/50 to-[#1d90b3]/40 shadow-2xl rounded-md text-white">
            <span className="f-m px-2 block">READ BOOKS</span>
            <span className="f-m px-2 block">EARN KNOWLEDGE</span>
          </h1>

          <h1 className="text-[30px] sm:text-[55px] m-0 mb-5 p-0 w-[285px] sm:w-[550px] backdrop-blur-lg  bg-gradient-to-r  from-[#00B1E9]/50 to-[#1d90b3]/40 shadow-2xl rounded-md text-white">
            <span className="f-m px-2 block">CHANGING THE</span>
            <span className="f-m px-2 block">WORLD TOGETHER</span>
          </h1>
        </div>
      </div>
      {/* left end */}

      {/* right start  */}
      <div className="w-full  lg:mt-[-120px] md:mt-[-200px] z-20 md:ml-[-12%] lg:ml-0 md:w-[560px] lg:w-[600px] hidden sm:flex flex-col lg:text-right lg:pr-[30px] md:p-2 lg:p-0  text-white lg:text-black ">
        {children}
      </div>
      {/* right end */}
    </div>
  );
};

export default SliderContinerCard;
