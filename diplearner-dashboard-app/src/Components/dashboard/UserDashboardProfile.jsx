import React from "react";
import UserDashboardAllUser from "./UserDashboardAllUser";
import UserProfileCard from "./UserProfileCard";

const UserDashboardProfile = () => {
  return (
    <div className="w-full h-auto py-2 flex gap-4 ">
      <UserProfileCard />
      <UserDashboardAllUser />
    </div>
  );
};

export default UserDashboardProfile;
