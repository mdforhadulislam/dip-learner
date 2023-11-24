import React from "react";
import { Link } from "react-router-dom";

const SingleBookBox = () => {
  return (
    <div className="max-w-[160px] h-auto inline-block m-2">
      <div className="w-full h-auto p-2 shadow-4xl rounded-md">
        <div>
          <img
            src={"https://avatars3.githubusercontent.com/u/2763884?s=128"}
            alt="Book"
            className="w-[120px] h-[160px] m-auto"
          />
        </div>
        <Link to={"/all-book/rty"} className="hover:underline">
          <h1 className=" text-base font-semibold mb-2">
            Book hello world - 2024 - (404943)
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default SingleBookBox;
