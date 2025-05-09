import React, {useState} from "react";
import { Box} from "@mui/material";
import SearchBar from "../components/Searchbar/Searchbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import SubScriptionsModal from "../components/SubscriptionsModal/SubscriptionsModal.jsx";

const Layout = ({ children }) => {
  const [active, setActive] = useState("helpcenter");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
        <Sidebar active={active} setActive={setActive} />

        <Box
          component="main"
          sx={{ background: "none", height: "100%", width: "100%" }}
        >
          <SearchBar onUpgradeClick={() => setModalOpen(true)} />

          <Box
            sx={{
              width: "100%",
              height: "85%",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
      <SubScriptionsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Layout;
