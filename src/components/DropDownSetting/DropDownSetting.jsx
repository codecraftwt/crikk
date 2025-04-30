import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const DropdownSetting = ({ dropdownOpen, active, setActive }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/profile")) {
      setActive("profile");
    } else if (location.pathname.includes("/account")) {
      setActive("account");
    } else if (location.pathname.includes("/terms")) {
      setActive("terms");
    } else if (location.pathname.includes("/privacy")) {
      setActive("privacy");
    }
  }, [location, setActive]);

  if (!dropdownOpen) return null;

  const handleItemClick = (item) => {
    setActive(item);
  };

  return (
    <Box sx={{ padding: "0", margin: "0", width: "100%" }}>
      <Box
        sx={{ display: dropdownOpen === true ? "flex" : "none", width: "100%" }}
      >
        <List sx={{ width: "100%" }}>
        <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
          <ListItem
            button
            selected={active === "profile"}
            onClick={() => handleItemClick("profile")}
            sx={{
              borderLeft: active === "profile" ? "4px solid #FD7E14" : "none",
              paddingLeft: "2rem",
              color: "#505050",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
            }}
          >
            <ListItemText>

                Profile Settings
            </ListItemText>
          </ListItem>
          </Link>


          <Link
            to="/account"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItem
              button
              selected={active === "account"}
              onClick={() => handleItemClick("account")}
              sx={{
                borderLeft: active === "account" ? "4px solid #FD7E14" : "none",
                paddingLeft: "2rem",
                color: "#505050",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                },
              }}
            >
              <ListItemText>Account Settings</ListItemText>
            </ListItem>
          </Link>

          <Link
            to="/terms"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItem
              button
              selected={active === "terms"}
              onClick={() => handleItemClick("terms")}
              sx={{
                borderLeft: active === "terms" ? "4px solid #FD7E14" : "none",
                paddingLeft: "2rem",
                color: "#505050",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                },
              }}
            >
              <ListItemText>Terms and Conditions</ListItemText>
            </ListItem>
          </Link>

          <Link
            to="/privacy"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItem
              button
              selected={active === "privacy"}
              onClick={() => handleItemClick("privacy")}
              sx={{
                borderLeft: active === "privacy" ? "4px solid #FD7E14" : "none",
                paddingLeft: "2rem",
                color: "#505050",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                },
              }}
            >
              <ListItemText>Privacy Policy</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );
};

export default DropdownSetting;
