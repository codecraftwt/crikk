import { useState } from "react";
import { Modal, Box, Button, Fade, FormControl, Select, MenuItem } from "@mui/material";
import NativeVoices from "../../shared/VoiceSampleFree.jsx";
import GlobalVoices from "../../shared/VoiceSamplePro.jsx";

export default function VoicesModal({ open, onClose, anchorElPosition }) {
  const [activeTab, setActiveTab] = useState("native");
  const [language, setLanguage] = useState("default");

const handleLanguageChange = (event) => {
  setLanguage(event.target.value);
};
  return (
    <Modal open={open} onClose={onClose} >
      <Box
        sx={{
          position: "absolute",
          top: anchorElPosition
            ? `${anchorElPosition.top + window.scrollY - 16}px`
            : "50%",
          left: anchorElPosition
            ? `${anchorElPosition.left + anchorElPosition.width / 2}px`
            : "50%",
          transform: "translate(-50%, -100%)",
          bgcolor: "white",
          borderRadius: "20px",
          p: 3,
          boxShadow: 24,
          outline: "none",
          width: "280px",
          zIndex:"9999"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: -10,
            left: "48%",
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "10px solid white",
          }}
        />

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mb: 2,
            border: "1px solid #D5D5D5",
            padding: "0.2rem 0",
            borderRadius: "5px",
          }}
        >
          <Button
            variant={activeTab === "native" ? "contained" : "outlined"}
            onClick={() => setActiveTab("native")}
            sx={{
              backgroundColor: activeTab === "native" ? "#8A5CFF" : "white",
              color: activeTab === "native" ? "white" : "#ACADAE",
              border: "none",
              textTransform: "none",
              width: "8.4rem",
            }}
          >
            Native Voices
          </Button>
          <Button
            variant={activeTab === "global" ? "contained" : "outlined"}
            onClick={() => setActiveTab("global")}
            sx={{
              backgroundColor: activeTab === "global" ? "#8A5CFF" : "white",
              color: activeTab === "global" ? "white" : "#ACADAE",
              border: "none",
              textTransform: "none",
              width: "8.4rem",
            }}
          >
            Global Voices
          </Button>
        </Box>

        {/* Content with smooth transition */}
        {activeTab === "native" && (
          <Fade in={true}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                height: "350px",
                overflow: "auto",
              }}
            >
              {/* Language Select Dropdown */}
              <FormControl fullWidth sx={{ marginBottom: 1 }}>
                <Select
                  value={language}
                  onChange={handleLanguageChange}
                  sx={{
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    height: "2.5rem",
                    width: "100%",
                    color:"#555555"
                  }}
                >
                  <MenuItem value="default">Select Language</MenuItem>
                  <MenuItem value="en-US">English (US)</MenuItem>
                  <MenuItem value="en-GB">English (UK)</MenuItem>
                  <MenuItem value="es-ES">Spanish</MenuItem>
                  <MenuItem value="fr-FR">French</MenuItem>
                </Select>
              </FormControl>

              {/* Display NativeVoices components */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {[...Array(8)].map((_, index) => (
                  <Box key={index} sx={{ width: "calc(50% - 8px)" }}>
                    <NativeVoices />
                  </Box>
                ))}
              </Box>
            </Box>
          </Fade>
        )}

        {activeTab === "global" && (
          <Fade in={true}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                height: "350px",
                overflow: "auto",
              }}
            >
              {[...Array(8)].map((_, index) => (
                <Box key={index} sx={{ width: "calc(50% - 8px)" }}>
                  <GlobalVoices />
                </Box>
              ))}
            </Box>
          </Fade>
        )}
      </Box>
    </Modal>
  );
}
