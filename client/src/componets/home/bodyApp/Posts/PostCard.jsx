import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


export default function PostCard({post}) {
  return (
    <Grid item xs={3}> 
    <Card
      sx={{
        // padding: "11px",
        margin: '30px',
        width: '250px',
        
      }}
    >
      <CardMedia
        component="img"
        // alt={post.category}
        height="100"
        // image="./languages.png"
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        // src="./joachim-schnurle-OOEKfjCRBWU-unsplash.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.auther_name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          category: {post.category}{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          sub category: {post.sub_category}{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          i am able in time:{" "}
        </Typography>
        <Typography variant="body3">{post.time_from} </Typography>
        <Typography variant="body3">{post.time_to} </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ask To</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}
