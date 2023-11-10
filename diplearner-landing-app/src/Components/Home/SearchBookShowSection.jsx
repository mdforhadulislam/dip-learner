import SearchBookCard from "./SearchBookCard";

const SearchBookShowSection = () => {
  return (
    <div className="w-full h-auto -mt-10">
      <div className="container p-2 m-auto text-center">
        <SearchBookCard />
        <SearchBookCard />
        <SearchBookCard />
        <SearchBookCard />
        <SearchBookCard />
      </div>
    </div>
  );
};

export default SearchBookShowSection;
