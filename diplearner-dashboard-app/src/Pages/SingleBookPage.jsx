import React from "react";
import { BsFullscreen } from "react-icons/bs";
import { useParams } from "react-router-dom";
const SingleBookPage = () => {
  const { id, chapterId } = useParams();
  console.log(id, chapterId);

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto p-2 border-b text-2xl font-semibold italic text-center">
        hello world - page - 2
      </div>
      <div className="w-full h-full relative">
        <div className="p-2 absolute right-0 -top-12 rounded-md shadow-3xl w-auto inline-block">
          <BsFullscreen className="w-6 h-6" />
        </div>
        <img
          className="w-full h-full"
          src={"https://avatars3.githubusercontent.com/u/2763884?s=1288"}
          alt="Book"
        />
      </div>
    </div>
  );
};

export default SingleBookPage;
