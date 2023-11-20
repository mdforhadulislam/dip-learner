import React from "react";
import UserDashboardChart from "../Components/dashboard/UserDashboardChart";
import UserDashboardHead from "../Components/dashboard/UserDashboardHead";
import UserDashboardProfile from "../Components/dashboard/UserDashboardProfile";

const Dashboard = () => {
  return (
    <div className="w-full h-auto">
      <UserDashboardHead />
      <UserDashboardChart />
      <UserDashboardProfile />
    </div>
  );
};

export default Dashboard;
