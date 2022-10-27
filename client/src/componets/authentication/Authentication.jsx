import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "./register/Register";
// import Login from "./logIn/LogIn";
import '../authentication/authentication.css'
export default function Authentication (){
    
    

    return(
    
    <div  className="Authentication">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register/>}/>
                {/* <Route path="/" element={<Login/>}/> */}


                
            </Routes>
            </BrowserRouter>
        </div>
    )
}