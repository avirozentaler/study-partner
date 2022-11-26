import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserConnected from './context/UserConnected';
import Home from './componets/home/Home';

import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';

 
function App() {


  const [userConnected, setUserConnected] = useState(false);

  return (
    <div className="App">
      <CssVarsProvider>
        <UserConnected.Provider value={{ userConnected, setUserConnected }}> 
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home /> }/>
            </Routes>
          </BrowserRouter>
        </UserConnected.Provider>
      </CssVarsProvider>
    </div>
  );
}

export default App;

