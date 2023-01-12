import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserConnected from './context/UserConnected';
import Home from './componets/home/Home';
import About from './componets/about/About'
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider} from '@mui/material/styles';

 
function App() {


const [userConnected, setUserConnected] = useState(null);

  return (
    <div className="App">
      <CssVarsProvider>
        <CssBaseline>
        <UserConnected.Provider value={{ userConnected, setUserConnected }}> 
        <Home />
          {/* <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home /> }/>
                <Route path='/about' element={<About /> }/>
            </Routes>
          </BrowserRouter> */}
        </UserConnected.Provider>
        </CssBaseline>
      </CssVarsProvider>
    </div>
  );
}

export default App;

