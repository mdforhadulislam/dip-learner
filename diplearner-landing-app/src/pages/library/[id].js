import BookDetails from "@/Components/Library/BookDetails";
import RelatedBook from "@/Components/Library/RelatedBook";

export default function SingleBook() {
  return (
    <div className="w-full h-full px-2 ">
      <div className="container pt-10">
        <BookDetails />
        <RelatedBook />
      </div>
    </div>
  );
}
