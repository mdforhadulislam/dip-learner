import React, { useState } from "react";
import DragBar from "../Components/NavBar/DragBar";
import NavBar from "../Components/NavBar/NavBar";

const UserLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar
        action={() => {
          setIsOpen(!isOpen);
        }}
      />
      {children}
      <DragBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default UserLayout;
