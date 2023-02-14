import React, { } from 'react'
// import { useNavigate } from 'react-router-dom'
import PostCard from '../Post/PostCard';
// import UserConnected from '../../context/UserConnected';

import {
    Box,
    Grid,
} from "@mui/material";

export default function UserPosts({ posts }) {
console.log(posts);
    return (


        <Box sx={{flexGrow: 1 }}>
      <Grid container  sx={{display:"flex",justifyContent:"space-around"}} spacing={1}>
        {posts && posts.map((post,index) => {
                return <PostCard key={index} post={post} />
            })
          }
      </Grid>
    </Box>

    )
}
