import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import navBarRouteOption from "../../Data/navbar";
import Logo from "../../utils/Logo";
import MenuButton from "./MenuButton";
import NavButton from "./NavButton";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full block">
      <nav className=" backdrop-blur-md bg-white/60 shadow-3xl px-2 sm:px-4 py-1.5 fixed w-full z-30">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Logo link={"/"} />
          <MenuButton
            action={() => {
              setNavbar(!navbar);
            }}
          />
          <div
            className={` ${
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
                <Button
                  className={`px-4 py-2 text-center text-[16.6px] shadow  hover:bg-[#ffb61a] bg-[#ffc21a] text-white transition duration-300 block `}
                  fullWidth
                >
                  <a href="/auth/login"> Login </a>
                </Button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(NavBar);
