import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
  LinearProgress,
  Paper,
} from "@mui/material";
import { Close, InsertDriveFile } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const NewFileModal = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadedFile({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2),
      type: file.type,
    });

    setUploading(true);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploading(false);
      }
    }, 300);
  };

  const resetUpload = () => {
    setUploadedFile(null);
    setUploadProgress(0);
    setUploading(false);
  };

  const handleStartTyping = () => {
    navigate("/createfile");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 7,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "1.3rem",
              }}
            >
              Add New File
            </Typography>
          </Box>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" sx={{ fontSize: "1rem", fontWeight: "600" }}>
            Document Upload
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#6D6D6D" }}>
            Add your documents here, and listen to them anytime, anywhere.
          </Typography>
          <Box
            mt={2}
            sx={{
              border: "2px dashed #ccc",
              borderRadius: 2,
              p: 4,
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => document.getElementById("file-upload").click()}
          >
            <CloudUploadOutlinedIcon
              fontSize="large"
              sx={{ color: "#8A5CFF" }}
            />
            <Typography mt={1}>
              Drag your file or{" "}
              <Typography
                component="span"
                sx={{ color: "#8A5CFF", fontWeight: 600 }}
              >
                browse
              </Typography>
            </Typography>

            <Typography
              variant="caption"
              mt={1}
              display="block"
              sx={{ color: "#6D6D6D", fontSize: "0.9rem" }}
            >
              Max 10MB files are allowed
            </Typography>
            <input
              type="file"
              id="file-upload"
              hidden
              onChange={handleFileChange}
              accept=".jpg,.png,.docx,.pdf"
            />
          </Box>
          <Typography
            variant="caption"
            color="text.secondary"
            fontSize={15}
            sx={{ marginTop: "1rem" }}
          >
            Only support .jpg, .png, .docx and .pdf files
          </Typography>

          {uploadedFile && (
            <Box>
              <Paper
                variant="outlined"
                sx={{ p: 2, mt: 2, position: "relative" }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <InsertDriveFile color="primary" />
                  <Box>
                    <Typography>{uploadedFile.name}</Typography>
                    <Typography variant="caption">
                      {uploadedFile.size} MB
                    </Typography>
                  </Box>
                  <Box flexGrow={1} />
                  <IconButton onClick={resetUpload}>
                    <Close />
                  </IconButton>
                </Box>
              </Paper>

              {uploading ? (
                <Box mt={2}>
                  <LinearProgress
                    variant="determinate"
                    value={uploadProgress}
                  />
                  <Typography variant="caption">
                    {uploadProgress}% Uploaded
                  </Typography>
                </Box>
              ) : (
                <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
                  <Button variant="outlined" sx={{textTransform:"none"}} onClick={resetUpload}>
                    Cancel
                  </Button>
                  <Button variant="contained" sx={{textTransform:"none"}}>Preview</Button>
                </Box>
              )}
            </Box>
          )}
        </Box>

        {!uploadedFile && (
          <Box>
            <Box display="flex" alignItems="center" mt={2} mb={2}>
              <Box flex={1} height="1px" bgcolor="#ccc" />
              <Typography
                sx={{
                  mx: 2,
                  color: "#888",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                }}
              >
                OR
              </Typography>
              <Box flex={1} height="1px" bgcolor="#ccc" />
            </Box>
            <Typography sx={{ fontSize: "1rem", fontWeight: "600" }}>
              Type Text
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #8A5CFF4A",
                height: "5rem",
                borderRadius: "15px",
                padding: "0 1rem",
                marginTop: "1rem",
              }}
            >
              <Typography>
                Transform your typed words into real voices.
              </Typography>
              <Button
                variant="contained"
                sx={{ textTransform: "none", background: "#8A5CFF" }}
                onClick={handleStartTyping}
              >
                Start Typing
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default NewFileModal;
