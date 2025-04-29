import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const EditUserModal = ({ open, handleClose, user, onSave }) => {
  const [form, setForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "70%", sm: 400 },
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "600" }}
        >
          Edit Profile
        </Typography>

        <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "500" }}>
          First Name
        </Typography>
        <TextField
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "500" }}>
          Last Name
        </Typography>

        <TextField
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "500" }}>
          Email Address{" "}
        </Typography>
        <TextField
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
          <Button
            onClick={handleClose}
            sx={{
              color: "#8A5CFF",
              border: "1px solid #6D6D6D",
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              fontWeight: "500",
              textTransform: "none",
              width: "6rem",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "#8A5CFF",
              textTransform: "none",
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              marginLeft: "1rem",
            }}
          >
            Save Profile
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
