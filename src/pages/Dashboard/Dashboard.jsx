import React, {useState} from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import { Box } from "@mui/material";
import DashboardContent from "../../components/DashboardContent/DashboardContent.jsx";

const Dashboard = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <Sidebar active={active} setActive={setActive} />
      <Box className="contentbox-right" sx={{ width: "100%", height: "100%", boxSizing:"border-box", 
                '@media (max-width: 768px)': {
                  boxSizing:"border-box",
                  width:"100%",
                  paddingLeft:"1rem"
            }
      }}>
        <Searchbar />
        <DashboardContent />

      </Box>
    </Box>
  );
};

export default Dashboard;
