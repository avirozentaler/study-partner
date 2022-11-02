import { useContext } from 'react'
import UserConnected from '../../context/UserConnected'
import  './Home.css';

export default function Home() {

    const { userConnected, setUserConnected } = useContext(UserConnected);



    return (
        <div className='Home'>

            <div className='home-header'>
                <span>log in</span> <span>register</span>
            </div>

            <div className='home-body'>
                {userConnected ? <div>
                    <p>user  Connected</p>
                </div>
                    :
                    <div>
                        <p>user not Connected</p>
                    </div>}

            </div>

        </div>
    )
}