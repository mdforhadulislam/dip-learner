import Slider from "@/Utils/Slider";
import Image from "next/image";
import SelfBoxBoxBottom from "../../../public/book_self_card.png";
import SelfBookCard from "./SelfBookCard";

const BookSelfBox = () => {
  return (
    <div className="w-full">
      <Slider
        coustomResponsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
          },
          desktop3: {
            breakpoint: { max: 3000, min: 1500 },
            items: 5,
          },
          desktop2: {
            breakpoint: { max: 1500, min: 1024 },
            items: 4,
          },
          desktop1: {
            breakpoint: { max: 1024, min: 800 },
            items: 2,
          },
          tablet: {
            breakpoint: { max: 800, min: 600 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
          },
        }}
      >
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
