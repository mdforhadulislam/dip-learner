import Slider from "@/Utils/Slider";
import SearchBookCard from "../Home/SearchBookCard";
import RelatedBookCard from "./RelatedBookCard";

const RelatedBook = () => {
  return (
    <div className=" w-full h-auto py-5 pt-8">
      <div className=" w-full h-auto text-center py-5 p-2">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Our Relatred Book
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
          magni libero consequuntur voluptatum velit amet id repudiandae ea,
          deleniti laborum in neque eveniet.
        </p>
      </div>

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
            items: 5,
          },
          desktop1: {
            breakpoint: { max: 1024, min: 800 },
            items: 4,
          },
          tablet: {
            breakpoint: { max: 800, min: 600 },
            items:3,
          },
          mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
          },
        }}
      >
        <RelatedBookCard />
        <RelatedBookCard />
        <RelatedBookCard />
        <RelatedBookCard />
        <RelatedBookCard />
      </Slider>
    </div>
  );
};

export default RelatedBook;
