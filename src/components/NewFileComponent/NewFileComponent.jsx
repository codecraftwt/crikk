import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const NewFileComponent = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [style, setStyle] = useState("default");
  const [pause, setPause] = useState(0);
  const maxLength = 2000;
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  const handlePauseChange = (event) => {
    setPause(event.target.value);
  };

  const charactersLeft = maxLength - text.length;
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "85%",
        padding: "1rem",
        paddingLeft: "0",
        paddingTop: "0",
      }}
    >
      <Box
        sx={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.06)",
          height: "100%",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            padding: "2rem",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
          }}
        >
          <KeyboardBackspaceIcon sx={{ color: "#8A5CFF", cursor: "pointer" }} />
          <Typography
            variant="h5"
            sx={{
              color: "#3E3E3E",
              fontSize: "1.2rem",
              marginLeft: "1rem",
              fontWeight: "500",
            }}
          >
            Type text to create audio
          </Typography>
        </Box>
        <Typography sx={{ padding: "1rem 2rem" }}>Title</Typography>
        <TextField
          variant="outlined"
          placeholder="Enter Title"
          sx={{ padding: "0rem 2rem", width: "100%", boxSizing: "border-box" }}
        />
        <Typography sx={{ padding: "1rem 2rem" }}>Write your text</Typography>
        <TextField
          placeholder="Enter your text here"
          variant="outlined"
          value={text}
          inputProps={{ maxLength: maxLength }}
          onChange={handleChange}
          multiline
          rows={6}
          sx={{ padding: "0rem 2rem", width: "100%", boxSizing: "border-box" }}
        />
        <Box
          sx={{
            display: "flex",
            padding: "0 2rem",
            boxSizing: "border-box",
            justifyContent: "end",
          }}
        >
          <Typography sx={{ color: "#A1A1A1" }}>
            {charactersLeft}/{maxLength} Characters left
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "0 2rem", marginTop: 2 }}>
            <FormControl fullWidth>
              <Select
                value={language}
                onChange={handleLanguageChange}
                sx={{ borderRadius: "15px", fontSize:"0.9rem"}}
              >
                <MenuItem value="en-US">English (US)</MenuItem>
                <MenuItem value="en-GB">English (UK)</MenuItem>
                <MenuItem value="es-ES">Spanish</MenuItem>
                <MenuItem value="fr-FR">French</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Style Dropdown */}
          <Box sx={{ padding: "0 2rem", marginTop: 2 }}>
            <FormControl fullWidth>
              <Select
                value={style}
                onChange={handleStyleChange}
                sx={{ borderRadius: "15px", fontSize:"0.9rem"}}
              >
                <MenuItem value="default">Select Style</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="formal">Formal</MenuItem>
                <MenuItem value="excited">Excited</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Pause Dropdown */}
          <Box sx={{ padding: "0 2rem", marginTop: 2 }}>
            <FormControl fullWidth>
              <Select
                value={pause}
                onChange={handlePauseChange}
                sx={{ fontSize: "0.9rem" }}
              >
                <MenuItem value={0}>Add Pause</MenuItem>
                <MenuItem value={2}>2 Seconds</MenuItem>
                <MenuItem value={4}>4 Seconds</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            marginTop: 3,
          }}
        >
          <Button variant="outlined" onClick={() => setText("")}>
            Reset
          </Button>
          <Button variant="contained" sx={{ background: "#8A5CFF" }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewFileComponent;
