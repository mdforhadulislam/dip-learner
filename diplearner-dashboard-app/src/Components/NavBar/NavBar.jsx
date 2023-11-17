import { Navbar } from "keep-react";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import LOGO from "../../Assets/LOGO_1.png";

const NavBar = ({ isOpen, setIsOpen }) => {
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

        <Navbar.Container className="cursor-pointer hover:bg-defult-100 transition-all rounded-md">
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
