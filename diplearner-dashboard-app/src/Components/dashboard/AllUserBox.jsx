import React from "react";

const AllUserBox = () => {
  return (
    <div className="min-w-[800px] max-w-full h-auto p-1">
      <div className="w-full h-auto p-1 px-2 shadow-3xl rounded-md flex flex-row gap-5 items-center align-middle justify-between">
        <div className="flex gap-4">
          <img
            src="https://avatars3.githubusercontent.com/u/2763884?s=128"
            alt="Profile_Image"
            className="w-[60px] h-[60px] rounded-full border shadow-3xl"
          />
          <div className="flex flex-col justify-center items-start align-start">
            <span className=" text-lg font-medium italic text-gray-900">
              MD Forhadul Islam Rony
            </span>
            <span className=" text-sm font-medium italic text-defult mt-[-5px]">
              USERNAME: forhadul44234
            </span>
          </div>
        </div>
        <div>USER</div>
        <div>PREMIUM</div>
        <div className="flex flex-row gap-2">
          <div className="text-gray-800 bg-gray-50 p-2 cursor-pointer rounded-md ">
            Contact
          </div>
          <div className="text-gray-800 bg-gray-50 p-2 cursor-pointer rounded-md ">
            View Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUserBox;
