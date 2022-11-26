import axios from 'axios'
import React, { useState,useContext } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import UserConnected from '../../../context/UserConnected';
import { emailValid, passwordValid } from '../../../utilities/validetion/validetion.js'

import {Box, Typography, TextField, Button }from '@mui/material';
// import '../auth/Auth.css'



export default function Login({handleRegistered,handleHavePass}) {
  
  console.log("dfghj")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const {userConnected, setUserConnected} = useContext(UserConnected)

    const submit = async () => {
        if (!emailValid(email)) {
            
            alert("email not valid!")
            
            
        }
        else if (!passwordValid(password)) {
            alert('password not valid')
        }
        else {
            try{
                const answer = await axios.post('http://localhost:3005/user/log-in', {email, password},{withCredentials:true}) 
                console.log(answer);
                setUserConnected(true);      
            }
            catch(err){
                alert('login faild');
                console.log(err);
            
            }
            
        }
        
    }

    return (
        <div className="Login auth">
           
            <Box
            
          sx={{
            width: 500,
            mx: 'auto',  //margin left & right
            my: 'auto', // margin top & botom
            py: 'auto', // padding top & bottom
            px: 'auto', // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            borderRadius: 'sm',
            boxShadow: 'xl',
          }}
          variant="outlined"
        >
          <div>
          
          
            <Typography level="h4" component="h1">
          
                
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
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
          <TextField
            required
            id='password'
            name="password"
            type="password"
            label="Password"
            autoComplete="current-password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
          />
           <Button
              type="submit"
             
              sx={{ mt: 1 /* margin top */}}
              onClick={submit}
            >
              Log in
            </Button>

          {/* <Typography>
            Don&apos;t have an account?  <Dialog title={"sign-up"}><Register/></Dialog>
          </Typography>
          <Typography >
              Forgot password?  <Dialog title={"Forget Password"}><ForgetPassword/></Dialog>
          </Typography> */}
              <Typography >
            Don't have an account? <Button onClick={()=>{handleRegistered()}}>sign up</Button>      
          </Typography>
          <Link
            component="button"
            variant="inherit"
           onClick={() => {
            
            handleHavePass();
          }}
          >
          Forgot password? 
        </Link>
        </Box>
        </div>
    )
}