import AboutSection from "@/Components/Home/AboutSection";
import BookShowSection from "@/Components/Home/BookShowSection";
import HeroSection from "@/Components/Home/HeroSection";
import LibrarySerction from "@/Components/Home/LibrarySerction";
import OptionSection from "@/Components/Home/OptionSection";
import PricingSection from "@/Components/Home/PricingSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="DipLearner Web App"
          title="DipLearner Web App"
          content="It is an online education website. You can read any book by visiting this website"
        />
        <title>DipLearner Web App || Home</title>
      </Head>
      <HeroSection />
      <OptionSection />
      <BookShowSection />
      <LibrarySerction />
      <AboutSection />
      <PricingSection />
    </>
  );
}
