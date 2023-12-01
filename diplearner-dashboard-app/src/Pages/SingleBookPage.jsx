import React, { useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { useParams } from "react-router-dom";

const SingleBookPage = () => {
  const { id, chapterId } = useParams();
  const [isView, setIsView] = useState(false);
  console.log(id, chapterId);

  return (
    <div className="w-full h-auto">
      {isView && (
        <div className=" fixed w-screen h-screen top-0 left-0 p-1 z-50 flex justify-center items-center align-middle  backdrop-blur-md bg-white/60 shadow-3xl overflow-auto">
          <GrClose
            className="w-8 h-8 absolute top-5 right-5 bg-white rounded-md shadow-3xl p-1 cursor-pointer"
            onClick={() => setIsView(!isView)}
          />
          <img
            className="w-auto h-auto"
            src={"https://avatars3.githubusercontent.com/u/2763884?s=1288"}
            alt="Book"
          />
        </div>
      )}

      <div className="w-full h-auto p-2 border-b text-2xl font-semibold italic text-center">
        hello world - page - 2
      </div>
      <div className="w-full h-full relative">
        <div className="p-2 absolute right-0 -top-12 rounded-md shadow-3xl w-auto inline-block">
          <BsFullscreen
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsView(!isView)}
          />
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
