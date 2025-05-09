import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import FileData from "../../shared/FileData";
import { useNavigate } from "react-router-dom";
import MergeAudioModal from "../../components/MergeAudioModal/MergeAudioModal";
import NewFileModal from "../../components/NewFileModal/NewFileModal";

const DashboardFileContent = () => {
  const navigate = useNavigate();
  const [mergeModalOpen, setMergeModalOpen] = useState(false);
  const [fileModalOpen, setFileModalOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
          paddingRight: "1rem",
          paddingBottom: "1rem",
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
            color: "#2B2B2B",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              boxSizing: "border-box",
              padding: "2rem",
            }}
          >
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    color: "#3E3E3E",
                  }}
                >
                  The Alchemist
                </Typography>
                <BorderColorOutlinedIcon
                  sx={{
                    fontSize: "1.1rem",
                    margin: "auto",
                    marginLeft: "1rem",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.9rem",
                  padding: "1rem 0",
                  color: "#8F8F8F",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Dashboard{" "}
                <ArrowForwardIosIcon
                  sx={{ fontSize: "0.7rem", margin: "0 0.5rem" }}
                />
                My Projects
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setMergeModalOpen(true)}
                sx={{
                  padding: "10px 14px",
                  fontSize: { md: "0.9rem", lg: "1rem" },
                  textAlign: "center",
                  color: "#8A5CFF",
                  border: "1px solid #8A5CFF",
                  boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                  textTransform: "none",
                  background: "white",
                  marginRight: "1rem",
                }}
              >
                Merge Audio
              </Button>

              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setFileModalOpen(true)}
                sx={{
                  padding: "10px 14px",
                  fontSize: { md: "0.9rem", lg: "1rem" },
                  textAlign: "center",
                  background:
                    "linear-gradient(263.13deg, #8a5cff -9.08%, #596cff 95.46%)",
                  boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                  textTransform: "none",
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(263.13deg,rgb(63, 89, 255) -9.08%,rgb(150, 93, 199) 85%)",
                  },
                }}
              >
                Add New File
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              boxSizing: "border-box",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "flex-start",
              paddingLeft: "2rem",
            }}
          >
            <FileData />
            <FileData />
            <FileData />
            <FileData />
          </Box>
        </Box>
      </Box>
      <MergeAudioModal
        open={mergeModalOpen}
        onClose={() => setMergeModalOpen(false)}
      />
      <NewFileModal
        open={fileModalOpen}
        onClose={() => setFileModalOpen(false)}
      />
    </>
  );
};

export default DashboardFileContent;
