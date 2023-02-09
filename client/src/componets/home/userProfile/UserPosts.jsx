import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import PostCard from '../bodyApp/Posts/PostCard';
// import UserConnected from '../../context/UserConnected';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Paper,
    FormControlLabel,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
    CircularProgress,
    Grid,
    Avatar,
    Divider,
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
