
import React, { useContext, useEffect } from "react";
import axios from "axios";
import UserConnected from "../../../context/UserConnected";
import Auth from "../../authentication/auth/Auth";
import Post from "../../post/Post";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Fab,
  Box,
  Typography,
  IconButton,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useColorScheme, styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useState } from "react";
import { typography } from "@mui/system";
const options = ["English", "Math", "Program engineer"];


export default function BodyApp({ openLogIn, handleCloseLogIn }) {

  const [option, setOption] = useState([]); ////////////////////

  const [posts, setPosts] = useState(
    [
      { auther_name: "david", category: "Languages", id: 1, post: "a", sub_category: "English", time_from: "2001-01-31T22:00:00.000Z", time_to: "2001-02-28T22:00:00.000Z", user_id: 1 },
      { auther_name: "david", category: "Languages", id: 2, post: "a", sub_category: "English", time_from: "2001-01-31T22:00:00.000Z", time_to: "2001-02-28T22:00:00.000Z", user_id: 1 },
      { auther_name: "david", category: "Languages", id: 3, post: "a", sub_category: "English", time_from: "2001-01-31T22:00:00.000Z", time_to: "2001-02-28T22:00:00.000Z", user_id: 1 },
      { auther_name: "david", category: "Languages", id: 4, post: "a", sub_category: "English", time_from: "2001-01-31T22:00:00.000Z", time_to: "2001-02-28T22:00:00.000Z", user_id: 1 }
    ]
  );

  const { userConnected, setUserConnected } = useContext(UserConnected);
  const [openPost, setOpenPost] = useState(false);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const aaa = () => {   ////test
    setUserConnected({ 
      name:'Moshe',
      email: 'Moshe@gmail.com',
      country: 'Israel',
      languages:'Hebrew',
      age: '30',
      phone_number: '052434343', });
  };

  useEffect(() => {
    getPosts();

  }, []);

  const getPosts = async () => {
    try {
      const postsList = await (await axios.get('http://localhost:3005/post/get-all')).data
      setPosts(postsList)
    }
    catch (err) {
      console.log(err);
    }
  }
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };


  return (
    <Box>
      <></>
      <BootstrapDialog
        onClose={handleCloseLogIn}
        aria-labelledby="customized-dialog-title"
        open={openLogIn}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleCloseLogIn}
        ></BootstrapDialogTitle>
        <DialogContent>
          <Auth handleCloseLogIn={handleCloseLogIn} />
        </DialogContent>
      </BootstrapDialog>
      {userConnected ? (
        <Typography variant="h3">user Connected</Typography>
      ) : (
        <Typography variant="h3">user not Connected</Typography>
      )}
      <Button onClick={aaa}>test connected</Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {posts ? posts.map((post, index) => {

          return (

            <Card key={index} sx={{
              margin: '20px',
              maxWidth: 400,
            }}>
              <CardMedia
                component="img"
                alt={post.category}
                height="100"
                image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                // src="./joachim-schnurle-OOEKfjCRBWU-unsplash.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.auther_name}

                </Typography>
                <Typography variant="body1" color="text.secondary">category: {post.category} </Typography>
                <Typography variant="body1" color="text.secondary">sub category: {post.sub_category} </Typography>
                <Typography variant="body1" color="text.secondary">i am able in time: </Typography>
                <Typography variant="body3">{post.time_from} </Typography>
                <Typography variant="body3">{post.time_to} </Typography>

              </CardContent>
              <CardActions>
                <Button size="small">Ask To</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>


          )

        }) : null}

      </Box>
      {userConnected ? (
        <Fab
          sx={{ position: "absolute", bottom: 50, right: 50 }}
          variant="extended"
          color="primary"
          onClick={() => {
            setOpenPost(true);
          }}
        >
          <AddIcon />POST
        </Fab>
      ) : null}
      {openPost ? <Post open={openPost} setOpen={setOpenPost} option={option} setOption={setOption}/> : null}

    </Box>
  );
}
