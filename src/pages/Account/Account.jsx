import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import { Box } from "@mui/material";
import AccountComponent from "../../components/AccountComponent/AccountComponent.jsx";

const Account = () => {
  const [active, setActive] = useState("helpcenter");

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <Sidebar active={active} setActive={setActive} />{" "}
      <Box sx={{ width: "75%", height: "100%", boxSizing: "border-box" }}>
        <Searchbar />
        <AccountComponent />
      </Box>
    </Box>
  );
};

export default Account;
