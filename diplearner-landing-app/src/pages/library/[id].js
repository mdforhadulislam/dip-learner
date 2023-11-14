import BookDetails from "@/Components/Library/BookDetails";
import RelatedBook from "@/Components/Library/RelatedBook";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function SingleBook() {
  const [isClient, setIsClaint] = useState(false);

  useEffect(() => {
    setIsClaint(true);
  }, []);

  if (isClient) {
    return (
      <>
        <Head>
          <title>Hello world</title>
        </Head>
        <div className="w-full h-full px-2 ">
          <div className="container pt-10">
            <BookDetails />
            <RelatedBook />
          </div>
        </div>
      </>
    );
  } else {
    return "";
  }
}
