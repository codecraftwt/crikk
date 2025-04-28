import React from "react";
import { Box } from "@mui/material";
import NoObjectImg from "../../assets/images/NoObject.png";
import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "85%",
        padding: "1rem",
        paddingLeft: "0",
        paddingTop: "0",
      }}
    >
      <Box
        sx={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.06)",
          height: "100%",
          overflowY: "auto",
          display: "flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <Box sx={{width: "500px", height:"350px", display:"flex", flexDirection:"column"}}>
          <img
            src={NoObjectImg}
            alt="No Object image"
            style={{ height: "200px", margin:"auto" }}
          />
          <Typography variant="h5" sx={{ color: "#3E3E3E", textAlign:"center", marginBottom:"1rem" }}>
            No Project Found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign:"center",
              fontWeight: "300",
              fontSize: "18px",
              lineHeight: "150%",
              textAlign: "center",
              color: "#9E9E9E",
            }}
          >
            Hey! It looks like you haven’t created any projects yet. Create a
            project to access your documents anytime, anywhere.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
