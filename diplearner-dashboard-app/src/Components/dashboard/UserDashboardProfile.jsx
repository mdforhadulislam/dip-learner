import React from "react";
import UserDashboardHead from "./UserDashboardHead";
import UserProfileCard from "./UserProfileCard";

const UserDashboardProfile = () => {
  return (
    <div className="w-full h-auto py-2 flex gap-4 md:flex-row flex-col">
      <UserProfileCard />

      <UserDashboardHead />
    </div>
  );
};

export default UserDashboardProfile;
