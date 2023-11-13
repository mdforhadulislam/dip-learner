import Layouts from "@/Utils/Layouts";
import Spinner from "@/Utils/Spinner";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }) {
  const [isClient, setIsClaint] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClaint(true);
  }, []);

  if (router.route.split("/")[1] == "auth") {
    return isClient ? <Component {...pageProps} /> : <Spinner />;
  }

  return (
    <Layouts>{isClient ? <Component {...pageProps} /> : <Spinner />}</Layouts>
  );
}
