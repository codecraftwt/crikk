import React from "react";
import { Box, Typography, Button } from "@mui/material";
import rocket from "../../assets/logos/rocket.png";


const SidebarBottom = () => {
  return (
    <>

      <Box
        sx={{
          width: "90%",
          borderRadius: "20px",
          margin: "auto",
          border: "1.12px solid rgba(255, 255, 255, 1)",
          background: "rgba(255, 193, 48, 1)",
          margin: "0 auto 1.5rem",
          minHeight: "150px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              fontSize: "1rem",
              margin: "0",
              marginTop: "1rem",
            }}
          >
            Share the joy
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "400", fontSize: "0.8rem", margin: "1rem 0 0 0" }}
          >
            Refer your friends
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "rgba(255, 193, 48, 1)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.04)",
              borderRadius: "8px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            }}
          >
            Refer Now!
          </Button>
        </Box>
        <Box sx={{ width: "40%", height: "100%" }}>
          <img src={rocket} alt="rocket icon" style={{width:"100%", position:"relative", bottom:"2rem"}} />
        </Box>
      </Box>
    </>
  );
};

export default SidebarBottom;
