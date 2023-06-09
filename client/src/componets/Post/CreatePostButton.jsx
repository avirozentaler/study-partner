import React, { useContext, useEffect, useState } from "react";
import UserConnected from "../../context/UserConnected";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";

export default function CreatePostButton({ setOpenPost }) {
  const { userConnected } = useContext(UserConnected);
  return (
    <Box>
      {userConnected && (
        <Fab
          sx={{ position: "fixed", bottom: 20, right: 30 }}
          variant="extended"
          color="primary"
          onClick={() => {
            setOpenPost(true);
          }}
        >
          <AddIcon />
        </Fab>
      )}
    </Box>
  );
}
