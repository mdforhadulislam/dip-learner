import Image from "next/image";
import Link from "next/link";

const BookOptionCard = () => {
  return (
    <div className="w-full h-auto p-3 shadow-4xl rounded-md flex items-center aling-middle">
      <div className="w-[260px] h-[230px]">
        <Image
          className="max-w-[200px] h-auto"
          width={160}
          height={200}
          src={"/book-1.png"}
          alt="Book image"
        />
      </div>
      <div className="max-w-[200px] sm:max-w-[350px] h-auto">
        <h1 className="text-xl font-semibold mb-2 italic">Genarel Book</h1>
        <div className="w-full h-auto py-2 mb-4">
          <p className="text-md font-normal italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            assumenda eos porro nobis alias exercitationem asperiores blanditiis
          </p>
        </div>
        <Link
          className={`px-4 py-2 text-center text-md shadow  hover:bg-[#29b6e0] bg-[#00B1E9] text-white transition duration-300 rounded-md flex items-center align-middle justify-center`}
          href={"/library/?name=genarel"}
        >
          <span className="w-full h-auto text-center">
            See All Genarel Book
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BookOptionCard;
