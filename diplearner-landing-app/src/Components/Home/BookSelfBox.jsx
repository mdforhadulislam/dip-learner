import Slider from "@/Utils/Slider";
import Image from "next/image";
import SelfBoxBoxBottom from "../../../public/book_self_card.png";
import SelfBookCard from "./SelfBookCard";

const BookSelfBox = () => {
  return (
    <div className="w-full">
      <Slider>
        <SelfBookCard />
        <SelfBookCard />
        <SelfBookCard />
        <SelfBookCard />
      </Slider>
      <div className="w-full h-auto relative ">
        <Image
          className="w-full h-auto absolute -top-[70px] sm:-top-[76px] md:-top-[85px]  z-[5]"
          src={SelfBoxBoxBottom}
          alt="Box bottom"
        />
      </div>
    </div>
  );
};

export default BookSelfBox;
