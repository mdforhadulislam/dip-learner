import AboutSection from "@/Components/Home/AboutSection";
import BookShowSection from "@/Components/Home/BookShowSection";
import HeroSection from "@/Components/Home/HeroSection";
import LibrarySerction from "@/Components/Home/LibrarySerction";
import OptionSection from "@/Components/Home/OptionSection";
import SearchBook from "@/Components/Home/SearchBook";
import SearchBookShowSection from "@/Components/Home/SearchBookShowSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OptionSection />
      <BookShowSection />
      <LibrarySerction />
      <AboutSection />
      <SearchBook />
      <SearchBookShowSection />
    </>
  );
}
