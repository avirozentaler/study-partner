import React, { useState,useContext } from "react";
import './Login.css';
import axios from 'axios'
import { emailValid, passwordValid } from '../../../utilities/validetion/validetion.js'
import { useNavigate,Link,Outlet } from "react-router-dom";
import UserConnected from '../../../context/UserConnected'; 
import '../auth/Auth.css';




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
            <p>Login</p>
            <Link to='/'>close</Link>
            <input className="authChildren" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} placeholder="email" />
            <input className="authChildren" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder="password" />
            <button className="authChildren" onClick={submit}>Login</button>
            <div>
                <Link to='/register'>register</Link>
                <Link to='/forget-pass'>forget password?</Link>
                
            </div>
        </div>
    )
}