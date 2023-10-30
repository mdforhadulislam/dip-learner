import React from "react";
import StatusCard from "./StatusCard";

const StatusSection = () => {
  return (
    <div className="w-full h-full py-5">
      <div className="w-full h-auto bg-[#29b6e0]">
        <div className="container m-auto h-auto  p-8 flex flex-col lg:flex-row gap-3 justify-center items-center align-middle">
          <StatusCard
            icon={"like-star.png"}
            headding={"Expert customer Service"}
            subHeadding={"For a shopping experience"}
          />
          <StatusCard
            icon={"discount.png"}
            headding={"Amazing Value"}
            subHeadding={"We offer competitive prices"}
          />
          <StatusCard
            icon={"payment-suy.png"}
            headding={"Safe Payment"}
            subHeadding={"100% secure payment"}
          />
        </div>
      </div>
    </div>
  );
};

export default StatusSection;
