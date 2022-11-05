import React, { useState,useContext } from "react";
import './login.css';
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
            <h2>Login</h2>
            <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} placeholder="email" />
            <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder="password" />
            <button onClick={submit}>Login</button>
            <div>
                <p className="authbButtons" onClick={() => { navigate('/register') }}> sign up </p>
                <p className="authbButtons" onClick={() => { navigate('/forget-pass') }}> forget passwod? </p>
            </div>
        </div>
    )
}