import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/logos/crikklogo.png";
import home from "../../assets/logos/home.png";
import crown from "../../assets/logos/crown.png";
import help from "../../assets/logos/help.png";
import setting from "../../assets/logos/setting.png";
import rocket from "../../assets/logos/rocket.png";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";

const Sidebar = ({ active, setActive }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setActive("settings");
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-body">
        <div className="sidebar-body-top">
          <div className="sidebar-logo">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <div className="add-project-btn">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                background:
                  "linear-gradient(263.13deg, #8a5cff -9.08%, #596cff 95.46%)",
                boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.04)",
                borderRadius: "8px",
                textTransform: "none",
                color: "white",
                "&:hover": {
                  background:
                    "linear-gradient(263.13deg, #8a5cff -9.08%, #596cff 85%)",
                },
              }}
            >
              New Project
            </Button>
          </div>

          <div className="sidebar-list-body">
            <ul className="sidebar-links">
              <li
                className={`sidebar-link ${
                  active === "dashboard" ? "active" : ""
                }`}
                onClick={() => setActive("dashboard")}
              >
                <img src={home} alt="Dashboard Icon" className="icon" />
                <span>Dashboard</span>
              </li>
              <li
                className={`sidebar-link ${
                  active === "subscriptions" ? "active" : ""
                }`}
                onClick={() => setActive("subscriptions")}
              >
                <img src={crown} alt="Subscriptions Icon" className="icon" />
                <span>Subscriptions</span>
              </li>
              <li
                className={`sidebar-link ${
                  active === "helpcenter" ? "active" : ""
                }`}
                onClick={() => setActive("helpcenter")}
              >
                <img src={help} alt="Help Center Icon" className="icon" />
                <span>Help Center</span>
              </li>

              <li
                className={`sidebar-link sidebar-link-setting ${
                  active === "settings" ? "active" : ""
                }`}
                onClick={toggleDropdown}
              >
                <div className="setting-icon-div">
                  <img src={setting} alt="Settings Icon" className="icon" />
                  <span>Settings</span>
                </div>
                <span className="dropdown-toggle-icon">
                  <IconButton
                    onClick={toggleDropdown}
                    sx={{
                      cursor: "pointer",
                      fontSize: "2rem",
                    }}
                  >
                    {dropdownOpen ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowUpIcon />
                    )}
                  </IconButton>
                </span>
              </li>
            </ul>
          </div>

          {dropdownOpen && (
            <div className="dropdown-body">
              <div className="dropdown open">
                <ul>
                  <li
                    className={`dropdown-item ${
                      active === "profile" ? "active" : ""
                    }`}
                    onClick={() => setActive("profile")}
                  >
                    Profile Settings
                  </li>
                  <li
                    className={`dropdown-item ${
                      active === "account" ? "active" : ""
                    }`}
                    onClick={() => setActive("account")}
                  >
                    Account Settings
                  </li>
                  <li
                    className={`dropdown-item ${
                      active === "terms" ? "active" : ""
                    }`}
                    onClick={() => setActive("terms")}
                  >
                    Terms and Conditions
                  </li>
                  <li
                    className={`dropdown-item ${
                      active === "privacy" ? "active" : ""
                    }`}
                    onClick={() => setActive("privacy")}
                  >
                    Privacy Policy
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="sidebar-body-bottom">
          <div className="refer-left">
            <h2>Share the joy</h2>
            <p>Refer your friends!</p>
            <Button
              variant="contained"
              sx={{
                color: "rgba(255, 193, 48, 1)",
                backgroundColor: "rgba(255, 255, 255, 1)",
                boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.04)",
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            >
              Refer Now!
            </Button>
          </div>
          <div className="refer-right">
            <img src={rocket} alt="rocket icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
