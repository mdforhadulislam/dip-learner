import React from "react";

const ContactHeding = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center align-middle  p-2">
      <div className=" w-full h-auto text-center py-5 p-2">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Contact With Us
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
          magni libero consequuntur voluptatum velit amet id repudiandae ea,
          deleniti laborum in neque eveniet.
        </p>
      </div>
    </div>
  );
};

export default React.memo(ContactHeding);
