import React from "react";

const MenuButton = ({ action }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center p-[4px] border border-[#ffc21a] ml-3 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      onClick={action}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-6 h-6  text-[#ffc21a]"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export default React.memo(MenuButton);
