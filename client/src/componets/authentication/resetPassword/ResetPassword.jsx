import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { passwordValid } from '../../../utilities/validetion/validetion.js';
import axios from "axios";
import './ResetPassword.css';





export default function ResetPassword() {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate();





    const submit = async () => {

        if (!code || !password || !confirmPassword) {
            alert('please fill all the field');
        }
        else if (!passwordValid(password)) {
            alert('password not valid')
        }
        else if (password !== confirmPassword) {
            alert('confirmPassword not match')
        }
        else {
            try {
                const answer = await axios.post('http://localhost:3002/auth/reset-pass', { code, password, confirmPassword })
                console.log(answer);
                navigate('/')

            }
            catch (err) {
                console.log(err)
               
            }
        }
    }



    return (
        <div className="ResetPassword">
            <p>reset Password</p>

            <input type="password" value={code} onChange={(event) => { setCode(event.target.value) }} placeholder="code" />
            <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} placeholder="new password" />
            <input type="password" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} placeholder="confirm new password" />
            <button onClick={submit}>Reset</button>
        </div>
    )
}