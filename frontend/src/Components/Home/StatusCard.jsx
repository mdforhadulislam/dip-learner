import { Typography } from "@material-tailwind/react";
import React from "react";

const StatusCard = ({ icon, headding, subHeadding }) => {
  return (
    <div className="w-[320px] h-full p-2 border rounded-md shadow-md">
      <div className="w-full  h-auto flex flex-col sm:flex-row gap-5 align-middle items-center justify-start">
        <img className="w-16 h-16" src={`./${icon}`} alt="Like-Star" />
        <div className=" flex flex-col justify-center align-middle items-start">
          <Typography variant="h5" color="white" className="font-medium">
            {headding}
          </Typography>
          <Typography
            variant="h6"
            color="white"
            className="font-medium opacity-80"
          >
            {subHeadding}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
