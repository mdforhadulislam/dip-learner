import BookSelfBox from "./BookSelfBox";

const LibrarySerction = () => {
  return (
    <div className="w-full h-auto py-8 p-2">
      <div className=" w-full h-auto text-center mb-6">
        <h1 className="text-5xl sm:text-7xl italic font-bold text-[#376179] mb-2">
          Book Collection
        </h1>
        <span className="max-w-[300px] h-2 bg-[#376179] block m-auto"></span>
      </div>
      <div className=" container p-4  m-auto">
        <BookSelfBox />
        <BookSelfBox />
        <BookSelfBox />
      </div>
    </div>
  );
};

export default LibrarySerction;
