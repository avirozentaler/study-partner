import React, { useState } from 'react'
import Auth from '../authentication/auth/Auth';
import './AppHeader.css';


export default function AppHeader() {

    const [authPopUp, setAuthPopUp] = useState('hidden');
    const [authFather, setAuthFather] = useState('authFather');


    const pop = () => {
        setAuthPopUp(' ');
    }
    const closePop = () => {
        setAuthPopUp('hidden');
    }



    return (
        <div className='AppHeader'>
            <div className={authFather + ' ' + authPopUp}  >
                <div className='auth'>
                    <Auth closePop={closePop}/>
                </div>
            </div>
            <div>
                <span className='auth-button' onClick={pop}>log in</span>
            </div>


        </div>
    )
}
