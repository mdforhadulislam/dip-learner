import { Navbar } from "keep-react";
import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GiBlackBook, GiBookshelf } from "react-icons/gi";
import { GrChapterAdd, GrUserSettings } from "react-icons/gr";
import { LuBookPlus, LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePayments, MdWeb } from "react-icons/md";
import { RiFilePaperLine } from "react-icons/ri";
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
        <DragButton title={"Dashboard"} link={"/admin"}>
          <LuLayoutDashboard className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"All Books"} link={"/all-book"}>
          <GiBookshelf className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Access Books"} link={"/access-book"}>
          <GiBlackBook className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Profile Setting"} link={"/setting"}>
          <GrUserSettings className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Book"} link={"/book"}>
          <LuBookPlus className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Chapter"} link={"/chapter"}>
          <GrChapterAdd className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Pages"} link={"/pages"}>
          <RiFilePaperLine className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Payments"} link={"/payments"}>
          <MdOutlinePayments className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"User"} link={"/user"}>
          <AiOutlineUserAdd className="inline w-8 h-8 text-defult" />
        </DragButton>

        
        <DragButton title={"Admin Setting"} link={"/admin/setting"}>
          <GrUserSettings className="inline w-8 h-8 text-defult" />
        </DragButton>

        <DragButton title={"Landing Controll"} link={"/landing-controll"}>
          <MdWeb className="inline w-8 h-8 text-defult" />
        </DragButton>
      </div>
    </Navbar.Container>
  );
};

export default DragBar;
