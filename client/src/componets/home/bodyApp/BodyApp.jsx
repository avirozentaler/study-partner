import React, { useContext, useEffect, useState } from "react";
import UserConnected from "../../../context/UserConnected";
import Auth from "../../authentication/auth/Auth";
import CreatePost from "../CreatePost/CreatePost";
import CreatePostButton from "./Posts/CreatePostButton";
import Posts from "./Posts/Posts";
import Box from "@mui/material/Box";
import LearnMore from "./learn-more/learn-more";

export default function BodyApp({ openLogIn, handleCloseLogIn }) {
  const { userConnected, setUserConnected } = useContext(UserConnected);
  const [openPost, setOpenPost] = useState(false);

  return (
    <Box>
      {openLogIn && (
        <Auth handleCloseLogIn={handleCloseLogIn} openLogIn={openLogIn} />
      )}
      <Box>
        <Posts />
      </Box>
      <CreatePostButton setOpenPost={setOpenPost} />
      {openPost && <CreatePost open={openPost} setOpen={setOpenPost} />}
      <LearnMore></LearnMore>
    </Box>
  );
}
