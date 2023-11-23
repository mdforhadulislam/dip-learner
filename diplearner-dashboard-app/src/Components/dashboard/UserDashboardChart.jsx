import React, { useEffect, useState } from "react";
import { LuClipboard, LuClipboardCheck } from "react-icons/lu";
import { PiShareFat } from "react-icons/pi";
import EyeIcon from "../../Assets/eye.gif";
import WalletIcon from "../../Assets/wallet.gif";

const UserDashboardChart = () => {
  const [date, setDate] = useState(new Date());
  const [isCopy, setIsCopy] = useState(false);

  const copyHandler = () => {
    // Get the text field
    var copyText = document.getElementById("copyBoard");

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };

  useEffect(() => {
    return setDate(new Date());
  }, [date]);

  return (
    <div className="w-full h-auto py-2 flex lg:flex-row flex-col gap-4 items-center align-middle justify-center">
      <div className=" w-full flex-col flex sm:flex-row justify-center items-start align-top gap-4">
        {/* view time design  */}
        <div className="w-full sm:w-auto p-2 shadow-4xl rounded-lg flex justify-center items-center align-middle">
          <div className="w-full sm:max-w-[300px] p-2 h-auto flex gap-4 justify-center items-center align-middle">
            <h1 className=" text-xl font-semibold italic text-gray-900">
              10/20/30
            </h1>
            <img src={EyeIcon} alt="Eye Icon" className="w-8 h-8" />
            <span className=" text-lg font-semibold italic text-gray-700">
              20 times
            </span>
          </div>
        </div>

        {/* wallet design  */}
        <div className="sm:w-auto p-2 w-full shadow-4xl rounded-lg flex justify-center items-center align-middle">
          <div className="w-full sm:max-w-[300px] h-auto flex gap-4 justify-center items-center align-middle">
            <img src={WalletIcon} alt="Eye Icon" className="w-12 h-12" />
            <span className=" text-lg p-2 font-semibold italic text-gray-800 bg-gray-50 rounded-md">
              200 Tk
            </span>
          </div>
        </div>
      </div>

      <div className="  w-full flex-col flex sm:flex-row justify-center items-start align-top gap-4">
        {/* view time design  */}
        <div className="w-full sm:w-auto  p-2 shadow-4xl rounded-lg flex justify-center items-center align-middle">
          <div className="w-full  sm:max-w-[300px] h-auto p-1 flex justify-center items-center align-middle gap-4">
            <h1 className=" text-lg font-semibold italic p-2 rounded-lg text-gray-700 bg-gray-50">
              {date.getDate()} / {date.getMonth() + 1} /{" "}
              {date.getFullYear() + 1}
            </h1>
            <h1 className=" text-lg font-semibold italic p-2 rounded-lg text-gray-700 bg-gray-50">
              {date.toLocaleTimeString()}
            </h1>
          </div>
        </div>

        {/* wallet design  */}
        <div className="sm:w-auto p-2 w-full shadow-4xl rounded-lg flex justify-center items-center align-middle">
          <div className="w-full sm:max-w-[300px] h-auto flex gap-2 justify-center items-center align-middle">
            <PiShareFat className="w-12 h-12 p-1" />
            <div className=" text-lg p-2 font-semibold italic text-gray-800 bg-gray-50 rounded-md flex justify-center align-middle items-center gap-2">
              <span>username104596</span>
              {isCopy ? (
                <LuClipboardCheck className="w-7 h-7 rounded-md cursor-pointer bg-white p-1" />
              ) : (
                <LuClipboard
                  className="w-7 h-7 rounded-md cursor-pointer bg-white p-1"
                  onClick={copyHandler}
                />
              )}
              <div className=" hidden" id="copyBoard">
                username104596
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserDashboardChart);
