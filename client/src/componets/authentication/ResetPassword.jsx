import axios from "axios";
import { useState,useContext } from "react";
import { passwordValid } from '../../utilities/validetion/validetion.js';
import UrlContext from "../../context/UrlContext.js";
import { Box, Typography, TextField, Button } from '@mui/material';

export default function ResetPassword({ handleAuthMode,handleOpenAlert }) {

  const {urlServer} = useContext(UrlContext);
  const [code, setCode] = useState('');
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const submit = async () => {
    if (!code || !password || !confirmPassword) {
      handleOpenAlert('error','please fill all the field')
    }
    else if (!passwordValid(password)) {
      handleOpenAlert('error','password not valid')
    }
    else if (password !== confirmPassword) {
      handleOpenAlert('error','confirm password is not matched')
    }
    else {
      try {
        const answer = await axios.post(urlServer+'/auth/reset-pass', { code, password, confirmPassword })
        handleOpenAlert('sucess','Password reset');
        handleAuthMode(0);
      }
      catch (err) {
        console.log(err)

      }
    }
  }

  return (
    <div className="ResetPassword auth">
      <Box
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
        <Typography variant='h5' align="center"  >Add new password</Typography>
        </div>
        <TextField
          required
          id='code'
          name="code"
          type="password"
          label="Code"
          autoComplete="current-password"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <TextField
          required
           id='password'
          name="password"
          type="password"
          label="Password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <TextField
          required
          id='confirmPassword'
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          autoComplete="current-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <Button
          type="submit"
          sx={{ mt: 1 /* margin top */ }}
          onClick={submit}
        >
          Reset
        </Button>
      </Box>
    </div>
  )
}