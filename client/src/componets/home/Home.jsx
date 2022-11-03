import { useContext, useState } from 'react'
import UserConnected from '../../context/UserConnected'
import AppHeader from '../appHeader/AppHeader';
import './Home.css';

export default function Home() {

    const { userConnected, setUserConnected } = useContext(UserConnected);


    return (
        <div className='Home'>
            <AppHeader />
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