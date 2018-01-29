import React from "react";
import LeftColumnDashboard from "./LeftColumnDashboard";
import MiddleColumnDashboard from "./MiddleColumnDashboard";
import RightColumnDashboard from "./RightColumnDashboard";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-container">
        <LeftColumnDashboard />
        <MiddleColumnDashboard />
        <RightColumnDashboard />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
