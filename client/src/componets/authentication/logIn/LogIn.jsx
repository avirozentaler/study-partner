import axios from 'axios'
import React, { useState,useContext } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import UserConnected from '../../../context/UserConnected';
import { emailValid, passwordValid } from '../../../utilities/validetion/validetion.js'

import CloseIcon from '@mui/icons-material/Close';
import {Sheet, Typography, TextField, Button }from '@mui/joy';
// import '../auth/Auth.css'



export default function Login() {
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
          <Typography
            endDecorator={<Link to="/register">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
          <Typography
          endDecorator={<Link to='/forget-pass'> Forgot password?</Link>}
          fontSize="sm"
            sx={{ alignSelf: 'center' }}
            >
            </Typography>
        </Sheet>
        </div>
    )
}