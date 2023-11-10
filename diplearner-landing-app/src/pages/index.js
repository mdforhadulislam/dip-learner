import AboutSection from "@/Components/Home/AboutSection";
import BookShowSection from "@/Components/Home/BookShowSection";
import HeroSection from "@/Components/Home/HeroSection";
import LibrarySerction from "@/Components/Home/LibrarySerction";
import OptionSection from "@/Components/Home/OptionSection";
import PricingSection from "@/Components/Home/PricingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OptionSection />
      <BookShowSection />
      <LibrarySerction />
      <AboutSection />
      <PricingSection />
    </>
  );
}
