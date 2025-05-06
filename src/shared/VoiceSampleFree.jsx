import React from "react";
import { Box, Typography } from "@mui/material";
import Avatar from "../assets/images/avatar.png";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const VoiceSample = () => {
  return (
    <Box
      sx={{
        height: "140px",
        width: "130px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #8A5CFF",
        borderRadius: "15px",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{
          cursor: "pointer",
          boxSizing: "border-box",
          paddingLeft: "1.2rem",
          marginTop: "1rem",
        }}
      >
        <Box
          component="img"
          src={Avatar}
          alt="image"
          sx={{
            height: "2.5rem",
            background: "#2061D6",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            WebkitBackgroundClip: "text",
            color: "#FD7E14",
            fontSize: "1rem",
            background: "white",
            position: "relative",
            right: "1rem",
            top: "15px",
            borderTopLeftRadius: "10px",
            padding: "2px",
          }}
        >
          Free
        </Box>
      </Box>
      <Typography
        sx={{
          color: "#6A6A6A",
          marginTop: "1rem",
        }}
      >
        Alex Phoenix
      </Typography>
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} width={"70%"} color={"#757575"} mt={1}>
      <PlayCircleIcon sx={{ fontSize: "1.5rem", color: "#8A5CFF" }} />
<Typography sx={{fontSize:"0.9rem"}}>Sample</Typography>
      </Box>
    </Box>
  );
};

export default VoiceSample;
