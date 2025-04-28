import React, { useState } from "react";
import "./Searchbar.css";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";

const SearchBar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "15%",
        padding: "1rem",
        paddingLeft: 0,
        maxHeight: "200px",
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
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <SearchIcon
            sx={{ marginLeft: "1.5rem", color: "gray", fontSize: "1.8rem" }}
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            startIcon={<FlashOnIcon />}
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
            }}
          >
            Upgrade
          </Button>
          <NotificationsNoneOutlinedIcon
            sx={{
              marginRight: "3rem",
              cursor: "pointer",
              fontSize: "2rem",
            }}
          />
          <AccountCircleIcon
            sx={{
              cursor: "pointer",
              fontSize: "2.5rem",
            }}
          />
          <IconButton
            onClick={toggleActive}
            sx={{
              marginRight: "2rem",
              cursor: "pointer",
              fontSize: "2rem",
            }}
          >
            {active ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
