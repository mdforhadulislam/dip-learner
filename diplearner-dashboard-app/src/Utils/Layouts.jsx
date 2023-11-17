import React from "react";
import NavBar from "../Components/Navbar/NavBar";

const Layouts = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="w-full h-[60px]"></div>
      {children}
    </>
  );
};

export default Layouts;
