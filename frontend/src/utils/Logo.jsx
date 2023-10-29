import React from "react";

const Logo = ({ style, link, textStyle }) => {
  return (
    <a
      href={link || "/"}
      title={"Blood Donation Media"}
      about={"Blood Donation Media Home Page"}
      className={`w-auto flex items-center`}
    >
      <img
        className={`${style || "w-auto h-10"}  mr-3`}
        src={"./LOGO_3.png"}
        alt="Dip Learner Logo"
      />
    </a>
  );
};

export default React.memo(Logo);
