import React, { useState,useContext } from "react";
import axios from 'axios'
import { emailValid, passwordValid } from '../../../utilities/validetion/validetion.js'
import { useNavigate, Link } from "react-router-dom"; //link
import UserConnected from '../../../context/UserConnected'; 
import {Sheet, Typography, TextField, Button }from '@mui/joy';
import '../auth/Auth.css'



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
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <Link to='/'>X</Link>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="email address@email.com"
            // pass down to FormLabel as children
            label="Email"
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
          <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
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
           
           {/* <Typography variant="h4">login</Typography>
            <TextField
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
             <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submit}
            >
              Sign In
            </Button>
            <Grid container>
                <Grid item >
                    <Link to='/forget-pass'> Forgot password?</Link>
                     <Link href="/forget-pass" variant="body2">
                       Forgot password?
                    </Link> 
                </Grid>
                <Grid item xs>
                     <Link to='/register'>"Don't have an account? Sign Up"</Link>
                    <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link> 
                </Grid>
            </Grid>
             <p>Login</p> 
            <input className="authChildren" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} placeholder="email" /> 
            <input className="authChildren" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder="password" />
            <button className="authChildren" onClick={submit}>Login</button> 
             <div> 
               
    
                
               
                
            
           
                
                </div>*/} 
        </div>
    )
}