import React, { useState } from "react";
import { AiOutlineControl } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiBlackBook, GiBookshelf } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { TfiControlShuffle } from "react-icons/tfi";
import { VscSettings } from "react-icons/vsc";
import DragButton from "./DragButton";

const DragBar = ({ isOpen, setIsOpen }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <>
      <div
        id="drawer-swipe"
        className={`fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg transition-transform left-0 right-0 ${
          !isOpen
            ? "translate-y-full bottom-[30px]"
            : "transform-none bottom-[0px]"
        }`}
      >
        <div
          className="p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 "></span>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4 max-h-[350px] overflow-auto scrollbar">
          {!isAdmin ? (
            <>
              <DragButton title={"Dashboard"} link={"/"}>
                <LuLayoutDashboard className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>
              <DragButton title={"Library"} link={"/messanger"}>
                <GiBookshelf className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>
              <DragButton title={"My Book"} link={"/notification"}>
                <GiBlackBook className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>
              <DragButton title={"Profile"} link={"/profile"}>
                <CgProfile className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>
              <DragButton title={"Setting"} link={"/setting"}>
                <VscSettings className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>
            </>
          ) : (
            <>
              <DragButton title={"Dashboard"} link={"/"}>
                <LuLayoutDashboard className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>
              <DragButton title={"Library"} link={"/messanger"}>
                <GiBookshelf className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>
              <DragButton title={"Book"} link={"/notification"}>
                <GiBlackBook className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>
              <DragButton title={"User Profile"} link={"/profile"}>
                <PiUsers className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>

              <DragButton title={"purchase Controll"} link={"/profile"}>
                <TfiControlShuffle className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>

              <DragButton title={"Payment"} link={"/profile"}>
                <MdOutlinePayments className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>

              <DragButton title={"Controll"} link={"/notification"}>
                <AiOutlineControl className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>
              <DragButton title={"Setting"} link={"/setting"}>
                <VscSettings className="inline w-8 h-8 text-[#009fe9]" />
              </DragButton>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(DragBar);
