import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function PostCard({ post, setLearnMore}) {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 300, margin: 3, textAlign: "left" }}>
      <CardMedia
        component="img"
        alt="languages"
        height="140"
        image={require("./languages.jpg")}
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography gutterBottom variant="h5" component="div">
            {post.auther_name}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {post.sub_category}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          22/12/2023
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {post.time_from} - {post.time_to}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined" size="small" onClick={setLearnMore(true)}>
          learn more
        </Button>
        <Button variant="outlined" size="small">
          ask to
        </Button>
      </CardActions>
    </Card>
  );
}
