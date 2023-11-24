import React from "react";
import AllBookBody from "../Components/AllBook/AllBookBody";
import AllBookHeader from "../Components/AllBook/AllBookHeader";

const AllBook = () => {
  return (
    <div className="w-full h-auto">
      <AllBookHeader />
      <AllBookBody />
    </div>
  );
};

export default AllBook;
