import axios from 'axios'
import React, { useState } from "react";
import { useNavigate,Link,Outlet } from "react-router-dom"
import { nameValid, emailValid, passwordValid,countryValid,languagesValid,phone_numberValid,age_rangeValid} from '../../../utilities/validetion/validetion.js'

import CloseIcon from '@mui/icons-material/Close';
import {Sheet, Typography, TextField, Button }from '@mui/joy';
import '../auth/Auth.css';


export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");   
    const [country, setCountry] = useState("")
    const [languages, setLanguages] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [age_range, setAge_range ] = useState("")
    const navigate = useNavigate();

    const submit = async () => {
        if (!nameValid(name)) {
            alert('name not valid')
        }
        else if (!emailValid(email)) {
            alert('email not valid')
        }
        else if (!passwordValid(password)) {
            alert('password not valid')
        }
        else if (password !== confirmPassword) {
            alert('confirmPassword not match')
        }
        else if (country && !countryValid(country)) {
            alert('country not valid')
        }
        else if (!languagesValid(languages)) {
            alert('languages not valid')
        }
        else if (phone_number && !phone_numberValid(phone_number)) {
            alert('phone number not valid')
        }
        // else if (age_range && !age_rangeValid(age_range)) {
        //     alert('age range not valid')
        // }
        else {
            try {
                const answer = await axios.post('http://localhost:3005/user/register', { name, email, password, confirmPassword,country, languages, phone_number, age_range })
                console.log(answer);
                navigate('/log-in')

            }
            catch (err) {
                console.log(err)
                alert('faild')
            }
        }
    }

    return (
        <div className="Register auth" >
            {/* <p>Register</p>
            <Link to='/'>close</Link>
            <input className="authChildren" type="text" value={name} onChange={(event) => { setName(event.target.value) }} placeholder="name" />
            <input className="authChildren" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} placeholder="email" />
            <input className="authChildren" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder="password" />
            <input className="authChildren" type="password" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} placeholder="confirm password" />
            <input className="authChildren" type="text" value={country} onChange={(event) => { setCountry(event.target.value) }} placeholder="country" />
            <input className="authChildren" type="text" value={languages} onChange={(event) => { setLanguages(event.target.value) }} placeholder="languages" />
            <input className="authChildren" type="number" value={phone_number} onChange={(event) => { setPhone_number(event.target.value) }} placeholder="phone_number" />
            <input className="authChildren" type="number" value={age_range} onChange={(event) => { setAge_range(event.target.value) }} placeholder="age_range" />
            <button className="authChildren" type={"submit"} onClick={submit} >Register </button> */}
            <Sheet
            
          sx={{
            width: 600,
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
            <Typography level="body2">Register to continue.</Typography>
          </div>
          <TextField
            required
            id='name'
            label="Name"
            name="name"
            type="text"
            autoComplete='name'
            autoFocus
            value={name}
            onChange={(event)=>setName(event.target.value)}
          />
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
            placeholder="password"
            label="Password"
            autoComplete="current-password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
          />
          <TextField
          required
          id='confirm_password'
          name="confirm_password"
          type="password"
          label="Confirm Password"
          autoComplete="current-Password"
          value={confirmPassword}
          onChange={(event)=>setConfirmPassword(event.target.value)}

          />
          <TextField
            required
            id='country'
            label="Country"
            name="country"
            type="text"
            autoComplete='current-country'
            autoFocus
            value={country}
            onChange={(event)=>setCountry(event.target.value)}
          />
          <TextField
            required
            id='languages'
            label="Languages"
            name="languages"
            type="text"
            autoComplete='languages'
            autoFocus
            value={languages}
            onChange={(event)=>setLanguages(event.target.value)}

          />
          <TextField
            required
            id='phone'
            label="phone number"
            name="phone"
            type="number"
            autoComplete='phone'
            autoFocus
            value={phone_number}
            onChange={(event)=>setPhone_number(event.target.value)}
          />
          <TextField
          required
          id='age'
          label="Age"
          name="age"
          type="number"
          autoComplete='age'
          autoFocus
          value={age_range}
          onChange={(event)=>setAge_range(event.target.value)}
          />
           <Button
              type="submit"
              sx={{ mt: 1 /* margin top */}}
              onClick={submit}
            >
              Register
            </Button>
        </Sheet>
 
        </div >
    )
}
