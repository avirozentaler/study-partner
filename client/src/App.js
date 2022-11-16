import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import UserConnected from './context/UserConnected';
import Home from './componets/home/Home';

import Register from "./componets/authentication/register/Register";
import Login from "./componets/authentication/logIn/LogIn";
import ForgetPassword from "./componets/authentication/forgetPassword/ForgetPassword";
import ResetPassword from "./componets/authentication/resetPassword/ResetPassword";
import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';

 
function App() {


  const [userConnected, setUserConnected] = useState(false);

  return (
    <div className="App">
<CssVarsProvider>
        <UserConnected.Provider value={{ userConnected, setUserConnected }}>
        
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home /> }>
              <Route path="/log-in" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forget-pass" element={<ForgetPassword />} />
              <Route path="/reset-pass" element={<ResetPassword />} />
            </Route>
          </Routes>

        </BrowserRouter>
      </UserConnected.Provider>
      </CssVarsProvider>
    </div>
  );
}

export default App;

