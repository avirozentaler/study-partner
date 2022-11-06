import { useContext } from 'react'
import UserConnected from '../../context/UserConnected'
import { Link, Outlet } from "react-router-dom";
import './Home.css';
export default function Home() {

    const { userConnected, setUserConnected } = useContext(UserConnected);


    return (
        <div className='Home'>


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

    )
}