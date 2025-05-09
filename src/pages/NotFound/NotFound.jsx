import React from "react";
import { Box } from "@mui/material";
import NoObjectImg from "../../assets/images/NoObject.png";
import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        paddingRight: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.06)",
          height: "100%",
          overflowY: "auto",
          padding: "2rem",
          color: "#2B2B2B",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: { xs: "1rem", sm: "1rem", md: "0" },
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems:"center"
          }}
        >
          <Box 
          component="img"
          src={NoObjectImg}
          alt="No Object image"
          sx={{
            height:{xs:"100px", sm:"150px", md:"200px"},
          }}
          />
          <Typography
            variant="h5"
            sx={{ color: "#3E3E3E", textAlign: "center", marginBottom: "1rem", marginTop:"1rem",
              fontSize:{xs:"1rem", sm:"1.5rem", md:"2rem"}
             }}
          >
            No Project Found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontWeight: "300",
              fontSize: {xs:"0.9rem", sm:"1rem", md:"1.2rem"},
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
