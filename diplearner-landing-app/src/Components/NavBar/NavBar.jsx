import navBarRouteOption from "@/Data/navbar";
import Logo from "@/Utils/Logo";
import Link from "next/link";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import NavButton from "./NavButton";
import Image from "next/image";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full block">
      
      <nav className=" backdrop-blur-md bg-white/60 shadow-3xl px-2 sm:px-4 py-1 fixed w-full z-[100]">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Logo link={"/"} />
          <MenuButton
            action={() => {
              setNavbar(!navbar);
            }}
          />
          <div
            className={`${
              navbar ? "none" : "hidden"
            } lg:block w-full lg:w-auto`}
          >
            <ul className="flex flex-col p-2 mt-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row lg:align-middle lg:items-center lg:space-x-9 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-[#fff0]">
              {navBarRouteOption.map((item) => (
                <NavButton
                  key={item.id}
                  link={item.link}
                  title={item.name}
                  action={() => {
                    setNavbar(!navbar);
                  }}
                  style={``}
                />
              ))}

              <div className="space-x-2 block lg:inline-block">
                <button
                  className={`px-4 py-2 text-center text-[16.6px] shadow  hover:bg-[#29b6e0] bg-[#00B1E9] text-white transition duration-300 block rounded-md w-full`}
                >
                  <Link href="/auth/login"> Login </Link>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(NavBar);
