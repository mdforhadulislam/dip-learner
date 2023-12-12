import React from "react";
import UserDashBoardBook from "../Components/dashboard/UserDashBoardBook";
import UserDashboardChart from "../Components/dashboard/UserDashboardChart";
import UserDashboardProfile from "../Components/dashboard/UserDashboardProfile";
import UserReadedBook from "../Components/dashboard/UserReadedBook";

const Dashboard = () => {
  return (
    <div className="w-full h-auto">
      <UserDashboardChart />
      <UserDashboardProfile />
      <UserDashBoardBook />
      <UserReadedBook />
    </div>
  );
};

export default Dashboard;
