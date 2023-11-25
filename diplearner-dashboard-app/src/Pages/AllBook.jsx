import React from "react";
import AllBookBody from "../Components/AllBook/AllBookBody";
import AllBookHeader from "../Components/AllBook/AllBookHeader";
import AllBookSearchBook from "../Components/AllBook/AllBookSearchBook";

const AllBook = () => {
  return (
    <div className="w-full h-auto">
      <AllBookSearchBook />
      <AllBookHeader />
      <AllBookBody />
    </div>
  );
};

export default AllBook;
