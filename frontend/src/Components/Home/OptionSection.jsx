import React from "react";
import OptionBookCard from "./OptionBookCard";

const OptionSection = () => {
  return (
    <div className="w-full h-auto py-12 p-8 pb-16">
      <div className="container m-auto flex flex-col md:flex-row gap-8">
        <OptionBookCard />
        <OptionBookCard />
      </div>
    </div>
  );
};

export default OptionSection;
