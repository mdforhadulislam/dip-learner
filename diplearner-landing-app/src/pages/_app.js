import Layouts from "@/Utils/Layouts";
import Spinner from "@/Utils/Spinner";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }) {
  const [isClient, setIsClaint] = useState(false);
  useEffect(() => {
    setIsClaint(true);
  }, []);
  return (
    <Layouts>{isClient ? <Component {...pageProps} /> : <Spinner />}</Layouts>
  );
}
