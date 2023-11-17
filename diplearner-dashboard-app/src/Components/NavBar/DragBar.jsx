import { Navbar } from "keep-react";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import DragButton from "./DragButton";

const DragBar = ({ isOpen, setIsOpen }) => {
  return (
    <Navbar.Container
      id="drawer-swipe"
      className={`fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-50 shadow-4xl rounded-t-lg transition-transform  left-0 right-0 ${
        isOpen
          ? "transform-none bottom-[0vh]"
          : "translate-y-full  bottom-[4vh]"
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

        <DragButton title={"Dashboard"} link={"/"}>
          <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Dashboard"} link={"/"}>
          <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Dashboard"} link={"/"}>
          <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Dashboard"} link={"/"}>
          <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Dashboard"} link={"/"}>
          <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Dashboard"} link={"/"}>
          <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
        </DragButton>
      </div>
    </Navbar.Container>
  );
};

export default DragBar;
