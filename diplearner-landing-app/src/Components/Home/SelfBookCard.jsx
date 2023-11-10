import Image from "next/image";
import Link from "next/link";
import BookImage from "../../../public/book-2.png";

const SelfBookCard = () => {
  return (
    <div className="w-full h-auto p-2 relative group z-[95]">
      <div className="w-full h-auto p-2 pb-4  ">
        <div>
          <Image
            src={BookImage}
            className="w-[160px] md:w-[210px] m-auto"
            alt="Book"
            datas
          />
        </div>
      </div>
      <div className=" absolute h-[calc(100%-10px)] p-3 top-0 left-0  w-full  z-20 hidden  group-hover:block transition-all">
        <div className="w-full h-full rounded-md group-hover:shadow-4xl  group-hover:p-3  overflow-hidden backdrop-blur-md bg-white/80 flex flex-col  gap-2">
          <h1 className="text-lg font-semibold mb-[2px]">
            Book hello world - 2024 - (404943)
          </h1>
          <p className=" text-base font-normal italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque
            asperiores possimus nisi praesentium veniam dolorem illum ratione,
            rem sunt ipsum
          </p>
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

export default SelfBookCard;
