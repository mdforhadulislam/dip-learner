import Slider from "@/Utils/Slider";
import BookCard from "./BookCard";

const BookShowSection = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-[1280px] h-auto m-auto py-8 p-2">
        <div>
          <Slider>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BookShowSection;
