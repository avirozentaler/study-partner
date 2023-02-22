import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserConnected from "../../context/UserConnected";
import PostSending from "./PostSending";

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
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);

  const handleBeMyPartner = async () => {
    try {
      setIsSendingEmail(true);
      const answer = await axios.post(
        "http://localhost:3005/activity/react-to-post",
        { userId: post.user_id, postId: post.id },
        { withCredentials: true }
      );
      if (!answer.data) {
        setEmailFailed(true);
        throw new Error('fail to send email');
      }
      setEmailSent(true);
      console.log(answer.data);
    } catch (err) {
      setEmailFailed(true);
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
        <Box>
          <DialogTitle>
            <IconButton
              onClick={() => {
                setOpenMore(false);
                setIsSendingEmail(false);
              }}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
        </Box>
        <DialogContent sx={{ padding: 5 }}>
          {!isSendingEmail ? <Box>
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
              {/* <Box> */}
              <Button
                onClick={() => {
                  userConnected && (userConnected.id !== post.user_id) ?
                    navigae("/user", { state: { userId: post.user_id } })
                    : navigae("/profile")
                }}
                variant="outlined"
                size="small"
              >
                View profile
              </Button>
              {userConnected ? (
                (userConnected.id !== post.user_id) && <Button
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
          </Box> :
            <PostSending emailSent={emailSent} emailFailed={emailFailed}/>
          }
        </DialogContent>
      </Dialog>
    </>
  );
}
