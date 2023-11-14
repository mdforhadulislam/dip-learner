import Layouts from "@/Utils/Layouts";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.route.split("/")[1] == "auth") {
    return <Component {...pageProps} />;
  }

  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
