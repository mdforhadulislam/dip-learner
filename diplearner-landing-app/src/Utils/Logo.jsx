import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoPng from "../../public/LOGO_1.png";

const Logo = ({ style, link, textStyle }) => {
  return (
    <Link
      href={link || "/"}
      title={"Dip Learner"}
      about={"Dip Learner"}
      className={`w-auto flex items-center`}
    >
      <Image
        className={`${style || "w-auto h-10"}  mr-3`}
        src={LogoPng}
        alt="Dip Learner Logo"
      />
    </Link>
  );
};

export default React.memo(Logo);
