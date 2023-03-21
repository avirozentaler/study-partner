import axios from "axios";
import React, { useState, useContext } from "react";
import UserConnected from "../../context/UserConnected";
import { emailValid, passwordValid } from "../../utilities/validetion/validetion.js";
import { Box, Typography, TextField, Button, Link, Grid, Snackbar, Alert } from "@mui/material";
import UrlContext from "../../context/UrlContext.js";
import { Container } from "@mui/system";

export default function Login({ handleAuthMode, handleCloseLogIn, handleOpenAlert }) {
  // const [errorMessage, setErrorMessage] = useState('')
  // const [opanAlert, setOpanAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserConnected } = useContext(UserConnected);
  const { urlServer } = useContext(UrlContext);


  // const handleOpenAlertError = (message) => {
  //   setErrorMessage(message)
  //   setOpanAlert(true);
  //   setTimeout(() => {
  //     setOpanAlert(false);
  //   }, 3500)
  // }

  // const handleCloseAlertError = () => {
  //   setOpanAlert(false);
  // }

  const submit = async () => {
    if (!email || !password) {
      handleOpenAlert('error', 'Missing Details');
      // handleOpenAlertError('Missing Details')
    }
    else if (!emailValid(email)) {
      handleOpenAlert('error', 'Email is not valid!');
      // handleOpenAlertError('Email is not valid!')
    } else if (!passwordValid(password)) {
      handleOpenAlert('error', 'Password is not valid!');
      // handleOpenAlertError("Password is not valid")
    } else {
      try {
        const answer = await axios.post(
          urlServer + "/auth/log-in",
          { email, password },
          { withCredentials: true }
        );
        sessionStorage.setItem("user", JSON.stringify(answer.data));
        sessionStorage.setItem("user_id", JSON.stringify(answer.data.id));
        console.log(answer.data);
        setUserConnected(answer.data);
        handleCloseLogIn();
      }
      catch (err) {
        handleOpenAlert('error', 'Login Faild!');
        // handleOpenAlertError('Login Faild')
        console.log(err);
      }
    }
  };
  return (
    <Container
      // maxWidth={"lg"}
      sx={{
        // maxWidth: 450,
        // minWidth: 100,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        borderRadius: "sm",
        boxShadow: "xl",
      }}
    // variant="outlined"
    >
      {/* <Box sx={{ position: 'relative' }}>
        {opanAlert ? <Alert onClose={handleCloseAlertError} sx={{ position: 'absolute', width: '100%' }} severity='error'>{errorMessage}</Alert> : null}
      </Box> */}
      <Box>
        <Typography variant="h5" align="center">
          Log in
        </Typography>
      </Box>
      <TextField
        variant='standard'
        required
        // error={email && !emailValid(email)}
        id="email"
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        variant='standard'
        required
        // error={password && !passwordValid(password)}
        id="password"
        name="password"
        type="password"
        label="Password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {/* <Box sx={{textAlign:'center'}}> */}
      <Link
        underline="hover"
        onClick={() => {
          handleAuthMode(2);
        }}
      >
        forgt password?
      </Link>
      {/* </Box> */}
      <Button color="success" variant="contained" type="submit" sx={{ width: '100%', }} onClick={submit}>
        Log in
      </Button>
      <Button variant="contained" type="submit" sx={{ mb: 2, width: '100%', }} onClick={() => { handleAuthMode(1) }}>
        Sign Up
      </Button>
      {/* <Grid container>
          <Grid item xs>
            <Link
              underline="hover"
              onClick={() => {
                handleAuthMode(2);
              }}
            >
              forgt password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              underline="hover"
              onClick={() => {
                handleAuthMode(1);
              }}
            >
              Don't have an account? sign up
            </Link>
          </Grid>
        </Grid> */}
      {/* </Box> */}
    </Container>
  );
}
