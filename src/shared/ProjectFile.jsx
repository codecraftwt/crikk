import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import music from "../assets/logos/Music.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const ProjectFile = ({
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
        height: {xs:"80px",sm:"100px"},
        width: isFullWidth ? "100%" : { xs: "105px", sm: "200px", md:"220px" },
        background: "#fff",
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.4rem",
        margin:{xs:"0.2rem", sm:"1rem"},
        borderRadius: "10px",
        marginBottom: "1rem",
        cursor: "pointer",
        boxSizing:"border-box",
        border:"1px solid lightgray"
      }}
    >
      <Box
      component="img"
      src={music}
      alt="music"
      onClick={toggledata}
      sx={{
        width:{xs:"40px", sm:"80px",md:"90px"},
      }}
      >

      </Box>
      <Box sx={{ 
        marginLeft: {xs:"0.5rem", sm:"1rem"}, 
        width:"100%" }}>
        <Box sx={{ display: "flex", justifyContent:"space-between", width:"90%", alignItems:"center" }}>
          <Typography variant="h5" sx={{ 
            fontSize:{xs:"0.7rem", md:"1rem"}
             }}>
            {projectName}
          </Typography>
          <MoreVertIcon
            onClick={handleMenuClick}
            sx={{ cursor: "pointer", zIndex: "99",
              fontSize:{xs:"0.8rem", sm:"1rem", md:"1.2rem", lg:"1.4rem"}
             }}
          />
        </Box>
        <Typography fontSize={15} sx={{ color: "#7D7D7D",
          fontSize:{xs:"0.7rem", sm:"0.9rem"}
         }}>
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

export default ProjectFile;
