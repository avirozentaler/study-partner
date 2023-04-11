import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserConnected from "../../context/UserConnected";
import UrlContext from "../../context/UrlContext.js";
import {
  Paper,
  Popover,
  Tooltip,
  Button,
  DialogContent,
  DialogActions,
  Typography,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ExtendedPost({ post, setIsSendingEmail, setEmailSent }) {

  const { urlServer } = useContext(UrlContext);
  const { userConnected } = useContext(UserConnected);
  const navigae = useNavigate();
  const [week, setWeek] = useState(["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]);
  const [day, setDay] = useState(-1);
  const [active, setActive] = useState(false);
  const [openAnchorEl, setOpenAnchorEl] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  useEffect(() => {
    post.days?.forEach((item) => {
      if (item === 1) {
        setActive(true);
        return
      }
    })
  }, [])

  const handleDeletePost = async () => {
    try {
      const answer = await axios.post(`${urlServer}/post/delete`, { id: post.id }, { withCredentials: true });
      console.log(post.id);
      console.log(answer);
      //need alert if succeed or faild
    }
    catch (err) {
      console.log(err);
    }

  }

  const handleEdit = () => {
////////////////////////////////////////
  }

  const handleDeletePostButton = (event) => {
    setAnchorEl(event.currentTarget)
    setOpenAnchorEl(true);
  }

  const handleBeMyPartner = async () => {
    try {
      if (day < 0) {
        return;
      }
      setIsSendingEmail(true);
      const answer = await axios.post(
        urlServer + "/activity/react-to-post",
        { the_applicant_id: userConnected.id, postId: post.id, day: day },
        { withCredentials: true }
      );
      if (!answer.data) {

        throw new Error('fail to send email');
      }
      console.log(answer.data);
      setEmailSent(1);
    } catch (err) {
      console.log(err);
      setEmailSent(-1);
    }
  };
  return (
    <Box>
      <DialogContent sx={{ padding: 5 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={10}>
            <Typography gutterBottom variant="body1">
              Hi, my name is {post.auther_name}
            </Typography>
            <Typography gutterBottom variant="body1">
              I am looking for a partner to study
            </Typography>
            <Typography gutterBottom variant="body1">
              {post.category}, {post.sub_category}
            </Typography>
            {/* <Typography gutterBottom variant="body1">on {post.date} between {post.time_from} to {post.time_to}</Typography> */}
            <Typography gutterBottom variant="body1">from {post.date_from} to {post.date_to}</Typography>
            <Typography gutterBottom variant="body1">in the hours between {post.time_from} to {post.time_to}</Typography>
            <Box>
              {week?.map((item, index) => {
                return <Button key={index}
                  sx={{ m: 0.3, }}
                  size="small"
                  variant={day !== index ?"outlined":"contained"} 
                  disabled={post.days[index] < 1}
                  onClick={() => {
                    day === index ? setDay(-1) : setDay(index)
                  }}>{item}</Button>
              })}
            </Box>
            <Typography gutterBottom variant="body1" marginTop={3} marginLeft={3}>{post.post}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Avatar
              variant="rounded"
              alt="Remy Sharp"
              src={require('./cardPics/' + post.category + '.jpg')}
              sx={{ width: 200, height: 200, borderRadius: '50%' }}
            // sx={{ width: 175, height: 175 }}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ /*paddingTop: 5*/ }}>
          {userConnected && (userConnected.id === post.user_id) &&
            <Box>
              <Tooltip title="Delete Post"><Button onClick={handleDeletePostButton}><DeleteIcon /></Button></Tooltip>
              <Popover
                open={openAnchorEl}
                anchorEl={anchorEl}
                onClose={() => { setOpenAnchorEl(false) }}
              >
                <Paper sx={{p: 1.5 }}>
                  <Typography variant="body2">Are you sure you want to delete this post?</Typography>
                  <Box >
                  <Button size="small" color="error" onClick={handleDeletePost}>Delete</Button>
                  <Button size="small" onClick={() => { setOpenAnchorEl(false); setAnchorEl(null) }}>Cancel</Button>
                  </Box>
                </Paper>
              </Popover>
            </Box>
          }
          {userConnected && (userConnected.id === post.user_id) && <Tooltip title="Edit Post"><Button onClick={handleEdit}><EditIcon /></Button></Tooltip>}
          <Button
            onClick={() => {
              userConnected && (userConnected.id === post.user_id) ?
                navigae("/profile")
                : navigae("/user", { state: { userId: post.user_id } })
            }}
            variant="outlined"
            size="small"
          >
            View profile
          </Button>
          {userConnected ? (
            (userConnected.id !== post.user_id) && <Button
              onClick={handleBeMyPartner}
              disabled={day === -1}
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
        </DialogActions>
      </DialogContent>
    </Box>
  );
}