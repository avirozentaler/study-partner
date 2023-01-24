import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Posts() {
  const [posts, setPosts] = useState(
    null || [
      {
        auther_name: "david",
        category: "Languages",
        id: 2,
        post: "a",
        sub_category: "English",
        date: "01/01/2023",
        time_from: "00:00",
        time_to: "00:00",
        user_id: 1,
      },
      {
        auther_name: "david",
        category: "Languages",
        id: 3,
        post: "a",
        sub_category: "English",
        date: "01/01/2023",
        time_from: "00:00",
        time_to: "00:00",
        user_id: 1,
      },
      {
        auther_name: "david",
        category: "Languages",
        id: 1,
        post: "a",
        sub_category: "English",
        date: "01/01/2023",
        time_from: "00:00",
        time_to: "00:00",
        user_id: 1,
      },
      {
        auther_name: "david",
        category: "Languages",
        id: 4,
        post: "a",
        sub_category: "English",
        date: "01/01/2023",
        time_from: "00:00",
        time_to: "00:00",
        user_id: 1,
      },
      {
        auther_name: "david",
        category: "Languages",
        id: 4,
        post: "a",
        sub_category: "English",
        date: "01/01/2023",
        time_from: "00:00",
        time_to: "00:00",
        user_id: 1,
      },
      {
        auther_name: "david",
        category: "Languages",
        id: 4,
        post: "a",
        sub_category: "English",
        date: "01/01/2023",
        time_from: "00:00",
        time_to: "00:00",
        user_id: 1,
      },
      {
        auther_name: "david",
        category: "Languages",
        id: 4,
        post: "a",
        sub_category: "English",
        date: "01/01/2023",
        time_from: "00:00",
        time_to: "00:00",
        user_id: 1,
      },
    ]
  );

  useEffect(() => {
    // getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const postsList = await (
        await axios.get("http://localhost:3005/post/get-all")
      ).data;
      // setPosts(postsList);
      return postsList;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  return (
    // <div style={{display: 'flex', flexWrap:'wrap'}}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {posts
          ? posts.map((post, index) => {
              return <PostCard post={post} key={index} />;
            })
          : "no posts added yet"}
      </Grid>
    </Box>
  );
}
