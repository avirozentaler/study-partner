import React, {useContext, useState } from "react";
import UserConnected from '../../../../context/UserConnected'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip  from "@mui/material/Tooltip";
import LearnMore from "../learn-more/learn-more";
export default function PostCard({ post }) {

  const [openMore, setOpenMore] = useState(false);
  const { userConnected } = useContext(UserConnected);

  return (
    <Card  sx={{ minWidth: 250, maxWidth: 300, margin: 3, textAlign: "left" }}>
      <CardMedia
        component="img"
        alt="languages"
        height="140"
        image={require("./languages.jpg")}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.auther_name}
        </Typography>
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
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            setOpenMore(true);
          }}
        >
          learn more
        </Button>
        {userConnected ? (
              <Button variant="outlined"  size="small">
                be my partner
              </Button>
            ) : (
              <Tooltip title="Only logged-in users can use this feature." arrow>
                <span style={{ marginLeft: "5px" }}>
                  <Button
                    variant="outlined"
                    disabled
                    size="small"
                  >
                    be my partner
                  </Button>
                </span>
              </Tooltip>
            )}
      </CardActions>
      <LearnMore openMore={openMore} setOpenMore={setOpenMore} userId={post.userId}/>
    </Card>
  );
}
