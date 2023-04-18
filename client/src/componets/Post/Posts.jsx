import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import UrlContext from "../../context/UrlContext";
import Filters from "../filters/Filters";
import { Box, Grid, CircularProgress } from "@mui/material";

export default function Posts() {
  const [posts, setPosts] = useState(null);
  const { urlServer } = useContext(UrlContext);
  const [rendering ,setRendering] =useState(false);

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
  }, [urlServer,rendering]);

  const handleRendering=()=>{setRendering(!rendering)}
  
  return (
    <Box>
      {posts ? (
        <Box>
          <Box>
            <Filters setPosts={setPosts} handleRendering={handleRendering}/>
          </Box>
          <Grid container sx={{ placeContent: 'center' }}>
            {posts.map((post, index) => {
              return (
                <Grid item key={index}>
                  <PostCard post={post} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <Box sx={{ marginTop: "20%" }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  )
}