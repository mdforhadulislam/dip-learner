import React from "react";
import UserDashboardChart from "../Components/dashboard/UserDashboardChart";
import UserDashboardHead from "../Components/dashboard/UserDashboardHead";
import UserDashboardProfile from "../Components/dashboard/UserDashboardProfile";
import UserReadedBook from "../Components/dashboard/UserReadedBook";

const Dashboard = () => {
  return (
    <div className="w-full h-auto">
      <UserDashboardHead />
      <UserDashboardChart />
      <UserDashboardProfile />
      <UserReadedBook />
    </div>
  );
};

export default Dashboard;
