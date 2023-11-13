import Image from "next/image";
import BookImage from "../../../public/book-1.png";
import TagBox from "./TagBox";

const BookDetails = () => {
  return (
    <div className="w-full h-auto">
      <div>
        <Image src={BookImage} alt="Book" />
      </div>
      <div>
        <h1>Book hello world - 2024 - (404943)</h1>
        <div className="flex gap-3 items-center align-middle justify-start">
          <span className=" text-lg font-semibold italic">Tag:</span>
          <div className="h-auto flex gap-2">
            <TagBox title={"civil"} />
            <TagBox title={"power"} />
            <TagBox title={"civil"} />
            <TagBox title={"computer"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
