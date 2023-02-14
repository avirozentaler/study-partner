import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import { Box, Grid, CircularProgress, Typography } from "@mui/material";

export default function Posts() {
  const [posts, setPosts] = useState(null);
  
  useEffect(() => {
    (async () => {
      try {
        const postsList = await (
          await axios.get("http://localhost:3005/post/get-all")
        ).data;

        if (!postsList) {
          throw new Error("posts not dound")
        }
        else {
          setPosts(postsList)
        }

      }
      catch (err) {
        console.log(err);
      }
    })()
  }, []);

  return (
    <Box>
      {posts ? <Grid container>
        {posts.map((post, index) => {
          return (
            <Grid item xs key={index}>
              <PostCard post={post} />
            </Grid>
          );
        })}
      </Grid> :
        <Box sx={{ marginTop: '20%' }}>
          <Typography variant="h4">Loading Posts</Typography>
          <CircularProgress />
        </Box>}

    </Box>
  );
}
