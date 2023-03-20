import React, { useContext, useState } from "react";
import UserConnected from "../../context/UserConnected";
import ExtendedPost from "./ExtendedPost";
import ExtendPostDialog from "./ExtendPostDialog";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Paper, Box, Divider } from "@mui/material";

export default function PostCard({ post }) {
  const [openMore, setOpenMore] = useState(false);
  const { userConnected } = useContext(UserConnected);

  return (
    <Tooltip
      sx={{ padding: 5 }}
      placement="top"
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -175],
            },
          },
        ],
      }}
      title={post.matched === -1 ? "this post has been already matched." : ""}
    >
      <Card
        sx={{
          minWidth: 250,
          maxWidth: 300,
          margin: 3,
          textAlign: "left",
          opacity:
            post.matched === -1 ? "0.5" : post.matched === 0 ? "0.8" : "1",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          {post.matched === 0 && (
            <Paper
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                padding: "6",
                textAlign: "center",
                opacity: "1",
              }}
              elevation={6}
            >
              <Typography
                fontWeight={"bold"}
                color="primary"
                variant="h4"
                m={5}
              >
                Post pending
              </Typography>
            </Paper>
          )}
        </Box>
        <CardMedia
          component="img"
          alt="languages"
          height="140"
          image={require("./cardPics/" + post.category + ".jpg")}
        />

        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div">
            {(post.auther_name && post.auther_name) || "unknown"}
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
            disabled={post.matched !== 1}
            variant="outlined"
            size="small"
            onClick={() => {
              setOpenMore(true);
            }}
          >
            learn more
          </Button>
        </CardActions>

        <ExtendPostDialog
          openMore={openMore}
          setOpenMore={setOpenMore}
          post={post}
        />
        {/* <ExtendedPost
          openMore={openMore}
          setOpenMore={setOpenMore}
          userId={post.user_id}
          post={post}
        /> */}
      </Card>
    </Tooltip>
  );
}
