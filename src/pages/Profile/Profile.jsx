import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import { Box } from "@mui/material";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent.jsx";
import SubScriptionsModal from "../../components/SubscriptionsModal/SubscriptionsModal.jsx";


const Profile = () => {
  const [active, setActive] = useState("profile");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          paddingLeft: { xs: "1rem", sm: "1rem", md: "0" },
        }}
      >
        <Sidebar active={active} setActive={setActive} />{" "}
        <Box sx={{ width: "100%", height: "100%", boxSizing: "border-box" }}>
          <Searchbar onUpgradeClick={() => setModalOpen(true)} />
          <ProfileComponent />
        </Box>
      </Box>{" "}
      <SubScriptionsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Profile;
