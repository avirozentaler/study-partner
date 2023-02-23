import React from "react";
// import { useNavigate } from 'react-router-dom'
import PostCard from "../Post/PostCard";
// import UserConnected from '../../context/UserConnected';

import { Box, Grid } from "@mui/material";

export default function UserPosts({ posts }) {
  return (
    <Box sx={{display:'flex',overflowX:'scroll'}}>
      {posts &&
        posts.map((post,index) => {
          return <PostCard key={index} post={post} />;
        })}
    </Box>
  );
}
