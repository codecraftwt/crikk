import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const DeleteAccountModal = ({open, handleClose }) => {
  const navigate = useNavigate();

  const onGoToLogin = () => {
    navigate("/login");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "700" }}
        >
          Delete Account?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#6D6D6D" }}>
          Please note that this process is irreversible. Are you sure you want
          to delete your account ?
        </Typography>
        <Box sx={{display:"flex", justifyContent:"end"}}>
        <Button
          variant="outlined"
          sx={{
            padding: "0.5rem 1rem",
            color: "#6D6D6D",
            border: "1px solid #6D6D6D",
            textTransform: "none",
            borderRadius: "8px",
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: "0.5rem 1rem",
            color: "#fff",
            background:"#FF6F6F",
            textTransform: "none",
            borderRadius: "8px",
            marginLeft:"1rem"
          }}
          onClick={onGoToLogin}
        >
          Yes, Delete
        </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteAccountModal;
