import React, {useState} from "react";
import '../register/register.css'
// import {BrowserRouter, Route, Routes} from "react-router-dom"
 import {nameValid,emailValid,passwordValid} from '../../../utilities/validetion/validetion.js'
export default function Register (){
    const [name , setName]=  useState("")
    const [email , setEmail]=  useState("")
    const [password , setPassword]=  useState("")
    const [confirmPassword , setConfirmPassword]=  useState("")



    const submit = ()=>{
        if(!nameValid(name)){
            alert('name not valid')
        }
        else if (!emailValid(email)){
            alert('email not valid')
        }
        else if (!passwordValid(password)){
            alert('password not valid')
        }
        else if (password !== confirmPassword){
            alert('confirmPassword not match')
        }
        else{
            alert('successe')
        }
    }

    return(
        <div className="Register">
            <p>Register</p>
            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="name"/>
            <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="email"/>
            <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder="password"/>
            <input type="password" value={confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}} placeholder="confirm password"/>
            <button type={"submit"} onClick={submit} >Register </button>
            
            {/* navigit to login */}
            {/* conct to server */}
        </div>
    )
}