import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";

const DropdownSetting = ({ dropdownOpen, active, setActive }) => {
  if (!dropdownOpen) return null;

  const handleItemClick = (item) => {
    setActive(item);
  };

  return (
    <Box sx={{ padding: "0", margin: "0", width: "100%" }}>
      <Box
        sx={{
          display: dropdownOpen === true ? "flex" : "none",
          width: "100%",
        }}
      >
        <List
          style={{
            width: "100%",
          }}
        >
          <ListItem
            button
            selected={active === "profile"}
            onClick={() => handleItemClick("profile")}
          >
            <ListItemText>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "inherit", paddingLeft:"2rem", color:"#505050" }}
              >
                Profile Settings
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem
            button
            selected={active === "account"}
            onClick={() => handleItemClick("account")}
          >
            <ListItemText>
              <Link
                to="/account"
                style={{ textDecoration: "none", color: "inherit", paddingLeft:"2rem", color:"#505050" }}
              >
                Account Settings
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem
            button
            selected={active === "terms"}
            onClick={() => handleItemClick("terms")}
          >
            <ListItemText>
              <Link
                to="/terms"
                style={{ textDecoration: "none", color: "inherit", paddingLeft:"2rem", color:"#505050" }}
              >
                Terms and Conditions
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem
            button
            selected={active === "privacy"}
            onClick={() => handleItemClick("privacy")}
          >
            <ListItemText>
              <Link
                to="/privacy"
                style={{ textDecoration: "none", color: "inherit", paddingLeft:"2rem", color:"#505050" }}
              >
                Privacy Policy
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default DropdownSetting;
