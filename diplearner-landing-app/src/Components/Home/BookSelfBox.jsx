import Slider from "@/Utils/Slider";
import SelfBookCard from "./SelfBookCard";

const BookSelfBox = () => {
  return (
    <div className="w-full  selfBgImage px-16 pb-14 ">
      <Slider>
        <SelfBookCard />
        <SelfBookCard />
        <SelfBookCard />
        <SelfBookCard />
      </Slider>
    </div>
  );
};

export default BookSelfBox;
