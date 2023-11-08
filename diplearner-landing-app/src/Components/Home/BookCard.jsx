import Image from "next/image";
import Link from "next/link";

const BookCard = () => {
  return (
    <div className="w-full h-full p-2">
      <Link href={"/library/ggggg"}>
        <div className="w-full h-full border p-2 flex flex-row justify-start items-center align-middle rounded-md gap-2 shadow-4xl  backdrop-blur-md bg-white/60 cursor-pointer">
          <div className="w-[180px] h-[80px] block relative">
            <Image
              width={160}
              height={200}
              src={"/book-1.png"}
              alt="Book Image"
              className=" absolute w-[160px] h-[200px] -top-10"
            />
            <div className="absolute w-[120px] h-[175px] -top-10"></div>
          </div>
          <div className="max-w-[250px] h-auto flex flex-col justify-start items-start align-top">
            <h1 className="text-sm font-semibold mb-[4px]">
              Book hello world - 2024 - (404943)
            </h1>
            <p className="text-sm font-normal italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              molestias praesentium veniam enim.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
