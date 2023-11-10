import React from "react";

const ContactHeding = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center align-middle  p-5 text-white bg-[#00B1E9]">
      <span className="w-[120px] h-[6px] rounded inline-block bg-white"></span>
      <h1 className="text-[30px] sm:text-[55px] f-mi text-center pb-3">
        Contact Us
      </h1>
    </div>
  );
};

export default React.memo(ContactHeding);
