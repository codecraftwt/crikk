import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import music from "../assets/logos/Music.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const ProjectFileList = ({
  projectName,
  fileCount,
  onEdit,
  onDelete,
  isFullWidth,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggledata = () => {
    navigate("/dashboarddata");
  };
  console.log(isFullWidth);

  return (
    <Box
      onClick={toggledata}
      sx={{
        boxSizing: "border-box",
        height: "70px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.8rem",
        borderRadius: "10px",
        border: "1px solid lightgray",
        cursor: "pointer",
        margin: "1rem",
        zIndex: "9",
      }}
    >
      <img
        src={music}
        alt="img"
        style={{
          width: "50px",
        }}
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box display={"flex"}>
          <Box sx={{ marginLeft: "1rem" }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "1rem",
                marginLeft: { xs: "0", sm: "0", md: "1rem" },
              }}
            >
              {projectName}
            </Typography>
          </Box>
          <Typography
            fontSize={15}
            sx={{
              color: "#7D7D7D",
              marginLeft: { xs: "1rem", sm: "1.2rem", md: "2rem" },
            }}
          >
            {fileCount} Files
          </Typography>
        </Box>
        <MoreVertIcon
          onClick={handleMenuClick}
          sx={{
            cursor: "pointer",
            zIndex: "99",
            marginRight: { xs: "0.3rem", sm: "0.5rem", md: "1rem" },
          }}
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuItem onClick={onEdit}>Edit Project</MenuItem>
        <MenuItem onClick={onDelete}>Delete Project</MenuItem>
      </Menu>
    </Box>
  );
};

export default ProjectFileList;
