import React from "react";
import FirstBookBox from "./FirstBookBox";
import SecondBookBox from "./SecondBookBox";

const UserDashBoardBook = () => {
  return (
    <div class="w-full h-auto py-2 flex flex-col gap-4 items-center align-middle justify-center">
      <FirstBookBox />
      <SecondBookBox />
    </div>
  );
};

export default UserDashBoardBook;
