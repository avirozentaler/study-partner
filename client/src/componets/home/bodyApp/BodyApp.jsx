import React, { useContext, useEffect } from "react";
import axios from "axios";
import UserConnected from "../../../context/UserConnected";
import Auth from "../../authentication/auth/Auth";
import CreatePost from "../CreatePost/CreatePost";
import PostButton from "./PostButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


import Posts from "./Posts/Posts";

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

  const [posts, setPosts] = useState([
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
  ]);

  const { userConnected, setUserConnected } = useContext(UserConnected);
  const [openPost, setOpenPost] = useState(false);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const aaa = () => {
    ////test
    setUserConnected({
      name: "Moshe",
      email: "Moshe@gmail.com",
      country: "Israel",
      languages: "Hebrew",
      age: "30",
      phone_number: "052434343",
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const postsList = await (
        await axios.get("http://localhost:3005/post/get-all")
      ).data;
      setPosts(postsList);
    } catch (err) {
      console.log(err);
    }
  };
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
      <Box>
      <Posts/>
      </Box>
      {userConnected ? (
        <Fab
          sx={{ position: "fixed", bottom: 20, left: 30 }}
          variant="extended"
          color="primary"
          onClick={() => {
            setOpenPost(true);
          }}
        >
          <AddIcon />
        </Fab>
      ) : // <PostButton />
      null}
      {openPost ? (
        <CreatePost
          open={openPost}
          setOpen={setOpenPost}
          option={option}
          setOption={setOption}
        />
      ) : null}
    </Box>
  );
}
