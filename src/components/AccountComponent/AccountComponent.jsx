import React from 'react'
import {Box} from "@mui/material"


const AccountComponent = () => {
  return (
    <Box
    sx={{
      boxSizing: "border-box",
      width: "100%",
      height: "85%",
      padding: "1rem",
      paddingLeft: "0",
      paddingTop: "0"

    }}
  >
    <Box
      sx={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.06)",
          height: "100%",
          overflowY:"auto"
      }}
    >Account Dashboard</Box>
  </Box>
  )
}

export default AccountComponent