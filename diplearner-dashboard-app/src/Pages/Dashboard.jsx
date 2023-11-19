import React from "react";
import UserDashboardHead from "../Components/dashboard/UserDashboardHead";
import UserDashboardChart from "../Components/dashboard/UserDashboardChart";

const Dashboard = () => {
  return (
    <div className="w-full h-auto">
      <UserDashboardHead />
      <UserDashboardChart />
    </div>
  );
};

export default Dashboard;
