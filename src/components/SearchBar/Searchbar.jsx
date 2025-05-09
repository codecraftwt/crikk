import React, { useState } from "react";
import {Box, Button, TextField, useTheme, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse,} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import NewProjectModal from "../NewProjectModal/NewProjectModal";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import "./Searchbar.css";
//logo images
import home from "../../assets/logos/home.png";
import crown from "../../assets/logos/crown.png";
import help from "../../assets/logos/help.png";
import setting from "../../assets/logos/setting.png";
import logo from "../../assets/logos/crikklogo.png";
import SidebarBottom from "../SidebarBottom/SidebarBottom";

const SearchBar = ({ onUpgradeClick }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const pageName = location.pathname.split("/")[1] || "home";
  const isDashboard = location.pathname === "/dashboard";

  const mainListItems = [
    { text: "Dashboard", icon: home, to: "/dashboard" },
    { text: "Subsciptions", icon: crown, to: "/subscriptions" },
    { text: "Help Center", icon: help, to: "/helpcenter" },
    { text: "Settings", icon: setting },
  ];

  const secondaryListItems = [
    { text: "Profile Settings", to: "/profile" },
    { text: "Account Settings", to: "/account" },
    { text: "Terms & Conditions", to: "/terms" },
    { text: "Privacy Policy", to: "/privacy" },
  ];

  const handleClick = (text) => {
    if (text === "Settings") {
      setSettingsOpen(!settingsOpen);
    } else {
    }
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowY: "auto",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{ width: "100px", height: "auto", padding: "2rem 0 1rem" }}
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "0.5rem 0" }}
        >
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setModalOpen(true)}
            sx={{
              padding: "5px 10px",
              fontSize: "0.8rem",
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
        <List>
          {mainListItems.map(({ text, icon, to }) => (
            <React.Fragment key={text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleClick(text)}
                  component={Link}
                  to={to}
                >
                  <ListItemIcon>
                    <img
                      src={icon}
                      alt={text}
                      style={{ width: 24, height: 24 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {text === "Settings" ? (
                    settingsOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItemButton>
              </ListItem>
              {text === "Settings" && (
                <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {secondaryListItems.map(({ text, to }) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          component={Link}
                          to={to}
                          sx={{ pl: 6, color: "#505050" }}
                        >
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
      <SidebarBottom />
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          boxSizing: "border-box",
          width: "100%",
          height: "15%",
          padding: "1rem",
          paddingLeft: 0,
        }}
      >
        <Box
          sx={{
            background: "rgba(255, 255, 255, 1)",
            borderRadius: "15px",
            boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.06)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxHeight: "200px",
            marginLeft:{xs:"1rem", sm:"1rem", md:"0"}
          }}
        >
          {isSmallScreen && (
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                marginLeft: "0.5rem",
                marginRight: { xs: "0", sm: "0", md: "1rem" },
              }}
            >
              <MenuIcon sx={{ fontSize: "1.8rem", color: "#555" }} />
            </IconButton>
          )}

          {isDashboard ? (
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <SearchIcon
                sx={{
                  marginLeft: { xs: 0, sm: 0, md: "1.5rem" },
                  color: "gray",
                  fontSize: { xs: "1.5rem", sm: "1.8rem" },
                  display: { xs: "none", sm: "block" },
                }}
              />
              <TextField
                sx={{
                  width: { xs: "100%", sm: "100%", md: "60%" },
                  fontSize: "1rem",
                  "& input": {
                    color: "rgba(80, 80, 80, 1)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
                placeholder="Looking For Something?"
                variant="outlined"
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                paddingLeft: { xs: "0", sm: "1rem", md: "2rem" },
              }}
            >
              <h3>{pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h3>
            </Box>
          )}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              onClick={onUpgradeClick}
              startIcon={
                <FlashOnIcon
                  sx={{
                    height: { sm: "1rem", md: "1.5rem" },
                  }}
                />
              }
              sx={{
                padding: { sm: "5px 10px", md: "6px 10px", lg: "10px 20px" },
                borderRadius: "8px",
                marginRight: { sm: "0.5rem", md: "2rem" },
                textTransform: "none",
                fontWeight: "bold",
                fontSize: { sm: "0.8rem", md: "0.9rem", lg: "1rem" },
                display: { xs: "none", sm: "flex", md: "flex" },
                background:
                  "linear-gradient(263.13deg, #FD7E14 -9.08%, #FFBD44 95.46%)",
                "&:hover": {
                  background:
                    "linear-gradient(263.13deg, #FFBD44 -9.08%, #FD7E14 95.46%)",
                },
              }}
            >
              Upgrade
            </Button>
            <NotificationsNoneOutlinedIcon
              sx={{
                cursor: "pointer",
                marginRight: { xs: "0.5rem", sm: "0.5rem", md: "1rem" },
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
              }}
            />

            <AccountCircleIcon
              sx={{
                cursor: "pointer",
                marginRight: { xs: "0rem", sm: "0", md: "1rem" },
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
              }}
            />
            <IconButton
              onClick={toggleActive}
              sx={{
                marginRight: { xs: "0", sm: "1rem", md: "1.5rem" },
                cursor: "pointer",
                fontSize: "2rem",
              }}
            >
              {active ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </Box>

          {active ? (
            <Box
              sx={{
                width: "11rem",
                height: "7rem",
                position: "absolute",
                top: { xs: "5.2rem", sm: "5.5rem", md: "6rem" },
                right: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                borderRadius: "15px",
                boxShadow: "0px 4px 20px 0px rgba(197, 197, 197, 0.87)",
                background: "lightgrey",
                zIndex: "99",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  background: "rgb(255, 249, 249)",
                  borderRadius: "15px",
                }}
              >
                <nav aria-label="main mailbox folders">
                  <List>
                    <Link
                      to="/profile"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <VisibilityOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary="View Profile" />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <ErrorOutlineIcon sx={{ color: "red" }} />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <NewProjectModal open={modalOpen} close={() => setModalOpen(false)} />
    </>
  );
};

export default SearchBar;
