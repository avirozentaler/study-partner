import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

const [liveSign,setLiveSign] = useState();

const func = async()=>{
  const answer = await axios.get("http://localhost:3002/");
  console.log(answer)
  setLiveSign(answer.data);
}




  return (
    <div className="App">
       
      
          <button onClick={func}>call server</button>
          <h3>{liveSign}</h3>
      
    </div>
  );
}

export default App;
