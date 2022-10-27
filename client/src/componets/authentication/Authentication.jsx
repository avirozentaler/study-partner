import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "./register/Register";
import Login from "./logIn/LogIn";
import Home from "../home/index"
import ResetPassword from "./resetPassword/ResetPassword"
import '../authentication/authentication.css'
export default function Authentication (){
    
    

    return(
    
    <div  className="Authentication">
            <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/log-in" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/resetPassword" element={<ResetPassword/>}/>
                



                
            </Routes>
            </BrowserRouter>
        </div>
    )
}