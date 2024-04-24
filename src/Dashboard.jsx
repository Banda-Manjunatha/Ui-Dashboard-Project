import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Data from "./Components/Data/Data";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Data />
      </div>
    </div>
  );
};

export default Dashboard;
