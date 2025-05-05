import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FileLogo from "../../assets/logos/File.png";
import { Upload } from "@mui/icons-material";

const MergeAudioModal = ({open, onClose }) => {

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 500 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 6,
          }}
        >
          <Typography variant="h6" mb={2} fontWeight="bold" textAlign="center">
            Merge Audio
          </Typography>
          <Typography sx={{ color: "#6D6D6D", padding: "1rem 0" }}>
            Please select all the audio file(s) that you want to merge together.
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "4rem",
              border: "1px solid #E7E7E7",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              margin:"1rem 0"
            }}
          >
            <Checkbox {...label} />
            <Box
              component="img"
              src={FileLogo}
              alt="Text FIle"
              sx={{
                width: "4rem",
              }}
            ></Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "0.9rem", fontWeight: "600" }}
              >
                The Alchemist
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "#6D6D6D" }}>
                00:29:20
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "4rem",
              border: "1px solid #E7E7E7",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              margin:"1rem 0"
            }}
          >
            <Checkbox {...label} />
            <Box
              component="img"
              src={FileLogo}
              alt="Text FIle"
              sx={{
                width: "4rem",
              }}
            ></Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "0.9rem", fontWeight: "600" }}
              >
                The Alchemist
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "#6D6D6D" }}>
                00:29:20
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "4rem",
              border: "1px solid #E7E7E7",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              margin:"1rem 0"
            }}
          >
            <Checkbox {...label} />
            <Box
              component="img"
              src={FileLogo}
              alt="Text FIle"
              sx={{
                width: "4rem",
              }}
            ></Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "0.9rem", fontWeight: "600" }}
              >
                The Alchemist
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "#6D6D6D" }}>
                00:29:20
              </Typography>
            </Box>
          </Box>

          <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                color: "#6D6D6D",
                textTransform: "none",
                borderRadius: "10px",
                padding: "0.6rem 1rem",
                fontSize: "0.8rem",
                border: "1px solid #6D6D6D",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                background: "#8A5CFF",
                textTransform: "none",
                borderRadius: "10px",
                padding: "0.6rem 0.8rem",
                fontSize: "0.8rem",
              }}
            >
              Merge Now
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default MergeAudioModal;