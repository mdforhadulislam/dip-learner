import LibraryBody from "@/Components/Library/LibraryBody";
import LibraryCategories from "@/Components/Library/LibraryCategories";
import LibraryHead from "@/Components/Library/LibraryHead";
import Head from "next/head";
export default function BookLibrary() {
  return (
    <>
     <Head>
          <title>Hello world</title>
        </Head>
      <LibraryHead />
      <LibraryCategories />
      <LibraryBody />
    </>
  );
}
