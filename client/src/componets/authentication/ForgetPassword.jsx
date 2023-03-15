import axios from "axios";
import { useState ,useContext} from "react";
import { useNavigate} from "react-router-dom";
import { emailValid } from '../../utilities/validetion/validetion.js';
import {Box, TextField, Button }from '@mui/material';
import UrlContext from "../../context/UrlContext.js";
export default function ForgetPassword({handleResetPass}) {

  const [email,setEmail]= useState('');
  const {urlServer} = useContext(UrlContext);

const submit =async()=>{
    if(!email || !emailValid(email)){
      alert('please add an valid email');
    }
    else{
      try {
        const answer = await axios.post( urlServer+'/auth/forget-pass', { email })
        handleResetPass()

    }
    catch (err) {
        console.log(err)
        alert('error');
    } 
    }
  
}

  return (
    <div className='Forgetpassword auth'>
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
              boxShadow: 'xl',
            }}
            variant="outlined"
          >
            <TextField
              required
            id='email'
            label="Email address"
            name="email"
            type="email"
            autoComplete='email'
            autoFocus
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
              />
             <Button
                type="submit"
                sx={{ mt: 1 /* margin top */}}
                onClick={submit}
                >
                Reset
              </Button>
          </Box>
    </div>
  )
}
