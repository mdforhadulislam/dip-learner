import React from "react";

const NavButton = ({ link, title, action, style }) => {
  return (
    <li>
      <a
        href={link || "/"}
        title={title}
        className={`block py-2 pr-4 pl-3 text-[17px] text-[#ffb61a]  hover:bg-[#ffb61a]  lg:text-gray-800 lg:hover:text-[#ffb61a] hover:text-white rounded lg:bg-transparent lg:p-0 transition duration-300 lg:hover:bg-[#fff0] ${style}`}
        onClick={action}
      >
        {title}
      </a>
    </li>
  );
};

export default React.memo(NavButton);
