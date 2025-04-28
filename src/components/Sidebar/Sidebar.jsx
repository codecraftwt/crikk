import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
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
import { Box, IconButton } from "@mui/material";
// import bgimg from "../../assets/images/Background.png"

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
          {/* Sidebar Logo */}
          <div className="sidebar-logo">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          {/* Add Project Button */}
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

          {/* Sidebar Links */}
          <div className="sidebar-list-body">
            <ul className="sidebar-links">
              <li
                className={`sidebar-link ${active === "dashboard" ? "active" : ""}`}
              >
                <Link to="/dashboard" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                  <img src={home} alt="Dashboard Icon" className="icon" />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li
                className={`sidebar-link ${active === "subscriptions" ? "active" : ""}`}
              >
                <Link to="/subscriptions" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                  <img src={crown} alt="Subscriptions Icon" className="icon" />
                  <span>Subscriptions</span>
                </Link>
              </li>

              <li
                className={`sidebar-link ${active === "helpcenter" ? "active" : ""}`}
              >
                <Link to="/helpcenter" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                  <img src={help} alt="Help Center Icon" className="icon" />
                  <span>Help Center</span>
                </Link>
              </li>

              <li
                className={`sidebar-link sidebar-link-setting ${active === "settings" ? "active" : ""}`}
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
                    {dropdownOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </span>
              </li>
            </ul>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="dropdown-body">
              <div className="dropdown open">
                <ul>
                  <li
                    className={`dropdown-item ${active === "profile" ? "active" : ""}`}
                  >
                    <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
                      Profile Settings
                    </Link>
                  </li>
                  <li
                    className={`dropdown-item ${active === "account" ? "active" : ""}`}
                  >
                    <Link to="/account" style={{ textDecoration: "none", color: "inherit" }}>
                      Account Settings
                    </Link>
                  </li>
                  <li
                    className={`dropdown-item ${active === "terms" ? "active" : ""}`}
                  >
                    <Link to="/terms" style={{ textDecoration: "none", color: "inherit" }}>
                      Terms and Conditions
                    </Link>
                  </li>
                  <li
                    className={`dropdown-item ${active === "privacy" ? "active" : ""}`}
                  >
                    <Link to="/privacy" style={{ textDecoration: "none", color: "inherit" }}>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Bottom Section */}
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
        {/* <Box sx={{width:"100%", display: "flex"}}>
          <img src={bgimg} alt="bgimg" style={{width:"90%", margin:"auto"}}/>
          <Box></Box>
        </Box> */}
      </div>
    </div>
  );
};

export default Sidebar;
