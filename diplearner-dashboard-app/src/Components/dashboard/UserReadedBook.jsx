import React from "react";
import SingleReadBook from "./SingleReadBook";

const UserReadedBook = () => {
  return (
    <div className="w-full h-auto py-2">
      <div className="w-full h-auto p-3 shadow-4xl rounded-lg">
        <div className=" pb-3">
          <h1 className=" text-xl font-semibold text-gray-800 italic border-b border-gray-600">
            Readed Book
          </h1>
        </div>

        <div className="w-full h-auto text-center">
          <SingleReadBook />
          <SingleReadBook />
          <SingleReadBook />
          <SingleReadBook />
          <SingleReadBook />
          <SingleReadBook />
          <SingleReadBook />
          <SingleReadBook />
        </div>
      </div>
    </div>
  );
};

export default UserReadedBook;
