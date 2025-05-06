import React, { useState, useRef } from "react";
import { Modal, Box, Typography, Slider, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";

const CustomSlider = ({ speed, setSpeed }) => {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const height = rect.height;
    const ratio = 1 - clickY / height;
    const newSpeed = Math.round((ratio * 3.5 + 0.5) * 2) / 2;
    setSpeed(Math.min(4, Math.max(0.5, newSpeed)));
  };

  const fillHeight = ((speed - 0.5) / 3.5) * 100;

  return (
    <Box
      ref={containerRef}
      onClick={handleClick}
      sx={{
        width: "50px",
        height: "200px",
        background: "lightblue",
        borderRadius: "10px",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "2.5rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          background: "white",
          borderRadius: "10px",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: `${fillHeight}%`,
          background: "#8A5CFF",
          borderRadius: "10px",
          transition: "height 0.2s ease",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "70%",
          height: "3px",
          background: "white",
          borderRadius: "10px",
          top: `${102 - fillHeight}%`,
          transition: "top 0.2s ease",
        }}
      />
    </Box>
  );
};

const SpeedModal = ({ open, onClose, anchorElPosition }) => {
  const [speed, setSpeed] = useState(1);
  const [productivityBoost, setProductivityBoost] = useState(0);
  const [duration, setDuration] = useState(60);
  const wordsPerMinute = 150;

  const updateSpeed = (newSpeed) => {
    setSpeed(newSpeed);
    setDuration(60 / newSpeed);

    if (newSpeed > 1) {
      const boost = Math.round((newSpeed - 1) * 30);
      setProductivityBoost(boost);
    } else {
      setProductivityBoost(0);
    }
  };

  const wordsPerMinuteCalculated = wordsPerMinute * speed;

  const getSpeedLabel = () => {
    if (speed <= 0.5) return "Slow";
    if (speed === 1) return "Normal";
    if (speed > 1 && speed <= 2.5) return "Fast";
    return "Super Fast";
  };

  return (
    <Modal open={open} onClose={onClose}>
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
          borderRadius: 2,
          p: 3,
          width: "380px",
          height: "260px",
          boxShadow: 24,
          borderRadius: "20px",
          boxSizing: "border-box",
          display: "flex",
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
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "600",
              textAlign: "center",
              color: "#0B0B0B",
            }}
          >
            {getSpeedLabel()}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 0.5,
              color: "#6A6A6A",
              textAlign: "center",
              fontSize: "1.1rem",
            }}
          >
            Duration: {duration.toFixed(2)}.00
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              margin: "auto",
              marginTop: "2rem",
            }}
          >
            <IconButton
              onClick={() => updateSpeed(Math.max(0.5, speed - 0.5))}
              disabled={speed <= 0.5}
            >
              <RemoveIcon sx={{ color: "black", fontSize: "1.2rem" }} />
            </IconButton>

            <Typography variant="h4" fontWeight={"bold"}>
              {speed}x
            </Typography>

            <IconButton
              onClick={() => updateSpeed(Math.min(4, speed + 0.5))}
              disabled={speed >= 4}
            >
              <AddIcon sx={{ color: "black", fontSize: "1.2rem" }} />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            sx={{ mt: 1, color: "#6A6A6A", textAlign: "center" }}
          >
            {wordsPerMinuteCalculated.toFixed(0)} words per minute
          </Typography>

          {productivityBoost > 0 && (
            <Typography variant="body2" sx={{ mt: 3, mb: 2, color: "green" }}>
              +{productivityBoost}% productivity boost
            </Typography>
          )}
        </Box>
        <Box sx={{ width: "50%", display: "flex", justifyContent: "end" }}>
          <CustomSlider speed={speed} setSpeed={updateSpeed} />
        </Box>
      </Box>
    </Modal>
  );
};

export default SpeedModal;
