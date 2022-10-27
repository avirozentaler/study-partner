import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
 import {emailValid} from '../../../utilities/validetion/validetion.js'

export default function ResetPassword(){
    
    const [email , setEmail]=  useState("")
    const navigate = useNavigate();


    const submit = ()=>{
         if (!emailValid(email)){
            alert('email not valid')
        }
        else{
            navigate('/log-in')
        }
    }

    return(
        <div className="ResetPassword">
            <p>Reset Password</p>
            <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="email"/>
            <button onClick={submit}>Reset</button>
        </div>
    )
}