import React from "react";
import DiplomaLibrarySection from "../Components/Home/DiplomaLibrarySection";
import HeroSection from "../Components/Home/HeroSection";
import OptionSection from "../Components/Home/OptionSection";
import StatusSection from "../Components/Home/StatusSection";
import UserLayout from "../utils/UserLayout";

const Home = () => {
  return (
    <UserLayout>
      <HeroSection />
      <StatusSection />
      <OptionSection />
      <DiplomaLibrarySection />
    </UserLayout>
  );
};

export default Home;
