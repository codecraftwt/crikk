import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const PasswordSuccessModal = ({ open, handleClose }) => {
  const navigate = useNavigate();

  const onGoToLogin = () => {
    navigate("/login");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {xs:"70%", sm:400},
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 24,
          p: 4,
          textAlign: "center",
        }}
      >
        <CheckCircle
          color="success"
          sx={{ fontSize: 100, mb: 2, color: "#81D14E" }}
        />
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "700" }}
        >
          Password Changed!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#6D6D6D" }}>
          Password has been changed successfully. Please login again to
          continue.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            padding: "0.5rem 1rem",
            color: "#8A5CFF",
            border: "1px solid #8A5CFF",
            textTransform: "none",
            borderRadius: "8px",
          }}
          onClick={onGoToLogin}
        >
          Go to Login
        </Button>
      </Box>
    </Modal>
  );
};

export default PasswordSuccessModal;
