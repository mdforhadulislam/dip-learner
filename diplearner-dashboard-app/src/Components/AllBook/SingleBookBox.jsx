import React from "react";
import { Link } from "react-router-dom";

const SingleBookBox = () => {
  return (
    <Link to={"/all-book/rty"} className="max-w-[120px] h-auto inline-block m-2">
      <div className="w-full h-auto p-2 shadow-4xl rounded-md pb-1">
        <div>
          <img
            src={"https://avatars3.githubusercontent.com/u/2763884?s=128"}
            alt="Book"
            className="w-[100px] h-[150px] m-auto shadow-3xl rounded-md"
          />
        </div>
          <h1 className=" text-[15px] font-semibold">
            Book hello world - 2024 - (404943)
          </h1>
      </div>
    </Link>
  );
};

export default SingleBookBox;
