import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/logos/crikklogo.png";
import home from "../../assets/logos/home.png";
import crown from "../../assets/logos/crown.png";
import help from "../../assets/logos/help.png";
import setting from "../../assets/logos/setting.png";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SidebarBottom from "../SidebarBottom/SidebarBottom";
import DropdownSetting from "../DropDownSetting/DropDownSetting";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Button, Box } from "@mui/material";
import NewProjectModal from "../NewProjectModal/NewProjectModal";

const Sidebar = ({ active, setActive }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  const toggleDropdown = () => {
    setActive("settings");
    setDropdownOpen(!dropdownOpen);
  };

  const navItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      to: "/dashboard",
      icon: home,
    },
    {
      key: "subscriptions",
      label: "Subscriptions",
      to: "/subscriptions",
      icon: crown,
    },
    {
      key: "helpcenter",
      label: "Help Center",
      to: "/helpcenter",
      icon: help,
    },
  ];

  return (
    <>
    <Box
      sx={{
        boxSizing: "border-box",
        width: "25%",
        height: "100vh",
        padding: "1rem",
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      <Box
        sx={{
          background: "#fff",
          width: "100%",
          height: "100%",
          boxShadow: "1px 2px 12px 1px rgba(0, 0, 0, 0.04)",
          borderRadius: "15px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ width: "150px", height: "auto", padding: "3rem 0" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setModalOpen(true)}
              sx={{
                padding: "10px 14px",
                fontSize: {md:"0.9rem", lg:"1rem"},
                textAlign: "center",
                background:
                  "linear-gradient(263.13deg, #8a5cff -9.08%, #596cff 95.46%)",
                boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.04)",
                borderRadius: "8px",
                textTransform: "none",
                color: "white",
                "&:hover": {
                  background:
                    "linear-gradient(263.13deg,rgb(63, 89, 255) -9.08%,rgb(150, 93, 199) 85%)",
                },
              }}
            >
              New Project
            </Button>
          </Box>
          <List sx={{ width: "100%" }}>
            {navItems.map((item) => (
              <ListItem disablePadding key={item.key}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  selected={active === item.key}
                  onClick={() => setActive(item.key)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "&.Mui-selected": {
                      backgroundColor: "#f0f0f0",
                    },
                    borderLeft: active === item.key ? "4px solid #8A5CFF" : "none",
                    paddingLeft: "2rem",
                  }}
                >
                  <ListItemIcon>
                    <img
                      src={item.icon}
                      alt={`${item.label} Icon`}
                      style={{ width: 24 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Settings with dropdown toggle */}
            <ListItem
              disablePadding
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ListItemButton
                selected={active === "settings"}
                onClick={toggleDropdown}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#f0f0f0",
                  },
                  borderLeft: active === "settings" ? "4px solid #8A5CFF" : "none",
                  paddingLeft: "2rem",
                }}
              >
                <ListItemIcon>
                  <img
                    src={setting}
                    alt="Settings Icon"
                    style={{ width: 24 }}
                  />
                </ListItemIcon>
                <ListItemText primary="Settings" />
                <IconButton onClick={toggleDropdown}>
                {dropdownOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
              </ListItemButton>

            </ListItem>
          </List>
          <DropdownSetting
            dropdownOpen={dropdownOpen}
            active={active}
            setActive={setActive}
          />
        </Box>
        <SidebarBottom />
      </Box>
    </Box>
    <NewProjectModal
    open={modalOpen}
    close={() => setModalOpen(false)}
     />
    </>
  );
};

export default Sidebar;
