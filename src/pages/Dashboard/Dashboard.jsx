import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/SearchBar/Searchbar";

const Dashboard = () => {
  const [active, setActive] = useState("dashboard");

  const renderActiveScreen = () => {
    switch (active) {
      case "dashboard":
        return <Dashboard />;
      case "subscriptions":
        // return <Subscriptions />;
        return <Dashboard />;

      case "helpcenter":
        // return <HelpCenter />;
        return <Dashboard />;

      case "settings":
        // return <Settings />;
        return <Dashboard />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="dashboard-container">
        <Sidebar active={active} setActive={setActive} />
      <div className="dashboard-div">
        <Searchbar />
      </div>
      {/* {renderActiveScreen()} */}
    </div>
  );
};

export default Dashboard;
