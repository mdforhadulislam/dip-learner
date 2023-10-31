import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const OptionBookCard = () => {
  return (
    <div className="w-full h-[300px] shadow-3xl bg-gradient-to-r from-[#00B1E9]/10 to-[#00B1E9]/40  rounded-md text-white">
      <div className="w-full h-auto flex items-top align-top p-4 gap-3">
        <div className=" w-1/3 h-auto relative">
          <Typography variant="h5" className="text-gray-800 font-bold">
            This New Release - (222222) - (2023)
          </Typography>
          <img
            className="w-[180px] h-[220px] absolute top-24"
            src="./book-1.png"
            alt="new-release-book"
          />
        </div>
        <div className=" w-2/3 h-auto flex flex-col gap-3">
          <Typography variant="h6" className="text-gray-900 font-bold">
            About Book
          </Typography>
          <Typography variant="p" className="text-gray-900">
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            excepturi vitae optio adipisci dolores qui. Voluptatem, neque
            asperiores dicta amet eaque quam eos vitae tenetur, optio natus
            molestiae`.length > 200 ? (
              <>
                <p className=" inline-block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  excepturi vitae optio adipisci dolores qui. Voluptatem, neque
                  asperiores dicta amet eaque quam eos vitae tenetur.......
                  <span>See more</span>
                </p>
              </>
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                excepturi vitae optio adipisci dolores qui. Voluptatem, neque
                asperiores dicta amet eaque quam eos vitae tene
              </p>
            )}
          </Typography>
          <Button>See More</Button>
        </div>
      </div>
    </div>
  );
};

export default OptionBookCard;
