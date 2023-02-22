import React, {useContext, useState } from "react";
import UserConnected from '../../context/UserConnected'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip  from "@mui/material/Tooltip";
import ExtendedPost from "./ExtendedPost";
export default function PostCard({ post }) {

  const [openMore, setOpenMore] = useState(false);
  const { userConnected } = useContext(UserConnected);

  return (
    <Tooltip title={ post.matched?"post has been already matched to another user.":''} followCursor>
      
    <Card 
    
     sx={{ minWidth: 250, maxWidth: 300, margin: 3, textAlign: "left" ,opacity:post.matched? '0.5':'1'}}>
      
      <CardMedia 
        component="img"
        alt="languages"
        height="140"
        image={require('./cardPics/'+post.category+'.jpg')}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {(post.auther_name && post.auther_name )||"unknown"}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {post.sub_category}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {post.date}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {post.time_from} - {post.time_to}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
        disabled={post.matched}
          variant="outlined"
          size="small"
          onClick={() => {
            setOpenMore(true);
          }}
        >
          learn more
        </Button>
      </CardActions>
      <ExtendedPost openMore={openMore} setOpenMore={setOpenMore} userId={post.user_id} post={post} />
    </Card>
    </Tooltip>
  );
}
