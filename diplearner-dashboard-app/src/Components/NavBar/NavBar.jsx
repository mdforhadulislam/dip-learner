import { Navbar } from "keep-react";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import LOGO from "../../Assets/LOGO_1.png";
import DragButton from "./DragButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar className=" backdrop-blur-md bg-white/60 shadow-3xl  px-3 py-1 fixed w-full z-40">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="div"
          className="md:flex hidden items-center justify-start"
        >
          <h1 className=" text-xl font-semibold italic text-defult">
            DipLearner
          </h1>
        </Navbar.Container>
        <Navbar.Brand>
          <img src={LOGO} className="p-1" alt="keep" width="120" height="40" />
        </Navbar.Brand>

        <Navbar.Container
          id="drawer-swipe"
          className={`fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg transition-transform  left-0 right-0 ${
            isOpen
              ? "transform-none bottom-[80vh]"
              : "translate-y-full  bottom-[116vh]"
          }`}
        >
          {/* click bar  */}
          <div
            className="p-4 cursor-pointer hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 "></span>
          </div>

          <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4 max-h-[350px] overflow-auto scrollbar">
            <DragButton title={"Dashboard"} link={"/"}>
              <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
            </DragButton>
          </div>
        </Navbar.Container>

        <Navbar.Container className="cursor-pointer hover:bg-gray-50 rounded-md">
          <HiMenuAlt3
            className="w-8 h-8 text-defult"
            onClick={() => setIsOpen(!isOpen)}
          />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavBar;
