import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const NewProjectModal = ({ open, close }) => {
  const [projectName, setProjectName] = useState("");

  return (
    <>
      <Modal open={open} onClose={close}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 400 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 6,
          }}
        >

          <Typography variant="h6" mb={2} fontWeight="bold" textAlign="center">
            Create Project
          </Typography>

          <TextField
            fullWidth
            label="Enter project name"
            variant="outlined"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />

          <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              onClick={close}
              sx={{
                color: "#6D6D6D",
                textTransform: "none",
                borderRadius: "10px",
                padding: "0.6rem 1rem",
                fontSize: "0.8rem",
                border:"1px solid #6D6D6D"
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={close}
              disabled={!projectName.trim()}
              sx={{
                background: "#8A5CFF",
                textTransform: "none",
                borderRadius: "10px",
                padding: "0.6rem 0.8rem",
                fontSize: "0.8rem",
              }}
            >
              Create Project
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default NewProjectModal;
