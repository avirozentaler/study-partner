import React, { useState } from "react";
import { useNavigate,Link,Outlet } from "react-router-dom";
import { emailValid } from '../../../utilities/validetion/validetion.js';
import axios from "axios";
import './ForgetPassword.css';
import '../auth/Auth.css';

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
        console.log(answer);
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
      <p>forget Password</p>
      <Link to='/'>close</Link>
      <input className="authChildren" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} placeholder="email" />
      <button className="authChildren" onClick={submit}>Reset</button>

    </div>
  )
}



