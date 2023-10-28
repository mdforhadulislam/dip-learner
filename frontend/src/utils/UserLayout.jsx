import React from "react";
import NavBar from "../Components/NavBar/NavBar";

const UserLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default UserLayout;
