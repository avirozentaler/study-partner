import React,{useState} from "react";
import CreatePost from "../Post/CreatePost";
import CreatePostButton from "../Post/CreatePostButton";
import Posts from "../Post/Posts";
import Box from "@mui/material/Box";

export default function Main({ openLogIn, handleCloseLogIn }) {

  const [openPost, setOpenPost] = useState(false);

  return (
    <Box>
      <Box>
        <Posts />
      </Box>
      <CreatePostButton setOpenPost={setOpenPost} />
      {openPost && <CreatePost open={openPost} setOpen={setOpenPost} />}
    </Box>
  );
}
