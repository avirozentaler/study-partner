import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import { Box, Grid, CircularProgress } from "@mui/material";
import UrlContext from "../../context/UrlContext";

export default function Posts() {
  const [posts, setPosts] = useState(null);
  const {urlServer} = useContext(UrlContext);

  useEffect(() => {
    (async () => {
      try {
        const postsList = await (
          await axios.get(`${urlServer}/post/get-all`)
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
  }, [urlServer]);

  return (
    <Box>
      {posts ? (
        <Grid container sx={{placeContent:'center'}}>
          {posts.map((post, index) => {
            return (
              <Grid item key={index}>
                <PostCard post={post} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Box sx={{ marginTop: "20%" }}>
          <CircularProgress />
        </Box>
      )}
      </Box>
  )
      }