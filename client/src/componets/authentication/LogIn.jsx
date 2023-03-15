import axios from "axios";
import React, { useState, useContext } from "react";
import UserConnected from "../../context/UserConnected";
import {
  emailValid,
  passwordValid,
} from "../../utilities/validetion/validetion.js";
import { Box, Typography, TextField, Button, Link, Grid } from "@mui/material";
import UrlContext from "../../context/UrlContext.js";

export default function Login({
  handleRegistered,
  handleHavePass,
  handleCloseLogIn,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userConnected, setUserConnected } = useContext(UserConnected);
  const { urlServer } = useContext(UrlContext);

  const submit = async () => {
    if (!emailValid(email)) {
      alert("email not valid!");
    } else if (!passwordValid(password)) {
      alert("password not valid");
    } else {
      try {
        const answer = await axios.post(
          urlServer+"/auth/log-in",
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
        alert("login faild");
        console.log(err);
      }
    }
  };
  return (
    <div className="Login auth">
      <Box
        sx={{
          width: 450,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          borderRadius: "sm",
          boxShadow: "xl",
        }}
        variant="outlined"
      >
        <div>
          <Typography variant="h5" align="center">
            Log in
          </Typography>
        </div>
        <TextField
          required
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
          required
          id="password"
          name="password"
          type="password"
          label="Password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" sx={{ mt: 1 /* margin top */ }} onClick={submit}>
          Log in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link
              underline="hover"
              onClick={() => {
                handleHavePass();
              }}
            >
              forgt password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              underline="hover"
              onClick={() => {
                handleRegistered();
              }}
            >
              Don't have an account? sign up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
