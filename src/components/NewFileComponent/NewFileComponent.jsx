import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import Avatar from "../../assets/images/avatar.png";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SpeedIcon from "@mui/icons-material/Speed";

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
                sx={{
                  borderRadius: "10px",
                  fontSize: "0.8rem",
                  height: "2.5rem",
                  width: "8rem",
                }}
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
                sx={{
                  borderRadius: "10px",
                  fontSize: "0.8rem",
                  height: "2.5rem",
                  width: "8rem",
                }}
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
                sx={{
                  borderRadius: "10px",
                  fontSize: "0.8rem",
                  height: "2.5rem",
                  width: "8rem",
                }}
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
            justifyContent: "space-between",
            gap: 2,
            marginTop: 3,
            padding: "0 2rem",
            boxSizing: "border-box",
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <PlayCircleIcon sx={{ fontSize: "3rem", color: "#8A5CFF" }} />
              <Typography sx={{ marginLeft: "1rem", fontSize: "0.9rem" }}>
                Play Preview
              </Typography>
            </Box>
            <Box
              ml={5}
              display={"flex"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <Box
                component="img"
                src={Avatar}
                alt="image"
                sx={{
                  height: "2.5rem",
                  background: "#2061D6",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  WebkitBackgroundClip: "text",
                  color: "#FD7E14",
                  fontSize: "1rem",
                  background: "white",
                  position: "relative",
                  right: "1rem",
                  top: "15px",
                  borderTopLeftRadius: "10px",
                  padding: "2px",
                }}
              >
                Free
              </Box>
              <Box color={"#7D7D7D"}>Voice</Box>
            </Box>
            <Box
              ml={5}
              display={"flex"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <SpeedIcon sx={{ color: "#7D7D7D", fontSize: "2rem" }} />
              <Typography
                color="#7D7D7D"
                sx={{ marginLeft: "0.5rem", fontSize: "0.9rem" }}
              >
                Speed
              </Typography>
            </Box>
            <Box
              ml={5}
              display={"flex"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <GraphicEqIcon sx={{ color: "#7D7D7D", fontSize: "2rem" }} />
              <Typography
                color="#7D7D7D"
                sx={{ marginLeft: "0.5rem", fontSize: "0.9rem" }}
              >
                Pitch
              </Typography>
            </Box>
          </Box>

          <Box>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                marginRight: "1rem",
                color: "#6D6D6D",
                border: "1px solid #6D6D6D",
                borderRadius: "8px",
              }}
              onClick={() => setText("")}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#8A5CFF",
                textTransform: "none",
                borderRadius: "8px",
              }}
            >
              Create audio
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewFileComponent;
