import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ link, title, action, style }) => {
  return (
    <li>
      <Link
        to={link || "/"}
        title={title}
        className={`block py-1 my-1 pr-4 pl-3 text-[17px] text-[#29b6e0]  hover:bg-[#29b6e0]  lg:text-gray-800 lg:hover:text-[#29b6e0] hover:text-white rounded lg:bg-transparent lg:p-0 transition duration-300 lg:hover:bg-[#fff0] ${style}`}
        onClick={action}
      >
        {title}
      </Link>
    </li>
  );
};

export default React.memo(NavButton);
