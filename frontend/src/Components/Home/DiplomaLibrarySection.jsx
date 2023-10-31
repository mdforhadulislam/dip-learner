import { Typography } from "@material-tailwind/react";
import React from "react";
import DiplomaBookCard from "./DiplomaBookCard";

const DiplomaLibrarySection = () => {
  return (
    <div>
      <div>
        <div>
          <Typography variant="h3">Diploma Books</Typography>
        </div>
        <div className="w-full h-auto gap-4 text-center">
          <DiplomaBookCard />
          <DiplomaBookCard />
          <DiplomaBookCard />
          <DiplomaBookCard />
        </div>
      </div>
    </div>
  );
};

export default DiplomaLibrarySection;
