import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import LogoIcon from "../../Assets/LOGO_3.png";

const NavBar = ({ action }) => {
  return (
    <header className="w-full block">
      <nav className=" backdrop-blur-md bg-white/60 shadow-3xl px-2 sm:px-4 py-2.5 fixed w-full z-30">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to={"/"} className={` items-center hidden md:flex`}>
            <span
              className={`self-center text-[22px] font-semibold whitespace-nowrap text-[#009fe9] pr-2`}
            >
              DipLearner
            </span>
          </Link>

          <Link to={"/"} className={`flex items-center`}>
            <img
              className="mr-3 h-10 md:w-40 md:h-10"
              src={LogoIcon}
              alt="Blood Give"
            />
          </Link>

          <div className="w-auto flex justify-start items-center align-middle">
            

            <div className="flex items-center px-2">
              <button
                type="button"
                className="flex mr-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                  alt="user photos"
                />
              </button>
            </div>

            <div
              className="p-1 hover:bg-gray-100 rounded-md  transition-all delay-300 cursor-pointer"
              onClick={action}
            >
              <RiMenu3Line className="w-7 h-7 text-[#009fe9]" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
