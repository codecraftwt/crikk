import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import { Box } from "@mui/material";
import DashboardContent from "../../components/DashboardContent/DashboardContent.jsx";
import SubScriptionsModal from "../../components/SubscriptionsModal/SubscriptionsModal.jsx";
import IntroModal from "../../components/IntroModal/IntroModal.jsx";

const Dashboard = () => {
  const [active, setActive] = useState("dashboard");
  const [modalOpen, setModalOpen] = useState(false);
  const [openIntroModal, setOpenIntroModal] = useState(true);

  return (
    <>
      <IntroModal open={openIntroModal} onClose={() => setOpenIntroModal(false)} />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <Sidebar active={active} setActive={setActive} />
        <Box
          className="contentbox-right"
          sx={{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            paddingLeft: { xs: "1rem", sm: "1rem", md: "0" },
          }}
        >
          <Searchbar onUpgradeClick={() => setModalOpen(true)} />
          <DashboardContent />
        </Box>
      </Box>
      <SubScriptionsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Dashboard;
