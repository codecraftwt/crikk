import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import { Box } from "@mui/material";
import TermsComponent from "../../components/TermsComponent/TermsComponent.jsx";
const Terms = () => {
  const [active, setActive] = useState("terms");

  return (
    <Box
    sx={{
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      "@media (max-width: 768px)": {
        boxSizing: "border-box",
        width: "100%",
        paddingLeft: "1rem",
      },
    }}
    >
      <Sidebar active={active} setActive={setActive} />{" "}
      <Box sx={{ width: "100%", height: "100%", boxSizing: "border-box" }}>
        <Searchbar />
        <TermsComponent />
      </Box>
    </Box>
  );
};

export default Terms;
