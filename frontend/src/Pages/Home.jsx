import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import StatusSection from "../Components/Home/StatusSection";
import UserLayout from "../utils/UserLayout";

const Home = () => {
  return (
    <UserLayout>
      <HeroSection />
      <StatusSection />
    </UserLayout>
  );
};

export default Home;
