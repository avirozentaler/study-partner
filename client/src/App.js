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
          const userId = JSON.parse(sessionStorage.getItem("user_id")) ||null
          if (!userId || userId === undefined) {
            throw new Error("somthing wrong to get user details");
          }
          const user = await axios.post('http://localhost:3005/user/get-one', { id: userId }, { withCredentials: true });
          if(!user.data){
            throw new Error("somthing wrong to get user details");
          }
            setUserConnected(user.data);
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

