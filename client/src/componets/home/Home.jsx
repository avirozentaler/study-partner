import { useContext } from 'react'
import UserConnected from '../../context/UserConnected'
import { Link, Outlet } from "react-router-dom";
import './Home.css';

import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';

function ModeToggle() {
    const { mode, setMode } = useColorScheme();
  
    
    return (
      <Button
        variant="outlined"
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light');
        }}
      >
        {mode === 'light' ? 'Turn dark' : 'Turn light'}
      </Button>
    );
  }

export default function Home() {

    const { userConnected, setUserConnected } = useContext(UserConnected);


    return (
        <CssVarsProvider>
        <div className='Home'>
           <ModeToggle /> 

            <div className='headHome'>
                <h1>header</h1>
                <Link to='/log-in'>log in</Link>
                 
            </div>
            <div className='bodyHome'>
            <h1>body</h1>
            {userConnected ? <div>
                <p>user  Connected</p>
            </div>
                :
                <div>
                    <p>user not Connected</p>
                </div>}
                
            </div>
            <Outlet/> 
        </div >
        </CssVarsProvider>                                    
    )
}