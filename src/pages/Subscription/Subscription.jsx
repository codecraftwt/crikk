import React, {useState} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import { Box } from "@mui/material";
import SubscriptionsComponent from "../../components/SubscriptionsComponent/SubscriptionsComponent.jsx";

const Subscription = () => {
      const [active, setActive] = useState("subscriptions");

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
      <Sidebar active={active} setActive={setActive} />    <Box sx={{ width: "100%", height: "100%", boxSizing:"border-box"}}>
      <Searchbar />
      <SubscriptionsComponent />
    </Box>
  </Box>
  )
}

export default Subscription