import LibraryBody from "@/Components/Library/LibraryBody";
import LibraryCategories from "@/Components/Library/LibraryCategories";
import LibraryHead from "@/Components/Library/LibraryHead";

export default function BookLibrary() {
  return (
    <>
      <LibraryHead />
      <LibraryCategories />
      <LibraryBody />
    </>
  );
}
