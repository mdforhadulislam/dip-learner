import Image from "next/image";
import BookImage from "../../../public/book-2.png";

const SelfBookCard = () => {
  return (
    <div className="w-full h-auto p-2">
      <div className="w-full h-auto p-2 border pb-4">
        <div>
          <Image src={BookImage} className="w-[130px] sm:w-[160px] md:w-[210px] m-auto" alt="Book" />
        </div>
      </div>
    </div>
  );
};

export default SelfBookCard;
