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
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggledata = () => {
    navigate("/dashboarddata");
  };

  return (
    <Box
      sx={{
        height: "100px",
        width: isFullWidth ? "100%" : { xs: "100%", sm: "200px" },
        background: "lightblue",
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.8rem",
        borderRadius: "10px",
        marginBottom: "1rem",
        cursor: "pointer",
      }}
    >
      <img
        src={music}
        alt="img"
        onClick={toggledata}
        style={{ width: "90px" }}
      />
      <Box sx={{ marginLeft: "1rem" }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5" sx={{ fontSize: "1rem" }}>
            {projectName}
          </Typography>
          <MoreVertIcon
            onClick={handleMenuClick}
            sx={{ cursor: "pointer", zIndex: "99" }}
          />
        </Box>
        <Typography fontSize={15} sx={{ color: "#7D7D7D" }}>
          {fileCount} Files
        </Typography>
      </Box>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={onEdit}>Edit Project</MenuItem>
        <MenuItem onClick={onDelete}>Delete Project</MenuItem>
      </Menu>
    </Box>
  );
};

export default ProjectFileList;