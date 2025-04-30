import React from "react";
import { Box, Typography, Button } from "@mui/material";
import rocket from "../../assets/logos/rocket.png";

const SidebarBottom = () => {
  return (
    <Box
      sx={{
        width: "90%",
        borderRadius: "20px",
        margin: "0 auto 1.5rem",
        border: "1.12px solid rgba(255, 255, 255, 1)",
        background: "rgba(255, 193, 48, 1)",
        minHeight: "150px",
        position: "relative",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={rocket}
        alt="rocket icon"
        sx={{
          position: "absolute",
          top: "-30px",
          right: "0",
          width: { xs: "120px", sm: "120px", md: "130px" },
          height: "auto",
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          width: "60%",
          padding: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          zIndex: 1,
          color: "#fff",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "700",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            marginBottom: "0.5rem",
          }}
        >
          Share the joy
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            marginBottom: "1rem",
          }}
        >
          Refer your friends
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "rgba(255, 193, 48, 1)",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.04)",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: { xs: "0.65rem", sm: "0.75rem" },
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            },
          }}
        >
          Refer Now!
        </Button>
      </Box>
    </Box>
  );
};

export default SidebarBottom;
