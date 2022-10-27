import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Authentication from './componets/authentication/Authentication';
import Register from './componets/authentication/register/Register';
function App() {

  const [liveSign, setLiveSign] = useState();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const func = async () => {
    const answer = await axios.get("http://localhost:3002/", { withCredentials: true });
    console.log(answer)
    setLiveSign(answer.data);
  }

  const addName = (event) => {
    setName(event.target.value)
  }

  const addPassword = (event) => {
    setPassword(event.target.value)
  }

  const join = async () => {
    try {
      const a = await axios.post('http://localhost:3002/', {name, password});
      console.log(a);
    }
    catch (err) {
      console.log(err);
    }

  }





  return (
    <div className="App">
      <Authentication/>
    </div>
  );
}

export default App;
