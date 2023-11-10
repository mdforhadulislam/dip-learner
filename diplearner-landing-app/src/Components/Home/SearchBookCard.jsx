import Image from "next/image";
import Link from "next/link";
import BookImage from "../../../public/book-1.png";

const SearchBookCard = () => {
  return (
    <div className="max-w-[220px] h-auto inline-block p-2">
      <div className="w-full h-auto p-2 shadow-md border rounded-md">
        <div>
          <Image src={BookImage} alt="Book" className="w-[150px] h-[190px] m-auto" />
        </div>
        <div>
          <h1 className=" text-base font-semibold mb-2">
            Book hello world - 2024 - (404943)
          </h1>
          <Link
            className={`px-4 py-2 text-center text-md shadow  hover:bg-[#29b6e0] bg-[#00B1E9] text-white transition duration-300 rounded-md flex items-center align-middle justify-center`}
            href={"/library/hjgkhjg"}
          >
            <span className="w-full h-auto text-center">See Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBookCard;
