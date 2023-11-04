import Layouts from "@/Utils/Layouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
