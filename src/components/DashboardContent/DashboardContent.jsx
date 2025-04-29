import React from "react";
import { Box } from "@mui/material";
import NoObjectImg from "../../assets/images/NoObject.png";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const DashboardContent = () => {
  const theme = useTheme();
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
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "80%",
            maxHeight: "1000px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.down("md")]: {
              width: "300px",
            },
          }}
        >
          <img
            src={NoObjectImg}
            alt="No Object image"
            style={{ height: "50%", margin: "auto" }}
          />
          <Typography
            variant="h5"
            sx={{
              color: "#3E3E3E",
              textAlign: "center",
              marginBottom: "1rem",
              [theme.breakpoints.up("lg")]: {
                fontSize:"1.8rem"
              },
              [theme.breakpoints.down("sm")]: {
                 fontSize:"1.5rem"
              },
            }}
          >
            No Project Found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontWeight: "300",
              fontSize: "18px",
              lineHeight: "150%",
              textAlign: "center",
              color: "#9E9E9E",
              [theme.breakpoints.up("lg")]: {
                fontSize:"1.2rem"
              },
              [theme.breakpoints.down("sm")]: {
                boxSizing:"border-box",
                fontSize:'1rem',
                padding:"1rem"
              },
            }}
          >
            Hey! It looks like you haven’t created any projects yet. Create a
            project to access your documents anytime, anywhere.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardContent;
