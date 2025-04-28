import React, { useState } from "react";
import "./Searchbar.css";
import { Box, TextField, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const [active, setActive] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  const pageName = location.pathname.split("/")[1] || "home";
  const isDashboard = location.pathname === "/dashboard";

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "15%",
        padding: "1rem",
        paddingLeft: "0",
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
        }}
      >
        {isDashboard ? (
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <SearchIcon
              sx={{
                marginLeft: "1.5rem",
                color: "gray",
                fontSize: "1.8rem",
                [theme.breakpoints.down("sm")]: {
                  marginLeft: "0.5rem",
                  fontSize: "1.2rem",
                },
              }}
            />
            <TextField
              sx={{
                width: "60%",
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
              fontSize: "1.5rem",
              paddingLeft: "2rem",
              [theme.breakpoints.down("md")]: {
                fontSize: "1.2rem",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.9rem",
              },
              [theme.breakpoints.up("xl")]: {
                fontSize: "3rem",
              },
            }}
          >
            <h3>{pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h3>
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            startIcon={
              <FlashOnIcon
                sx={{
                  height: "1.5rem",
                  [theme.breakpoints.up("xl")]: {
                    height: "3rem",
                  },
                }}
              />
            }
            sx={{
              padding: "10px 20px",
              borderRadius: "8px",
              marginRight: "2rem",
              textTransform: "none",
              fontWeight: "bold",
              background:
                "linear-gradient(263.13deg, #FD7E14 -9.08%, #FFBD44 95.46%)",
              "&:hover": {
                background:
                  "linear-gradient(263.13deg, #FFBD44 -9.08%, #FD7E14 95.46%)",
              },
              [theme.breakpoints.down("md")]: {
                padding: "7px 12px",
                marginRight: "0.5rem",
              },
              [theme.breakpoints.down("sm")]: {
                padding: "5px 10px",
                margin: " 0 0.2rem",
              },
              [theme.breakpoints.up("xl")]: {
                fontSize: "2rem",
                padding: "10px 20px",
                marginRight: "4rem",
              },
            }}
          >
            Upgrade
          </Button>
          <NotificationsNoneOutlinedIcon
            sx={{
              marginRight: "3rem",
              cursor: "pointer",
              fontSize: "2rem",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
                marginRight: "0.2rem",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "1.8rem",
                marginRight: "0.5rem",
              },
              [theme.breakpoints.up("xl")]: {
                fontSize: "4rem",
                marginRight: "4rem",
              },
            }}
          />

          <AccountCircleIcon
            sx={{
              cursor: "pointer",
              fontSize: "2.5rem",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
                marginRight: "0rem",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "1.8rem",
                marginRight: "0.5rem",
              },
              [theme.breakpoints.up("xl")]: {
                fontSize: "4rem",
                marginRight: "4rem",
              },
            }}
          />
          <IconButton
            onClick={toggleActive}
            sx={{
              marginRight: "2rem",
              cursor: "pointer",
              fontSize: "2rem",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1rem",
                marginRight: "1rem",
              },
              [theme.breakpoints.up("xl")]: {
                fontSize: "4rem",
                marginRight: "4rem",
              },
            }}
          >
            {active ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
