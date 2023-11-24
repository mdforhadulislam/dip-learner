import React from "react";
import AllUserBox from "./AllUserBox";

const UserDashboardAllUser = () => {
  return (
    <div className="w-full md:w-[calc(100%-316px)] h-auto p-2 shadow-4xl rounded-md">
      <div className="w-auto max-h-[320px] overflow-scroll scrollbar p-[5px]">
        <div className="w-full h-auto flex flex-col gap-2">
          <AllUserBox />
          <AllUserBox />
          <AllUserBox />
          <AllUserBox />
          <AllUserBox />
        </div>
      </div>
    </div>
  );
};

export default UserDashboardAllUser;
