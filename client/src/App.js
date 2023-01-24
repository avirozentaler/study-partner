import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserConnected from './context/UserConnected';
import Home from './componets/home/Home';
import About from './componets/about/About'
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import axios from 'axios';


function App() {


  const [userConnected, setUserConnected] = useState({
    "id": 2,
    name: "moshe cohen",
    email: "moshe@m.com",
    password: "$2b$04$NNerKKldfl2",
    country: "Israel",
    languages: "english",
    phone_number: "0543338585",
    age: null,
    about: "im mistee about ",
    posts: [],
    subjects: [{
      id: 4,
      name: "Linear Algebra",
      category_id: 1,
      user_connected: null,
    },
    {
      id: 0,
      name: "Geometry",
      category_id: 1,
      user_connected: null,
    }]
  });

  useEffect(() => {
    (async () => {
      try {
        // const auth = axios.get('http://localhost:3005/auth/');
        // console.log(auth);
        // if (!auth.data) {
        //   setUserConnected("");
        // }
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
          setUserConnected(user);
        }
      }
      catch (err) {
        console.log(err.message);
      }
    })()
  }, []);

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

