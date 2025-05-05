import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import FileLogo from "../assets/logos/File.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

const FileData = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const date = new Date("2024-12-22");

  const formattedDate = new Intl.DateTimeFormat("en-GB").format(date); // "22/12/2024"

  return (
    <Box
      sx={{
        backgroundColor: "#EAE1FFC4",
        height: "180px",
        width: "180px",
        borderRadius: "9px",
        boxSizing: "border-box",
        padding: "0.5rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "#fff",
          borderRadius: "9px",
        }}
      >
        <Box
          component="img"
          src={FileLogo}
          alt="Text FIle"
          sx={{
            width: "65%",
            display: "flex",
            margin: "auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 0.2rem",
             marginBottom:"0.5rem"
          }}
        >
          <Typography variant="h5" fontSize={15}>
            The Alchemist File
          </Typography>
          <MoreVertIcon onClick={handleMenuClick} sx={{ cursor: "pointer", fontSize:"1rem" }} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{ display: "flex", padding: "0 0.2rem", alignItems: "center", }}
          >
            <DateRangeOutlinedIcon
              sx={{ fontSize: "1.2rem", color: "#7D7D7D" }}
            />
            <Typography
              sx={{ color: "7D7D7D", fontSize: "0.7rem", marginLeft: "0.2rem" }}
            >
              {formattedDate}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", padding: "0 0.2rem", alignItems: "center" }}
          >
            <TimerOutlinedIcon sx={{ fontSize: "1.2rem", color: "#7D7D7D" }} />
            <Typography
              sx={{ color: "7D7D7D", fontSize: "0.7rem", marginLeft: "0.2rem" }}
            >
              30:40
            </Typography>
          </Box>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
          //   onClick={onEdit}
          >
            Edit Project
          </MenuItem>
          <MenuItem
          //   onClick={onDelete}
          >
            Delete Project
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default FileData;
