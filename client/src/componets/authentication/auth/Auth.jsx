import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "../register/Register";
import Login from "../logIn/LogIn";
import Forgetpassword from "../forgetpassword/Forgetpassword";
import ResetPassword from "../resetPassword/ResetPassword";
import '../auth/Auth.css';
export default function Auth (){
    
    

    return(
    
    <div  className="Auth">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/forget-pass" element={<Forgetpassword/>}/>
                <Route path="/resetPassword" element={<ResetPassword/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}