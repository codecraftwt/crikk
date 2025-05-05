import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import { Box } from "@mui/material";
import SubScriptionsModal from "../../components/SubscriptionsModal/SubscriptionsModal.jsx";
import DashboardFileContent from "../../components/DashboardFileContent/DashboardFileContent.jsx";
import MergeAudioModal from "../../components/MergeAudioModal/MergeAudioModal.jsx";

const DashboardData = () => {
  const [active, setActive] = useState("dashboard");
  const [modalOpen, setModalOpen] = useState(false);
  const [mergeModalOpen, setMergeModalOpen] = useState(false);

  return (
    <>
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
          <DashboardFileContent onMergeClick ={() => setMergeModalOpen(true)} />
        </Box>
      </Box>
      <SubScriptionsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <MergeAudioModal 
      open = {mergeModalOpen}
      onClose = {() => setMergeModalOpen(false)}
      />
    </>
  );
};

export default DashboardData;
