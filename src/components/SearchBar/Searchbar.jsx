import React, { useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";

const Searchbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar-body">
        <div className="searchbar-input">
          <SearchIcon
            sx={{
              marginLeft: "1.5rem",
              color: "gray",
              fontSize: "1.8rem",
            }}
          />
          <input type="text" placeholder="Looking For Something?" />
        </div>

        <div className="searchbar-btns">
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
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
