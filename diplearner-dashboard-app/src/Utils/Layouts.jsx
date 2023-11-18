import React, { useState } from "react";
import DragBar from "../Components/NavBar/DragBar";
import NavBar from "../Components/NavBar/NavBar";

const Layouts = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full h-auto relative">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full h-[60px]"></div>
      {children}
      <DragBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default Layouts;
