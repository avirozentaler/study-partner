import axios from "axios";
import { useState } from "react";
import { useNavigate,Link,Outlet } from "react-router-dom";
import { emailValid } from '../../../utilities/validetion/validetion.js';

import CloseIcon from '@mui/icons-material/Close';
import {Sheet, Typography, TextField, Button }from '@mui/joy';
// import '../auth/Auth.css';

export default function ForgetPassword() {


const navigate = useNavigate();
const [email,setEmail]= useState('');

const submit =async()=>{
  
    if(!email || !emailValid(email)){
      alert('please add an valid email');
    }
    else{
      try {
        const answer = await axios.post('http://localhost:3005/auth/forget-pass', { email })
        navigate('/reset-pass');

    }
    catch (err) {
        console.log(err)
        alert('error');
    } 
    }
  
}

  return (
    <div className='Forgetpassword auth'>
      <Sheet
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
            <div>
            <Typography
              endDecorator={<Link to="/"><CloseIcon/></Link>}
              fontSize="sm"
  
            >
            </Typography>
            
              <Typography level="h4" component="h1">
            
                  
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">enter email to continue.</Typography>
            </div>
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
          </Sheet>
    </div>
  )
}



