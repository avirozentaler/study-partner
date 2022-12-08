import React, { useContext } from "react";
import UserConnected from "../../../context/UserConnected";
import Auth from "../../authentication/auth/Auth";
import Post from "../../post/Post"
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Fab,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useColorScheme, styled } from "@mui/material/styles";
import PropTypes from "prop-types";

export default function BodyApp({ openLogIn, handleCloseLogIn }) {
  const { userConnected, setUserConnected } = useContext(UserConnected);

  const aaa = () => {
    setUserConnected({ name: "amit" });
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

//   const post =() =>{
//     return (<Post/>)
//  }
  

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
      {userConnected ? (
        
        <Fab
          sx={{ position: "absolute", bottom: 50, right: 50 }}
          variant="extended"
          color="primary"
          // onClick={<Post/>}
        >
          <AddIcon />
          post
        </Fab>
      ) : null}
        <Post/>

    </Box>
  );
}
