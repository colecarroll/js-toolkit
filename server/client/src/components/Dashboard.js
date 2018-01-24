import React, { Component } from "react";
import LeftColumnDashboard from "./LeftColumnDashboard";
import MiddleColumnDashboard from "./MiddleColumnDashboard";
import RightColumnDashboard from "./RightColumnDashboard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <LeftColumnDashboard />
      <MiddleColumnDashboard />
      <RightColumnDashboard />
    </div>
  );
};

export default Dashboard;
