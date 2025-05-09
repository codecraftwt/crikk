import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import googlelogo from "../../assets/logos/google.webp";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Link } from "react-router-dom";
import DeleteAccountModal from "../../components/DeleteAccountModal/DeleteAccountModal.jsx";
const AccountComponent = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () =>{
    setModalOpen(true);
  }

  return (
    <>
    <Box
      sx={{
        height:"100%",
        width:"100%",
        boxSizing: "border-box",
        paddingRight:"1rem",
        paddingBottom:"1rem"
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
        }}
      >
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
            Account Settings
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "0.9rem", padding: "1rem 0", color: "#8F8F8F" }}
          >
            Settings <ArrowForwardIosIcon sx={{ fontSize: "0.7rem" }} /> Account
            Settings
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: "1.2rem", padding: "2rem 0", color: "#505050" }}
          >
            Connect Social Media Accounts
          </Typography>
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
          <Link to="/password" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              sx={{
                padding: "4rem 0",
                fontSize: "1.1rem",
                color: "#0084CB",
                cursor: "pointer",
              }}
            >
              Change Password <CallMadeIcon />
            </Typography>
          </Link>
          <Typography
            variant="h5"
            sx={{ fontSize: "1.1rem", color: "#FF6F6F", cursor: "pointer" }}
            onClick = {toggleModal}
          >
            Delete Account
          </Typography>
        </Box>
      </Box>
      <DeleteAccountModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default AccountComponent;
