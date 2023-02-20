import React from "react";
// import { useNavigate } from 'react-router-dom'
import PostCard from "../Post/PostCard";
// import UserConnected from '../../context/UserConnected';

import { Box, Grid } from "@mui/material";

export default function UserPosts({ posts }) {
  console.log(posts);
  return (
    <Box sx={{display:'flex',overflowX:'scroll'}}>
      {posts &&
        posts.map((post) => {
          return <PostCard post={post} />;
        })}
    </Box>
  );
}
