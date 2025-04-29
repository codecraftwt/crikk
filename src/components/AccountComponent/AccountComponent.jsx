import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import googlelogo from "../../assets/logos/google.webp";
import CallMadeIcon from "@mui/icons-material/CallMade";
const AccountComponent = () => {
  const theme = useTheme();
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
          boxSizing: "border-box",
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.06)",
          height: "100%",
          overflowY: "auto",
          padding: "2rem",
          color: "#2B2B2B",
          [theme.breakpoints.down("sm")]: {
            padding: "0.8rem",
          },
        }}
      >
        <Typography variant="h4" sx={{fontWeight:"700"}}>Account Settings</Typography>
        <Typography variant="body1" sx={{fontSize:"0.9rem", padding:"1rem 0", color: "#8F8F8F"}}>
          Settings <ArrowForwardIosIcon sx={{ fontSize: "0.7rem" }} /> Account
          Settings
        </Typography>
        <Typography variant="h5" sx={{fontSize:"1.2rem", padding:"2rem 0", color:"#505050"}}>Connect Social Media Accounts</Typography>
        <Button
          variant="outlined"
          startIcon={
            <img
              src={googlelogo}
              alt="Google logo"
              style={{ width: 20, height: 20 }}
            />
          }
          sx={{
            color: "black",
            padding: "0.5rem 1rem",
            textTransform: "none",
            width: "8rem",
            height: "3rem",
          }}
        >
          Google
        </Button>
        <Typography variant="h5" sx={{padding:"4rem 0", fontSize:"1.1rem", color:"#0084CB", cursor:"pointer"}}>
          Change Password <CallMadeIcon />
        </Typography>
        <Typography variant="h5" sx={{fontSize:'1.1rem', color:"#FF6F6F", cursor:"pointer"}}>Delete Account</Typography>
      </Box>
    </Box>
  );
};

export default AccountComponent;
