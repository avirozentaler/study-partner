import React, { useState,useContext } from "react";
import './Login.css';
import axios from 'axios'
import { emailValid, passwordValid } from '../../../utilities/validetion/validetion.js'
import { useNavigate } from "react-router-dom";
import UserConnected from '../../../context/UserConnected'; 




export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const {userConnected, setUserConnected} = useContext(UserConnected)

    const submit = async () => {
        if (!emailValid(email)) {
            alert('email not valid')
        }
        else if (!passwordValid(password)) {
            alert('password not valid')
        }
        else {
            try{
                const answer = await axios.post('http://localhost:3002/user/log-in', {email, password},{withCredentials:true}) 
                console.log(answer);
                setUserConnected(true);      
                // navigate('/home'); 
            }
            catch(err){
                alert('login faild');
                console.log(err);
            
            }
            
        }
        
    }

    return (
        <div className="Login">
            <p>Login</p>
            <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} placeholder="email" />
            <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder="password" />
            <button onClick={submit}>Login</button>
            <div>
                <span className="authbButtons" onClick={() => { navigate('/register') }}> sign up </span>
                <span className="authbButtons" onClick={() => { navigate('/forget-pass') }}> forget passwod? </span>
            </div>
        </div>
    )
}