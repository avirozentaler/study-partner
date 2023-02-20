import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserConnected from "../../context/UserConnected";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

import axios from "axios";

export default function ExtendedPost({ openMore, setOpenMore, post }) {
  const { userConnected } = useContext(UserConnected);
  const navigae = useNavigate();

  const handleBeMyPartner = async () => {
    try {
      console.log("BEEEEE MYYY");
      const answer = await axios.post(
        "http://localhost:3005/activity/react-to-post",
        { userId: post.user_id, postId: post.id },
        { withCredentials: true }
      );
      console.log(answer);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickOpen = () => {
    setOpenMore(true);
  };

  const handleClose = () => {
    setOpenMore(false);
  };
  return (
    <>
      <Dialog open={openMore} onClose={handleClose} fullWidth={true}>
        <DialogTitle>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Box>
          <DialogContent sx={{ padding: 5 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={10}>
                <Typography gutterBottom variant="body1">
                  Hi, my name is {post.auther_name}..
                </Typography>
                <Typography gutterBottom variant="body1">
                  I am looking for a partner to study
                </Typography>
                <Typography gutterBottom variant="body1">
                  {post.category}, {post.sub_category}
                </Typography>
                <Typography gutterBottom variant="body1">
                  on {post.date} between {post.time_from} to {post.time_to}
                </Typography>
                <Typography gutterBottom variant="body1">
                  {post.post}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Avatar
                  variant="rounded"
                  alt="Remy Sharp"
                  src={require("./languages.jpg")}
                  sx={{ width: 175, height: 175 }}
                />
              </Grid>
            </Grid>
            <DialogActions sx={{ paddingTop: 5 }}>
              <Button
                onClick={() => {
                  navigae("/user", { state: { userId: post.user_id } });
                }}
                variant="outlined"
                size="small"
              >
                View profile
              </Button>
              {userConnected ? (
                <Button
                  onClick={handleBeMyPartner}
                  variant="outlined"
                  size="small"
                >
                  be my partner
                </Button>
              ) : (
                <Tooltip
                  title="Only logged-in users can use this feature."
                  arrow
                >
                  <span style={{ marginLeft: "5px" }}>
                    <Button variant="outlined" disabled size="small">
                      be my partner
                    </Button>
                  </span>
                </Tooltip>
              )}
              {/* </Box> */}
            </DialogActions>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
}
