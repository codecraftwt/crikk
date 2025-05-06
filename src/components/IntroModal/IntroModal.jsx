import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const IntroModal = ({ open, onClose }) => {
  const [options, setOptions] = useState({
    voiceover: false,
    study: false,
    audiobooks: false,
    other: false,
    otherText: "",
  });

  const handleChange = (key) => (event) => {
    setOptions((prev) => ({
      ...prev,
      [key]: event.target.checked,
    }));
  };

  const handleOtherTextChange = (e) => {
    setOptions((prev) => ({ ...prev, otherText: e.target.value }));
  };

  const handleSubmit = () => {
    // console.log("Selected Options:", options);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "90%",
          maxWidth: "480px",
          p: 4,
          bgcolor: "white",
          borderRadius: "16px",
          boxShadow: 24,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={1} textAlign={"center"}>
          What is the primary reason you’re using Crikk?
        </Typography>
        <Typography
          variant="body2"
          mb={3}
          color="text.secondary"
          textAlign={"center"}
          sx={{ fontSize: "1rem" }}
        >
          Your response will help us improve Crikk for you.
        </Typography>

        <Box>
          <FormControlLabel
            sx={{
              width: "95%",
              marginLeft: "1rem",
              boxSizing: "border-box",
              border: "1px solid #E7E7E7",
              marginBottom: "1rem",
              borderRadius: "5px",
              padding:"0.5rem 0"
            }}
            control={
              <Checkbox
                checked={options.voiceover}
                onChange={handleChange("voiceover")}
                icon={
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "#E0E0E0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.6,
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16, color: "#9E9E9E" }} />
                  </Box>
                }
                checkedIcon={
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "#8A5CFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16, color: "white" }} />
                  </Box>
                }
              />
            }
            label="Voiceover for videos"
          />
          <FormControlLabel
            sx={{
              width: "95%",
              marginLeft: "1rem",
              boxSizing: "border-box",
              border: "1px solid #E7E7E7",
              marginBottom: "1rem",
              borderRadius: "5px",
              padding:"0.5rem 0"
            }}
            control={
              <Checkbox
                checked={options.study}
                onChange={handleChange("study")}
                icon={
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "#E0E0E0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.6,
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16, color: "#9E9E9E" }} />
                  </Box>
                }
                checkedIcon={
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "#8A5CFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16, color: "white" }} />
                  </Box>
                }
              />
            }
            label="Listening My Documents (Study)"
          />
          <FormControlLabel
            sx={{
              width: "95%",
              marginLeft: "1rem",
              boxSizing: "border-box",
              border: "1px solid #E7E7E7",
              marginBottom: "1rem",
              borderRadius: "5px",
              padding:"0.5rem 0"
            }}
            control={
              <Checkbox
                checked={options.audiobooks}
                onChange={handleChange("audiobooks")}
                icon={
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "#E0E0E0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.6,
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16, color: "#9E9E9E" }} />
                  </Box>
                }
                checkedIcon={
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "#8A5CFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16, color: "white" }} />
                  </Box>
                }
              />
            }
            label="Audiobooks (I'm an Author)"
          />
          <FormControlLabel
            sx={{
              width: "95%",
              marginLeft: "1rem",
              boxSizing: "border-box",
              border: "1px solid #E7E7E7",
              marginBottom: "1rem",
              borderRadius: "5px",
              padding:"0.5rem 0",
              color:"#A1A1A1"
            }}
            control={
              <Checkbox
                checked={options.other}
                onChange={handleChange("other")}
                icon={
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "#E0E0E0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.6,
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16, color: "#9E9E9E" }} />
                  </Box>
                }
                checkedIcon={
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "#8A5CFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16, color: "white" }} />
                  </Box>
                }
              />
            }
            label="Other (Please specify)"
          />
          {options.other && (
            <TextField
              value={options.otherText}
              onChange={handleOtherTextChange}
              placeholder="Please specify..."
              fullWidth
              sx={{ mt: 1,
                width: "95%",
                marginLeft: "1rem",
                border: "1px solid #E7E7E7",
               }}
            />
          )}
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", mt: 4, gap: 2 }}
        >
          <Button onClick={onClose} variant="text" color="inherit" sx={{textTransform:"none",
            border:"1px solid #6D6D6D",
            color:"#6D6D6D",
            borderRadius:"7px"
          }}>
            Skip
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ borderRadius: "8px",
                textTransform:"none",
                backgroundColor:"#8A5CFF"
             }}
          >
            Save and Explore
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default IntroModal;
