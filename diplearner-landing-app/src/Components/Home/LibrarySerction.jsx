import BookSelfBox from "./BookSelfBox";

const LibrarySerction = () => {
  return (
    <div className="w-full h-auto py-8 p-2">
      <div className=" w-full h-auto text-center">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Our Book Collection
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
          magni libero consequuntur voluptatum velit amet id repudiandae ea,
          deleniti laborum in neque eveniet.
        </p>
      </div>
      <div className=" container p-4 pt-1  m-auto">
        <BookSelfBox />
        <BookSelfBox />
        <BookSelfBox />
        <BookSelfBox />
      </div>
    </div>
  );
};

export default LibrarySerction;
