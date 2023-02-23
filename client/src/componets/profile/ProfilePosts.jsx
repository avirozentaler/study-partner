import React,{useContext,useState} from 'react'
import PostCard from "../Post/PostCard";
import { Box, Grid } from "@mui/material";
import UserConnected from '../../context/UserConnected';


export default function ProfilePosts() {

    const { userConnected } = useContext(UserConnected);
    const [posts,setPosts] = useState(userConnected.posts || "");

    return (
        <Box sx={{ display: 'flex', overflowX: 'scroll' }}>
            {posts &&
                posts.map((post,index) => {
                    return <PostCard key={index} post={post} />;
                })}
        </Box>

    )
}










