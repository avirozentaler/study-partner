import './App.css';
import { useState } from 'react';
import Auth from './componets/authentication/auth/Auth';
import UserConnected from './context/UserConnected'; 
import Home from './componets/home/Home';




function App() {
  


  const [userConnected, setUserConnected] = useState(null);

  return (
    <div className="App">




      <UserConnected.Provider value={{userConnected, setUserConnected}}>
      <Auth />
<Home/>     
      </UserConnected.Provider>
    </div>
  );
}

export default App;
