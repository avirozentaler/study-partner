import './App.css';
import { useEffect, useState } from 'react';
import UserConnected from './context/UserConnected';
import UrlContext from './context/UrlContext';
import Home from './componets/home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import axios from 'axios';

function App() {
  const [userConnected, setUserConnected] = useState(null);
  const [url] = useState('http://localhost:3005/');
  useEffect(() => {
    (async () => {
      try {
        const auth = await (await axios.get('http://localhost:3005/auth/', { withCredentials: true })).data
        if (!auth) {
          setUserConnected(null);
          sessionStorage.clear()
        }
        else {
          const user = sessionStorage.getItem("user") || null
          if (!user) {
            throw new Error("error to load user details, please log in again!");
          }
          else {
            const userJSON = JSON.parse(sessionStorage.getItem("user"));
            setUserConnected(userJSON);
          }
        }
      }
      catch (err) {
        console.log(err.message);
      }
    })()
  }, []);

  useEffect(() => {
    if (userConnected) {
      sessionStorage.setItem('user', JSON.stringify(userConnected))
    }
  }, [userConnected])

  return (
    <div className="App">
      <CssVarsProvider>
        <CssBaseline>
          <UrlContext.Provider value={{ url }}>
            <UserConnected.Provider value={{ userConnected, setUserConnected }}>
              <Home />
            </UserConnected.Provider>
          </UrlContext.Provider>
        </CssBaseline>
      </CssVarsProvider>
    </div>
  );
}

export default App;

