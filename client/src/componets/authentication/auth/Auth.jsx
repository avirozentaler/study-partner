import React, { useState, } from "react";
import Register from '../register/Register';
import LogIn from '../logIn/LogIn';

import ForgetPassword from "../forgetPassword/ForgetPassword";
import ResetPassword from '../resetPassword/ResetPassword'

export default function Auth({handleCloseLogIn}) {
    
const [registered, setRegistered]= useState(true)
const [havePass, setHavePass]= useState(true)
const [resetPass, setResetPass]= useState(false)


const handleRegistered= ()=>{
    setRegistered(registered=> !registered)
}
const handleHavePass=()=>{
    setHavePass(havePass=>!havePass)
}
const handleResetPass=()=>{
    setResetPass(resetPass=>!resetPass)
}

    return (
        <div className="Auth">
            {registered?  havePass ?
            <LogIn handleRegistered={handleRegistered } handleHavePass={handleHavePass} handleCloseLogIn={handleCloseLogIn}/> 
            : resetPass ? <ResetPassword handleHavePass={handleHavePass}/> 
            :<ForgetPassword handleResetPass={handleResetPass}/>
            :<Register handleRegistered={handleRegistered}/>}
        </div>
    )
}